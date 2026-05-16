import { chromium } from '@playwright/test';

const b = await chromium.launch({ headless: true });
const p = await b.newPage();
await p.goto('https://bayshine.net/contact', { waitUntil: 'networkidle' });
const inputs = await p.$$eval('input, textarea, select', els => els.map(el => ({
  tag: el.tagName, type: el.getAttribute('type'), name: el.getAttribute('name'),
  id: el.id, placeholder: el.getAttribute('placeholder')
})));
console.log('FORM INPUTS:', JSON.stringify(inputs, null, 2));

const res = await p.goto('https://bayshine.net/sitemap-0.xml');
const body = await res.text();
const urls = (body.match(/<loc>/g) || []).length;
console.log('\nSITEMAP-0 URLs:', urls);

// Check sitemap index to see all shards
const idx = await p.goto('https://bayshine.net/sitemap-index.xml');
const idxBody = await idx.text();
console.log('SITEMAP INDEX:\n', idxBody.slice(0, 800));

await b.close();
