import { z } from "zod";

export const CategorySchema = z.enum([
  "character",
  "environment",
  "product",
  "motion",
  "personal",
]);
export type Category = z.infer<typeof CategorySchema>;

export const ImageAssetSchema = z.object({
  src: z.string().min(1, "Image src cannot be empty"),
  alt: z.string().min(5, "Meaningful alt text is required and must be at least 5 characters"),
  caption: z.string().optional(),
  width: z.number().positive("Image width must be a positive number"),
  height: z.number().positive("Image height must be a positive number"),
});
export type ImageAsset = z.infer<typeof ImageAssetSchema>;

export const VideoAssetSchema = z.object({
  src: z.string().optional(),
  vimeoId: z.string().optional(),
  youtubeId: z.string().optional(),
  poster: ImageAssetSchema,
  captions: z.string().optional(),
});
export type VideoAsset = z.infer<typeof VideoAssetSchema>;

export const ModelAssetSchema = z.object({
  glb: z.string().min(1, "GLB file path is required"),
  poster: ImageAssetSchema,
  license: z.string().min(1, "Model license is required (e.g. 'CC-BY-4.0', 'All Rights Reserved by Ansh Kumar Singh')"),
  credit: z.string().min(1, "Model author credit is required"),
  triangles: z.number().max(150000, "Model triangle count must not exceed 150,000 budget limit"),
  sizeKB: z.number().max(5120, "Model file size must not exceed 5120 KB (5 MB) budget limit"),
});
export type ModelAsset = z.infer<typeof ModelAssetSchema>;

export const ProjectSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  year: z.number().int().min(2020),
  category: CategorySchema,
  client: z.string().optional(), // Omit for personal work; never invent
  roles: z.array(z.string()).min(1, "At least one role is required"),
  software: z.array(z.object({
    name: z.string().min(1),
    icon: z.string().min(1),
  })),
  summary: z.string().min(10, "Summary must be at least 10 characters"),
  hero: z.object({
    image: ImageAssetSchema,
    video: VideoAssetSchema.optional(),
    previewClip: VideoAssetSchema.optional(),
  }),
  concept: z.array(ImageAssetSchema).optional(),
  wip: z.object({
    wireframe: z.array(ImageAssetSchema).optional(),
    clay: z.array(ImageAssetSchema).optional(),
    lighting: z.array(ImageAssetSchema).optional(),
  }).optional(),
  finals: z.array(ImageAssetSchema).min(1, "Finals gallery must contain at least one render"),
  turntable: VideoAssetSchema.optional(),
  breakdown: VideoAssetSchema.optional(),
  model: ModelAssetSchema.optional(),
});
export type Project = z.infer<typeof ProjectSchema>;

export const AssetLicenseSchema = z.object({
  id: z.string(),
  name: z.string(),
  author: z.string(),
  license: z.string(),
  url: z.string().optional(),
  notes: z.string(),
});
export type AssetLicense = z.infer<typeof AssetLicenseSchema>;

export const ProfileSchema = z.object({
  name: z.string(),
  title: z.string(),
  tagline: z.string(),
  location: z.string(),
  email: z.string().email(),
  github: z.string().url(),
  linkedin: z.string(),
  artstation: z.string().optional(),
  behance: z.string().optional(),
  instagram: z.string().optional(),
  discord: z.string().optional(),
  status: z.string(),
  education: z.object({
    degree: z.string(),
    institution: z.string(),
    period: z.string(),
  }),
  internship: z.object({
    role: z.string(),
    company: z.string(),
    period: z.string(),
    type: z.string(),
  }),
  technicalSkills: z.array(z.string()),
  hardwareSpecs: z.record(z.string()),
  softwareProficiency: z.object({
    daily: z.array(z.string()),
    comfortable: z.array(z.string()),
    learning: z.array(z.string()),
  }),
  showreel: z.object({
    title: z.string(),
    embedUrl: z.string(),
    fallbackUrl: z.string(),
    poster: ImageAssetSchema,
    captionsUrl: z.string().optional(),
    featuredProjects: z.array(z.object({
      title: z.string(),
      slug: z.string(),
      timestamp: z.string().optional(),
    })),
  }),
  features: z.object({
    resources: z.boolean(),
    rateSheet: z.boolean(),
    webglHero: z.boolean(),
  }),
});
export type Profile = z.infer<typeof ProfileSchema>;
