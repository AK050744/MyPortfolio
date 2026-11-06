import type { AssetLicense } from "./schema";

/**
 * Registry of all licensed assets used across the portfolio.
 * Every model, texture, audio clip, or external asset MUST have an explicit license entry here.
 */
export const assetLicenses: AssetLicense[] = [
  {
    id: "dev-placeholders",
    name: "Neutral Development Vector Placeholders",
    author: "Portfolio Build System",
    license: "MIT / Public Domain",
    notes: "Locally generated SVG flat grey placeholders with dimensions and PLACEHOLDER watermark. Zero third-party stock art.",
  },
  {
    id: "glb-sample-lowpoly",
    name: "Sample Geometric Low-Poly Test Asset",
    author: "Ansh Kumar Singh",
    license: "CC-BY-4.0",
    url: "https://github.com/AK050744/MyPortfolio",
    notes: "Procedurally generated low-poly demo mesh for 3D viewer testing (under 50k tris, 200 KB).",
  },
];

export function getAssetLicense(id: string): AssetLicense | undefined {
  return assetLicenses.find((license) => license.id === id);
}
