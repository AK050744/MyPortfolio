import React, { useState, useEffect, useRef } from "react";
import type { ModelAsset } from "../../data/schema";

interface ModelViewer3DProps {
  model: ModelAsset;
  projectTitle: string;
}

export function ModelViewer3D({ model, projectTitle }: ModelViewer3DProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const teardownRef = useRef<(() => void) | null>(null);

  // Activate 3D viewer on user click (Opt-in only)
  const handleActivateViewer = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    setLoadingProgress(10);

    // Feature detect WebGL
    const testCanvas = document.createElement("canvas");
    const gl = testCanvas.getContext("webgl2") || testCanvas.getContext("webgl");
    if (!gl) {
      setIsLoading(false);
      setErrorMessage("WebGL is not supported or is disabled in your browser.");
      return;
    }

    try {
      // Dynamic import Three.js and loaders strictly on demand
      const [THREE, { OrbitControls }, { GLTFLoader }] = await Promise.all([
        import("three"),
        import("three/examples/jsm/controls/OrbitControls.js"),
        import("three/examples/jsm/loaders/GLTFLoader.js"),
      ]);

      setLoadingProgress(35);

      if (!canvasRef.current || !containerRef.current) {
        setIsLoading(false);
        return;
      }

      const canvas = canvasRef.current;
      const container = containerRef.current;

      // Detect coarse pointer (mobile)
      const isCoarse = window.matchMedia("(pointer: coarse)").matches;
      const maxPixelRatio = isCoarse ? 1.5 : Math.min(window.devicePixelRatio, 2.0);

      // Create Renderer
      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: !isCoarse,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(maxPixelRatio);
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.0;

      // Scene & Camera
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        100
      );
      camera.position.set(2.5, 1.8, 3.0);

      // Controls
      const controls = new OrbitControls(camera, canvas);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.minDistance = 1.0;
      controls.maxDistance = 10.0;

      // Studio 3-Point Lighting Setup
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xfff4e6, 2.2); // Warm key light
      keyLight.position.set(4, 5, 3);
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0xd9e8ff, 1.0); // Cool fill
      fillLight.position.set(-4, 2, -2);
      scene.add(fillLight);

      const rimLight = new THREE.DirectionalLight(0xf59e0b, 1.8); // Amber rim
      rimLight.position.set(0, 4, -4);
      scene.add(rimLight);

      // Load GLTF Model with progress
      const loader = new GLTFLoader();
      let loadedModel: THREE.Group | null = null;

      loader.load(
        model.glb,
        (gltf) => {
          loadedModel = gltf.scene;

          // Compute bounding box and center model
          const box = new THREE.Box3().setFromObject(loadedModel);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 2.0 / (maxDim || 1);
          loadedModel.scale.setScalar(scale);
          loadedModel.position.sub(center.multiplyScalar(scale));

          scene.add(loadedModel);

          setIsLoading(false);
          setIsLoaded(true);
        },
        (xhr) => {
          if (xhr.total > 0) {
            const percent = Math.round((xhr.loaded / xhr.total) * 60) + 35;
            setLoadingProgress(Math.min(percent, 95));
          }
        },
        (error) => {
          console.error("Failed to load GLB model:", error);
          setIsLoading(false);
          setErrorMessage("Failed to load 3D model asset. Please retry.");
        }
      );

      // Animation & on-demand rendering loop
      let animFrameId: number;
      let isVisible = true;
      const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const render = () => {
        if (!isVisible) return;
        controls.update();

        // Subtle idle rotation if user has NOT requested reduced motion
        if (loadedModel && !isReducedMotion && !controls.state) {
          loadedModel.rotation.y += 0.003;
        }

        renderer.render(scene, camera);
        animFrameId = requestAnimationFrame(render);
      };
      animFrameId = requestAnimationFrame(render);

      // Pause rendering when off-screen via IntersectionObserver
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isVisible = entry.isIntersecting && !document.hidden;
            if (isVisible) {
              cancelAnimationFrame(animFrameId);
              animFrameId = requestAnimationFrame(render);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(container);

      // Page visibility listener
      const handleVisibilityChange = () => {
        isVisible = !document.hidden;
        if (isVisible) {
          cancelAnimationFrame(animFrameId);
          animFrameId = requestAnimationFrame(render);
        }
      };
      document.addEventListener("visibilitychange", handleVisibilityChange);

      // Resize observer
      const resizeObserver = new ResizeObserver(() => {
        if (!containerRef.current) return;
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      });
      resizeObserver.observe(container);

      // Keyboard Controls (WCAG 2.1.1): Arrow keys orbit, +/- zoom, R/Home reset
      const handleKeyDown = (e: KeyboardEvent) => {
        if (document.activeElement !== canvas) return;

        const orbitSpeed = 0.08;
        const zoomSpeed = 0.2;

        switch (e.key) {
          case "ArrowLeft":
            e.preventDefault();
            controls.rotateLeft(orbitSpeed);
            break;
          case "ArrowRight":
            e.preventDefault();
            controls.rotateLeft(-orbitSpeed);
            break;
          case "ArrowUp":
            e.preventDefault();
            controls.rotateUp(orbitSpeed);
            break;
          case "ArrowDown":
            e.preventDefault();
            controls.rotateUp(-orbitSpeed);
            break;
          case "+":
          case "=":
            e.preventDefault();
            controls.dollyIn(1 + zoomSpeed);
            break;
          case "-":
          case "_":
            e.preventDefault();
            controls.dollyOut(1 + zoomSpeed);
            break;
          case "r":
          case "R":
          case "Home":
            e.preventDefault();
            controls.reset();
            camera.position.set(2.5, 1.8, 3.0);
            break;
        }
      };
      window.addEventListener("keydown", handleKeyDown);

      // WebGL Context Loss Handler
      const handleContextLost = (e: Event) => {
        e.preventDefault();
        console.warn("WebGL Context Lost in 3D Viewer.");
        setErrorMessage("WebGL graphics context was lost. Click Retry to restore.");
        setIsLoaded(false);
      };
      canvas.addEventListener("webglcontextlost", handleContextLost, false);

      // Comprehensive Teardown Function (Zero Memory Leaks)
      teardownRef.current = () => {
        cancelAnimationFrame(animFrameId);
        observer.disconnect();
        resizeObserver.disconnect();
        document.removeEventListener("visibilitychange", handleVisibilityChange);
        window.removeEventListener("keydown", handleKeyDown);
        canvas.removeEventListener("webglcontextlost", handleContextLost);
        controls.dispose();

        scene.traverse((obj) => {
          if ((obj as THREE.Mesh).isMesh) {
            const mesh = obj as THREE.Mesh;
            mesh.geometry?.dispose();
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach((mat) => mat.dispose());
            } else {
              mesh.material?.dispose();
            }
          }
        });

        renderer.dispose();
        renderer.forceContextLoss();
      };
    } catch (err) {
      console.error("Three.js initialization error:", err);
      setIsLoading(false);
      setErrorMessage("Could not initialize 3D viewer. Falling back to high-res poster.");
    }
  };

  // Teardown on unmount
  useEffect(() => {
    return () => {
      if (teardownRef.current) {
        teardownRef.current();
        teardownRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/50 bg-[hsl(var(--bg-studio))] shadow-xl"
    >
      {/* 1. Static Poster Image (Shown before activation, during loading, or on failure) */}
      {(!isLoaded || errorMessage) && (
        <div className="absolute inset-0 z-0">
          <img
            src={model.poster.src}
            alt={model.poster.alt}
            width={model.poster.width}
            height={model.poster.height}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
      )}

      {/* 2. Three.js Canvas Element */}
      <canvas
        ref={canvasRef}
        tabIndex={0}
        aria-label={`Interactive 3D model for ${projectTitle}. Use arrow keys to orbit, plus/minus to zoom, R to reset camera.`}
        aria-describedby="viewer-instructions"
        className={`h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
          isLoaded && !errorMessage ? "relative z-10 block" : "hidden"
        }`}
      />

      <!-- 3. Pre-activation Opt-in Overlay -->
      {!isLoaded && !isLoading && !errorMessage && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.75"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            </svg>
          </div>

          <h3 className="text-xl font-bold text-foreground mb-2">
            Interactive 3D Inspection
          </h3>
          <p className="max-w-md text-xs text-muted-foreground mb-6 leading-relaxed">
            Real-time WebGL asset ({model.triangles.toLocaleString()} triangles · {(model.sizeKB / 1024).toFixed(1)} MB GLB). Opt-in load preserves data and battery.
          </p>

          <button
            type="button"
            onClick={handleActivateViewer}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 hover:bg-amber-400 focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span>Load & View in 3D</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>

          <span className="mt-4 text-[11px] font-mono-tech text-muted-foreground">
            License: {model.license}
          </span>
        </div>
      )}

      <!-- 4. Loading Progress Bar (Accessible role="progressbar") -->
      {isLoading && (
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center"
          role="progressbar"
          aria-valuenow={loadingProgress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Loading 3D asset"
        >
          <div className="h-2 w-64 rounded-full bg-white/10 overflow-hidden mb-3">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <span className="text-xs font-mono-tech text-foreground">
            Loading 3D Engine & Draco Mesh ({loadingProgress}%)...
          </span>
        </div>
      )}

      <!-- 5. Error & Fallback State with Retry -->
      {errorMessage && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-black/75">
          <svg className="h-8 w-8 text-destructive mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-sm font-semibold text-foreground mb-1">{errorMessage}</p>
          <p className="text-xs text-muted-foreground mb-4">You can continue viewing the high-resolution render passes below.</p>
          <button
            type="button"
            onClick={handleActivateViewer}
            className="rounded-md bg-white/10 px-4 py-2 text-xs font-mono-tech text-foreground hover:bg-white/20"
          >
            Retry Loading 3D Viewer
          </button>
        </div>
      )}

      <!-- 6. Active Viewer HUD Controls (Reset Camera, Keyboard Hints) -->
      {isLoaded && !errorMessage && (
        <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
          <div
            id="viewer-instructions"
            className="hidden sm:inline-flex items-center gap-2 rounded bg-black/75 px-2.5 py-1 text-[11px] font-mono-tech text-muted-foreground backdrop-blur-sm pointer-events-auto"
          >
            <span>Orbit: Drag / Arrows</span>
            <span>·</span>
            <span>Zoom: Scroll / +/-</span>
            <span>·</span>
            <span>Reset: R</span>
          </div>

          <div className="flex items-center gap-2 pointer-events-auto ml-auto">
            <button
              type="button"
              onClick={() => {
                const event = new KeyboardEvent("keydown", { key: "r" });
                window.dispatchEvent(event);
              }}
              className="inline-flex items-center gap-1 rounded bg-black/80 px-2.5 py-1 text-xs font-mono-tech text-primary border border-primary/40 backdrop-blur-sm hover:bg-primary hover:text-black transition-colors focus-visible:ring-2 focus-visible:ring-ring"
            >
              Reset Camera
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

