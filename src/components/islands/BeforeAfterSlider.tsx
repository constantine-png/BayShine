// Drag-reveal before/after image comparison slider.
// When images are not yet provided, renders a placeholder state.
import { useState, useRef, useCallback } from 'react';

interface SliderImage {
  src: string;
  alt: string;
}

interface Props {
  before?: SliderImage;
  after?: SliderImage;
  label?: string;
}

export default function BeforeAfterSlider({ before, after, label = 'Before / After' }: Props) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(Math.max(x, 2), 98));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    updatePosition(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    updatePosition(e.clientX);
  };

  const onPointerUp = () => setDragging(false);

  // Placeholder state — no real images yet
  if (!before || !after) {
    return (
      <div
        className="relative w-full bg-[rgba(122,130,148,0.08)] border border-dashed border-[rgba(122,130,148,0.3)] rounded-sm flex items-center justify-center"
        style={{ aspectRatio: '16/9' }}
        data-photo-needed="Before/after drag-reveal slider — requires two matched photos"
        role="img"
        aria-label="Before/after photo slider (photo needed)"
      >
        <div className="text-center text-[#7A8294]">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="mx-auto mb-3 opacity-50" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <line x1="12" y1="3" x2="12" y2="21" strokeDasharray="3 3"/>
            <path d="M3 9h7M14 9h7M3 15h7M14 15h7"/>
          </svg>
          <p className="text-sm font-medium">{label}</p>
          <p className="text-xs mt-1 opacity-60">Drag-reveal slider · Real photos required</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-sm select-none" style={{ aspectRatio: '16/9' }}>
      {/* Before image (full width, behind) */}
      <div className="absolute inset-0">
        <img
          src={before.src}
          alt={before.alt}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <span className="absolute top-3 left-3 bg-bay-navy/80 text-bay-bone text-xs font-semibold px-2 py-1 rounded-sm">
          Before
        </span>
      </div>

      {/* After image (clipped to right portion) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <img
          src={after.src}
          alt={after.alt}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <span className="absolute top-3 right-3 bg-bay-navy/80 text-bay-bone text-xs font-semibold px-2 py-1 rounded-sm">
          After
        </span>
      </div>

      {/* Drag handle */}
      <div
        ref={containerRef}
        className="absolute inset-0 cursor-ew-resize"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        role="slider"
        aria-label="Drag to compare before and after"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') setPosition(p => Math.max(p - 2, 2));
          if (e.key === 'ArrowRight') setPosition(p => Math.min(p + 2, 98));
        }}
      >
        {/* Handle line + grip */}
        <div
          className="absolute top-0 bottom-0 w-px bg-bay-gold pointer-events-none"
          style={{ left: `${position}%` }}
        >
          <div className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-bay-gold flex items-center justify-center shadow-lg transition-transform duration-100 ${dragging ? 'scale-110' : ''}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F1B2D" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"/>
              <polyline points="9 18 3 12 9 6" transform="translate(12 0)"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
