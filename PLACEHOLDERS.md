# PLACEHOLDERS.md

This inventory lists every item that requires the owner's input or assets before final public launch. In accordance with the project's **Zero Invention Rule**, placeholder tokens are maintained in `src/data/` until confirmed by Ansh Kumar Singh.

---

## 1. Profile & Identity

| Token | Location in Code | Description / Owner Action Required |
| :--- | :--- | :--- |
| `TODO_PHOTO` | `src/data/profile.ts` | High-resolution photo or avatar of Ansh Kumar Singh. |
| `TODO_TITLE` | `src/data/profile.ts` | Professional headline (defaulted to `"3D Artist & Animator"`). |
| `TODO_BIO` | `src/data/profile.ts` | Personal artist bio and artist statement. |
| `TODO_LINKEDIN_URL` | `src/data/profile.ts` | Canonical LinkedIn profile URL. |
| `TODO_ARTSTATION_URL` | `src/data/profile.ts` | ArtStation profile link (or leave blank to hide icon). |
| `TODO_BEHANCE_URL` | `src/data/profile.ts` | Behance portfolio link (or leave blank to hide icon). |
| `TODO_INSTAGRAM_URL` | `src/data/profile.ts` | Professional 3D Instagram handle / link. |
| `TODO_DISCORD_INVITE` | `src/data/profile.ts` | Discord server or community invite link. |
| `TODO_STATUS` | `src/data/profile.ts` | Commission / availability status (`Open` / `Limited` / `Closed`). |
| `TODO_RATE_SHEET_PDF` | `public/downloads/` | Optional commission rate sheet PDF (`features.rateSheet`). |

---

## 2. Showreel & Media

| Token | Location in Code | Description / Owner Action Required |
| :--- | :--- | :--- |
| `TODO_SHOWREEL_URL` | `src/data/profile.ts` | Vimeo or YouTube URL of the 2026/2027 3D Showreel. |
| `TODO_SHOWREEL_POSTER`| `public/placeholders/` | High-res thumbnail/poster for the showreel facade. |
| `TODO_REEL_TIMESTAMPS` | `src/data/profile.ts` | Timestamps and project breakdown for showreel clips. |
| `TODO_REEL_CAPTIONS` | `src/data/profile.ts` | Subtitle/caption file (VTT) or transcript link for showreel. |
| `TODO_HERO_LOOP_VIDEO`| `public/placeholders/` | Muted 1080p background hero loop (H.264/WebM, ≤ 6MB). |
| `TODO_HERO_POSTER` | `public/placeholders/` | High-quality still frame fallback for hero video (≤ 300KB). |

---

## 3. 3D Projects & Renders (`src/data/projects.ts`)

| Token | Description / Owner Action Required |
| :--- | :--- |
| `TODO_PROJECT_1_TITLE` | Character Design project name, role, software, and final renders. |
| `TODO_PROJECT_2_TITLE` | Environment Art project name, role, software, and final renders. |
| `TODO_PROJECT_3_TITLE` | Product Visualization project name, role, software, and renders. |
| `TODO_PROJECT_4_TITLE` | Motion Graphics / Animation project name and video breakdown. |
| `TODO_PROJECT_5_TITLE` | Personal Exploration project name, clay renders, and concept art. |
| `TODO_CLIENT_NAME` | Client or studio name for commercial projects (omit for personal). |
| `TODO_GLB` | Draco/Meshopt compressed GLB models (≤ 5MB, ≤ 150k tris) for "View in 3D". |
| `TODO_GLB_LICENSE` | License record for each included 3D model in `src/data/assets-licenses.ts`. |

---

## 4. Hardware Specs & Software Proficiency (`src/data/profile.ts`)

| Token | Description / Owner Action Required |
| :--- | :--- |
| `TODO_CPU` | Processor model (e.g. AMD Ryzen 9 7950X or Intel i9-14900K). |
| `TODO_GPU` | Graphics card model (e.g. NVIDIA RTX 4090 24GB VRAM). |
| `TODO_RAM` | System memory (e.g. 64GB DDR5 6000MHz). |
| `TODO_STORAGE` | Fast storage (e.g. 2TB NVMe PCIe 4.0 SSD). |
| `TODO_DISPLAYS` | Color-calibrated monitors (e.g. 27" 4K IPS 100% sRGB / DCI-P3). |
| `TODO_TABLET` | Drawing tablet / pen display (e.g. Wacom Intuos Pro / Huion Kamvas). |
| `TODO_SOFTWARE_DAILY` | Software used daily (e.g. Blender, ZBrush, Substance Painter). |
| `TODO_SOFTWARE_COMFORTABLE` | Software comfortable with (e.g. Maya, Houdini, Unreal Engine 5). |
| `TODO_SOFTWARE_LEARNING` | Tools currently exploring (e.g. ComfyUI, Marvelous Designer, EmberGen). |

