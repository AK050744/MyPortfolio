# 🎨 Ansh Kumar Singh – 3D Artist & Technical Artist Portfolio

A production-ready, **accessible, static-first portfolio website** designed for **Ansh Kumar Singh**, built to showcase high-fidelity 3D hard-surface modeling, environment art, and real-time WebGL assets with progressive Three.js enhancement.

---

## 🌟 Key Features

- **Static-First Architecture (Astro 5):** 100% accessible HTML pre-rendered at build time. The entire site is fully readable and interactive even if JavaScript or WebGL is completely disabled.
- **WCAG 2.2 AA Baseline:** Semantic HTML5 landmarks, skip-to-content bypass link, visible high-contrast focus rings (`#38BDF8`), >15:1 text contrast on Studio Dark (`#0B0D13`), and strict `prefers-reduced-motion` compliance.
- **Progressive "View in 3D" Viewer:** Opt-in Three.js engine dynamically loaded **only** after the visitor clicks "View in 3D". Features Draco/Meshopt compression, keyboard navigation (Arrow keys, `+`/`-`, `R` reset), context loss handling, and zero-leak memory disposal on teardown.
- **Progressive WebGL Hero Layer:** Ambient background particle mesh with feature detection, hardware concurrency checks, and silent fallback to static still poster.
- **Accessible Video Facades:** Showreel, turntables, and breakdowns use click-to-load facades ensuring zero third-party tracking or network requests until clicked.
- **Zero Invention Rule Compliant:** All unconfirmed credits, hardware specs, and 3D projects are flagged in `PLACEHOLDERS.md`. Zero stock art or unlicensed assets.

---

## 🚀 Quick Start

### 1. Prerequisites
- Node.js (v20 or newer recommended)
- `pnpm` (or `npm`)

### 2. Installation
```bash
# Install dependencies
pnpm install
```

### 3. Local Development
```bash
# Start Astro development server on http://localhost:8080
pnpm dev
```

### 4. Build & Production Verification
```bash
# Run data validation & build static output to dist/
pnpm build

# Preview production build locally
pnpm preview
```

---

## 📁 Project Structure

```text
├── docs/
│   ├── architecture.md         # Mermaid system architecture & sequence diagrams
│   ├── asset-budgets.md        # File size and triangle budget limits
│   └── test-report.md          # Accessibility, performance, and failure tests
├── public/
│   ├── assets-source/          # Authentic owner-supplied source renders & models
│   ├── models/                 # Draco/Meshopt compressed .glb 3D files
│   ├── placeholders/           # Locally generated neutral grey development SVGs
│   └── favicon.svg             # Accessible vector favicon
├── src/
│   ├── components/
│   │   ├── core/               # Header, Footer, navigation
│   │   ├── hero/               # Hero section, video loop + pause toggle, WebGL canvas
│   │   ├── work/               # ProjectCard, CategoryFilters, ProjectGrid
│   │   ├── project/            # WIP tabs, ImageLightbox, VideoFacade
│   │   ├── viewer3d/           # React Island: Three.js 3D GLB Viewer & teardown
│   │   └── showreel/           # React Island: Accessible Showreel Modal dialog
│   ├── data/
│   │   ├── schema.ts           # Zod data validation schema (fails build on missing alt)
│   │   ├── profile.ts          # Verified resume facts & TODO placeholders
│   │   ├── projects.ts         # Portfolio projects (Single Source of Truth)
│   │   ├── resources.ts        # Optional tutorials & free 3D calibration assets
│   │   └── assets-licenses.ts  # License records for every asset
│   ├── layouts/
│   │   └── BaseLayout.astro    # Semantic HTML, skip-link, JSON-LD metadata
│   ├── pages/
│   │   ├── index.astro         # Homepage (Hero, Category Filters, Work Grid)
│   │   ├── work/[slug].astro   # Dynamic project showcase template
│   │   ├── about.astro         # Bio, technical engineering side, hardware specs
│   │   ├── contact.astro       # Inquiries form with honeypot, verified socials
│   │   └── resources.astro     # Free models & procedural articles
│   └── styles/
│       └── tokens.css          # Design tokens (dark studio theme, amber accent)
├── ASSUMPTIONS.md              # Explicit record of all design & technical assumptions
└── PLACEHOLDERS.md             # Inventory of all assets/data needed from Ansh
```

---

## 🛠️ How to Add or Edit a Project

All portfolio content is driven by `src/data/projects.ts` as the single source of truth.

1. Open `src/data/projects.ts`.
2. Add a new project object matching the `ProjectSchema`:
```typescript
{
  slug: "my-new-character",
  title: "Cyberpunk Mercenary",
  year: 2026,
  category: "character", // 'character' | 'environment' | 'product' | 'motion' | 'personal'
  roles: ["Character Modeling", "Subdivision Topology", "PBR Texturing"],
  software: [
    { name: "Blender", icon: "box" },
    { name: "Substance 3D Painter", icon: "palette" },
  ],
  summary: "Real-time game-ready character model with 4K PBR textures.",
  hero: {
    image: {
      src: "/assets-source/mercenary-hero.webp",
      alt: "Full-body beauty render of the mercenary character in dramatic rim lighting",
      width: 1920,
      height: 1080,
    },
  },
  finals: [
    {
      src: "/assets-source/mercenary-hero.webp",
      alt: "Front perspective render of the character armor",
      width: 1920,
      height: 1080,
    },
  ],
  // Optional real-time 3D model for "View in 3D"
  model: {
    glb: "/models/mercenary.glb",
    poster: {
      src: "/assets-source/mercenary-poster.webp",
      alt: "Still frame preview for interactive 3D inspection",
      width: 1280,
      height: 720,
    },
    license: "All Rights Reserved - Ansh Kumar Singh",
    credit: "Model authored by Ansh Kumar Singh",
    triangles: 45000, // Budget limit: <= 150,000
    sizeKB: 3200,     // Budget limit: <= 5,120 KB (5 MB)
  },
}
```
3. Run `pnpm test` to verify alt text and asset budgets.

---

## 📦 Asset Pipeline: Compression Guidelines

In accordance with `docs/asset-budgets.md`:

### Optimizing 3D Models (GLB)
- Export models as `.glb` (binary glTF).
- Use **Draco** or **Meshopt** compression (`gltf-pipeline` or `gltfpack`):
  ```bash
  # Compress with gltfpack (recommended)
  gltfpack -i model.glb -o public/models/model.glb -cc -tc
  ```
- **Budgets:** Maximum file size ≤ 5.0 MB; triangle count ≤ 150,000; textures ≤ 2048×2048px.

### Optimizing Images & Video
- **Images:** Use WebP or AVIF at Q80–Q85.
- **Hero loop video:** Maximum ≤ 6.0 MB, 1080p, 24fps, muted, no audio stream.

---

## 🚢 Deployment

### GitHub Pages (Automated via GitHub Actions)
The repository includes `.github/workflows/deploy.yml` which builds and deploys the static site to GitHub Pages automatically whenever you push to `main`:
```bash
git add .
git commit -m "Deploy accessible 3D portfolio"
git push origin main
```
Your live site will be deployed to: `https://AK050744.github.io/MyPortfolio/`

### Netlify
The repository includes `netlify.toml` configured for static output:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

---

## 📄 License & Credits

- Portfolio Architecture & Source Code: MIT License
- 3D Artwork, Renders & Models: © Ansh Kumar Singh. All rights reserved.
