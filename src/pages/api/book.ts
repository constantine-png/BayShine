export const prerender = false;

import type { APIRoute } from 'astro';
import { z } from 'zod';
import { processLead, renderLeadEmail, leadResponse } from '@/lib/leads';

const BookingSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().min(7, 'Valid phone required'),
  vehicle: z.string().min(2, 'Vehicle description required'),
  zip: z.string().regex(/^\d{5}$/, 'Five-digit zip required'),
  address: z.string().optional(),
  timing: z.string().optional(),
  notes: z.string().optional(),
  service: z.string().optional(),
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

  const result = BookingSchema.safeParse(raw);
  if (!result.success) {
    const msg = result.error.issues[0]?.message ?? 'Validation failed';
    return new Response(JSON.stringify({ error: msg }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, phone, vehicle, zip, address, timing, notes, service } = result.data;

  const html = renderLeadEmail({
    heading: 'Booking Request',
    rows: [
      ['Name', name],
      ['Phone', phone],
      ['Vehicle', vehicle],
      ['Zip', zip],
      ['Service', service],
      ['Address', address],
      ['Timing', timing],
      ['Notes', notes],
    ],
  });

  const delivery = await processLead(
    {
      source: 'book',
      name,
      phone,
      vehicle,
      zip,
      address,
      service,
      notes,
      extra: { timing },
    },
    `BayShine Booking: ${name} (${zip})`,
    html,
  );

  return leadResponse(delivery);
};
