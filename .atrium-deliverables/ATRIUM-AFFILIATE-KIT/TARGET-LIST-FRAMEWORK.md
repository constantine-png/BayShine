# Target list framework

How the affiliate-recruiter-specialist builds the quarterly affiliate target list. Output: 20-50 qualified targets per quarter, segmented by audience type, ranked by expected ROI.

## Segments to recruit from

### Local-SEO bloggers and consultants

Audience profile: SMB owners and SEO consultants who serve local businesses.

Where to find them:

- Search Google for "local SEO tips" + recent date filter. Top 20 results are typically the active bloggers.
- Twitter/X search for "local SEO" + "newsletter" + posts within the last 90 days.
- LinkedIn search for "local SEO consultant" + posts within last 60 days.
- Active subreddits: r/LocalSEO, r/SEO. Top contributors who run their own publications.
- Newsletter directories: Substack, Beehiiv discover pages filtered by "Marketing" + "SEO" categories.

Target attributes:

- Audience: 1k-50k newsletter subscribers (sweet spot for affiliate conversion).
- Cadence: at least 1 publication per month.
- Content overlap: explicitly covers schema, structured data, local business SEO.
- Track record: has promoted similar products (paid tools, info products) without being purely promotional.

Expected conversion: 1-3% of sent outreach to acceptance; 0.5-2% sales conversion per affiliate's mentions to their audience.

### Indie hacker newsletters and communities

Audience profile: Bootstrappers, solo SaaS operators, productized service builders, agency principals.

Where to find them:

- IndieHackers active members with newsletter listings on their profiles.
- MicroAcquisitions, Bootstrapped Founder, IndieMakers (and equivalents) — these newsletters often cite each other; the citation graph reveals the network.
- Twitter/X "indie hacker" + "newsletter" + last 60 days.
- Substack discover filtered by "Tech" + "Entrepreneurship."
- Podcast hosts in the indie hacker space who run newsletters too.

Target attributes:

- Audience: 5k-100k subscribers (smaller niche than local SEO; higher per-sub LTV).
- Voice fit: audience is sophisticated; doesn't tolerate spammy affiliate placements.
- Content overlap: covers info products, productized services, or SaaS adjacent to AI search.

Expected conversion: 2-5% of sent outreach to acceptance; 0.3-1% per mention (audience is more skeptical but converts at higher value per buyer).

### Schema-org tutorial authors

Audience profile: Developers, technical SEOs, structured-data specialists.

Where to find them:

- YouTube SEO + schema markup channels with 5k+ subscribers and recent uploads.
- Medium and dev.to authors who've published schema markup tutorials in the last 12 months.
- LinkedIn posts on schema.org topics with high engagement.
- Schema.org community: people who answer questions on the schema.org GitHub, Stack Overflow's schema-org tag.

Target attributes:

- Audience: 5k-200k followers across video, blog, or social.
- Content overlap: directly tutorials on JSON-LD, schema markup implementation.
- Voice fit: technical, no-fluff register matches Atrium's voice.

Expected conversion: 5-10% acceptance (high alignment); 1-3% sales conversion per mention (their audience self-selects on technical relevance).

### Marketing agency principals

Audience profile: Agency owners running 5+ concurrent local service business clients.

Where to find them:

- LinkedIn search for "agency owner" + "local marketing" + "service business" in their profile.
- Marketing podcasts where agency owners appear as guests.
- Industry conferences (Pubcon, MozCon, BrightonSEO, Local Marketing Summit) speaker lists.
- Marketing-agency-listing directories (Clutch, UpCity, Agency Spotter).

Target attributes:

- Agency size: 5-50 employees (sweet spot — too small means not enough client volume, too large means in-house AI search team likely).
- Client mix: at least 50% local service businesses.
- Geography: any (white-label and affiliate work cross geography easily).

Expected conversion: 3-8% acceptance (high effective rate if the agency values supplemental revenue without service expansion). Per-affiliate sales potential is much higher than other segments because agencies have built-in client volume.

### YouTube SEO educators

Audience profile: SEO learners, marketers, in-house SEO teams.

Where to find them:

- YouTube search "AI search optimization" / "GEO" / "schema markup tutorial" — top 50 channels.
- TubeBuddy or similar: search channels with 10k-500k subs in SEO/marketing niches.
- Cross-references: which YouTube SEO educators have email newsletters too (multiplies the affiliate placement surfaces).

Target attributes:

- Subscriber count: 10k-500k (smaller end is more receptive to affiliate partnerships; larger end may have established sponsor programs that don't include affiliate).
- Upload cadence: at least 2 videos per month.
- Content overlap: at least one schema or AI search video published in last 12 months.

Expected conversion: 1-3% acceptance (lower because larger channels have established sponsor processes that prefer flat-fee over affiliate); per-acceptance value is very high (single video can drive 50-200 sales).

## Per-quarter list construction

Each quarter:

1. **Research budget:** 8-12 hours for the affiliate-recruiter-specialist to build the quarter's list.

2. **Output target:** 20-50 qualified targets, weighted across segments:
   - Local-SEO bloggers: 8-15 targets
   - Indie hacker newsletters: 3-8 targets
   - Schema-org tutorial authors: 3-5 targets
   - Marketing agency principals: 4-10 targets
   - YouTube SEO educators: 2-5 targets

3. **Per-target dossier (lightweight version):**
   - Name and primary publication.
   - Audience size (verified from public sources).
   - Content recency and topical fit.
   - Whether they've promoted competitive products before.
   - The specific recent post or video to reference in outreach.
   - Estimated outreach variant (AR1-AR4 from OUTREACH-TEMPLATES.md).

4. **Outreach cadence:** 5-10 sends per week. Pacing matters; affiliate outreach at high volume looks like spam.

5. **Tracking:** every send logged to `Atrium/library/decisions.jsonl` under `affiliate-recruiter-specialist` lineage.

## What disqualifies a target

- Audience is purely consumer (not operators or buyers of operator tools).
- Recent content has high promotional density (their audience is fatigued).
- Public statements expressing aversion to affiliate programs.
- Direct competitor in the AI search productized space (Atrium would not promote them; expect mutual decline).
- No recent activity (publication stopped 6+ months ago).
- Audience is sub-1k (too small for meaningful per-affiliate volume).

Borderline cases get a 6-month wait before reconsidering.

## What signals high-value targets

- Active newsletter or blog with explicit "I recommend..." sections in their content.
- History of long-running affiliate partnerships with other tools/products (shows the relationship pattern works).
- Audience demographics align with Atrium's buyer profile (US SMB operators, agency principals, technical SEO practitioners).
- Author's voice already aligns with Atrium's terse, evidence-led register (vs. hype-heavy register that would clash).

These targets are worth higher research investment per dossier (20-30 min instead of 10 min).

## Quarterly review

After the quarter's outreach cycle completes:

- Total outreach sent.
- Acceptance rate.
- Acceptance by segment (which segment converts best).
- Affiliate-attributed sales for affiliates who accepted in earlier quarters.
- Per-acceptance ROI (commission paid + customer LTV from referred buyers).

The data informs the NEXT quarter's segment weighting. If indie hacker newsletters convert at 5% acceptance with $200/affiliate LTV, weight more heavily into that segment next quarter. If YouTube SEO educators convert at 1% acceptance with $500/affiliate LTV, the absolute number of acceptances is small but per-acceptance value is high — keep targeting but at lower volume.

This is the same data discipline pattern as customer-facing decisions: real numbers govern.
