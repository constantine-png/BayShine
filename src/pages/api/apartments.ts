export const prerender = false;

import type { APIRoute } from 'astro';
import { z } from 'zod';
import { processLead, renderLeadEmail, leadResponse } from '@/lib/leads';

const ApartmentsSchema = z.object({
  propertyName: z.string().min(1, 'Property name required'),
  pmName: z.string().min(1, 'Contact name required'),
  pmPhone: z.string().min(7, 'Valid phone required'),
  unitCount: z.string().optional(),
  residentInterest: z.string().optional(),
  tiers: z.union([z.string(), z.array(z.string())]).optional(),
  notes: z.string().optional(),
});

export const POST: APIRoute = async ({ request }) => {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const result = ApartmentsSchema.safeParse(raw);
  if (!result.success) {
    const msg = result.error.issues[0]?.message ?? 'Validation failed';
    return new Response(JSON.stringify({ error: msg }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { propertyName, pmName, pmPhone, unitCount, residentInterest, tiers, notes } = result.data;
  const tiersStr = Array.isArray(tiers) ? tiers.join(', ') : (tiers ?? '');

  const html = renderLeadEmail({
    heading: `Apartments Inquiry: ${propertyName}`,
    rows: [
      ['Property', propertyName],
      ['Manager', pmName],
      ['Phone', pmPhone],
      ['Units', unitCount],
      ['Resident interest', residentInterest],
      ['Service tiers', tiersStr],
      ['Notes', notes],
    ],
  });

  const delivery = await processLead(
    {
      source: 'apartments',
      name: pmName,
      phone: pmPhone,
      notes,
      extra: { propertyName, unitCount, residentInterest, tiers: tiersStr },
    },
    `BayShine Apartments Inquiry: ${propertyName}`,
    html,
  );

  return leadResponse(delivery);
};
