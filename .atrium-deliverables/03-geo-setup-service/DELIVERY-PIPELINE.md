# Delivery pipeline — GEO Setup engagement

10 business days from intake form completion to delivery. The
pipeline orchestrates the five discoverability specialists in a
fixed order, with one assembly-and-review pass at the end.

## Day-by-day plan

### Day 1 (intake)

- Confirm intake form is complete. If anything is missing, email the buyer immediately for the missing fields. The 10-day clock pauses until the form is complete.
- Create engagement directory: `Atrium/library/artifacts/services/geo-setup/engagements/<engagement-id>/`.
- Subdirectories: `intake/`, `01-schema/`, `02-architecture/`, `03-llms-txt/`, `04-linking/`, `05-citation-readiness/`, `06-probe/`, `final/`.
- Pull a baseline crawl of the buyer's site. Save to `intake/crawl-baseline.json`.
- Pull a baseline citation probe across the four engines for the buyer's queries. Save to `intake/probe-baseline.jsonl`.

### Day 2 (schema)

- Invoke **schema-specialist** with:
  - The buyer's vertical.
  - The crawl baseline.
  - The Atrium Schema Pack v1 vertical template as the starting point (then customized with the buyer's real data).
- Output: validated JSON-LD blocks for every page in scope. Saved to `01-schema/`.
- Pass: every block validates against schema.org spec and Google Rich Results Test (locally simulated).
- Failure mode: if validation fails, fix and re-run. Do not advance.

### Day 3 (site architecture)

- Invoke **site-architecture-specialist** with:
  - The crawl baseline.
  - The buyer's primary conversion goal.
  - The buyer's service radius and geography.
- Output:
  - Written architecture recommendation (saved to `02-architecture/recommendation.md`).
  - URL pattern diagram (Mermaid or ASCII, saved to `02-architecture/sitemap-diagram.md`).
  - Service-area page strategy if the buyer has multi-city operations.
- Pass: the recommendation is concrete and actionable, not generic SEO advice.

### Day 4 (llms.txt and AI-citation hints)

- Invoke **geo-ai-search-specialist** with:
  - The crawl baseline.
  - The schema output from Day 2.
  - The architecture recommendation from Day 3.
- Output:
  - `llms.txt` at root level (saved to `03-llms-txt/llms.txt`).
  - AI-citation hint files where applicable (saved to `03-llms-txt/hints/`).
  - A 1-page brief on what AI engines will now see about the business (saved to `03-llms-txt/ai-engine-view.md`).
- Pass: llms.txt is spec-compliant; the AI-engine view is concrete and verifiable.

### Day 5 (midpoint update to buyer)

- Compose a 1-paragraph update email to the buyer summarizing what's been done so far and what remains.
- Send via Resend (production) or directly from Constantine's address.
- No marketing voice. Direct. Factual. The voice gate from `archetypes/shared/resend.ts` applies.

### Day 6 (internal linking)

- Invoke **internal-linking-specialist** with:
  - The crawl baseline.
  - The architecture recommendation.
  - The buyer's primary conversion goal.
- Output:
  - A link-graph rebuild plan (saved to `04-linking/plan.md`).
  - Anchor text recommendations (saved to `04-linking/anchors.md`).
  - Specific page-level link additions (saved to `04-linking/additions.csv`).
- Pass: the plan addresses authority flow toward the conversion goal explicitly.

### Day 7-8 (citation-readiness rewrites)

- Invoke **citation-readiness-specialist** in five passes, one per
  page the buyer specified.
- Each pass produces:
  - The rewritten page in Markdown (saved to `05-citation-readiness/<page-slug>.md`).
  - A diff against the original (saved to `05-citation-readiness/<page-slug>.diff`).
  - A 2-sentence explanation of what changed and why (saved to `05-citation-readiness/<page-slug>.notes.md`).
- Pass: each rewrite preserves the buyer's brand voice (if voice notes were provided in intake), passes the Atrium voice gate, and demonstrably improves passage-level retrievability against the buyer's primary queries.

### Day 9 (90-day probe baseline + setup)

- Invoke **citation-probe-specialist** with:
  - The buyer's queries (from intake).
  - The four AI engines (Claude, GPT, Perplexity, Gemini).
- Output:
  - Baseline probe results re-run with the new schema and llms.txt
    in place (saved to `06-probe/baseline-after.jsonl`).
  - 90-day probe schedule configuration (saved to
    `06-probe/schedule.yml`, which the daily-probe cron picks up).
  - A 1-page initial report (saved to `06-probe/initial-report.md`)
    documenting the buyer's starting AI-citation position across
    each engine for each query.
- Pass: the schedule is wired into the daily-probe cron; the
  initial report is written to the standard report template.

### Day 10 (assembly, audit, delivery)

- Pull all six specialist outputs into a single deliverable bundle:
  - The schema JSON-LD blocks (ready for paste-in).
  - The architecture recommendation document.
  - The llms.txt file.
  - The internal-linking plan and additions.
  - The five rewritten pages with diffs.
  - The 90-day probe initial report.
- Write the executive summary (1 page) at `final/executive-summary.md` covering:
  - What was done.
  - What changed.
  - What to expect over the 90-day probe window.
  - What the next phase looks like if the buyer wants one (a retainer at $499-999/month or a sibling engagement).
- Invoke **auditor-specialist** with the entire deliverable bundle.
  Auditor reviews against the quality bar and either signs off or
  flags issues. Issues are resolved before delivery.
- Constantine reviews and signs the executive summary.
- Compose delivery email (template in `WELCOME-EMAIL.md`,
  delivery section). Send with the deliverable bundle attached
  or with a download link.

## Day 40 — 30-day re-check

- Re-run citation probe against the buyer's queries.
- Compose a 1-page re-check report covering:
  - Citation position changes since baseline.
  - New pages indexed by Google since delivery.
  - Any schema or llms.txt drift detected.
  - Recommended next actions if any.
- Send to the buyer at no additional cost. This is the closing
  artifact of the engagement.

## Failure modes and recoveries

| Failure | Recovery |
|---|---|
| Specialist output fails validation | Re-run that specialist. The 10-day clock pauses if recovery exceeds 1 day. |
| Buyer's CMS access is broken | Email buyer for working access. Pause clock. Re-start when access restored. |
| Buyer changes scope mid-engagement | Either deliver original scope (preferred) or refund and close. Out-of-scope work requires a new engagement. |
| Buyer requests refund before delivery (within 7 days) | Refund immediately. Close engagement. Journal entry under operator-productized-services lineage logs the reason. |
| Day 10 misses with no specialist failure (operator overload) | Automatic full refund per policy. Finish the work anyway. Journal entry investigates the cause and proposes whether the engagement velocity is sustainable at current pricing. |
| Auditor fails the deliverable on Day 10 | Resolve issues immediately. Late delivery triggers refund. The Auditor's gate is non-negotiable; refund is preferable to shipping below quality bar. |

## Quality bar (non-negotiable)

- Every JSON-LD block passes schema.org spec.
- The llms.txt is spec-compliant.
- The executive summary is signed by Constantine.
- The Auditor signs off on the deliverable bundle if engagement value is $1,500+ (always true for this service).
- No marketing voice in any deliverable. The Atrium voice rules apply.
- No invented numbers or case studies in the deliverable or the executive summary.

## After delivery

- Engagement directory archived to `Atrium/library/artifacts/services/geo-setup/engagements/<engagement-id>/`.
- Engagement record committed to the Atrium repo.
- Case study drafted within 30 days, with buyer consent. Published to Atrium content site.
- Pattern-rollup-specialist picks up the engagement's decisions for inclusion in `library/playbooks/productized-services.md` at the next weekly rollup.
