import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const privacy = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/privacy" }),
  schema: z.object({
    updated: z.coerce.date(),
    summary: z.string(),
    summaryMuted: z.string(),
  }),
});

export const collections = { privacy };
