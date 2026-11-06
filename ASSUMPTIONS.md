# ASSUMPTIONS.md

This document records all explicit technical, design, and content assumptions made during the implementation of the portfolio for **Ansh Kumar Singh**.

---

## 1. Content & Identity Assumptions

1. **Owner Profile:**
   - Name: **Ansh Kumar Singh**
   - Location: Pune, Maharashtra, India
   - Inquiries: `anshvikas04@gmail.com`
   - Verified GitHub: `https://github.com/AK050744`
   - Verified Education: B.Tech in Information Technology, Bharati Vidyapeeth (Deemed to be University), Pune (2023–2027).
   - Verified Technical Background: React, TypeScript, Node.js, Python, FastAPI, Git, Docker, CI/CD, AWS; Engineering Intern at Kahana Group Inc. (remote, Mar 2026–present).
   - LinkedIn: Currently listed as `TODO_LINKEDIN_URL` until owner confirms the canonical profile link.
   - Phone Number: Omitted intentionally for privacy (as mandated in Section 1).

2. **3D Work & Credits (Zero Invention Rule):**
   - The owner's initial resume did not contain 3D project credits, software hours, or hardware specs.
   - Therefore, all 3D projects, render thumbnails, turntable clips, wireframe breakdowns, and 3D GLB models use clearly marked placeholders (e.g. `TODO_PROJECT_TITLE`, `TODO_CLIENT_NAME`, `TODO_SOFTWARE`) and locally generated neutral grey SVGs with a visible "PLACEHOLDER" watermark.
   - Zero stock art or third-party unlicensed 3D models are introduced.

3. **Commission & Availability Status:**
   - Status defaults to `TODO_CONFIRM` ("Seeking entry-level roles / Open to select freelance inquiries").

---

## 2. Technical & Architecture Assumptions

1. **Static-First Framework:**
   - Astro 5 is chosen as the foundational engine to guarantee zero-JS static HTML by default.
   - React 18 is used exclusively as "islands" (`client:visible`, `client:idle`) for interactive features (Showreel modal, lightbox, 3D viewer) so the site remains completely browsable if JavaScript is disabled.

2. **Accessibility & WCAG 2.2 AA:**
   - Dark theme uses `#0B0D13` (background) and `#F1F5F9` (text) providing a contrast ratio of >15:1.
   - Accent colour is Luminous Amber `#F59E0B` (9.5:1 contrast against dark background), exceeding WCAG AA.
   - Keyboard navigation is fully implemented across all routes, category filters, dialogs, and the 3D viewer.
   - `prefers-reduced-motion` suppresses all non-essential animation, autoplays, and 3D auto-rotations.
   - `Save-Data` browser header disables background video autoplays and high-power WebGL enhancements.

3. **Three.js Progressive Enhancement:**
   - Three.js is never loaded in the initial bundle. It is dynamically imported only after the user actively clicks "View in 3D".
   - Memory disposal is strictly implemented (`geometry.dispose()`, `material.dispose()`, `texture.dispose()`, `renderer.forceContextLoss()`) on viewer unmount.
   - Hardware detection checks for WebGL2 support, device memory, and context loss.

4. **Deployment:**
   - The build output is configured for `dist/` (static output).
   - It seamlessly integrates with GitHub Actions for GitHub Pages and Netlify.

