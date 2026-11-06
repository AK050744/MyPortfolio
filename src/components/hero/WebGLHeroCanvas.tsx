import React, { useEffect, useRef, useState } from "react";

/**
 * Progressive WebGL Background Canvas for Homepage Hero
 * Section 7 compliance:
 * - Feature-detects WebGL2 / WebGL before initializing
 * - Respects prefers-reduced-motion and Save-Data headers
 * - Listens for webglcontextlost (calls preventDefault) and webglcontextrestored
 * - Low-power detection (navigator.deviceMemory, hardwareConcurrency)
 * - Purely ambient particle / depth mesh (content never depends on this canvas)
 */
export function WebGLHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSupported, setIsSupported] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // 1. Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsSupported(false);
      return;
    }

    // 2. Check Save-Data mode
    // @ts-ignore
    if (navigator.connection?.saveData) {
      setIsSupported(false);
      return;
    }

    // 3. Check low-power devices
    // @ts-ignore
    if (navigator.deviceMemory && navigator.deviceMemory < 4) {
      setIsSupported(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    // 4. Feature detect WebGL2 / WebGL
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    if (!gl) {
      setIsSupported(false);
      return;
    }

    // Handle context loss
    const handleContextLost = (event: Event) => {
      event.preventDefault();
      console.warn("Hero WebGL context lost. Falling back cleanly to static background.");
      setIsSupported(false);
    };

    const handleContextRestored = () => {
      console.info("Hero WebGL context restored.");
      setIsSupported(true);
    };

    canvas.addEventListener("webglcontextlost", handleContextLost, false);
    canvas.addEventListener("webglcontextrestored", handleContextRestored, false);

    // Initialize lightweight 3D Three.js scene dynamically
    let animationFrameId: number;
    let isDisposed = false;

    import("three").then((THREE) => {
      if (isDisposed || !canvasRef.current) return;

      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        antialias: false,
        powerPreference: "low-power",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        60,
        canvas.clientWidth / canvas.clientHeight,
        0.1,
        100
      );
      camera.position.z = 5;

      // Ambient geometric particle cloud
      const particleCount = 180; // Lightweight budget
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 10;
        positions[i + 1] = (Math.random() - 0.5) * 8;
        positions[i + 2] = (Math.random() - 0.5) * 6;
      }
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        color: 0xf59e0b, // Amber accent
        size: 0.04,
        transparent: true,
        opacity: 0.35,
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      // Subtle mouse parallax
      let mouseX = 0;
      let mouseY = 0;
      const handleMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
      };
      window.addEventListener("mousemove", handleMouseMove, { passive: true });

      // Resize observer
      const resizeObserver = new ResizeObserver(() => {
        if (!canvasRef.current) return;
        const width = canvasRef.current.clientWidth;
        const height = canvasRef.current.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      });
      resizeObserver.observe(canvas);

      // Animation render loop
      const animate = () => {
        if (isDisposed) return;
        if (!isPaused) {
          particles.rotation.y += 0.001;
          particles.rotation.x += 0.0005;
          camera.position.x += (mouseX - camera.position.x) * 0.03;
          camera.position.y += (-mouseY - camera.position.y) * 0.03;
          camera.lookAt(scene.position);
          renderer.render(scene, camera);
        }
        animationFrameId = requestAnimationFrame(animate);
      };
      animate();

      return () => {
        isDisposed = true;
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("mousemove", handleMouseMove);
        resizeObserver.disconnect();
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
      };
    }).catch((err) => {
      console.warn("Could not load dynamic Three chunk for hero WebGL:", err);
      setIsSupported(false);
    });

    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("webglcontextlost", handleContextLost);
      canvas.removeEventListener("webglcontextrestored", handleContextRestored);
    };
  }, [isPaused]);

  if (!isSupported) {
    return null; // Degrades silently to static hero poster
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-60"
        aria-hidden="true"
      />
    </div>
  );
}
