/**
 * BayShine site audit — tests every interactive and automated element
 * on the live bayshine.net site using Playwright.
 *
 * Run: node scripts/audit-site.mjs
 */

import { chromium } from '@playwright/test';

const BASE = 'https://bayshine.net';

const PAGES = [
  '/',
  '/ceramic-coating',
  '/standing-detail',
  '/fleet',
  '/quote',
  '/field-guide',
  '/blog',
  '/service-area',
  '/contact',
  '/land-o-lakes',
];

const RESULTS = [];

function log(section, status, detail) {
  const icon = status === 'PASS' ? '✓' : status === 'WARN' ? '!' : '✗';
  console.log(`  [${icon}] ${section}: ${detail}`);
  RESULTS.push({ section, status, detail });
}

async function testPage(page, path) {
  const url = BASE + path;
  console.log(`\n── ${path}`);
  try {
    const res = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
    const status = res?.status() ?? 0;
    if (status >= 400) {
      log(path, 'FAIL', `HTTP ${status}`);
      return;
    }
    log(path, 'PASS', `HTTP ${status}`);

    // Check for console errors
    const errors = [];
    page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
    await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});

    if (errors.length > 0) {
      log(`${path} console`, 'WARN', errors.slice(0, 3).join(' | '));
    }

    // Check title exists
    const title = await page.title();
    if (!title || title.trim() === '') {
      log(`${path} title`, 'FAIL', 'Missing page title');
    } else {
      log(`${path} title`, 'PASS', title.slice(0, 60));
    }

    // Check meta description
    const desc = await page.$eval('meta[name="description"]', el => el.getAttribute('content')).catch(() => null);
    if (!desc) {
      log(`${path} meta-desc`, 'WARN', 'Missing meta description');
    } else {
      log(`${path} meta-desc`, 'PASS', `${desc.length} chars`);
    }

    // Check canonical
    const canonical = await page.$eval('link[rel="canonical"]', el => el.getAttribute('href')).catch(() => null);
    if (!canonical) {
      log(`${path} canonical`, 'WARN', 'No canonical tag');
    } else {
      log(`${path} canonical`, 'PASS', canonical);
    }

    // Check h1
    const h1Count = await page.locator('h1').count();
    if (h1Count === 0) {
      log(`${path} h1`, 'FAIL', 'No H1 found');
    } else if (h1Count > 1) {
      log(`${path} h1`, 'WARN', `${h1Count} H1 tags (should be 1)`);
    } else {
      const h1Text = await page.locator('h1').first().textContent();
      log(`${path} h1`, 'PASS', h1Text?.slice(0, 50).trim() ?? '');
    }

    // Check for broken images
    const imgSrcs = await page.$$eval('img', imgs => imgs.map(i => i.src));
    let brokenImgs = 0;
    for (const src of imgSrcs.slice(0, 10)) {
      if (!src || src.startsWith('data:')) continue;
      const r = await page.request.get(src).catch(() => null);
      if (r && r.status() >= 400) brokenImgs++;
    }
    if (brokenImgs > 0) {
      log(`${path} images`, 'FAIL', `${brokenImgs} broken image(s)`);
    } else {
      log(`${path} images`, 'PASS', `${imgSrcs.length} images OK`);
    }

  } catch (err) {
    log(path, 'FAIL', err.message.slice(0, 100));
  }
}

async function testFieldGuideSearch(page) {
  console.log('\n── /field-guide search API');
  try {
    const res = await page.request.post(`${BASE}/api/field-guide/search`, {
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({ query: 'water spot' }),
      timeout: 10000,
    });
    const body = await res.json().catch(() => null);
    if (res.status() !== 200) {
      log('field-guide search', 'FAIL', `HTTP ${res.status()}`);
    } else if (!body) {
      log('field-guide search', 'FAIL', 'Invalid JSON response');
    } else if (body.empty && body.results?.length === 0) {
      log('field-guide search', 'WARN', 'Search returned 0 results — DB may be empty or disconnected');
    } else {
      log('field-guide search', 'PASS', `${body.results?.length ?? 0} results for "water spot"`);
    }
  } catch (err) {
    log('field-guide search', 'FAIL', err.message.slice(0, 100));
  }
}

