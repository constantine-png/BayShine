-- Migration 002: full-text search + BMW M340i sample scenarios
-- Adds synopsis + generated tsvector column to scenarios, seeds 8 published scenarios.

ALTER TABLE scenarios ADD COLUMN IF NOT EXISTS synopsis TEXT;

-- Generated column: auto-updates whenever title, problem, or synopsis changes.
-- Requires Postgres 12+. Neon runs 15+, so this is safe.
ALTER TABLE scenarios ADD COLUMN IF NOT EXISTS search_vector TSVECTOR
  GENERATED ALWAYS AS (
    setweight(to_tsvector('english', COALESCE(title, '')), 'A') ||
    setweight(to_tsvector('english', COALESCE(problem, '')), 'B') ||
    setweight(to_tsvector('english', COALESCE(synopsis, '')), 'C')
  ) STORED;

CREATE INDEX IF NOT EXISTS idx_scenarios_search ON scenarios USING GIN(search_vector);

-- ── 8 BMW M340i scenarios, one per category ──────────────────────────────────

INSERT INTO scenarios (slug, title, problem, synopsis, category_id, tier, severity, published, published_at)
VALUES (
  'bmw-m340i-portimao-blue-water-spots',
  'Portimao Blue: mineral etching after wash in direct sun',
  'After washing the M340i outside on a warm morning, water spots appeared that won''t lift with detail spray. Under raking light there are shallow rings etching into the metallic clear coat.',
  'Hard water minerals bond to clear coat in heat. Acid-based water spot remover dissolves the deposit chemically. If the etch has penetrated the clear coat surface, light correction follows before sealant reapplication. Do not compound dry — always work with lubrication on metallic finishes.',
  (SELECT id FROM categories WHERE slug = 'paint'),
  'public', 'moderate', true, NOW()
);

INSERT INTO scenarios (slug, title, problem, synopsis, category_id, tier, severity, published, published_at)
VALUES (
  'bmw-m340i-vernasca-leather-bolster-cracking',
  'Vernasca leather: bolster cracking at M Sport seat seam',
  'The driver seat bolster is cracking along the seam line. The Vernasca leather has stiffened and darkened in the crease. Standard leather cleaner has not helped and the crack is widening.',
  'Leather cracks when oils migrate out and the surface dries under UV and friction before conditioner is applied. Steam opens the pores. A flexible leather filler fills the crack without stiffening further. Deep-penetrating conditioner follows twice — once immediately, once after 24 hours. The darkened crease usually lifts with a neutral leather cleaner before conditioning.',
  (SELECT id FROM categories WHERE slug = 'interior'),
  'public', 'moderate', true, NOW()
);

INSERT INTO scenarios (slug, title, problem, synopsis, category_id, tier, severity, published, published_at)
VALUES (
  'bmw-m340i-heated-windshield-wiper-haze',
  'Heated windshield: wiper trail smear visible at night',
  'After rain, the wipers leave a smeared film on the M340i''s heated windshield that does not clear on its own. The haze scatters oncoming headlights and reduces visibility at night.',
  'Silicone from wiper blades combines with road film and bonds to heated glass as a hydrophobic residue. Standard glass cleaner will not dissolve it. An IPA wipe removes the silicone layer. Follow with a non-silicone glass polish on a foam pad, then a hydrophilic glass coating to improve wiper contact. Replace wiper blades if they are leaving consistent streaks.',
  (SELECT id FROM categories WHERE slug = 'glass'),
  'public', 'quick-fix', true, NOW()
);

INSERT INTO scenarios (slug, title, problem, synopsis, category_id, tier, severity, published, published_at)
VALUES (
  'bmw-m340i-m-sport-wheel-brake-dust-pitting',
  'M Sport 19-inch wheels: brake dust baked on, pitting starting',
  'After one month without wheel cleaning, the M Sport wheels have a reddish-brown coating that does not lift with regular wheel cleaner. Close inspection shows the beginning of surface pitting on the wheel face.',
  'BMW M Sport brakes produce high-iron ferrous dust that etches aluminum at wheel temperatures. An iron-reactive wheel cleaner (pH neutral, turns purple on contact) dissolves the contamination without stripping the wheel finish. Once pitting has started, a light polish with an aluminum-safe compound removes the shallow etch. Ceramic wheel coating prevents recurrence at high brake temperatures.',
  (SELECT id FROM categories WHERE slug = 'wheels'),
  'public', 'advanced', true, NOW()
);

