// Field Guide DB helpers.
// getCategories: fetches from DB if available, falls back to CATEGORY_SEED.
// insertQuery: writes a captured search query; no-ops when DB is not configured.

import { getDb } from './db';
import { Resend } from 'resend';

export interface CategoryRow {
  slug: string;
  name: string;
  scope_preview: string;
  published_count: number;
  total_planned: number;
}

export const CATEGORY_SEED: CategoryRow[] = [
  { slug: 'paint',         name: 'Paint',             scope_preview: 'Swirls, scratches, oxidation, clear coat failure, staining',                total_planned: 52, published_count: 0 },
  { slug: 'interior',      name: 'Interior',           scope_preview: 'Stains, odors, leather damage, fabric issues, hard surface marks',          total_planned: 44, published_count: 0 },
  { slug: 'glass',         name: 'Glass',              scope_preview: 'Hazing, water spots, scratches, wiper trails, tinting haze',                 total_planned: 24, published_count: 0 },
  { slug: 'wheels',        name: 'Wheels',             scope_preview: 'Brake dust, corrosion, finish damage, chrome pitting',                       total_planned: 28, published_count: 0 },
  { slug: 'trim',          name: 'Trim & Plastic',     scope_preview: 'Fading, staining, rubber degradation, plastic restoration',                  total_planned: 22, published_count: 0 },
  { slug: 'coating',       name: 'Coating & Sealant',  scope_preview: 'Ceramic failure, sealant lift, bonding problems, water behavior changes',    total_planned: 30, published_count: 0 },
  { slug: 'contamination', name: 'Contamination',      scope_preview: 'Iron fallout, tar, industrial deposits, overspray, rail dust',               total_planned: 20, published_count: 0 },
  { slug: 'correction',    name: 'Correction',         scope_preview: 'DA technique, compound selection, burn-through, finishing haze',             total_planned: 34, published_count: 0 },
];

export async function getCategories(): Promise<CategoryRow[]> {
  const sql = getDb();
  if (!sql) return CATEGORY_SEED;

  try {
    const rows = await sql`
      SELECT slug, name, scope_preview, published_count, total_planned
      FROM categories
      ORDER BY display_order ASC
    `;
    return rows as CategoryRow[];
  } catch (err) {
    console.error('[field-guide-db] getCategories failed, using seed:', err);
    return CATEGORY_SEED;
  }
}

export interface ScenarioDetail {
  slug: string;
  title: string;
  problem: string;
  synopsis: string;
  severity: 'quick-fix' | 'moderate' | 'advanced';
  category_slug: string;
  category_name: string;
  published_at: string | null;
}

export async function getScenario(slug: string): Promise<ScenarioDetail | null> {
  const sql = getDb();
  if (!sql) return null;
  try {
    const rows = await sql`
      SELECT s.slug, s.title, s.problem, s.synopsis, s.severity,
             s.published_at::text AS published_at,
             c.slug AS category_slug, c.name AS category_name
      FROM scenarios s
      JOIN categories c ON c.id = s.category_id
      WHERE s.slug = ${slug}
        AND s.published = true
        AND s.tier = 'public'
      LIMIT 1
    ` as ScenarioDetail[];
    return rows[0] ?? null;
  } catch (err) {
    console.error('[field-guide-db] getScenario failed:', err);
    return null;
  }
}

export async function getRelatedScenarios(currentSlug: string, categorySlug: string): Promise<ScenarioDetail[]> {
  const sql = getDb();
  if (!sql) return [];
  try {
    const rows = await sql`
      SELECT s.slug, s.title, s.severity,
             c.slug AS category_slug, c.name AS category_name,
             '' AS problem, '' AS synopsis, null AS published_at
      FROM scenarios s
      JOIN categories c ON c.id = s.category_id
      WHERE c.slug = ${categorySlug}
        AND s.slug != ${currentSlug}
        AND s.published = true
        AND s.tier = 'public'
      LIMIT 3
    ` as ScenarioDetail[];
    return rows;
  } catch (err) {
    console.error('[field-guide-db] getRelatedScenarios failed:', err);
    return [];
  }
}

export async function insertQuery(opts: {
  query_text: string;
  email?: string;
  ip_hash: string;
  referrer: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
}): Promise<void> {
  const sql = getDb();

  if (!sql) {
    // No DB: fall back to Resend notification
    console.log('[field-guide-db] No DATABASE_URL — falling back to Resend');
    const resendKey = import.meta.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        const resend = new Resend(resendKey);
        await resend.emails.send({
          from: 'BayShine Field Guide <noreply@bayshine.net>',
          to: 'constantpass@gmail.com',
          subject: `Field Guide Query: ${opts.query_text}`,
          text: [
            `Query: ${opts.query_text}`,
            `Email: ${opts.email ?? '(none)'}`,
            `Referrer: ${opts.referrer ?? '—'}`,
            `UTM: source=${opts.utm_source} medium=${opts.utm_medium} campaign=${opts.utm_campaign}`,
          ].join('\n'),
        });
      } catch (err) {
        console.error('[field-guide-db] Resend fallback failed:', err);
      }
    }
    return;
  }

  try {
    await sql`
      INSERT INTO field_guide_queries
        (query_text, email, ip_hash, referrer, utm_source, utm_medium, utm_campaign)
      VALUES
        (${opts.query_text}, ${opts.email ?? null}, ${opts.ip_hash},
         ${opts.referrer}, ${opts.utm_source}, ${opts.utm_medium}, ${opts.utm_campaign})
    `;
  } catch (err) {
    console.error('[field-guide-db] insertQuery failed:', err);
  }
}
