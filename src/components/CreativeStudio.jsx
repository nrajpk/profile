import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MonitorSmartphone, MousePointerClick, PenTool } from 'lucide-react';

const items = [
  {
    icon: MonitorSmartphone,
    title: 'Landing Page Systems',
    copy: 'Page structures built for clarity, trust, tracking, and lead capture rather than decoration.'
  },
  {
    icon: MousePointerClick,
    title: 'Conversion Paths',
    copy: 'CTA hierarchy, form flow, and intent capture designed around the campaign objective.'
  },
  {
    icon: PenTool,
    title: 'AI-Assisted Assets',
    copy: 'Visual and content workflows that support campaigns without turning the site into a creative portfolio.'
  }
];

export default function CreativeStudio() {
  return (
    <section id="conversion" className="section-wrap bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow mb-5">Conversion Experience</p>
          <h2 className="section-title">Digital experience as part of the system.</h2>
          <p className="section-copy mt-6">
            This section exists as a supporting capability, not a separate identity. The goal is better campaign flow, cleaner tracking, and more useful lead capture.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[28px] border border-stone-200 bg-paper p-7"
              >
                <Icon className="text-accent" size={22} />
                <h3 className="mt-7 text-xl font-bold tracking-tight text-stone-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">{item.copy}</p>
              </motion.article>
            );
          })}
        </div>

        <a href="#contact" className="mt-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-950 hover:text-accent">
          Discuss the workflow <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}
