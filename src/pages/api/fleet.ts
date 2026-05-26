export const prerender = false;

import type { APIRoute } from 'astro';
import { z } from 'zod';
import { processLead, renderLeadEmail, leadResponse } from '@/lib/leads';

const FleetSchema = z.object({
  company: z.string().min(1, 'Company name required'),
  dmName: z.string().min(1, 'Contact name required'),
  dmPhone: z.string().min(7, 'Valid phone required'),
  fleetSize: z.string().optional(),
  service: z.string().optional(),
  frequency: z.string().optional(),
  visitVolume: z.string().optional(),
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

  const result = FleetSchema.safeParse(raw);
  if (!result.success) {
    const msg = result.error.issues[0]?.message ?? 'Validation failed';
    return new Response(JSON.stringify({ error: msg }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { company, dmName, dmPhone, fleetSize, service, frequency, visitVolume, notes } = result.data;

  const html = renderLeadEmail({
    heading: 'BayShine Fleet Inquiry',
    rows: [
      ['Company', company],
      ['Contact', dmName],
      ['Phone', dmPhone],
      ['Fleet size', fleetSize],
      ['Visit volume', visitVolume],
      ['Service', service],
      ['Frequency', frequency],
      ['Notes', notes],
    ],
  });

  const delivery = await processLead(
    {
      source: 'fleet',
      name: dmName,
      phone: dmPhone,
      service,
      notes,
      extra: { company, fleetSize, frequency, visitVolume },
    },
    `BayShine Fleet: ${company} (${fleetSize ?? '?'} units)`,
    html,
  );

  return leadResponse(delivery);
};
