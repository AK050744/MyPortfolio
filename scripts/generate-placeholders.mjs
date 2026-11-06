import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/placeholders');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const placeholders = [
  { name: 'showreel-poster.svg', w: 1920, h: 1080, title: '2026/2027 3D Showreel Poster' },
  { name: 'mech-hero.svg', w: 1920, h: 1080, title: 'Project Alpha: Mech Hero Render' },
  { name: 'preview-mech.svg', w: 800, h: 450, title: 'Project Alpha: Turntable Preview' },
  { name: 'mech-concept.svg', w: 1280, h: 720, title: 'Project Alpha: Concept Sketches' },
  { name: 'mech-wireframe.svg', w: 1280, h: 720, title: 'Project Alpha: Quad Topology Wireframe' },
  { name: 'mech-clay.svg', w: 1280, h: 720, title: 'Project Alpha: Neutral Clay Render' },
  { name: 'mech-lighting.svg', w: 1280, h: 720, title: 'Project Alpha: Lighting Test' },
  { name: 'mech-detail-1.svg', w: 1920, h: 1080, title: 'Project Alpha: Conduit Core Macro' },
  { name: 'mech-detail-2.svg', w: 1920, h: 1080, title: 'Project Alpha: Hydraulic Ankle Detail' },
  { name: 'mech-turntable-poster.svg', w: 1280, h: 720, title: 'Project Alpha: Turntable Video Poster' },
  { name: 'mech-breakdown-poster.svg', w: 1280, h: 720, title: 'Project Alpha: Breakdown Video Poster' },
  { name: 'mech-model-poster.svg', w: 1280, h: 720, title: 'Project Alpha: 3D Model Poster' },
  { name: 'env-hero.svg', w: 1920, h: 1080, title: 'Project Beta: Environment Hero Shot' },
  { name: 'env-concept.svg', w: 1280, h: 720, title: 'Project Beta: Mood Board & Concept' },
  { name: 'env-clay.svg', w: 1280, h: 720, title: 'Project Beta: Modular Clay Blockout' },
  { name: 'env-lighting.svg', w: 1280, h: 720, title: 'Project Beta: Volumetric Lighting Pass' },
  { name: 'env-detail-1.svg', w: 1920, h: 1080, title: 'Project Beta: Architectural Facade Detail' },
  { name: 'product-hero.svg', w: 1920, h: 1080, title: 'Project Gamma: Studio Headphone Hero' },
  { name: 'product-wireframe.svg', w: 1280, h: 720, title: 'Project Gamma: Headphone Pivot Wireframe' },
  { name: 'product-clay.svg', w: 1280, h: 720, title: 'Project Gamma: Headphone Clay Render' },
  { name: 'product-detail-1.svg', w: 1920, h: 1080, title: 'Project Gamma: Knurled Dial Macro' },
  { name: 'motion-hero.svg', w: 1920, h: 1080, title: 'Project Delta: Kinetic Typography Hero' },
  { name: 'motion-detail-1.svg', w: 1280, h: 720, title: 'Project Delta: Motion Curve Breakdown' },
  { name: 'creature-hero.svg', w: 1920, h: 1080, title: 'Project Epsilon: Bioluminescent Creature Hero' },
  { name: 'creature-clay.svg', w: 1280, h: 720, title: 'Project Epsilon: Creature Clay Sculpt' },
  { name: 'avatar-placeholder.svg', w: 400, h: 400, title: 'Ansh Kumar Singh (Photo Placeholder)' },
];

for (const p of placeholders) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${p.w} ${p.h}" width="${p.w}" height="${p.h}">
  <defs>
    <pattern id="grid-${p.w}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1f2438" stroke-width="1"/>
    </pattern>
    <linearGradient id="grad-${p.w}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#121520" />
      <stop offset="100%" stop-color="#0c0e15" />
    </linearGradient>
  </defs>
  <rect width="${p.w}" height="${p.h}" fill="url(#grad-${p.w})" />
  <rect width="${p.w}" height="${p.h}" fill="url(#grid-${p.w})" opacity="0.6" />
  <rect x="20" y="20" width="${p.w - 40}" height="${p.h - 40}" fill="none" stroke="#2a3047" stroke-width="2" stroke-dasharray="8 8" rx="8" />
  
  <g transform="translate(${p.w / 2}, ${p.h / 2})" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">
    <rect x="-140" y="-80" width="280" height="34" rx="6" fill="#1e2336" stroke="#f59e0b" stroke-width="1.5" />
    <text y="-58" fill="#f59e0b" font-size="14" font-weight="700" letter-spacing="3">PLACEHOLDER ASSET</text>
    <text y="-10" fill="#f1f5f9" font-size="24" font-weight="600">${p.title}</text>
    <text y="24" fill="#94a3b8" font-size="14" font-family="monospace">${p.w} × ${p.h} px · Awaiting Owner Asset</text>
    <circle cx="0" cy="65" r="4" fill="#f59e0b" opacity="0.8" />
  </g>
</svg>`;

  fs.writeFileSync(path.join(outDir, p.name), svg, 'utf8');
}

console.log(`Generated ${placeholders.length} neutral placeholder SVGs in ${outDir}`);
