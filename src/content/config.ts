import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.enum(['Car Care', 'Boat & Marine', 'Fleet Tips', 'Local']),
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

export const collections = { blog };
