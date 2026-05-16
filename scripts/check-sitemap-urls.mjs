import { chromium } from '@playwright/test';

const b = await chromium.launch({ headless: true });
const p = await b.newPage();
const res = await p.goto('https://bayshine.net/sitemap-0.xml');
const body = await res.text();
const matches = body.match(/<loc>(.*?)<\/loc>/g) || [];
const urls = matches.map(m => m.replace(/<\/?loc>/g, ''));
console.log(`${urls.length} URLs in sitemap:\n`);
urls.forEach(u => console.log(' ', u));
await b.close();
