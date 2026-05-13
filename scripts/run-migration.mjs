// Migration runner for @neondatabase/serverless.
// sql.unsafe() creates batch descriptors — it does NOT execute immediately.
// Use the tagged-template form by constructing a TemplateStringsArray manually.
import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';

const url = process.env.DATABASE_URL;
if (!url) { console.error('DATABASE_URL not set'); process.exit(1); }

const sql = neon(url);

// Execute a raw SQL string using the same HTTP transport as tagged templates.
function exec(stmt) {
  const strings = Object.assign([stmt], { raw: [stmt] });
  return sql(strings);
}

// Verify connection
const [{ db }] = await exec('SELECT current_database() AS db');
console.log(`Connected → ${db}`);

// Clean probe tables from earlier test run
try { await exec('DROP TABLE IF EXISTS _probe'); } catch {}
try { await exec('DROP TABLE IF EXISTS _probe2'); } catch {}

const file = process.argv[2] ?? 'migrations/001_field_guide_init.sql';
const raw = readFileSync(file, 'utf8');
console.log(`Running: ${file}`);

// Strip line comments, split on semicolons
const statements = raw
  .replace(/--[^\n]*/g, '')   // remove line comments
  .split(';')
  .map(s => s.trim())
  .filter(s => s.length > 5);

let ok = 0, failed = 0;
for (const stmt of statements) {
  const preview = stmt.slice(0, 72).replace(/\s+/g, ' ');
  try {
    await exec(stmt);
    console.log(`  ✓  ${preview}`);
    ok++;
  } catch (e) {
    if (/already exists/.test(e.message)) {
      console.log(`  ~  skip (exists): ${preview}`);
      ok++;
    } else {
      console.error(`  ✗  ${preview}`);
      console.error(`     ${e.message}`);
      failed++;
    }
  }
}

console.log(`\n${ok} ok · ${failed} failed`);
if (failed) process.exit(1);
