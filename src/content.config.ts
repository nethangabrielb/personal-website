import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const screenshotSchema = z.object({
  src: z.string(),
  srcSet: z.string(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  alt: z.string(),
  caption: z.string(),
});

const diagramNodeSchema = z.object({
  id: z.string(),
  label: z.string(),
  lines: z.array(z.string()).min(1).max(2),
  detail: z.string(),
  col: z.number().int().min(0),
  row: z.number().int().min(0),
});

const diagramEdgeSchema = z.object({
  from: z.string(),
  to: z.string(),
  label: z.string().optional(),
});

const work = defineCollection({
  loader: glob({ base: "./src/content/work", pattern: "**/*.mdx" }),
  schema: z.object({
    order: z.number().int().positive(),
    title: z.string(),
    year: z.string(),
    dateRange: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    archNote: z.string(),
    stack: z.array(z.string()),
    metaStack: z.string(),
    liveUrl: z.url(),
    sourceUrl: z.url(),
    problem: z.string(),
    primaryImage: screenshotSchema,
    gallery: z.array(screenshotSchema),
    diagram: z.object({
      ariaLabel: z.string(),
      nodes: z.array(diagramNodeSchema).min(2),
      edges: z.array(diagramEdgeSchema).min(1),
    }),
  }),
});

export const collections = { work };
