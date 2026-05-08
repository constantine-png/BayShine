import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.enum(['Car Care', 'Fleet Tips', 'Local']),
    readTime: z.number().int().positive(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    serviceTopic: z.enum([
      'full-detail',
      'exterior-detail',
      'ceramic-coating',
      'recon',
      'fleet',
      'apartments',
      'general',
    ]).optional().default('general'),
    postType: z.enum([
      'selling-reason',
      'detail-element',
      'field-note',
      'local',
    ]).optional().default('selling-reason'),
    elements: z.array(z.string()).optional(),
    elementCategory: z.string().optional(),
  }),
});

// Stub collection for Field Guide scenarios — no MDX files yet.
// Schema is affiliate-ready. Add content to src/content/fieldGuideScenarios/ when ready.
// FOLLOWUP: wire up per-scenario pages at src/pages/field-guide/[slug].astro
const fieldGuideScenarios = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    problem: z.string(),
    category: z.string(), // matches categories.slug in DB
    severity: z.enum(['quick-fix', 'moderate', 'advanced']),
    tier: z.enum(['public', 'pro']).default('public'),
    surfaces: z.array(z.string()).optional(),
    symptoms: z.array(z.string()).optional(),
    products: z.array(z.object({
      brand: z.string(),
      product_name: z.string(),
      affiliate_url: z.string().url(),
      commission_source: z.enum(['amazon', 'direct', 'other']),
      role_in_solution: z.string(), // e.g. "decontamination", "polish", "protection"
    })).optional(),
    draft: z.boolean().default(true),
    publishedDate: z.date().optional(),
  }),
});

export const collections = { blog, fieldGuideScenarios };
