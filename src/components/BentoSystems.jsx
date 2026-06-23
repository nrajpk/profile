import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Database, LineChart, Megaphone, PanelsTopLeft, Workflow } from 'lucide-react';

const capabilities = [
  {
    icon: Database,
    title: 'Data Extraction',
    kicker: 'Sourcing layer',
    copy: 'Python and Apify workflows for sourcing, cleaning, and structuring public B2B and B2G data.',
    points: ['Public source mapping', 'Structured CSV output', 'CRM-ready records']
  },
  {
    icon: Workflow,
    title: 'CRM & Pipeline Operations',
    kicker: 'Operating layer',
    copy: 'Salesforce, Zoho, and custom CRM workflows for tracking long-cycle sales activity with less manual drift.',
    points: ['Pipeline views', 'Field logic', 'Sales handoff clarity']
  },
  {
    icon: LineChart,
    title: 'Analytics & Attribution',
    kicker: 'Visibility layer',
    copy: 'GA4, Google Tag Manager, MS Clarity, and Power BI for tracking campaign performance and conversion paths.',
    points: ['Event tracking', 'Dashboard views', 'Performance diagnosis']
  },
  {
    icon: Megaphone,
    title: 'Paid Acquisition',
    kicker: 'Demand layer',
    copy: 'Google Ads, LinkedIn Campaign Manager, and Meta Ads execution across acquisition and lead generation campaigns.',
    points: ['Search intent', 'Audience logic', 'Campaign reporting']
  },
  {
    icon: Bot,
    title: 'AI-Assisted Workflows',
    kicker: 'Research layer',
    copy: 'GPT-4o and Midjourney for research support, content workflows, visual assets, and faster marketing operations.',
    points: ['Prompted research', 'Asset support', 'Workflow acceleration']
  },
  {
    icon: PanelsTopLeft,
    title: 'Conversion Experience',
    kicker: 'Interface layer',
    copy: 'Website and landing page execution that supports trust, clarity, tracking, and campaign performance.',
    points: ['Page structure', 'CTA hierarchy', 'Tracking-ready layouts']
  }
];

export default function BentoSystems() {
  return (
    <section id="capabilities" className="section-wrap bg-paper">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow mb-5">Core Systems</p>
            <h2 className="section-title">Practical layers behind cleaner growth work.</h2>
          </div>
          <p className="section-copy lg:max-w-xl">
            The work is not only campaigns. It is the tracking, CRM logic, data flow, source quality, and handoff structure that decide whether campaigns become useful pipeline.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-[28px] border border-stone-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-900/5"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-950 text-white transition-colors group-hover:bg-accent">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400">{item.kicker}</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-stone-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">{item.copy}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {item.points.map((point) => (
                    <span key={point} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-stone-500">
                      {point}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
