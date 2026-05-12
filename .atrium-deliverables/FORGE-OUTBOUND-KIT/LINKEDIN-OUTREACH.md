# LinkedIn outreach templates

LinkedIn outbound is Constantine's primary channel for Forge's mid-market and enterprise prospects. Volume target: 50-100 connection requests per week + 20-40 follow-up messages.

LinkedIn rate limits in 2026:

- Standard accounts: ~100 connection invitations per week (sometimes throttled lower).
- Sales Navigator: 100 InMails per month plus unlimited connection invitations.
- LinkedIn Recruiter: higher limits but overkill for outbound at Forge's scale.

Use Sales Navigator at Forge Rung 2+ when paid acquisition unlocks ($79/mo for Sales Navigator Core; $129/mo for Advanced).

## Connection request templates

LinkedIn connection requests have a 300-character limit (sometimes 200; varies). Keep them tight.

### Variant L1 — Multi-location service operator

```
{{FIRST_NAME}}, I run Forge — productized AI search visibility services for local service businesses. Noticed {{PROSPECT_COMPANY}} runs {{NUMBER}} locations across {{REGIONS}}. Curious about your AI search strategy as the engines (Perplexity, ChatGPT search) take more local query share. Open to connecting?
```

### Variant L2 — Agency principal

```
{{FIRST_NAME}}, white-label productized service operator here. We do GEO (generative engine optimization) for local service businesses at $2,500 / 10 days per engagement. {{AGENCY_NAME}}'s client mix in {{REGION}} looks like a fit. Open to connecting if AI search is on your roadmap.
```

### Variant L3 — SaaS founder in adjacent space

```
{{FIRST_NAME}}, Forge here. We just launched a free Schema Generator and have Citation Watch (AI search monitoring SaaS) on a paid waitlist. If your tool integrates with local service business CMSes, there might be a partnership angle. Open to connecting?
```

## Follow-up message templates

Once a connection accepts, the follow-up message comes within 24 hours. Don't pitch in the connection request; pitch in the follow-up.

### Follow-up F1 — After connection (any variant)

```
Thanks for connecting, {{FIRST_NAME}}.

I'll keep this brief. I run Forge — productized AI search visibility for local service businesses. We probe Perplexity, ChatGPT search, Claude, and Gemini for buyer-intent queries in your vertical, find structural gaps in how AI engines see businesses, and fix them.

I ran a quick probe on {{PROSPECT_COMPANY}} this morning. Found {{SPECIFIC_GAP}}. The fix is in the $2,500 GEO Setup productized service (10-day turnaround) or the lighter $499 audit (5 days, diagnosis only).

Would either be worth a 20-minute call? Reply with a time that works.

— Constantine
```

### Follow-up F2 — After 7 days of no response to F1

```
Hi {{FIRST_NAME}}, following up on the AI search note. No worries if it's not a fit; thought I'd check once.

The Schema Generator (free, no signup) is at forge.{{tld}}/generate if you want to see Forge's work without commitment. Generates validated JSON-LD for 9 verticals.

Last note. Reply or no.

— Constantine
```

After F2 with no response, stop. Don't message a third time on LinkedIn. Some prospects re-engage 30-60 days later organically; the connection persists.

### Follow-up F3 — After 30 days, organic re-engagement

If the prospect engages with Constantine's LinkedIn content (likes, comments) 30+ days after F2:

```
Hi {{FIRST_NAME}}, saw your comment on {{POST}}. Glad it resonated.

The GEO Setup service is still at $2,500 / 10 days. Citation Watch waitlist just hit {{NUMBER}} signups, which closes founding-member pricing at 100. If the timing is now better than when we connected, the booking link is forge.{{tld}}/geo-setup.

— Constantine
```

## InMail templates (Sales Navigator)

InMails have higher word limits (1,300 chars subject + body combined) and bypass the connection requirement. Use sparingly — Sales Navigator's 100 InMails/month is a finite budget.

### InMail I1 — Higher-touch first contact for enterprise prospects

```
Subject: GEO program scope check for {{PROSPECT_COMPANY}}

Hi {{FIRST_NAME}},

I run Forge, an aggressive sibling of Atrium in a two-network architecture for productized AI search visibility services. Forge focuses on mid-market and enterprise; Atrium focuses on SMB. Both networks operate under my (Constantine's) accountability.

{{PROSPECT_COMPANY}} caught my attention because {{SPECIFIC_REASON_FROM_RESEARCH}}. I probed three of your locations across Perplexity, ChatGPT search, Claude, and Gemini for buyer-intent queries. Found {{SPECIFIC_STRUCTURAL_FINDINGS}}.

For multi-location operators at your scale, the right product is the Enterprise GEO Program: $25,000 flat, 30 days, full implementation across all locations with 12-month probe tracking. Smaller scope (single location) goes through GEO Setup at $2,500.

Worth a 30-minute discovery call this week? I have open windows {{TWO_TIMES}}.

— Constantine
   Forge
```

## What NOT to do on LinkedIn

- Don't use generic "I'd love to connect and learn more about you" requests. They get accepted at low rates and tagged as spam by algorithm.
- Don't pitch in the connection request itself. Pitch in the follow-up.
- Don't message more than twice (F1 + F2). The third unprompted message moves from "outreach" to "harassment" in many recipients' minds.
- Don't include external links in the connection request (LinkedIn algorithm suppresses).
- Don't auto-personalize obviously. "Hi {{FIRST_NAME}}, I noticed {{PROSPECT_COMPANY}}..." with broken substitutions tells the prospect we don't review our own work. Pre-flight every send.
- Don't message on weekends. Weekday business hours (9 AM to 5 PM prospect-local time) get higher acceptance rates.

## Tracking

Per LinkedIn campaign, log to `Forge/library/decisions.jsonl` under operator-forge-products lineage:

```json
{"date":"YYYY-MM-DD","channel":"linkedin","variant":"L1","prospect_type":"multi-location-service","sends":N,"accepts":N,"f1_sends":N,"f1_replies":N,"meetings_booked":N,"engagements_closed":N}
```

Weekly review identifies which variant + prospect type combinations produce the most meetings; future weeks scale into those.

## Voice rules for LinkedIn

LinkedIn is slightly less formal than email. Em-dashes used more freely. First-person "I" throughout. Constantine's tone — personable, direct, technically credible.

But the constitutional floor applies: no invented metrics, no exaggerated capabilities, no fake scarcity. The Citation Watch waitlist count is a real number when stated; the founding-member cap at 100 is real.
