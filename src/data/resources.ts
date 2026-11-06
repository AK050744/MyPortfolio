export interface ResourceItem {
  id: string;
  title: string;
  type: "model" | "tutorial" | "article";
  description: string;
  date: string;
  license: string;
  downloadUrl?: string;
  readUrl?: string;
  fileSize?: string;
  format?: string;
}

export const resources: ResourceItem[] = [
  {
    id: "procedural-grunge-nodes",
    title: "Procedural Surface Imperfections Node Group (TODO_RESOURCE_1)",
    type: "tutorial",
    description: "Breakdown of procedural curvature, ambient occlusion dirt masks, and micro-scratch coordinate transforms without UV seams.",
    date: "2026-01-15",
    license: "CC-BY-4.0 (Authored by Ansh Kumar Singh)",
    readUrl: "#",
    format: "Technical Article & Node Graph",
  },
  {
    id: "lowpoly-test-kit",
    title: "Hard-Surface Bevel Calibration Kit (TODO_RESOURCE_2)",
    type: "model",
    description: "Standardized geometric calibration meshes for testing normal map baking tangents and sub-pixel edge shading.",
    date: "2025-11-20",
    license: "CC0 / Public Domain (Authored by Ansh Kumar Singh)",
    downloadUrl: "/models/sample-geometry.glb",
    fileSize: "320 KB",
    format: "GLB / Draco Compressed",
  },
];
