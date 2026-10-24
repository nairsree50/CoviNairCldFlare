import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  category: z.string(),
  heroImage: z.string().optional(),
});

const learnSchema = z.object({
  title: z.string(),
  description: z.string(),
  section: z.string(), // e.g., 'cmt', 'indicators', 'price-action', 'derivatives', 'fundamentals', 'risk-and-systems'
  sectionTitle: z.string(), // e.g., 'Market Regimes & CMT'
  order: z.number().default(1),
  difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']).default('Intermediate'),
  tags: z.array(z.string()).optional(),
  keyTakeaways: z.array(z.string()).optional(),
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
  learn: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/learn' }),
    schema: learnSchema,
  }),
};
