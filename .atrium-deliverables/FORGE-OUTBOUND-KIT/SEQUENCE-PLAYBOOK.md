# Sequence playbook

Multi-touch outreach sequences for Forge's outbound. Pick the right sequence based on prospect tier and channel.

## The four sequences

| Sequence | Touches | Duration | Best for |
|---|---|---|---|
| Sprint | 4 | 10 days | Volume cold email to SMB prospects |
| Standard | 7 | 21 days | Mid-market prospects with research budget |
| Patient | 10 | 45 days | Enterprise prospects requiring relationship building |
| LinkedIn-only | 3 | 14 days | LinkedIn-native prospects who don't read business email |

---

## Sprint sequence (4 touches, 10 days)

For high-volume cold email to SMB prospects. Lower personalization budget; the dossier is the 15-minute version.

### Touch 1: Day 0 — Initial cold email

Cold email variant A or D from `COLD-EMAIL-TEMPLATES.md`. Personalized hook based on quick research.

Subject: specific to prospect (under 50 chars).
Body: 100-180 words. One ask.

### Touch 2: Day 3 — Soft follow-up

Subject: Re: {{ORIGINAL_SUBJECT}}

```
Hi {{FIRST_NAME}},

Bumping this. Did the {{SPECIFIC_THING_FROM_TOUCH_1}} resonate, or is it not the right time?

Either way, the Schema Generator (free, no signup) is at forge.{{tld}}/generate if you want to see Forge's work without commitment.

— Constantine
```

### Touch 3: Day 7 — Hard follow-up

Subject: Last note about {{PROSPECT_COMPANY}}

```
Hi {{FIRST_NAME}},

Last touch from me on this thread. The AI Citation Audit (5-day diagnostic, $499) is the lowest-friction starting point if continuous service isn't the right fit yet.

If you want to see actual probe data for {{PROSPECT_COMPANY}}, reply and I'll send the 3-query summary I ran for your dossier — free, no obligation.

— Constantine
```

### Touch 4: Day 10 — Break-up

Subject: Closing the loop

```
Hi {{FIRST_NAME}},

Closing this thread. Removing you from the outreach list. If anything changes — new vertical, multi-location expansion, AI search becoming a priority — feel free to reply directly.

The Schema Generator is at forge.{{tld}}/generate. Free, no signup. Useful regardless of whether we work together.

— Constantine
```

After Touch 4 with no reply: stop. Wait 90 days minimum before re-engaging.

---

## Standard sequence (7 touches, 21 days)

For mid-market prospects worth 20-30 minutes of dossier research. Mix of email and LinkedIn.

### Touch 1: Day 0 — Cold email

Variant A, B, or D depending on prospect type.

### Touch 2: Day 1 — LinkedIn connection request

L1, L2, or L3 from `LINKEDIN-OUTREACH.md`. Don't reference the cold email in the LinkedIn request; they're parallel channels.

### Touch 3: Day 3 — LinkedIn follow-up (if connection accepted)

F1 from `LINKEDIN-OUTREACH.md`.

### Touch 4: Day 5 — Cold email follow-up

```
Hi {{FIRST_NAME}},

Saw we connected on LinkedIn. Following up on the AI search note from Monday.

If the structural gap I found at {{PROSPECT_COMPANY}} ({{SPECIFIC_GAP}}) is worth a closer look, the AI Citation Audit at $499 / 5 days is the lowest-friction way to get a structured remediation list. Or the GEO Setup at $2,500 / 10 days if you'd rather have us execute.

Reply if interested.

— Constantine
```

### Touch 5: Day 10 — Value-add (not a pitch)

```
Hi {{FIRST_NAME}},

Re-ran the probe on {{PROSPECT_COMPANY}}. Interesting finding: {{SPECIFIC_OBSERVATION}}. (Attached: the 3-query probe summary, no obligation.)

If this is useful even without working together, that's the goal. Forward to anyone on your team who handles AI search if relevant.

— Constantine
```

### Touch 6: Day 15 — LinkedIn engagement check-in

```
{{FIRST_NAME}}, saw your post about {{TOPIC}}. Mind if I respond with a related Forge data point? Don't want to derail your thread if not.
```

If they say yes, comment publicly on their post with a useful data point. The public comment becomes the bridge.

### Touch 7: Day 21 — Final break-up

Sprint sequence Touch 4 adapted.

---

## Patient sequence (10 touches, 45 days)

For enterprise prospects ($25K+ engagement potential). 60-90 minute dossier research. Variant F email-style. High touch.

Day 0: InMail I1 with full probe data.
Day 3: LinkedIn connection request.
Day 5: Email follow-up referencing InMail and connection.
Day 10: Value-add email with industry data point (not direct pitch).
Day 14: LinkedIn post engagement (comment on their recent post).
Day 21: Email with case study reference.
Day 28: Direct LinkedIn DM (after connection accepted) with specific scope proposal.
Day 35: Phone call attempt (if phone is in dossier).
Day 42: Final value-add email with full probe report attached (no obligation).
Day 45: Break-up email + 90-day pause.

Enterprise sequences require higher patience because enterprise decision cycles run 30-90 days. The patient sequence respects that timeline.

---

## LinkedIn-only sequence (3 touches, 14 days)

For prospects who are LinkedIn-active but don't engage on email.

Day 0: L1/L2/L3 connection request.
Day 1: F1 follow-up message if connection accepted.
Day 14: F2 break-up message.

No email channel in this sequence. Some agencies and SaaS founders live entirely on LinkedIn; email outreach to them gets archived without reply but LinkedIn DMs get response.

---

## Stopping criteria

For every sequence:

- Reply received: switch from sequence to direct conversation.
- "Not interested" or "remove me" or "unsubscribe": stop immediately. Tag prospect as "do not contact" with a 365-day expiration.
- Bounce (email): mark email invalid in dossier. Continue LinkedIn track if relevant.
- LinkedIn rejection of connection request: don't retry on LinkedIn. Email-only from here.

After full sequence with no engagement: 90-day pause. Re-research with fresh data. Re-engage only if new hook exists.

## Tracking per sequence

`Forge/library/decisions.jsonl` row per sequence completion:

```json
{"date":"2026-MM-DD","channel":"outbound","sequence":"sprint","prospect_type":"smb_service","sends":4,"opens":3,"replies":0,"meetings":0,"outcome":"break_up"}
```

After 100+ sequences run, the data tells which sequence + prospect type combinations produce the best ROI. Future sequence choice shifts based on the data.

## Tools to send the sequences

Forge at Rung 2: Instantly.ai, Lemlist, or Mailshake — pick one. Each handles email sequence automation, LinkedIn cross-channel (some, with Sales Navigator integration), and reply detection that triggers sequence pause.

Budget: $97-$197/mo at the Rung 2 starting tier. Cost-justified at 5+ meetings booked per month.

## Constitutional reminders

- Voice rules apply to every touch. The voice gate runs on each draft.
- No invented metrics or fake scarcity in any touch.
- One ask per touch.
- Personalization must be specific, not generic.
- Stop immediately on opt-out or "remove me" requests.
- 90-day minimum pause before re-engaging dropped prospects.
- Constantine is named in every email and LinkedIn message; never "the team" or "we" alone without him.
