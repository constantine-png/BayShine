#!/usr/bin/env node
/**
 * Daily content generation for BayShine Detailing.
 * Generates blog posts and field guide scenarios via Anthropic API.
 * Run via GitHub Actions on a daily schedule.
 *
 * Required env vars:
 *   ANTHROPIC_API_KEY  — Anthropic API key
 *   BATCH_SIZE         — Number of blog posts to generate (default 5)
 */

import Anthropic from '@anthropic-ai/sdk';
import { readdirSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BLOG_DIR = join(ROOT, 'src/content/blog');
const FIELD_DIR = join(ROOT, 'src/content/fieldGuideScenarios');

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const BATCH_SIZE = parseInt(process.env.BATCH_SIZE || '5', 10);
const TODAY = new Date().toISOString().slice(0, 10);

const BLOG_CATEGORY = ['Car Care', 'Fleet Tips', 'Local'];
const BLOG_SERVICE_TOPIC = ['full-detail', 'exterior-detail', 'ceramic-coating', 'recon', 'fleet', 'apartments', 'standing-detail', 'general'];
const FIELD_CATEGORY = ['paint', 'interior', 'glass', 'wheels', 'trim', 'coating', 'contamination', 'correction', 'tools', 'general'];
const FIELD_SEVERITY = ['quick-fix', 'moderate', 'advanced'];

function existingSlugs(dir) {
  try {
    return new Set(readdirSync(dir).map(f => f.replace(/\.(mdx|md)$/, '')));
  } catch {
    return new Set();
  }
}

const blogTopics = [
  { slug: 'wheel-well-cleaning-florida', title: 'Wheel Well Cleaning: The Area Most Detailers Skip', category: 'Car Care', serviceTopic: 'exterior-detail', keywords: ['wheel well cleaning', 'wheel well Florida', 'fender well car care', 'wheel arch cleaning', 'brake dust wheel well'] },
  { slug: 'tinted-windows-care-florida', title: 'Window Tint Care in Florida: What Damages Film and What Doesn\'t', category: 'Car Care', serviceTopic: 'exterior-detail', keywords: ['window tint care Florida', 'tinted window cleaning', 'window film care', 'car tint Florida', 'window tint cleaning'] },
  { slug: 'ceramic-coating-maintenance-tips', title: 'How to Maintain a Ceramic Coating So It Lasts Its Full Term', category: 'Car Care', serviceTopic: 'ceramic-coating', keywords: ['ceramic coating maintenance', 'how to maintain ceramic coating', 'ceramic coating care tips', 'ceramic coating wash routine', 'maintain ceramic coating Florida'] },
  { slug: 'detailing-before-road-trip', title: 'Detailing Before a Road Trip: What Actually Matters', category: 'Car Care', serviceTopic: 'full-detail', keywords: ['detailing before road trip', 'pre road trip car detail', 'road trip car care Florida', 'car detail road trip prep', 'pre-trip detailing'] },
  { slug: 'motorcycle-detailing-pasco-county', title: 'Motorcycle Detailing in Pasco County: What\'s Different From Car Detail', category: 'Local', serviceTopic: 'general', keywords: ['motorcycle detailing Pasco County', 'motorcycle detail Florida', 'bike detail Pasco', 'motorcycle cleaning Florida', 'motorcycle paint care Florida'] },
  { slug: 'engine-bay-cleaning-worth-it', title: 'Engine Bay Cleaning: What It Involves and Whether It\'s Worth It', category: 'Car Care', serviceTopic: 'full-detail', keywords: ['engine bay cleaning worth it', 'engine bay detail', 'clean engine bay car', 'engine bay detailing Florida', 'under hood cleaning'] },
  { slug: 'detailing-after-hurricane-florida', title: 'Detailing After a Hurricane: What Floodwater and Storm Debris Does to Paint', category: 'Car Care', serviceTopic: 'exterior-detail', keywords: ['detailing after hurricane', 'hurricane car damage paint', 'storm damage car detail', 'floodwater car paint', 'hurricane car care Florida'] },
  { slug: 'odessa-cheval-mobile-detailing', title: 'Mobile Detailing in Cheval and Keystone (Odessa, FL)', category: 'Local', serviceTopic: 'general', keywords: ['mobile detailing Cheval', 'car detailing Odessa FL', 'Cheval auto detailing', 'detailing Keystone Odessa', 'mobile detailing 33556'] },
  { slug: 'cory-lake-isles-mobile-detailing', title: 'Mobile Detailing in Cory Lake Isles (New Tampa, FL)', category: 'Local', serviceTopic: 'general', keywords: ['mobile detailing Cory Lake Isles', 'car detailing New Tampa', 'Cory Lake Isles auto detailing', 'mobile detailing 33647', 'New Tampa mobile detail'] },
  { slug: 'meadow-pointe-mobile-detailing', title: 'Mobile Detailing in Meadow Pointe (Wesley Chapel, FL)', category: 'Local', serviceTopic: 'general', keywords: ['mobile detailing Meadow Pointe', 'car detailing Wesley Chapel FL', 'Meadow Pointe auto detailing', 'detailing 33543 Wesley Chapel', 'mobile car care Meadow Pointe'] },
  { slug: 'how-detailing-protects-resale-value', title: 'How Regular Detailing Protects Your Vehicle\'s Resale Value', category: 'Car Care', serviceTopic: 'general', keywords: ['detailing resale value', 'car detail protect resale', 'regular detailing vehicle value', 'car care resale Florida', 'auto detail resale value'] },
  { slug: 'carnauba-wax-vs-synthetic-sealant', title: 'Carnauba Wax vs. Synthetic Sealant: A Practical Comparison for Florida', category: 'Car Care', serviceTopic: 'exterior-detail', keywords: ['carnauba wax vs synthetic sealant', 'wax vs sealant Florida', 'carnauba wax Florida', 'best car wax Florida', 'synthetic sealant car'] },
  { slug: 'fleet-detailing-real-estate-vehicles', title: 'Fleet Detailing for Real Estate Agents: First Impressions Start at the Curb', category: 'Fleet Tips', serviceTopic: 'fleet', keywords: ['fleet detailing real estate', 'real estate agent car detailing', 'real estate vehicle care', 'agent car detail Florida', 'professional vehicle real estate'] },
  { slug: 'epperson-ranch-mobile-detailing', title: 'Mobile Detailing in Epperson Ranch (Wesley Chapel, FL)', category: 'Local', serviceTopic: 'general', keywords: ['mobile detailing Epperson Ranch', 'car detailing Wesley Chapel', 'Epperson Ranch auto detailing', 'detailing 33545', 'Wesley Chapel mobile detail'] },
  { slug: 'bexley-land-o-lakes-mobile-detailing', title: 'Mobile Detailing in Bexley (Land O\' Lakes, FL)', category: 'Local', serviceTopic: 'general', keywords: ['mobile detailing Bexley', 'car detailing Land O Lakes', 'Bexley auto detailing', 'detailing 34638 Land O Lakes', 'Bexley mobile car care'] },
];

const fieldTopics = [
  { slug: 'brake-fluid-stain-paint', title: 'Brake Fluid on Paint — How to Remove It Before the Clear Coat Lifts', category: 'paint', severity: 'moderate', keywords: ['brake fluid paint damage', 'brake fluid on car paint', 'brake fluid clear coat', 'remove brake fluid car paint', 'brake fluid spill car'] },
  { slug: 'overspray-removal-technique', title: 'Overspray Removal from Car Paint — Clay Bar vs Abrasive Method', category: 'contamination', severity: 'advanced', keywords: ['overspray removal car paint', 'paint overspray removal', 'overspray car', 'remove overspray from paint', 'automotive overspray'] },
  { slug: 'door-jamb-cleaning-guide', title: 'Door Jamb Cleaning — The Detail Area Most People Ignore', category: 'general', severity: 'quick-fix', keywords: ['door jamb cleaning car', 'car door jamb detail', 'door jamb car care', 'cleaning car door frame', 'door jamb detailing'] },
  { slug: 'coating-toppers-spray-maintenance', title: 'Ceramic Coating Toppers — Spray Sealants for Coated Vehicles', category: 'coating', severity: 'quick-fix', keywords: ['ceramic coating topper spray', 'coating topper maintenance', 'spray sealant coated car', 'ceramic maintenance spray', 'ceramic topper'] },
  { slug: 'glass-coating-application', title: 'Glass Coating Application — Hydrophobic Treatment for Windshields and Side Windows', category: 'glass', severity: 'moderate', keywords: ['glass coating application', 'hydrophobic glass coating', 'windshield coating', 'glass sealant car', 'rain repellent glass coating'] },
  { slug: 'engine-bay-safe-cleaning', title: 'Engine Bay Cleaning — How to Degrease Without Damaging Sensors or Wiring', category: 'general', severity: 'advanced', keywords: ['engine bay cleaning safe', 'how to clean engine bay', 'engine degreaser safe', 'engine bay detail safe', 'clean under hood safely'] },
  { slug: 'interior-plastics-restore', title: 'Interior Plastic Restoration — Faded Panels, Scratched Trim, Stained Surfaces', category: 'interior', severity: 'moderate', keywords: ['interior plastic restoration', 'faded interior plastic car', 'car interior trim restoration', 'scratched interior plastic', 'restore car interior plastic'] },
];

function slugToFilename(slug) {
  return `${slug}.mdx`;
}

async function generateBlogPost(topic) {
  const prompt = `Write a complete blog post for BayShine Detailing (bayshine.net), a mobile auto detailing business serving Pasco County and North Hillsborough, FL.

Write the COMPLETE .mdx file including frontmatter.

CRITICAL SCHEMA — these are the ONLY valid values:
- category: must be exactly "${topic.category}" (do NOT change this)
- serviceTopic: must be exactly "${topic.serviceTopic}" (do NOT change this)

Required frontmatter format (use exactly these fields):
---
title: "${topic.title}"
description: "One clear sentence, under 160 characters."
pubDate: ${TODAY}
category: "${topic.category}"
readTime: 6
serviceTopic: "${topic.serviceTopic}"
draft: false
keywords: ${JSON.stringify(topic.keywords)}
---

CONTENT STANDARDS:
- 700–900 words minimum — real prose paragraphs, not bullet summaries
- Direct, professional voice. No "we'd love to", "feel free to", "passionate about"
- Florida climate signals: UV index 10+, humidity, heat, Pasco County, North Hillsborough, Tampa Bay area
- No em-dashes — use commas or en-dash ( – ) instead
- No invented statistics or fake reviews
- Brand: "BayShine" — capital B, capital S, no space
- Team voice: "we", "our team" — never "I" or "Constantine"

Write the full article now, starting with the frontmatter block.`;

  const response = await client.messages.create({
    model: 'claude-opus-4-7',
    max_tokens: 2000,
    messages: [{ role: 'user', content: prompt }],
  });

  return response.content[0].text;
}

async function generateFieldGuide(topic) {
  const prompt = `Write a complete field guide scenario article for BayShine Detailing (bayshine.net).

Write the COMPLETE .mdx file including frontmatter.

CRITICAL SCHEMA — these are the ONLY valid values:
- category: must be exactly "${topic.category}" (options: paint, interior, glass, wheels, trim, coating, contamination, correction, tools, general)
- severity: must be exactly "${topic.severity}" (options: quick-fix, moderate, advanced)

Required frontmatter format:
---
title: "${topic.title}"
description: "One clear sentence, under 160 characters."
pubDate: ${TODAY}
category: "${topic.category}"
severity: "${topic.severity}"
readTime: 7
draft: false
keywords: ${JSON.stringify(topic.keywords)}
---

CONTENT STANDARDS:
- 700–1000 words minimum — real instructional prose, not bullet summaries
- Florida climate signals throughout: UV index 10+, humidity, heat, Pasco County, North Hillsborough, Tampa Bay area
- Direct, professional voice. No soft marketing language
- No em-dashes — use commas or en-dash ( – ) instead
- Brand: "BayShine" — capital B, capital S, no space

Write the full article now, starting with the frontmatter block.`;

  const response = await client.messages.create({
    model: 'claude-opus-4-7',
    max_tokens: 2000,
    messages: [{ role: 'user', content: prompt }],
  });

  return response.content[0].text;
}

async function main() {
  const existingBlog = existingSlugs(BLOG_DIR);
  const existingField = existingSlugs(FIELD_DIR);

  const blogQueue = blogTopics.filter(t => !existingBlog.has(t.slug));
  const fieldQueue = fieldTopics.filter(t => !existingField.has(t.slug));

  const blogToGenerate = blogQueue.slice(0, BATCH_SIZE);
  const fieldToGenerate = fieldQueue.slice(0, Math.max(2, Math.floor(BATCH_SIZE / 2)));

  console.log(`Generating ${blogToGenerate.length} blog posts and ${fieldToGenerate.length} field guide articles...`);

  let generated = 0;

  for (const topic of blogToGenerate) {
    try {
      console.log(`Blog: ${topic.slug}`);
      const content = await generateBlogPost(topic);
      const path = join(BLOG_DIR, slugToFilename(topic.slug));
      writeFileSync(path, content, 'utf8');
      generated++;
      // Small delay to avoid rate limiting
      await new Promise(r => setTimeout(r, 1000));
    } catch (err) {
      console.error(`Failed blog ${topic.slug}:`, err.message);
    }
  }

  for (const topic of fieldToGenerate) {
    try {
      console.log(`Field guide: ${topic.slug}`);
      const content = await generateFieldGuide(topic);
      const path = join(FIELD_DIR, slugToFilename(topic.slug));
      writeFileSync(path, content, 'utf8');
      generated++;
      await new Promise(r => setTimeout(r, 1000));
    } catch (err) {
      console.error(`Failed field guide ${topic.slug}:`, err.message);
    }
  }

  console.log(`Done. Generated ${generated} files.`);
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
