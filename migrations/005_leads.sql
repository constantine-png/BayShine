-- Leads table — authoritative store for every booking/inquiry submission.
-- Email is a notification channel; this is the source of truth so a Resend
-- outage (or a missing API key) does not lose customer data.

CREATE TABLE IF NOT EXISTS leads (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source      TEXT NOT NULL CHECK (source IN ('book', 'fleet', 'apartments', 'quote', 'email-capture')),
  name        TEXT,
  phone       TEXT,
  email       TEXT,
  vehicle     TEXT,
  zip         TEXT,
  address     TEXT,
  service     TEXT,
  notes       TEXT,
  extra       JSONB NOT NULL DEFAULT '{}'::jsonb,
  emailed     BOOLEAN NOT NULL DEFAULT false,
  email_error TEXT,
  contacted   BOOLEAN NOT NULL DEFAULT false,
  contacted_at TIMESTAMPTZ,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_leads_created ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_source  ON leads(source);
CREATE INDEX IF NOT EXISTS idx_leads_uncontacted ON leads(contacted) WHERE contacted = false;
