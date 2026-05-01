// Filterable before/after gallery. Photo placeholders until real shots arrive.
// FOLLOWUP: Replace PhotoItem placeholder divs with real <img> pairs when photography is complete.
import { useState } from 'react';

type Category = 'all' | 'cars' | 'fleet' | 'recon';

interface GalleryItem {
  id: number;
  category: Exclude<Category, 'all'>;
  description: string;
  aspectRatio: string;
}

// 12 placeholder slots — minimum required for launch per the brief.
const ITEMS: GalleryItem[] = [
  { id: 1,  category: 'cars',  description: 'Sedan exterior, before/after clay and sealant',     aspectRatio: '4/3' },
  { id: 2,  category: 'cars',  description: 'SUV full detail, before/after paint correction',     aspectRatio: '4/3' },
  { id: 3,  category: 'cars',  description: 'Truck exterior, before/after decontamination',       aspectRatio: '4/3' },
  { id: 4,  category: 'cars',  description: 'Coupe interior, before/after full detail',           aspectRatio: '4/3' },
  { id: 5,  category: 'cars',  description: 'SUV wheels, before/after iron removal and seal',     aspectRatio: '4/3' },
  { id: 6,  category: 'recon', description: 'Neglected sedan, before/after heavy recon',          aspectRatio: '4/3' },
  { id: 7,  category: 'recon', description: 'Trade-in SUV, before/after recon full detail',       aspectRatio: '4/3' },
  { id: 8,  category: 'recon', description: 'Heavily soiled truck interior, before/after recon', aspectRatio: '4/3' },
  { id: 11, category: 'fleet', description: 'Dealer lot, before/after lot wash',                  aspectRatio: '16/9' },
  { id: 12, category: 'fleet', description: 'Fleet vans, before/after sales prep',               aspectRatio: '4/3' },
];

const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'all',   label: 'All' },
  { id: 'cars',  label: 'Cars' },
  { id: 'fleet', label: 'Fleet' },
  { id: 'recon', label: 'Recon' },
];

function PhotoItem({ item }: { item: GalleryItem }) {
  return (
    <div
      className="bg-[rgba(122,130,148,0.08)] border border-dashed border-[rgba(122,130,148,0.25)] rounded-sm flex items-center justify-center overflow-hidden"
      style={{ aspectRatio: item.aspectRatio }}
      data-photo-needed={item.description}
      role="img"
      aria-label={`Photo needed: ${item.description}`}
    >
      <div className="flex flex-col items-center gap-2 text-[#7A8294] text-center px-3">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
          <circle cx="12" cy="13" r="4"/>
        </svg>
        <span className="text-xs leading-tight opacity-60 max-w-32">{item.description}</span>
      </div>
    </div>
  );
}

export default function GalleryFilter() {
  const [active, setActive] = useState<Category>('all');

  const visible = active === 'all' ? ITEMS : ITEMS.filter(i => i.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <div
        className="flex flex-wrap gap-2 mb-8"
        role="group"
        aria-label="Filter gallery by category"
      >
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActive(cat.id)}
            aria-pressed={active === cat.id}
            className={`px-4 py-1.5 text-sm font-medium rounded-sm border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1B2D] ${
              active === cat.id
                ? 'bg-[#C9A961] text-[#0F1B2D] border-[#C9A961]'
                : 'border-[rgba(122,130,148,0.3)] text-[#7A8294] hover:border-[rgba(201,169,97,0.4)] hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {visible.map(item => (
          <PhotoItem key={item.id} item={item} />
        ))}
      </div>

      <p className="text-center text-[#7A8294] text-xs mt-6">
        Gallery requires real photography before launch. Minimum 12 before/after pairs.
      </p>
    </div>
  );
}