INSERT INTO scenarios (slug, title, problem, synopsis, category_id, tier, severity, published, published_at)
VALUES (
  'bmw-m340i-piano-black-idrive-micro-scratches',
  'Piano black iDrive surround: micro-scratch fog from routine cleaning',
  'The piano black trim surrounding the iDrive screen on the M340i is covered in a web of hairline scratches that catch every interior light source. The more it gets cleaned, the worse it looks.',
  'Piano black surfaces scratch at contact — microfiber and most interior cleaners are too abrasive. Correction requires a dedicated plastic polish on a soft foam applicator, working in straight lines. A thin PTFE or ceramic nano-coating prevents recurrence. Future cleaning should use only a damp microsuede cloth with no pressure.',
  (SELECT id FROM categories WHERE slug = 'trim'),
  'public', 'moderate', true, NOW()
);

INSERT INTO scenarios (slug, title, problem, synopsis, category_id, tier, severity, published, published_at)
VALUES (
  'bmw-m340i-ceramic-coating-hydrophobics-failing',
  'Alpine White ceramic coating: water no longer beading after 8 months',
  'The ceramic coating applied last year is not sheeting or beading correctly. Water sits on the hood of the M340i instead of rolling off. The effect is most pronounced after rain.',
  'Ceramic hydrophobics fail due to surface contamination — industrial fallout, silicone overspray, or airborne oils — rather than coating degradation. Iron decontamination followed by a panel wipe with IPA typically restores behavior. If the coating tests as intact with a water bead test on a freshly decontaminated section, a maintenance boost layer reactivates the surface. If coating is fully consumed, prep and reapply.',
  (SELECT id FROM categories WHERE slug = 'coating'),
  'public', 'moderate', true, NOW()
);

INSERT INTO scenarios (slug, title, problem, synopsis, category_id, tier, severity, published, published_at)
VALUES (
  'bmw-m340i-iron-fallout-front-bumper',
  'Front bumper and hood: orange fallout dots after highway driving',
  'After a long highway drive, small orange rust-colored spots appeared embedded in the paint on the front bumper and hood of the M340i. Standard washing does not remove them.',
  'Rail dust and airborne brake fallout embed in warm paint at highway speed. Iron decontamination spray reacts with the ferrous contamination and dissolves it chemically — no mechanical action needed at this stage. Follow immediately with a clay bar pass to remove residue, then rinse thoroughly before applying sealant. Apply a polymer sealant or wax before the next long drive to give fallout a sacrificial layer to attach to instead of the clear coat.',
  (SELECT id FROM categories WHERE slug = 'contamination'),
  'public', 'moderate', true, NOW()
);

INSERT INTO scenarios (slug, title, problem, synopsis, category_id, tier, severity, published, published_at)
VALUES (
  'bmw-m340i-sophisto-grey-buffer-trails',
  'Sophisto Grey: buffer trails after one-step DA polish attempt',
  'After attempting a one-step polish on the Sophisto Grey M340i with a DA polisher, circular buffer trails appeared under direct light that were not visible before the correction attempt.',
  'Buffer trails on grey metallic paint come from incorrect pad-to-compound pairing or excessive machine speed on a section that needed hand work. The haze sits in the clear coat surface and requires stepping back to a heavier cut at lower speed to level it, then refining with a finishing polish. Sophisto Grey shows haze differently under direct vs. indirect light — always inspect under both before declaring a section corrected.',
  (SELECT id FROM categories WHERE slug = 'correction'),
  'public', 'advanced', true, NOW()
);

-- Update published_count for each category that received a scenario
UPDATE categories SET published_count = published_count + 1 WHERE slug = 'paint';
UPDATE categories SET published_count = published_count + 1 WHERE slug = 'interior';
UPDATE categories SET published_count = published_count + 1 WHERE slug = 'glass';
UPDATE categories SET published_count = published_count + 1 WHERE slug = 'wheels';
UPDATE categories SET published_count = published_count + 1 WHERE slug = 'trim';
UPDATE categories SET published_count = published_count + 1 WHERE slug = 'coating';
UPDATE categories SET published_count = published_count + 1 WHERE slug = 'contamination';
UPDATE categories SET published_count = published_count + 1 WHERE slug = 'correction';
