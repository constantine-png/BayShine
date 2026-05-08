import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://bayshine.net',
  adapter: vercel(),
  integrations: [
    react(),
    mdx(),
    sitemap(),
  ],
  redirects: {
    // Blog posts moved from subdirectories to root-level /blog — 301 permanent redirects
    '/blog/apartments/resident-detailing-program':        { status: 301, destination: '/blog/resident-detailing-program' },
    '/blog/ceramic-coating/ceramic-coating-florida':      { status: 301, destination: '/blog/ceramic-coating-florida' },
    '/blog/exterior-detail/exterior-protection-florida':  { status: 301, destination: '/blog/exterior-protection-florida' },
    '/blog/fleet/fleet-maintenance-overview':             { status: 301, destination: '/blog/fleet-maintenance-overview' },
    '/blog/full-detail/full-detail-overview':             { status: 301, destination: '/blog/full-detail-overview' },
    '/blog/recon/recon-value-overview':                   { status: 301, destination: '/blog/recon-value-overview' },
    // /lot-maintenance merged into /fleet — thin page, all unique content surfaced in fleet page
    '/lot-maintenance':                                   { status: 301, destination: '/fleet' },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: [],
    remotePatterns: [],
  },
});
