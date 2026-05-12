# Install — GEO Playbook v0.5

This is a playbook, not a software install. The "install" is reading the playbook and executing the 90-day plan in Chapter 8.

For reference, here's the optimal path from purchase to implementation:

## Day 1

1. Open `playbook.md` (or the PDF rendering).
2. Read Chapter 1 (The GEO mental model). 15-20 minutes.
3. Run the Day 1-2 audit from Chapter 7 (AI engine probing): probe your site against 25-40 queries on Perplexity, ChatGPT search, Claude, and Gemini. Document the baseline.

## Day 2-7 (Week 1)

- Read Chapters 2 and 3 (Schema, llms.txt).
- Complete the baseline probe.
- Audit your existing schema (if any) at schema.org validator and Google Rich Results Test.

## Day 8-14 (Week 2)

- Implement schema per Chapter 2.
- Deploy and validate.

## Day 15-21 (Week 3)

- Implement llms.txt per Chapter 3.
- Deploy and verify accessibility.

## Day 22-35 (Weeks 4-5)

- Site architecture review per Chapter 4.
- If multi-city or multi-service, plan and implement page splits.

## Day 36-50 (Weeks 6-7)

- Citation-readiness rewrites on top 5 pages per Chapter 5.

## Day 51-65 (Weeks 8-9)

- Internal linking pass per Chapter 6.

## Day 66-90 (Weeks 10-12)

- Steady-state: weekly probes, validation checks.
- Day 90: full re-probe, compare against baseline, document changes.

## What software/tools you need

- A code editor (VS Code, Sublime, even Notepad++).
- Access to your site's CMS or codebase admin.
- Browser-based schema.org validator: <https://validator.schema.org/>
- Browser-based Google Rich Results Test: <https://search.google.com/test/rich-results>
- A Google Sheet or Excel for probe tracking.
- Accounts on perplexity.ai, chat.openai.com, claude.ai, gemini.google.com for probing.

## What software/tools you don't need

- No paid SEO tools required for the basic implementation. The free tools above are sufficient.
- No code beyond JSON-LD (which is just structured JSON text, no programming).
- No custom hosting; everything works on your existing site.

## If you get stuck

Reply to the welcome email. Common gotchas:

- Schema validation failures: 90% of the time it's phone format, dayOfWeek capitalization, or coordinates-as-strings. Chapter 2 covers each.
- llms.txt placement on Webflow/Squarespace: Chapter 3's subdomain workaround.
- Probe data noisy: run more queries (closer to 40 than 25), spread over more days.

For complete done-for-you implementation, see Appendix C in the playbook for the AI Citation Audit ($499) or GEO Setup ($2,500) options.
