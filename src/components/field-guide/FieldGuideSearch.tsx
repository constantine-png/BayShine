// FieldGuideSearch — primary search surface for the Field Guide.
// Debounced input → POST /api/field-guide/search → always empty right now.
// Empty state captures email + query → POST /api/field-guide/capture.
// Placeholder cycles through example queries when input is empty and unfocused.

import { useState, useEffect, useRef, useCallback } from 'react';

const EXAMPLE_QUERIES = [
  'brown spots reappearing after correction',
  "water spots won't lift off black paint",
  'swirl marks still visible after polishing',
  'leather cracking at the seams',
  'ceramic coating beading stopped working',
  "brake dust won't come off wheels",
  'paint looks hazy after compound',
  'iron remover turned paint orange',
];

const G = {
  bg:          'var(--color-guide-bg)',
  surface:     'var(--color-guide-surface)',
  surfaceUp:   'var(--color-guide-surface-raised)',
  border:      'var(--color-guide-border)',
  text:        'var(--color-guide-text)',
  muted:       'var(--color-guide-text-muted)',
  heading:     'var(--color-guide-heading)',
  accent:      'var(--color-guide-accent)',
  accentDim:   'var(--color-guide-accent-dim)',
} as const;

type UiState = 'idle' | 'searching' | 'empty';
type CaptureState = 'idle' | 'loading' | 'done' | 'error';

interface Props {
  captureSource?: string;
}

export default function FieldGuideSearch({ captureSource = 'field-guide' }: Props) {
  const [query, setQuery] = useState('');
  const [uiState, setUiState] = useState<UiState>('idle');
  const [email, setEmail] = useState('');
  const [captureState, setCaptureState] = useState<CaptureState>('idle');
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const [focused, setFocused] = useState(false);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastQueryRef = useRef('');

  // Cycle placeholder every 3.5s when input is empty and unfocused
  useEffect(() => {
    if (query || focused) return;
    const id = setInterval(() => {
      setPlaceholderIdx(i => (i + 1) % EXAMPLE_QUERIES.length);
    }, 3500);
    return () => clearInterval(id);
  }, [query, focused]);

  const runSearch = useCallback(async (q: string) => {
    if (q.trim().length < 2) {
      setUiState('idle');
      return;
    }
    lastQueryRef.current = q;
    setUiState('searching');
    try {
      await fetch('/api/field-guide/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q }),
      });
    } catch {
      // Network error — still show empty state
    }
    // Only update if this is still the latest query
    if (lastQueryRef.current === q) {
      setUiState('empty');
    }
  }, []);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setQuery(val);
    setCaptureState('idle');

    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (!val.trim()) {
      setUiState('idle');
      return;
    }

    debounceRef.current = setTimeout(() => {
      runSearch(val);
    }, 250);
  }

  async function handleCapture(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !query.trim()) return;
    setCaptureState('loading');
    try {
      const res = await fetch('/api/field-guide/capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query.trim(), email: email.trim(), source: captureSource }),
      });
      setCaptureState(res.ok ? 'done' : 'error');
    } catch {
      setCaptureState('error');
    }
  }

  const showPlaceholder = !query && !focused;

  return (
    <div style={{ width: '100%' }}>
      {/* Search input row */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          borderBottom: `1px solid ${focused ? G.accentDim : G.border}`,
          transition: 'border-color 200ms ease-out',
          paddingBottom: '2px',
        }}
      >
        {/* Gold cursor via CSS class guide-search-input */}
        <input
          type="search"
          autoComplete="off"
          spellCheck={false}
          aria-label="Search Field Guide scenarios"
          value={query}
          onChange={handleInput}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={showPlaceholder ? EXAMPLE_QUERIES[placeholderIdx] : ''}
          className="guide-search-input"
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontFamily: 'var(--font-family-sans)',
            fontSize: '18px',
            color: G.heading,
            padding: '12px 0',
            caretColor: G.accent,
            WebkitAppearance: 'none',
          }}
        />

        {/* Pulse indicator while searching */}
        {uiState === 'searching' && (
          <span
            className="guide-pulse-dot"
            aria-label="Searching"
            style={{ flexShrink: 0, marginLeft: '12px' }}
          />
        )}
      </div>

      {/* Animated placeholder label */}
      {showPlaceholder && !query && (
        <p
          style={{
            marginTop: '8px',
            fontSize: '11px',
            color: G.muted,
            fontFamily: 'var(--font-family-mono)',
            letterSpacing: '0.05em',
          }}
        >
          try: "{EXAMPLE_QUERIES[placeholderIdx]}"
        </p>
      )}

      {/* Empty state */}
      {uiState === 'empty' && (
        <div
          className="guide-empty-state"
          style={{
            marginTop: '32px',
            padding: '28px 32px',
            background: G.surface,
            border: `1px solid ${G.border}`,
          }}
        >
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-family-display)',
              fontSize: '10px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: G.accent,
              marginBottom: '10px',
            }}
          >
            No scenarios published yet
          </span>

          <h3
            style={{
              fontFamily: 'var(--font-family-display)',
              fontSize: '20px',
              fontWeight: 700,
              color: G.heading,
              margin: '0 0 10px',
              lineHeight: 1.2,
            }}
          >
            You're early.
          </h3>

          <p
            style={{
              fontSize: '14px',
              color: G.muted,
              margin: '0 0 20px',
              lineHeight: 1.6,
              maxWidth: '400px',
            }}
          >
            The Field Guide is being built around queries like this one.
            Tell us what you're trying to solve and we'll build it first.
          </p>

          {captureState === 'done' ? (
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-family-display)',
                  fontSize: '14px',
                  color: G.accent,
                  margin: '0 0 6px',
                }}
              >
                Added to the queue.
              </p>
              <p style={{ fontSize: '13px', color: G.muted, margin: 0 }}>
                We build the most-requested scenarios first. You'll hear from us.
              </p>
            </div>
          ) : (
            <>
              <form
                onSubmit={handleCapture}
                style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  aria-label="Your email address"
                  style={{
                    flex: '1 1 200px',
                    background: 'transparent',
                    border: `1px solid ${G.border}`,
                    color: G.heading,
                    padding: '9px 12px',
                    fontSize: '14px',
                    fontFamily: 'var(--font-family-sans)',
                    outline: 'none',
                    caretColor: G.accent,
                    // Focus handled by CSS [data-guide-scope] :focus-visible
                  }}
                />
                <button
                  type="submit"
                  disabled={captureState === 'loading'}
                  style={{
                    flexShrink: 0,
                    background: G.accent,
                    color: '#1a1410',
                    border: 'none',
                    padding: '9px 18px',
                    fontSize: '13px',
                    fontFamily: 'var(--font-family-display)',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    cursor: captureState === 'loading' ? 'default' : 'pointer',
                    opacity: captureState === 'loading' ? 0.6 : 1,
                    transition: 'opacity 150ms ease-out',
                  }}
                >
                  {captureState === 'loading' ? '…' : 'Add to the queue'}
                </button>
              </form>

              {captureState === 'error' && (
                <p style={{ fontSize: '12px', color: '#e57373', marginTop: '8px' }}>
                  Something went wrong. Try again.
                </p>
              )}

              <p
                style={{
                  fontSize: '11px',
                  color: G.muted,
                  marginTop: '14px',
                  lineHeight: 1.5,
                  maxWidth: '380px',
                }}
              >
                Your query becomes part of the editorial backlog. We'll email you when a
                scenario matching it publishes.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
