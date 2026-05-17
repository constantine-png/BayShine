#!/usr/bin/env node
/**
 * Validates frontmatter schema for all blog and field guide content.
 * Run before committing to catch invalid enum values that would break the Astro build.
 */

import { readdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BLOG_DIR = join(ROOT, 'src/content/blog');
const FIELD_DIR = join(ROOT, 'src/content/fieldGuideScenarios');

const BLOG_CATEGORY = new Set(['Car Care', 'Fleet Tips', 'Local']);
const BLOG_SERVICE_TOPIC = new Set(['full-detail', 'exterior-detail', 'ceramic-coating', 'recon', 'fleet', 'apartments', 'standing-detail', 'general']);
const FIELD_CATEGORY = new Set(['paint', 'interior', 'glass', 'wheels', 'trim', 'coating', 'contamination', 'correction', 'tools', 'general']);
const FIELD_SEVERITY = new Set(['quick-fix', 'moderate', 'advanced']);

function parseFrontmatter(rawContent) {
  // Normalize line endings so the regex works on both LF and CRLF files
  const content = rawContent.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  for (const line of match[1].split('\n')) {
    const [key, ...rest] = line.split(':');
    if (key && rest.length) {
      fm[key.trim()] = rest.join(':').trim().replace(/^["']|["']$/g, '');
    }
  }
  return fm;
}

let errors = 0;

function validateDir(dir, type) {
  let files;
  try {
    files = readdirSync(dir).filter(f => f.endsWith('.mdx') || f.endsWith('.md'));
  } catch {
    console.warn(`Directory not found: ${dir}`);
    return;
  }

  for (const file of files) {
    const content = readFileSync(join(dir, file), 'utf8');
    const fm = parseFrontmatter(content);

    if (type === 'blog') {
      if (fm.category && !BLOG_CATEGORY.has(fm.category)) {
        console.error(`INVALID blog category "${fm.category}" in ${file}`);
        console.error(`  Valid: ${[...BLOG_CATEGORY].join(' | ')}`);
        errors++;
      }
      if (fm.serviceTopic && !BLOG_SERVICE_TOPIC.has(fm.serviceTopic)) {
        console.error(`INVALID blog serviceTopic "${fm.serviceTopic}" in ${file}`);
        console.error(`  Valid: ${[...BLOG_SERVICE_TOPIC].join(' | ')}`);
        errors++;
      }
      if (!fm.readTime) {
        console.error(`MISSING required readTime in blog/${file}`);
        errors++;
      }
    }

    if (type === 'field') {
      if (fm.category && !FIELD_CATEGORY.has(fm.category)) {
        console.error(`INVALID field category "${fm.category}" in ${file}`);
        console.error(`  Valid: ${[...FIELD_CATEGORY].join(' | ')}`);
        errors++;
      }
      if (fm.severity && !FIELD_SEVERITY.has(fm.severity)) {
        console.error(`INVALID field severity "${fm.severity}" in ${file}`);
        console.error(`  Valid: ${[...FIELD_SEVERITY].join(' | ')}`);
        errors++;
      }
    }
  }
}

validateDir(BLOG_DIR, 'blog');
validateDir(FIELD_DIR, 'field');

if (errors > 0) {
  console.error(`\n${errors} schema error(s) found. Fix before deploying.`);
  process.exit(1);
} else {
  console.log(`All content schema valid (${readdirSync(BLOG_DIR).length} blog + ${readdirSync(FIELD_DIR).length} field guide files).`);
}
