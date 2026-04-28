// FAQ accordion. Smooth height animation, keyboard accessible.
// Schema markup (FAQPage JSON-LD) is handled in the parent Astro page.
import { useState, useRef } from 'react';
import type { FAQ } from '@/data/faq';

interface Props {
  faqs: FAQ[];
}

function AccordionItem({ faq, isOpen, onToggle }: {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-[rgba(122,130,148,0.2)] last:border-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full text-left flex items-center justify-between gap-4 py-5 text-sm font-medium text-white hover:text-[#C9A961] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1B2D] rounded-sm"
      >
        <span className="leading-snug">{faq.question}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 300ms ease-out',
            flexShrink: 0,
          }}
        >
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? (contentRef.current?.scrollHeight ?? 0) + 'px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 300ms ease-out',
        }}
      >
        <p className="text-[#7A8294] text-sm leading-relaxed pb-5 pr-8">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQAccordion({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {faqs.map((faq, i) => (
        <AccordionItem
          key={i}
          faq={faq}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
