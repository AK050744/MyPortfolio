# Architecture & Technical Design

This document details the system architecture for **Ansh Kumar Singh's 3D Artist Portfolio**, showing how the static-first Astro engine integrates with React islands, progressive WebGL enhancements, and the typed data layer.

---

## 1. System Architecture Diagram

```mermaid
flowchart TD
    subgraph DataLayer ["Data Layer (Single Source of Truth)"]
        ProjectsData["src/data/projects.ts"]
        ProfileData["src/data/profile.ts"]
        LicensesData["src/data/assets-licenses.ts"]
        ResourcesData["src/data/resources.ts"]
        ZodValidator["Zod Schema Validator<br/>(Fails build on missing alt/license)"]
        ProjectsData --> ZodValidator
        ProfileData --> ZodValidator
        LicensesData --> ZodValidator
        ResourcesData --> ZodValidator
    end

    subgraph StaticAstroCore ["Static Astro Core (Zero-JS Baseline)"]
        BaseLayout["BaseLayout.astro<br/>(Landmarks, SkipLink, Meta, JSON-LD)"]
        HomePage["index.astro<br/>(Hero, Grid, Filter URL Params)"]
        ProjectPage["work/[slug].astro<br/>(WIP Tabs, Finals Gallery, Lightbox)"]
        AboutPage["about.astro<br/>(Bio, Verified Tech, Hardware)"]
        ContactPage["contact.astro<br/>(Form + Honeypot, Socials)"]
        ResourcesPage["resources.astro<br/>(Tutorials / Free 3D Assets)"]
    end

    ZodValidator --> StaticAstroCore

    subgraph ProgressiveIslands ["Progressive Islands (Loaded on Demand)"]
        ShowreelIsland["ShowreelModal.tsx<br/>(React Island: client:idle)<br/>Focus trap, Esc key, Video Facade"]
        LightboxIsland["ImageLightbox.tsx<br/>(React Island: client:idle)<br/>Keyboard navigation, full-res zoom"]
        Viewer3DIsland["ModelViewer3D.tsx<br/>(React Island: client:visible)<br/>Dynamic Three.js import, Draco/Meshopt"]
        WebGLHeroIsland["WebGLHeroCanvas.tsx<br/>(React Island: client:idle)<br/>Feature detection, context loss recovery"]
    end

    StaticAstroCore --> ShowreelIsland
    StaticAstroCore --> LightboxIsland
    StaticAstroCore --> Viewer3DIsland
    StaticAstroCore --> WebGLHeroIsland

    subgraph DeploymentTargets ["Deployment Targets"]
        DistOutput["dist/ (Static HTML + Assets)"]
        GitHubPages["GitHub Pages (.github/workflows/deploy.yml)"]
        Netlify["Netlify (netlify.toml)"]
    end

    StaticAstroCore --> DistOutput
    DistOutput --> GitHubPages
    DistOutput --> Netlify
```

---

## 2. Progressive Enhancement Strategy

```mermaid
sequenceDiagram
    autonumber
    actor Visitor as Visitor / Screen Reader
    participant Browser as Browser Client
    participant Astro as Pre-rendered Static HTML
    participant ReactIsland as React Island (Isolated)
    participant ThreeEngine as Dynamic Three.js Chunk

    Visitor->>Browser: Requests page (e.g. /work/cyber-sentinel)
    Browser->>Astro: Fetches pure HTML + CSS
    Astro-->>Browser: Instant paint (Poster, Overview, WIP Renders, Finals)
    Note over Browser: Accessible baseline complete. Works without JS.

    opt Visitor clicks "View in 3D"
        Visitor->>ReactIsland: Clicks "View in 3D" button
        ReactIsland->>ThreeEngine: dynamic import('three') + GLTFLoader
        ThreeEngine-->>ReactIsland: Chunk fetched (<300ms)
        ReactIsland->>Browser: Mounts focusable canvas with ARIA descriptions
        ReactIsland-->>Visitor: Interactive 3D Model with keyboard controls & Reset Camera
    end

    opt Visitor navigates away or closes viewer
        ReactIsland->>ThreeEngine: dispose geometries, materials, textures
        ThreeEngine->>Browser: renderer.forceContextLoss()
        Note over Browser: Memory freed, 0 leaks.
    end
```

---

## 3. Accessibility & Fallback Matrix

| State / Condition | Behavior / Fallback |
| :--- | :--- |
| **JavaScript Disabled** | Complete site is navigable. All images, descriptions, WIP breakdowns, contact form, and category filters function normally. The 3D trigger shows the high-resolution poster image and written model details. |
| **`prefers-reduced-motion`** | Background hero video and hover previews are paused. Transitions are instantaneous. 3D viewer auto-rotation is disabled. |
| **`Save-Data: on`** | Autoplay videos are converted to click-to-load posters. 3D GLB models require explicit confirmation to fetch. |
| **WebGL Context Loss** | Captured via `webglcontextlost` event listener. Prevents browser crash, cleanly displays the labelled fallback poster and project summary, and surfaces a "Retry" button. |
| **Keyboard Operation** | Skip to main content link on all pages. Focus trap inside Showreel and Lightbox dialogs. Arrow keys orbit the 3D model, `+`/`-` zoom, and `R`/`Home` reset camera. |

