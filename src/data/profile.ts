import { ProfileSchema, type Profile } from "./schema";

const rawProfile = {
  name: "Ansh Kumar Singh",
  title: "3D Artist & Technical Artist",
  tagline: "Bridging creative 3D artistry and modern technical pipeline engineering.",
  location: "Pune, Maharashtra, India",
  email: "anshvikas04@gmail.com",
  github: "https://github.com/AK050744",
  linkedin: "TODO_LINKEDIN_URL",
  artstation: "TODO_ARTSTATION_URL",
  behance: "TODO_BEHANCE_URL",
  instagram: "TODO_INSTAGRAM_URL",
  discord: "TODO_DISCORD_INVITE",
  status: "Open for Entry-Level Roles & Freelance (TODO_CONFIRM)",
  education: {
    degree: "B.Tech in Information Technology",
    institution: "Bharati Vidyapeeth (Deemed to be University), Pune",
    period: "2023 – 2027",
  },
  internship: {
    role: "Engineering Intern",
    company: "Kahana Group Inc.",
    period: "Mar 2026 – Present",
    type: "Remote",
  },
  technicalSkills: [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "FastAPI",
    "Git",
    "Docker",
    "GitHub Actions (CI/CD)",
    "AWS",
    "Three.js / WebGL",
  ],
  hardwareSpecs: {
    CPU: "TODO_CPU (e.g. AMD Ryzen 9 / Intel i9)",
    GPU: "TODO_GPU (e.g. NVIDIA RTX 4080/4090)",
    RAM: "TODO_RAM (e.g. 64GB DDR5)",
    Storage: "TODO_STORAGE (e.g. 2TB NVMe PCIe 4.0)",
    Display: "TODO_DISPLAYS (e.g. 4K IPS 100% sRGB)",
    Tablet: "TODO_TABLET (e.g. Pen Tablet / Display)",
  },
  softwareProficiency: {
    daily: [
      "TODO_SOFTWARE_DAILY_1",
      "TODO_SOFTWARE_DAILY_2",
    ],
    comfortable: [
      "TODO_SOFTWARE_COMFORTABLE_1",
      "TODO_SOFTWARE_COMFORTABLE_2",
    ],
    learning: [
      "TODO_SOFTWARE_LEARNING_1",
      "TODO_SOFTWARE_LEARNING_2",
    ],
  },
  showreel: {
    title: "2026/2027 3D & Animation Showreel",
    embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", // Click-to-load facade; replace with owner showreel
    fallbackUrl: "https://github.com/AK050744/MyPortfolio",
    poster: {
      src: "/placeholders/showreel-poster.svg",
      alt: "Poster thumbnail for Ansh Kumar Singh 3D Showreel featuring 3D lighting breakdowns and renders",
      width: 1920,
      height: 1080,
    },
    captionsUrl: "TODO_REEL_CAPTIONS",
    featuredProjects: [
      {
        title: "Project 1 (TODO_PROJECT_TITLE)",
        slug: "project-1",
        timestamp: "0:00",
      },
      {
        title: "Project 2 (TODO_PROJECT_TITLE)",
        slug: "project-2",
        timestamp: "0:30",
      },
    ],
  },
  features: {
    resources: true,
    rateSheet: false, // Hidden until owner supplies PDF
    webglHero: true,
  },
};

// Validate profile at module load / build time
export const profile: Profile = ProfileSchema.parse(rawProfile);

