import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  category: z.string(),
  heroImage: z.string().optional(),
});

export const collections = {
  launchpad: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/launchpad' }),
    schema: articleSchema,
  }),
  'wealth-engine': defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/wealth-engine' }),
    schema: articleSchema,
  }),
  'big-decisions': defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/big-decisions' }),
    schema: articleSchema,
  }),
};
