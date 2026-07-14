import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync, readFileSync } from 'node:fs';
import { join, basename } from 'node:path';

// Deploy target is chosen at build time. Default stays Vercel so nothing about
// the existing setup changes. Cloudflare Pages sets CF_PAGES=1 in its build env,
// so a plain `pnpm build` there auto-selects Cloudflare. Override anywhere with
// DEPLOY_TARGET=cloudflare|vercel.
const deployTarget =
  process.env.DEPLOY_TARGET ?? (process.env.CF_PAGES ? 'cloudflare' : 'vercel');
const activeAdapter =
  deployTarget === 'cloudflare'
    ? cloudflare({ platformProxy: { enabled: true } })
    : vercel();

function getSlugsFromDir(dir) {
  try {
    return readdirSync(dir)
      .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
      .map(f => basename(f, f.endsWith('.mdx') ? '.mdx' : '.md'))
      .filter(slug => {
        // exclude drafts
        const raw = readFileSync(join(dir, slug + (readdirSync(dir).find(f => f.startsWith(slug + '.')) || '').slice(slug.length)), 'utf8');
        return !raw.includes('draft: true');
      });
  } catch { return []; }
}

function getBlogSlugs() {
  const dir = join(import.meta.dirname, 'src/content/blog');
  try {
    return readdirSync(dir)
      .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
      .filter(f => {
        const raw = readFileSync(join(dir, f), 'utf8');
        return !raw.includes('draft: true');
      })
      .map(f => f.replace(/\.(mdx|md)$/, ''));
  } catch { return []; }
}

function getFieldGuideSlugs() {
  const dir = join(import.meta.dirname, 'src/content/fieldGuideScenarios');
  try {
    return readdirSync(dir)
      .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
      .filter(f => {
        const raw = readFileSync(join(dir, f), 'utf8');
        return !raw.includes('draft: true');
      })
      .map(f => f.replace(/\.(mdx|md)$/, ''));
  } catch { return []; }
}

const blogUrls = getBlogSlugs().map(s => `https://bayshine.net/blog/${s}/`);
const fieldGuideUrls = getFieldGuideSlugs().map(s => `https://bayshine.net/field-guide/articles/${s}/`);

const neighborhoodUrls = [
  'https://bayshine.net/land-o-lakes/',
  'https://bayshine.net/land-o-lakes/bexley/',
  'https://bayshine.net/land-o-lakes/connerton/',
  'https://bayshine.net/land-o-lakes/lake-padgett-estates/',
  'https://bayshine.net/land-o-lakes/wilderness-lake-preserve/',
  'https://bayshine.net/land-o-lakes/lakeshore-ranch/',
  'https://bayshine.net/wesley-chapel/',
  'https://bayshine.net/wesley-chapel/wiregrass-ranch/',
  'https://bayshine.net/wesley-chapel/seven-oaks/',
  'https://bayshine.net/wesley-chapel/meadow-pointe/',
];

export default defineConfig({
  site: 'https://bayshine.net',
  adapter: activeAdapter,
  integrations: [
    react(),
    mdx(),
    sitemap({
      customPages: [...blogUrls, ...fieldGuideUrls, ...neighborhoodUrls],
      // Exclude SSR-only admin/pro routes, /go/ redirects, and the /pro/ operator subdomain
      // (the operator subdomain is canonicalized to pro.bayshine.net — bayshine.net/pro/ stays out of the main sitemap)
      filter: (page) => !page.includes('/field-guide/admin') && !page.includes('/field-guide/pro') && !page.includes('/go/') && !page.includes('/pro/') && !page.endsWith('/pro') && !page.includes('/lovebug-removal') && !page.includes('/leads/'),
    }),
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
