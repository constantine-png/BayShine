import { useState, useRef } from 'react';

const CHAPTERS = [
  {
    num: '01',
    title: 'Understanding Paint',
    subtitle: 'What you\'re actually working with',
    keyPoints: ['Clear coat is your primary working surface', 'Paint depth determines correction options', 'Temperature affects chemical behavior'],
    body: [
      'Modern automotive paint is a 4-layer system: electrocoat primer, base coat (color), clear coat, and sometimes a ceramic factory coat. The clear coat (typically 40 to 80 microns) is everything you work with. Every polishing step removes some of it. There\'s no adding it back.',
      'Paint depth gauges tell you how much you have to work with. Anything under 80 microns on a correction job requires stopping and communicating that to the customer. At 60 microns, you\'re in warning territory. At 40, you stop and explain.',
    ],
  },
  {
    num: '02',
    title: 'Wash Chemistry',
    subtitle: 'pH, surfactants, and contact mechanics',
    keyPoints: ['pH 7 soaps are not safer; they\'re weaker', 'Two-bucket eliminates most contact scratches', 'Drying method matters as much as washing'],
    body: [
      'Car wash shampoos work through surfactant chemistry: hydrophilic heads attach to water, hydrophobic tails attach to soil particles, and agitation lifts them off the surface. The pH matters because it determines aggressiveness: pH 7 to 8 is gentle on wax and sealants; pH 9 to 11 will strip them in one wash.',
      'The two-bucket method is not optional. One bucket with clean soapy water, one with plain rinse water, and a grit guard in each. Rinse your mitt in the clean water bucket before reloading. The entire logic is preventing the dirt you just removed from going back onto the paint.',
    ],
  },
  {
    num: '03',
    title: 'Decontamination',
    subtitle: 'Iron fallout, clay, and tar',
    keyPoints: ['Chemical decontamination before mechanical', 'Iron fallout is invisible until treated', 'Clay is abrasive: lubrication is not optional'],
    body: [
      'A car that looks clean is rarely decontaminated. Iron particles from brake dust and rail dust embed in clear coat and oxidize, causing paint damage from the inside. Iron fallout remover turns purple on contact; that color change is the chemical reaction between the active ingredient and ferrous material.',
      'Clay bar removes bonded contamination that chemical decontamination leaves behind. Always use a dedicated clay lubricant: soap, water, or quick detailer. Dry claying destroys paint. Work in small sections, fold the clay frequently, and never drop it on the ground.',
    ],
  },
  {
    num: '04',
    title: 'Paint Correction',
    subtitle: 'Compounding, polishing, and finishing',
    keyPoints: ['Work from least aggressive first', 'Test panels before full vehicle commitment', 'Finishing pass determines final gloss'],
    body: [
      'Paint correction removes material: that\'s what makes it work. Compounds cut harder and faster; polishes refine. The standard process is compound to remove defects, medium polish to refine the surface, and finishing polish to maximize gloss and prepare for protection.',
      'The backing plate speed, the foam pad type, the product cut, and the pressure all interact. A test panel on each vehicle is non-negotiable. You need to know how the paint responds before working the full car. Most defects appear in direct sunlight at low angles; inspect under proper lighting before declaring a panel corrected.',
    ],
  },
  {
    num: '05',
    title: 'Protection',
    subtitle: 'Wax, sealant, and ceramic coating',
    keyPoints: ['Ceramic requires paint correction first', 'Sealants outperform wax in durability', 'Curing time is not optional'],
    body: [
      'Protection sits on top of paint, not inside it. Carnauba wax provides warmth and depth but typically lasts 6 to 8 weeks. Synthetic sealants last 4 to 6 months and perform better under UV. Ceramic coatings create a semi-permanent bond with the clear coat: 9H hardness, hydrophobic, and self-cleaning. They also require proper prep: the surface has to be corrected first.',
      'Ceramic application requires controlled temperature (60 to 80°F), low humidity, and clean paint with no oils or polishing residue. Panel wipe with IPA is mandatory. The coating requires 24 hours of no-water curing and reaches full hardness at 7 to 14 days. Rushing either window produces substandard results.',
    ],
  },
  {
    num: '06',
    title: 'Interior Deep Clean',
    subtitle: 'Steam, extraction, and surface sequence',
    keyPoints: ['Top-down sequence always', 'Steam at the right temperature, not maximum', 'Extraction before conditioning'],
    body: [
      'Interior cleaning follows a strict sequence: headliner and vents first, then hard surfaces, then seats, then carpets and floor mats. Working any other direction means contaminating work you\'ve already done. This is the sequence that gets violated most often, and it\'s the one that creates rework.',
      'Steam cleaning removes embedded dirt and sanitizes without chemical residue. The right temperature is 230 to 280°F, hot enough to sanitize and lift grime, low enough to not damage leather or plastics. Extraction removes moisture before it molds. Conditioning comes last: leather conditioner on a dry, clean surface.',
    ],
  },

  {
    num: '08',
    title: 'The Fleet Mindset',
    subtitle: 'Throughput, consistency, and lot logistics',
    keyPoints: ['Consistency over perfection at volume', 'Standardize the process, not the product', 'Throughput per hour is the business metric'],
    body: [
      'Fleet work operates on completely different economics than retail detailing. The goal is consistent, professional results at speed. Not show-car finish; presentable, clean, and uniform across 30 to 300 units. That means standardized process, trained sequence, and product systems that work the same in every condition.',
      'Lot logistics matter: access to water and power, sequencing so vehicles don\'t block each other, communication with the fleet manager on anomalies. You are on their schedule. Downtime is not acceptable. Show up when you said you would, finish what you said you would finish, invoice monthly.',
    ],
  },
] as const;

