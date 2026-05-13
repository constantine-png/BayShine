-- Migration 003: affiliate products + scenario assignments
-- Creates products and scenario_products tables, seeds 7 Luxury Microfiber products,
-- and assigns them to the 8 BMW M340i scenarios.

CREATE TABLE IF NOT EXISTS products (
  id            SERIAL PRIMARY KEY,
  slug          TEXT UNIQUE NOT NULL,
  name          TEXT NOT NULL,
  brand         TEXT NOT NULL DEFAULT 'Luxury Microfiber',
  gsm           INT,
  size_label    TEXT,
  price_cents   INT,
  price_label   TEXT,
  description   TEXT,
  task_tags     TEXT[] DEFAULT '{}',
  affiliate_url TEXT NOT NULL,
  image_url     TEXT,
  click_count   INT NOT NULL DEFAULT 0,
  active        BOOLEAN NOT NULL DEFAULT true,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS scenario_products (
  scenario_slug TEXT NOT NULL,
  product_id    INT  NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  display_order INT  NOT NULL DEFAULT 0,
  note          TEXT,
  PRIMARY KEY (scenario_slug, product_id)
);

CREATE INDEX IF NOT EXISTS idx_scenario_products_slug ON scenario_products(scenario_slug);

-- ── Product seed: Luxury Microfiber affiliate products ────────────────────────

INSERT INTO products (slug, name, gsm, size_label, price_cents, price_label, description, task_tags, affiliate_url, image_url)
VALUES
  ('sucker',
   'Sucker',
   1400, '34" × 28"', 2800, '$28',
   'The flagship drying towel. 1400 GSM dual-sided twisted-loop edgeless design drinks water without dragging or streaking. Large enough to dry a full-size sedan in two passes.',
   ARRAY['drying'],
   'https://luxurymicrofiberstore.com/products/sucker?ref=kveivvis',
   'https://luxurymicrofiberstore.com/cdn/shop/products/L3A6423New_1024x1024.jpg?v=1597001190'),

  ('glass-genie',
   'Glass Genie',
   350, '16" × 16"', 450, '$4.50',
   'Silver-infused 350 GSM microfiber built for automotive glass. Streak-free on windshields, mirrors, and interior screens using water alone.',
   ARRAY['glass'],
   'https://luxurymicrofiberstore.com/products/glass-genie?ref=kveivvis',
   'https://luxurymicrofiberstore.com/cdn/shop/products/L3A6404New_1024x1024.jpg?v=1596813200'),

  ('green-monster',
   'Green Monster',
   500, '16" × 16" · 2-pack', 700, '$7',
   '500 GSM plush microfiber designed for leather, fabric, and delicate surfaces including headliners. Use one towel for product application, the second for buffing.',
   ARRAY['interior', 'leather', 'trim'],
   'https://luxurymicrofiberstore.com/products/green-monster?ref=kveivvis',
   'https://luxurymicrofiberstore.com/cdn/shop/products/L3A6441New_1024x1024.jpg?v=1596812760'),

  ('the-roman',
   'The Roman',
   300, '16" × 24"', 500, '$5',
   'Low-nap waffle weave at 300 GSM — the correct tool for removing polish residue, buffing off sealant, and IPA panel prep before coating application.',
   ARRAY['polish', 'correction', 'coating-prep', 'glass'],
   'https://luxurymicrofiberstore.com/products/the-roman?ref=kveivvis',
   'https://luxurymicrofiberstore.com/cdn/shop/products/L3A6412New_1024x1024.jpg?v=1597001508'),

  ('big-daddy-3pack',
   'Big Daddy (3-pack)',
   900, '16" × 16" · 3-pack', 2400, '$24',
   '900 GSM plush dual pile for applying ceramic coatings, spray sealants, and wax. Do not reuse between coating sessions — the 3-pack covers a full vehicle application.',
   ARRAY['coating', 'sealant', 'wax'],
   'https://luxurymicrofiberstore.com/products/big-daddy?ref=kveivvis',
   'https://luxurymicrofiberstore.com/cdn/shop/files/IMG_8281_1024x1024.jpg?v=1715636138'),

  ('the-mule-10pack',
   'The Mule (10-pack)',
   350, '16" × 16" · 10-pack', 2200, '$22',
   'Utility workhorse at $2.20 per towel. Designate separate towels for wheel cleaning, iron remover wipe-off, and decon work. Retire after contact with brake dust or chemical decon.',
   ARRAY['wheels', 'decon', 'utility'],
   'https://luxurymicrofiberstore.com/products/the-mule?ref=kveivvis',
   'https://luxurymicrofiberstore.com/cdn/shop/products/L3A6435New_1024x1024.jpg?v=1597001345'),

  ('starter-pack',
   'Starter Pack',
   NULL, '6-towel kit', 3000, '$30',
   'Six towels covering a complete wash day: Big Daddy, 2 Yellow Jacks, The Belgian, The Roman, and Glass Genie. Includes step-by-step use instructions. The right first buy for BMW owners new to quality microfiber.',
   ARRAY['starter', 'bundle'],
   'https://luxurymicrofiberstore.com/products/starter-pack?ref=kveivvis',
   'https://luxurymicrofiberstore.com/cdn/shop/files/IMG_8279_1024x1024.jpg?v=1715635849')

ON CONFLICT (slug) DO NOTHING;

-- ── Scenario → product assignments ────────────────────────────────────────────

INSERT INTO scenario_products (scenario_slug, product_id, display_order, note)
SELECT 'bmw-m340i-portimao-blue-water-spots', id, 1,
  'Use after acid treatment to dry without redepositing minerals on the clear coat'
FROM products WHERE slug = 'sucker'
ON CONFLICT DO NOTHING;

INSERT INTO scenario_products (scenario_slug, product_id, display_order, note)
SELECT 'bmw-m340i-vernasca-leather-bolster-cracking', id, 1,
  'One towel for conditioner application, one for buffing — keep them dedicated to interior use'
FROM products WHERE slug = 'green-monster'
ON CONFLICT DO NOTHING;

INSERT INTO scenario_products (scenario_slug, product_id, display_order, note)
SELECT 'bmw-m340i-heated-windshield-wiper-haze', id, 1,
  'Silver-infused, streak-free on heated glass and ceramic-coated windshields'
FROM products WHERE slug = 'glass-genie'
ON CONFLICT DO NOTHING;

INSERT INTO scenario_products (scenario_slug, product_id, display_order, note)
SELECT 'bmw-m340i-heated-windshield-wiper-haze', id, 2,
  'Second-pass residue removal after glass polish — waffle weave grabs without leaving lint'
FROM products WHERE slug = 'the-roman'
ON CONFLICT DO NOTHING;

INSERT INTO scenario_products (scenario_slug, product_id, display_order, note)
SELECT 'bmw-m340i-m-sport-wheel-brake-dust-pitting', id, 1,
  'Dedicate 2–3 towels per session to iron remover and wheel work — never cross-contaminate with paint towels'
FROM products WHERE slug = 'the-mule-10pack'
ON CONFLICT DO NOTHING;

INSERT INTO scenario_products (scenario_slug, product_id, display_order, note)
SELECT 'bmw-m340i-piano-black-idrive-micro-scratches', id, 1,
  'Only use a freshly laundered cloth on piano black — no pressure, straight line passes only'
FROM products WHERE slug = 'green-monster'
ON CONFLICT DO NOTHING;

INSERT INTO scenario_products (scenario_slug, product_id, display_order, note)
SELECT 'bmw-m340i-ceramic-coating-hydrophobics-failing', id, 1,
  'IPA panel wipe before booster application — removes surface contamination that prevents bonding'
FROM products WHERE slug = 'the-roman'
ON CONFLICT DO NOTHING;

INSERT INTO scenario_products (scenario_slug, product_id, display_order, note)
SELECT 'bmw-m340i-ceramic-coating-hydrophobics-failing', id, 2,
  'For applying ceramic maintenance booster — use one fresh towel per panel, do not reuse'
FROM products WHERE slug = 'big-daddy-3pack'
ON CONFLICT DO NOTHING;

INSERT INTO scenario_products (scenario_slug, product_id, display_order, note)
SELECT 'bmw-m340i-iron-fallout-front-bumper', id, 1,
  'Wipe off iron remover chemical and decon rinse — retire after each decon session'
FROM products WHERE slug = 'the-mule-10pack'
ON CONFLICT DO NOTHING;

INSERT INTO scenario_products (scenario_slug, product_id, display_order, note)
SELECT 'bmw-m340i-iron-fallout-front-bumper', id, 2,
  'Final drying pass after decon rinse — the Sucker absorbs without dragging contamination back across the clear coat'
FROM products WHERE slug = 'sucker'
ON CONFLICT DO NOTHING;

INSERT INTO scenario_products (scenario_slug, product_id, display_order, note)
SELECT 'bmw-m340i-sophisto-grey-buffer-trails', id, 1,
  'For removing compound and polish residue between correction passes on grey metallic'
FROM products WHERE slug = 'the-roman'
ON CONFLICT DO NOTHING;

INSERT INTO scenario_products (scenario_slug, product_id, display_order, note)
SELECT 'bmw-m340i-sophisto-grey-buffer-trails', id, 2,
  'Final wax or sealant application after correction — use a fresh towel per section'
FROM products WHERE slug = 'big-daddy-3pack'
ON CONFLICT DO NOTHING;
