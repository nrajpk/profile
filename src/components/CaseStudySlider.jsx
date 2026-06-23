import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cases = [
  {
    title: 'Data Extraction Workflow',
    label: 'Built',
    copy: 'Sourcing and structuring public B2B/B2G data for outbound preparation.'
  },
  {
    title: 'Tracking Setup',
    label: 'Built',
    copy: 'GA4 and GTM measurement logic connected to campaign performance review.'
  },
  {
    title: 'Enrichment Waterfall',
    label: 'Building',
    copy: 'Python fallback logic for testing multiple enrichment sources in sequence.'
  }
];

export default function CaseStudySlider() {
  const [index, setIndex] = useState(0);
  const active = cases[index];

  const move = (direction) => {
    setIndex((current) => (current + direction + cases.length) % cases.length);
  };

  return (
    <div className="rounded-[30px] border border-stone-200 bg-white p-6">
      <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-accent">{active.label}</p>
      <h3 className="mt-3 text-2xl font-bold tracking-tight text-stone-950">{active.title}</h3>
      <p className="mt-4 text-sm leading-7 text-stone-600">{active.copy}</p>
      <div className="mt-7 flex gap-2">
        <button onClick={() => move(-1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 hover:border-stone-950" aria-label="Previous case study">
          <ChevronLeft size={16} />
        </button>
        <button onClick={() => move(1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 hover:border-stone-950" aria-label="Next case study">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
