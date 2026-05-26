export const prerender = false;

import type { APIRoute } from 'astro';
import { z } from 'zod';
import { processLead, renderLeadEmail, leadResponse } from '@/lib/leads';

const QuoteFollowupSchema = z.object({
  name: z.string().min(1, 'Name required'),
  phone: z.string().min(1, 'Phone required'),
  notes: z.string().optional(),
  vehicle: z.string().min(1, 'Vehicle required'),
  service: z.string().min(1, 'Service required'),
  condition: z.string().optional(),
  estimate: z.string().min(1, 'Estimate required'),
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

  const result = QuoteFollowupSchema.safeParse(raw);
  if (!result.success) {
    const msg = result.error.issues[0]?.message ?? 'Validation failed';
    return new Response(JSON.stringify({ error: msg }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, phone, notes, vehicle, service, condition, estimate } = result.data;

  const html = renderLeadEmail({
    heading: 'New Quote Lead',
    rows: [
      ['Name', name],
      ['Phone', phone],
      ['Vehicle', vehicle],
      ['Service', service],
      ['Condition', condition],
      ['Estimate', estimate],
      ['Notes', notes],
    ],
  });

  const delivery = await processLead(
    {
      source: 'quote',
      name,
      phone,
      vehicle,
      service,
      notes,
      extra: { condition, estimate },
    },
    `Quote lead: ${name} / ${service}`,
    html,
  );

  return leadResponse(delivery);
};
