-- Field Guide schema
-- Run once against your Neon database. Connection string is in DATABASE_URL env var.

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS categories (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug            TEXT UNIQUE NOT NULL,
  name            TEXT NOT NULL,
  scope_preview   TEXT NOT NULL,
  published_count INTEGER NOT NULL DEFAULT 0,
  total_planned   INTEGER NOT NULL,
  display_order   INTEGER NOT NULL DEFAULT 0,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS scenarios (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug             TEXT UNIQUE NOT NULL,
  title            TEXT NOT NULL,
  problem          TEXT NOT NULL,
  category_id      UUID REFERENCES categories(id),
  tier             TEXT NOT NULL DEFAULT 'public' CHECK (tier IN ('public', 'pro')),
  pro_extension_id UUID,       -- FK to future pro_scenarios table — nullable, intentionally deferred
  severity         TEXT CHECK (severity IN ('quick-fix', 'moderate', 'advanced')),
  published        BOOLEAN NOT NULL DEFAULT false,
  published_at     TIMESTAMPTZ,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS field_guide_queries (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  query_text   TEXT NOT NULL,
  email        TEXT,
  ip_hash      TEXT NOT NULL,
  referrer     TEXT,
  utm_source   TEXT,
  utm_medium   TEXT,
  utm_campaign TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Seed categories
INSERT INTO categories (slug, name, scope_preview, total_planned, display_order)
VALUES
  ('paint',         'Paint',             'Swirls, scratches, oxidation, clear coat failure, staining',                   52, 1),
  ('interior',      'Interior',          'Stains, odors, leather damage, fabric issues, hard surface marks',             44, 2),
  ('glass',         'Glass',             'Hazing, water spots, scratches, wiper trails, tinting haze',                   24, 3),
  ('wheels',        'Wheels',            'Brake dust, corrosion, finish damage, chrome pitting',                         28, 4),
  ('trim',          'Trim & Plastic',    'Fading, staining, rubber degradation, plastic restoration',                    22, 5),
  ('coating',       'Coating & Sealant', 'Ceramic failure, sealant lift, bonding problems, water behavior changes',      30, 6),
  ('contamination', 'Contamination',     'Iron fallout, tar, industrial deposits, overspray, rail dust',                 20, 7),
  ('correction',    'Correction',        'DA technique, compound selection, burn-through, finishing haze',               34, 8)
ON CONFLICT (slug) DO NOTHING;

-- Index for analytics queries
CREATE INDEX IF NOT EXISTS idx_fgq_created ON field_guide_queries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_fgq_ip_hash ON field_guide_queries(ip_hash);
