export const prerender = false;

import type { APIRoute } from 'astro';
import { ImageResponse } from '@vercel/og';
import React from 'react';

const e = React.createElement;

export const GET: APIRoute = async ({ url }) => {
  const title = url.searchParams.get('title') ?? 'Mobile Auto Detailing in Pasco County, FL';
  const subtitle = url.searchParams.get('sub') ?? 'Pasco County & North Hillsborough';
  const fontSize = title.length > 60 ? '44px' : '54px';

  const element = e(
    'div',
    {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#0F1B2D',
        padding: '64px 72px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      },
    },
    // Wordmark row
    e(
      'div',
      { style: { display: 'flex', alignItems: 'center', gap: '12px' } },
      e('span', { style: { fontSize: '24px', fontWeight: 700, color: '#F5F0E8', letterSpacing: '-0.02em' } }, 'BayShine'),
      e('span', { style: { fontSize: '13px', fontWeight: 500, color: '#C9A14A', letterSpacing: '0.1em', textTransform: 'uppercase', marginLeft: '4px' } }, 'Detailing'),
    ),
    // Title block
    e(
      'div',
      { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
      e('div', { style: { fontSize, fontWeight: 700, color: '#F5F0E8', lineHeight: 1.1, letterSpacing: '-0.03em', maxWidth: '900px' } }, title),
      e('div', { style: { fontSize: '22px', color: '#8B97A8', fontWeight: 400 } }, subtitle),
    ),
    // Bottom accent
    e(
      'div',
      { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
      e('div', { style: { width: '64px', height: '3px', backgroundColor: '#C9A14A', borderRadius: '2px' } }),
      e('span', { style: { fontSize: '16px', color: '#556070', letterSpacing: '0.05em' } }, 'bayshine.net'),
    ),
  );

  return new ImageResponse(element, { width: 1200, height: 630 });
};
