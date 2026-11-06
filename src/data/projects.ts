import { ProjectSchema, type Project } from "./schema";

const rawProjects = [
  {
    slug: "cyber-sentinel-mech",
    title: "Project Alpha: Sci-Fi Hard-Surface Mech (TODO_TITLE)",
    year: 2026,
    category: "character",
    // No client - personal portfolio work
    roles: ["Concept Modeling", "Subdivision Modeling", "PBR Texturing", "Rigging"],
    software: [
      { name: "TODO_SOFTWARE_3D", icon: "box" },
      { name: "TODO_SOFTWARE_TEXTURE", icon: "palette" },
      { name: "TODO_SOFTWARE_RENDER", icon: "sun" },
    ],
    summary: "High-detail hard-surface bipedal combat unit. Explores mechanical articulation, modular armor plating, and worn industrial PBR material wear passes.",
    hero: {
      image: {
        src: "/placeholders/mech-hero.svg",
        alt: "Front isometric render of the Sci-Fi Mech showing articulated hydraulic limbs and dark matte plating with amber edge wear",
        width: 1920,
        height: 1080,
      },
      previewClip: {
        src: "/placeholders/preview-mech.svg", // Fallback graphic; video preview is progressive
        poster: {
          src: "/placeholders/mech-hero.svg",
          alt: "Poster preview of hard-surface mech turntable rotation",
          width: 800,
          height: 450,
        },
      },
    },
    concept: [
      {
        src: "/placeholders/mech-concept.svg",
        alt: "Orthographic silhouette sketches and joint articulation reference sheets for the mech project",
        caption: "Early silhouette passes testing weight distribution and functional joint movement",
        width: 1280,
        height: 720,
      },
    ],
    wip: {
      wireframe: [
        {
          src: "/placeholders/mech-wireframe.svg",
          alt: "Clean quad-dominant wireframe topology render of the mech torso and knee actuator hinges",
          caption: "Subdivision-ready quad topology with edge loops aligned to mechanical stress axes",
          width: 1280,
          height: 720,
        },
      ],
      clay: [
        {
          src: "/placeholders/mech-clay.svg",
          alt: "Neutral grey diffuse clay render emphasizing surface bevels and shadow transitions without texture maps",
          caption: "Clay occlusion pass evaluating curvature contrast and primary forms",
          width: 1280,
          height: 720,
        },
      ],
      lighting: [
        {
          src: "/placeholders/mech-lighting.svg",
          alt: "Three-point high-contrast lighting test with cool rim light and warm amber key fill",
          caption: "Studio lighting test isolating rim specular falloff across curved armor surfaces",
          width: 1280,
          height: 720,
        },
      ],
    },
    finals: [
      {
        src: "/placeholders/mech-hero.svg",
        alt: "Final 4K beauty render of the mech in studio lighting showcasing micro-scratches and stencil markings",
        caption: "Final Beauty Pass: Studio Lighting Setup",
        width: 1920,
        height: 1080,
      },
      {
        src: "/placeholders/mech-detail-1.svg",
        alt: "Close-up render of the chest power core and exposed internal copper cable harnesses",
        caption: "Detail: Internal Conduit Harness & Reactor Bevels",
        width: 1920,
        height: 1080,
      },
      {
        src: "/placeholders/mech-detail-2.svg",
        alt: "Macro render of the hydraulic ankle actuator showing grease seals and wear weathering",
        caption: "Detail: Ankle Actuator & Ground Traction Tread",
        width: 1920,
        height: 1080,
      },
    ],
    turntable: {
      vimeoId: "TODO_VIMEO_ID",
      poster: {
        src: "/placeholders/mech-turntable-poster.svg",
        alt: "Turntable still frame: 360-degree rotation render of the hard-surface mech",
        width: 1280,
        height: 720,
      },
      captions: "TODO_REEL_CAPTIONS",
    },
    breakdown: {
      youtubeId: "TODO_YOUTUBE_ID",
      poster: {
        src: "/placeholders/mech-breakdown-poster.svg",
        alt: "Layered breakdown frame showing Wireframe, Normal Map, Roughness Pass, and Final Composite",
        width: 1280,
        height: 720,
      },
    },
    model: {
      glb: "/models/sample-geometry.glb",
      poster: {
        src: "/placeholders/mech-model-poster.svg",
        alt: "Poster preview of real-time 3D model asset ready for interactive WebGL inspection",
        width: 1280,
        height: 720,
      },
      license: "All Rights Reserved - Owner Portfolio Asset (Ansh Kumar Singh)",
      credit: "Model and textures authored by Ansh Kumar Singh",
      triangles: 42500, // Budget compliant: <= 150k
      sizeKB: 320, // Budget compliant: <= 5120 KB
    },
  },
  {
    slug: "neon-submerged-alley",
    title: "Project Beta: Biome Environment (TODO_TITLE)",
    year: 2026,
    category: "environment",
    roles: ["Environment Art", "Modular Asset Kit", "Atmospheric Lighting"],
    software: [
      { name: "TODO_SOFTWARE_3D", icon: "box" },
      { name: "TODO_SOFTWARE_TEXTURE", icon: "palette" },
      { name: "TODO_SOFTWARE_ENGINE", icon: "layers" },
    ],
    summary: "Atmospheric modular environment design. Features volumetric fog scattering, puddles with screen-space reflections, and detailed architectural trim sheets.",
    hero: {
      image: {
        src: "/placeholders/env-hero.svg",
        alt: "Wide shot of a rain-soaked futuristic narrow alleyway reflecting cyan and amber neon signs into dark water puddles",
        width: 1920,
        height: 1080,
      },
    },
    concept: [
      {
        src: "/placeholders/env-concept.svg",
        alt: "Color and lighting mood board with architectural references for neon alleyway facades",
        caption: "Visual mood board exploring damp materials and atmospheric neon contrast",
        width: 1280,
        height: 720,
      },
    ],
    wip: {
      clay: [
        {
          src: "/placeholders/env-clay.svg",
          alt: "Modular blockout clay render showing building facades, fire escapes, and sidewalk curbs without textures",
          caption: "Blockout stage validating camera composition and focal leading lines",
          width: 1280,
          height: 720,
        },
      ],
      lighting: [
        {
          src: "/placeholders/env-lighting.svg",
          alt: "Pure volumetric lighting pass showing streetlamp light cones and neon emission bounces",
          caption: "Volumetric fog depth and emissive bounce pass",
          width: 1280,
          height: 720,
        },
      ],
    },
    finals: [
      {
        src: "/placeholders/env-hero.svg",
        alt: "Master hero shot of the illuminated alleyway with rain particle streaks and wet asphalt reflections",
        caption: "Alleyway Master Shot: Rain Atmosphere",
        width: 1920,
        height: 1080,
      },
      {
        src: "/placeholders/env-detail-1.svg",
        alt: "Close-up perspective of electrical conduit clusters, rusted air conditioning units, and neon tube glass",
        caption: "Facade Detail: Modular Props & Grunge Trim Sheet",
        width: 1920,
        height: 1080,
      },
    ],
  },
  {
    slug: "haptic-audio-device",
    title: "Project Gamma: Precision Studio Headphone (TODO_TITLE)",
    year: 2025,
    category: "product",
    roles: ["Industrial CAD Modeling", "Photorealistic Texturing", "Commercial Lighting"],
    software: [
      { name: "TODO_SOFTWARE_3D", icon: "box" },
      { name: "TODO_SOFTWARE_RENDER", icon: "sun" },
    ],
    summary: "High-fidelity commercial product visualization for an over-ear audiophile headphone featuring woven fabric earcups, bead-blasted aluminum, and knurled dials.",
    hero: {
      image: {
        src: "/placeholders/product-hero.svg",
        alt: "Studio commercial render of matte black wireless headphones hovering on an illuminated circular podium",
        width: 1920,
        height: 1080,
      },
    },
    wip: {
      wireframe: [
        {
          src: "/placeholders/product-wireframe.svg",
          alt: "Dense curvature wireframe of the cast aluminum headband pivot and ear cup gimbal",
          caption: "Precision bevel and boolean cleanup topology",
          width: 1280,
          height: 720,
        },
      ],
      clay: [
        {
          src: "/placeholders/product-clay.svg",
          alt: "Clay studio render highlighting smooth ergonomic curves and leather cushion indentations",
          caption: "Specular reflection continuity inspection",
          width: 1280,
          height: 720,
        },
      ],
    },
    finals: [
      {
        src: "/placeholders/product-hero.svg",
        alt: "Commercial catalog beauty shot with high-key edge rim lighting along the brushed chamfer",
        caption: "Studio Catalog Beauty Shot",
        width: 1920,
        height: 1080,
      },
      {
        src: "/placeholders/product-detail-1.svg",
        alt: "Macro render of micro-perforated acoustic mesh and machined brass volume wheel",
        caption: "Macro Material Pass: Knurled Aluminum & Acoustic Fabric",
        width: 1920,
        height: 1080,
      },
    ],
  },
  {
    slug: "kinetic-typography-ident",
    title: "Project Delta: Geometric Brand Ident (TODO_TITLE)",
    year: 2025,
    category: "motion",
    roles: ["Procedural Animation", "Dynamics Simulation", "Compositing"],
    software: [
      { name: "TODO_SOFTWARE_MOTION", icon: "activity" },
      { name: "TODO_SOFTWARE_COMPOSITE", icon: "film" },
    ],
    summary: "Procedural motion piece exploring physics-driven spring dynamics, elastic collision deformations, and synchronised rhythmic typography.",
    hero: {
      image: {
        src: "/placeholders/motion-hero.svg",
        alt: "Dynamic freeze frame of floating glossy geometric spheres and extruded letterforms bursting outward with directional blur",
        width: 1920,
        height: 1080,
      },
    },
    finals: [
      {
        src: "/placeholders/motion-hero.svg",
        alt: "Full frame render of the title card explosion with chromatic aberration and depth of field",
        caption: "Kinetic Burst: Title Frame",
        width: 1920,
        height: 1080,
      },
      {
        src: "/placeholders/motion-detail-1.svg",
        alt: "Graph editor curves and velocity breakdown diagram demonstrating ease-in-out elasticity",
        caption: "Motion Graph: Spring & Harmonic Oscillation Curves",
        width: 1280,
        height: 720,
      },
    ],
  },
  {
    slug: "bioluminescent-creature",
    title: "Project Epsilon: Deep Ocean Creature (TODO_TITLE)",
    year: 2025,
    category: "personal",
    roles: ["Organic Sculpting", "Subsurface Scattering", "Lookdev"],
    software: [
      { name: "TODO_SOFTWARE_SCULPT", icon: "feather" },
      { name: "TODO_SOFTWARE_RENDER", icon: "sun" },
    ],
    summary: "Personal artistic exploration into deep-sea organism look development, featuring translucent epidermal layers, subsurface light absorption, and organic tentacles.",
    hero: {
      image: {
        src: "/placeholders/creature-hero.svg",
        alt: "Close-up portrait of an alien abyssal organism with glowing translucent blue tendrils and iridescent skin scales",
        width: 1920,
        height: 1080,
      },
    },
    wip: {
      clay: [
        {
          src: "/placeholders/creature-clay.svg",
          alt: "High-resolution digital sculpt clay render showing secondary skin folds and cellular pores",
          caption: "Primary and secondary digital sculpting pass",
          width: 1280,
          height: 720,
        },
      ],
    },
    finals: [
      {
        src: "/placeholders/creature-hero.svg",
        alt: "Beauty render under underwater turbidity lighting displaying deep subsurface scattering in skin tissue",
        caption: "Beauty Render: Subsurface Skin Absorption",
        width: 1920,
        height: 1080,
      },
    ],
  },
];

// Validate all projects at build time via Zod
export const projects: Project[] = rawProjects.map((p) => ProjectSchema.parse(p));

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category?: string): Project[] {
  if (!category || category === "all") return projects;
  return projects.filter((p) => p.category === category);
}