async function testContactForm(page) {
  console.log('\n── /contact form');
  try {
    await page.goto(`${BASE}/contact`, { waitUntil: 'domcontentloaded', timeout: 15000 });
    const form = page.locator('form').first();
    const exists = await form.isVisible().catch(() => false);
    if (!exists) {
      log('contact form', 'WARN', 'No visible form found on /contact');
      return;
    }
    // Check fields
    const nameField = page.locator('input[name="name"], input[type="text"]').first();
    const emailField = page.locator('input[name="email"], input[type="email"]').first();
    const msgField = page.locator('textarea').first();
    const hasName = await nameField.isVisible().catch(() => false);
    const hasEmail = await emailField.isVisible().catch(() => false);
    const hasMsg = await msgField.isVisible().catch(() => false);
    if (!hasName || !hasEmail) {
      log('contact form fields', 'WARN', `name=${hasName} email=${hasEmail} textarea=${hasMsg}`);
    } else {
      log('contact form fields', 'PASS', 'name + email + textarea present');
    }
    // Check submit button
    const submitBtn = page.locator('button[type="submit"], input[type="submit"]').first();
    const hasSubmit = await submitBtn.isVisible().catch(() => false);
    log('contact form submit', hasSubmit ? 'PASS' : 'FAIL', hasSubmit ? 'Submit button present' : 'No submit button');
  } catch (err) {
    log('contact form', 'FAIL', err.message.slice(0, 100));
  }
}

async function testGoRedirects(page) {
  console.log('\n── /go/ affiliate redirects');
  const slugs = ['griots-garage-ceramic-3in1', 'meguiars-water-spot-remover', 'chemical-guys-iron-remover'];
  for (const slug of slugs) {
    try {
      const res = await page.goto(`${BASE}/go/${slug}`, {
        waitUntil: 'domcontentloaded',
        timeout: 8000,
      });
      const finalUrl = page.url();
      const status = res?.status() ?? 0;
      if (finalUrl.includes('/go/') && status !== 302 && status !== 301) {
        log(`/go/${slug}`, 'WARN', `Stayed on /go/ page — redirect may not have fired (${status})`);
      } else {
        log(`/go/${slug}`, 'PASS', `→ ${finalUrl.slice(0, 60)}`);
      }
    } catch (err) {
      log(`/go/${slug}`, 'WARN', err.message.slice(0, 80));
    }
  }
}

async function testAPIEndpoints(page) {
  console.log('\n── API endpoints (health check)');

  // Email capture
  try {
    const res = await page.request.post(`${BASE}/api/email-capture`, {
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({ email: 'test@example.com', source: 'audit' }),
      timeout: 8000,
    });
    log('api/email-capture', res.status() < 500 ? 'PASS' : 'FAIL', `HTTP ${res.status()}`);
  } catch (err) {
    log('api/email-capture', 'FAIL', err.message.slice(0, 80));
  }

  // Book endpoint
  try {
    const res = await page.request.post(`${BASE}/api/book`, {
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({ name: 'Audit Test', email: 'audit@test.com', service: 'interior', zip: '34638' }),
      timeout: 8000,
    });
    log('api/book', res.status() < 500 ? 'PASS' : 'FAIL', `HTTP ${res.status()}`);
  } catch (err) {
    log('api/book', 'FAIL', err.message.slice(0, 80));
  }
}

async function testSchemaMarkup(page) {
  console.log('\n── JSON-LD schema (homepage)');
  try {
    await page.goto(BASE, { waitUntil: 'domcontentloaded', timeout: 15000 });
    const scripts = await page.$$eval(
      'script[type="application/ld+json"]',
      els => els.map(el => el.textContent)
    );
    if (scripts.length === 0) {
      log('schema/json-ld', 'WARN', 'No JSON-LD found on homepage');
    } else {
      let valid = 0, invalid = 0;
      for (const s of scripts) {
        try { JSON.parse(s ?? ''); valid++; } catch { invalid++; }
      }
      log('schema/json-ld', invalid > 0 ? 'FAIL' : 'PASS', `${valid} valid, ${invalid} invalid`);
    }
  } catch (err) {
    log('schema/json-ld', 'FAIL', err.message.slice(0, 100));
  }
}