interface Props {
  captureSource?: string;
}

type Stage = 'cover' | 'toc' | 'chapter';

export default function FieldGuideBook({ captureSource = 'field-guide-book' }: Props) {
  const [stage, setStage] = useState<Stage>('cover');
  const [chapterIdx, setChapterIdx] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [email, setEmail] = useState('');
  const [captureState, setCaptureState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const flipTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  function flip(to: Stage, chIdx?: number) {
    if (isFlipping) return;
    setIsFlipping(true);
    if (flipTimeout.current) clearTimeout(flipTimeout.current);
    flipTimeout.current = setTimeout(() => {
      setStage(to);
      if (chIdx !== undefined) setChapterIdx(chIdx);
      setIsFlipping(false);
    }, 340);
  }

  async function handleCapture(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setCaptureState('loading');
    try {
      const res = await fetch('/api/email-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), source: captureSource }),
      });
      setCaptureState(res.ok ? 'done' : 'error');
    } catch {
      setCaptureState('error');
    }
  }

  const chapter = CHAPTERS[chapterIdx];

  return (
    <div className="book-perspective w-full max-w-3xl mx-auto select-none">
      {/* ── COVER ─────────────────────────────────────────────── */}
      {stage === 'cover' && (
        <div
          className={`book-page ${isFlipping ? 'page-open' : ''}`}
          aria-label="Field Guide cover"
        >
          <div className="book-page-face">
            <div className="relative bg-[#1f1309] border border-bay-gold/20 rounded-sm overflow-hidden"
                 style={{ minHeight: 480 }}>
              {/* Spine accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-bay-gold/60 to-bay-gold/20" />

              <div className="p-10 md:p-14 flex flex-col justify-between h-full" style={{ minHeight: 480 }}>
                <div>
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-bay-gold/70 mb-8">
                    BayShine Detailing
                  </p>
                  <h1 className="font-display font-bold text-4xl md:text-5xl text-bay-white leading-[1.08] mb-4">
                    The Detailer's<br />Field Guide.
                  </h1>
                  <p className="text-bay-slate text-sm leading-relaxed max-w-xs">
                    Eight chapters on paint chemistry, correction, protection, and the
                    professional mindset. Written from production experience.
                  </p>
                </div>

                <div className="mt-10">
                  <div className="flex flex-wrap gap-3 mb-6">
                    {['8 Chapters', 'Technique', 'Chemistry', 'Field Tested'].map(tag => (
                      <span key={tag} className="font-display text-[10px] uppercase tracking-wider text-bay-gold/60 border border-bay-gold/20 px-2 py-1 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => flip('toc')}
                    className="font-display font-semibold text-sm bg-bay-gold text-bay-navy px-8 py-3 rounded-sm hover:bg-[#d9bc79] transition-colors"
                  >
                    Preview Chapters →
                  </button>
                </div>
              </div>

              {/* Corner ornament */}
              <svg className="absolute bottom-8 right-8 text-bay-gold/15" width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path d="M24 4 L28 18 L42 18 L31 27 L35 41 L24 33 L13 41 L17 27 L6 18 L20 18 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* ── TABLE OF CONTENTS ─────────────────────────────────── */}
      {stage === 'toc' && (
        <div
          className={`book-page ${isFlipping ? 'page-open' : ''}`}
          aria-label="Table of contents"
        >
          <div className="book-page-face">
            <div className="bg-[#1f1309] border border-bay-gold/20 rounded-sm overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-bay-gold/60 to-bay-gold/20" style={{ position: 'absolute' }} />
              <div className="p-8 md:p-12">
                <div className="flex items-center justify-between mb-8">
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-bay-gold/70">
                    Contents
                  </p>
                  <button
                    onClick={() => flip('cover')}
                    className="font-display text-xs text-bay-slate hover:text-bay-white transition-colors"
                  >
                    ← Back
                  </button>
                </div>

                <ol className="space-y-1">
                  {CHAPTERS.map((ch, i) => (
                    <li key={ch.num}>
                      <button
                        onClick={() => flip('chapter', i)}
                        className="w-full text-left flex items-baseline gap-4 py-2.5 px-3 rounded-sm
                                   hover:bg-bay-gold/5 group transition-colors"
                      >
                        <span className="font-display text-[10px] text-bay-gold/40 w-6 shrink-0">{ch.num}</span>
                        <span className="flex-1 min-w-0">
                          <span className="font-display font-semibold text-sm text-bay-white group-hover:text-bay-gold transition-colors block leading-snug">
                            {ch.title}
                          </span>
                          <span className="font-display text-[10px] text-bay-slate/60">{ch.subtitle}</span>
                        </span>
                        <span className="text-bay-slate/30 text-xs group-hover:text-bay-gold/50 transition-colors">→</span>
                      </button>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 pt-6 border-t border-bay-slate/10">
                  <p className="font-display text-[10px] text-bay-slate/50 uppercase tracking-wider">
                    Previewing {CHAPTERS.length} chapters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── CHAPTER VIEW ──────────────────────────────────────── */}
      {stage === 'chapter' && (
        <div
          className={`book-page ${isFlipping ? 'page-open' : ''}`}
          aria-label={`Chapter ${chapter.num}: ${chapter.title}`}
        >
          <div className="book-page-face">
            <div className="bg-[#1f1309] border border-bay-gold/20 rounded-sm overflow-hidden">
              {/* Nav bar */}
              <div className="flex items-center justify-between px-8 py-4 border-b border-bay-slate/10">
                <button
                  onClick={() => flip('toc')}
                  className="font-display text-xs text-bay-slate hover:text-bay-white transition-colors"
                >
                  ← Contents
                </button>
                <span className="font-display text-[10px] text-bay-gold/50 uppercase tracking-widest">
                  {chapter.num} / {String(CHAPTERS.length).padStart(2, '0')}
                </span>
                <div className="flex gap-3">
                  <button
                    onClick={() => chapterIdx > 0 && flip('chapter', chapterIdx - 1)}
                    disabled={chapterIdx === 0}
                    className="font-display text-xs text-bay-slate hover:text-bay-white disabled:opacity-25 transition-colors"
                    aria-label="Previous chapter"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => chapterIdx < CHAPTERS.length - 1 && flip('chapter', chapterIdx + 1)}
                    disabled={chapterIdx === CHAPTERS.length - 1}
                    className="font-display text-xs text-bay-slate hover:text-bay-white disabled:opacity-25 transition-colors"
                    aria-label="Next chapter"
                  >
                    →
                  </button>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="mb-6">
                  <span className="font-display text-[10px] font-bold text-bay-gold uppercase tracking-[0.2em] block mb-3">
                    Chapter {chapter.num}
                  </span>
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-bay-white mb-1 leading-tight">
                    {chapter.title}
                  </h2>
                  <p className="font-display text-xs text-bay-slate">{chapter.subtitle}</p>
                </div>

                {/* Key points */}
                <div className="bg-[#0d0804]/70 rounded-sm p-4 mb-6">
                  <p className="font-display text-[9px] font-bold uppercase tracking-[0.15em] text-bay-gold/60 mb-2">Key Points</p>
                  <ul className="space-y-1">
                    {chapter.keyPoints.map(pt => (
                      <li key={pt} className="flex items-start gap-2 text-xs text-bay-slate">
                        <span className="text-bay-gold/60 shrink-0 mt-0.5">·</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Body */}
                <div className="space-y-4 mb-8">
                  {chapter.body.map((para, i) => (
                    <p key={i} className="text-bay-bone/80 text-sm leading-relaxed">{para}</p>
                  ))}
                </div>

                {/* Email capture */}
                <div className="border-t border-bay-slate/10 pt-6">
                  {captureState === 'done' ? (
                    <p className="font-display text-sm text-bay-gold">
                      You're on the list. One email when the full guide ships.
                    </p>
                  ) : (
                    <>
                      <p className="font-display text-xs font-semibold text-bay-white mb-1">
                        Get the full Field Guide.
                      </p>
                      <p className="text-bay-slate text-xs mb-3">
                        All eight chapters, unabridged. One email when it ships.
                      </p>
                      <form onSubmit={handleCapture} className="flex gap-2">
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          className="flex-1 min-w-0 bg-transparent border border-bay-slate/30 text-bay-bone placeholder:text-bay-slate/40
                                     px-3 py-2 text-xs rounded-sm focus:outline-none focus:border-bay-gold transition-colors"
                        />
                        <button
                          type="submit"
                          disabled={captureState === 'loading'}
                          className="shrink-0 font-display font-semibold text-xs bg-bay-gold text-bay-navy
                                     px-4 py-2 rounded-sm hover:bg-[#d9bc79] transition-colors disabled:opacity-60"
                        >
                          {captureState === 'loading' ? '…' : 'Notify Me'}
                        </button>
                      </form>
                      {captureState === 'error' && (
                        <p className="text-red-400 text-xs mt-2">Something went wrong. Try again.</p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile hint */}
      <p className="text-center text-bay-slate/40 text-xs font-display uppercase tracking-wider mt-4">
        {stage === 'cover' ? 'Click to preview' : stage === 'toc' ? 'Select a chapter' : `${chapterIdx + 1} of ${CHAPTERS.length}`}
      </p>
    </div>
  );
}
