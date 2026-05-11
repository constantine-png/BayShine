# Delivery pipeline — AI Citation Audit

5 business days from intake to delivery. Lighter than GEO Setup
because the audit is observation-only; no edits, no implementation.

## Day-by-day plan

### Day 1 (probe)

- Confirm intake form complete. If anything missing, email immediately. Clock pauses.
- Create engagement directory at `Atrium/library/artifacts/services/ai-citation-audit/engagements/<engagement-id>/`.
- Subdirectories: `intake/`, `probe/`, `competitors/`, `report/`.
- Build the query matrix:
  - 5-10 buyer-specified queries from intake.
  - 15-20 auto-generated queries for the vertical and geography from `Atrium/library/playbooks/vertical-queries.yml` (TODO: populate this file in next session; for now, the geo-ai-search-specialist generates from heuristics on the buyer's vertical).
- Invoke **citation-probe-specialist** to probe all 4 AI engines (Claude, GPT/ChatGPT search, Perplexity, Gemini) against the full query set.
- Save raw probe responses to `probe/raw/`.
- Save normalized results to `probe/matrix.csv` with columns: query, engine, cited (bool), position (int|null), snippet, retrieved_at.

### Day 2 (matrix + heat map)

- Aggregate the probe matrix into a heat map: rows = queries, columns = engines, cells = citation position or "not cited".
- Save heat map as `probe/heat-map.md` plus `probe/heat-map.png` (rendered).
- Identify the patterns:
  - Queries where the buyer is cited on some engines but not others.
  - Queries where the buyer is missing entirely across all 4 engines.
  - Queries where a competitor dominates.
  - Geo-specific gaps.

### Day 3 (competitor cross-reference)

- Pull the buyer's 3 specified competitors from the intake.
- Run a competitor-focused probe across the same query matrix.
- Save to `competitors/matrix.csv` with the same schema plus a `domain` column distinguishing buyer vs. each competitor.
- Identify the structural reasons competitors are cited where the buyer is not:
  - Schema markup differences (invoke schema-specialist to compare).
  - Site architecture (invoke site-architecture-specialist).
  - llms.txt presence and quality (invoke geo-ai-search-specialist).
  - FAQ content depth (invoke citation-readiness-specialist).
  - Backlink profile (manual check, not specialist-driven).
- Save structured findings to `competitors/cross-reference.md`.

### Day 4 (remediation list + report draft)

- Invoke **citation-readiness-specialist** to generate the remediation list with each item:
  - The specific change (one sentence).
  - The rationale (which engines and which queries this affects).
  - The expected effect (high / medium / low impact).
  - The effort (1-3 hour fix / half-day / multi-day).
- Sort the list by impact descending, then effort ascending. Buyer can act on the top 5-10 items same week.
- Save to `report/remediation.md`.
- Draft the 15-page report combining:
  - Executive summary (1 page).
  - Methodology (1 page).
  - Engine-by-engine analysis (4 pages: 1 per engine, with the heat map slice for that engine).
  - Competitor cross-reference findings (3 pages: 1 per competitor).
  - Remediation list (4 pages with detailed rationale).
  - Appendix: full query matrix CSV reference (1 page).
- Save to `report/audit-report.md` (and render to PDF for delivery).

### Day 5 (audit, sign-off, delivery)

- Invoke **auditor-specialist** with the full report bundle. Auditor reviews:
  - Are all numbers traceable to the raw probe data?
  - Does the remediation list pass voice rules (no em-dashes, no marketing voice)?
  - Is the executive summary actionable for a non-technical owner?
  - Does the report avoid invented numbers or testimonials?
- Resolve any flagged issues.
- Constantine reviews and signs the executive summary.
- Compose delivery email (template in `WELCOME-EMAIL.md`, delivery section).
- Send the report bundle: `audit-report.pdf`, `query-matrix.csv`, `competitor-matrix.csv`, `remediation.md`, `executive-summary.pdf`.

## Day 30 — optional follow-up probe

If the buyer replied to the delivery email with "follow up" by Day 25:

- Re-run the original probe matrix on Day 30.
- Compose a 1-page delta report:
  - Citation position changes since baseline.
  - Which remediation items appear to have moved the needle.
  - Which queries still show gaps.
- Send to buyer at no cost.
- This is the closing artifact of the engagement.

## Quality bar (non-negotiable)

- Every number in the report traces to the raw probe data.
- The remediation list is sorted by real-world expected impact, not by what's easiest to do.
- No invented numbers, no invented testimonials.
- Voice gate from `Atrium/archetypes/shared/resend.ts` applies to the executive summary.
- Constantine signs the executive summary.
- Auditor signs off before delivery (mandatory for any engagement $499+).

## Failure modes

| Failure | Recovery |
|---|---|
| Citation-probe-specialist fails on an engine | Note in the report which engine returned errors. Refund proportional to scope if 2+ engines fail. |
| Buyer's site is unreachable during probe | Email buyer. Pause clock. Re-run when site is up. |
| Competitor data is sparse (small market) | Note in the report. Substitute with broader query patterns. No refund unless the buyer indicates the scope is materially diminished. |
| Day 5 misses with no specialist failure | Automatic full refund. Deliver report anyway. Journal entry investigates the cause. |
| Auditor flags the report on Day 5 | Resolve immediately. Late delivery triggers refund. Quality before cadence. |

## Upgrade hook

The delivery email mentions GEO Setup as the natural next step with a $250 audit credit (GEO Setup at $2,250 if purchased within 30 days). Track upgrade rate in `library/decisions.jsonl` under operator-productized-services lineage.

## After delivery

- Engagement directory archived to `Atrium/library/artifacts/services/ai-citation-audit/engagements/<engagement-id>/`.
- Engagement record committed to the Atrium repo.
- Case study drafted within 30 days, with buyer consent.
- Pattern-rollup-specialist picks up the engagement's decisions at the next weekly rollup.
