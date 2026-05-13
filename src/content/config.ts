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
      'standing-detail',
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
    // Override the auto-generated keywords string for specialized posts
    keywords: z.array(z.string()).optional(),
  }),
});

const fieldGuideScenarios = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['paint', 'interior', 'glass', 'wheels', 'trim', 'coating', 'contamination', 'correction', 'tools', 'general']),
    severity: z.enum(['quick-fix', 'moderate', 'advanced']).optional(),
    affiliate: z.array(z.string()).optional(), // product slugs — e.g. ['sucker', 'glass-genie']
    readTime: z.number(),
    draft: z.boolean().default(false),
    keywords: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, fieldGuideScenarios };