async function testSitemap(page) {
  console.log('\n── sitemap.xml');
  try {
    const res = await page.goto(`${BASE}/sitemap.xml`, { timeout: 10000 });
    const body = await res?.text() ?? '';
    const urlCount = (body.match(/<loc>/g) || []).length;
    if (!body.includes('<urlset') && !body.includes('<sitemapindex')) {
      log('sitemap.xml', 'FAIL', 'Not a valid sitemap');
    } else {
      log('sitemap.xml', 'PASS', `${urlCount} URLs indexed`);
    }
  } catch (err) {
    log('sitemap.xml', 'FAIL', err.message.slice(0, 100));
  }
}

async function testLlmsTxt(page) {
  console.log('\n── llms.txt');
  try {
    const res = await page.goto(`${BASE}/llms.txt`, { timeout: 10000 });
    const body = await res?.text() ?? '';
    if (!body || body.length < 100) {
      log('llms.txt', 'WARN', `Very short (${body.length} chars) or empty`);
    } else {
      log('llms.txt', 'PASS', `${body.length} chars, starts: "${body.slice(0, 60).replace(/\n/g, ' ')}"`);
    }
  } catch (err) {
    log('llms.txt', 'FAIL', err.message.slice(0, 100));
  }
}

async function testRobotsTxt(page) {
  console.log('\n── robots.txt');
  try {
    const res = await page.goto(`${BASE}/robots.txt`, { timeout: 10000 });
    const body = await res?.text() ?? '';
    if (!body.includes('User-agent')) {
      log('robots.txt', 'FAIL', 'Missing User-agent directive');
    } else {
      const blocksGPT = body.includes('GPTBot') || body.includes('gptbot');
      const blocksClaude = body.includes('ClaudeBot') || body.includes('claudebot');
      log('robots.txt', 'PASS', `GPTBot=${blocksGPT ? 'BLOCKED' : 'allowed'} ClaudeBot=${blocksClaude ? 'BLOCKED' : 'allowed'}`);
    }
  } catch (err) {
    log('robots.txt', 'FAIL', err.message.slice(0, 100));
  }
}

// ─── Main ───────────────────────────────────────────────────────────────────

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  userAgent: 'BayShine-SiteAudit/1.0 (diagnostic scan; contact@bayshine.net)',
  ignoreHTTPSErrors: false,
});
const page = await context.newPage();

console.log('═══════════════════════════════════════════════════');
console.log('  BayShine Site Audit — ' + new Date().toISOString());
console.log('  Target: ' + BASE);
console.log('═══════════════════════════════════════════════════');

// Fundamental infrastructure
await testSitemap(page);
await testRobotsTxt(page);
await testLlmsTxt(page);

// Schema on homepage
await testSchemaMarkup(page);

// Field Guide search (DB-dependent)
await testFieldGuideSearch(page);

// All key pages
for (const path of PAGES) {
  await testPage(page, path);
}

// Interactive elements
await testContactForm(page);
await testGoRedirects(page);
await testAPIEndpoints(page);

await browser.close();

// ─── Summary ─────────────────────────────────────────────────────────────────
console.log('\n═══════════════════════════════════════════════════');
console.log('  AUDIT SUMMARY');
console.log('═══════════════════════════════════════════════════');
const passes = RESULTS.filter(r => r.status === 'PASS').length;
const warns  = RESULTS.filter(r => r.status === 'WARN').length;
const fails  = RESULTS.filter(r => r.status === 'FAIL').length;
console.log(`  PASS: ${passes}  WARN: ${warns}  FAIL: ${fails}  TOTAL: ${RESULTS.length}`);

if (fails > 0) {
  console.log('\n  FAILURES:');
  RESULTS.filter(r => r.status === 'FAIL').forEach(r => console.log(`    ✗ ${r.section}: ${r.detail}`));
}
if (warns > 0) {
  console.log('\n  WARNINGS:');
  RESULTS.filter(r => r.status === 'WARN').forEach(r => console.log(`    ! ${r.section}: ${r.detail}`));
}
console.log('═══════════════════════════════════════════════════\n');
