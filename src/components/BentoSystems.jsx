import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Database, LineChart, Megaphone, PanelsTopLeft, Workflow } from 'lucide-react';

const capabilities = [
  {
    icon: Database,
    title: 'Data Extraction',
    kicker: 'Sourcing layer',
    copy: 'Python and Apify workflows for sourcing, cleaning, and structuring public B2B and B2G data.',
    points: ['Public source mapping', 'Structured output', 'CRM-ready records']
  },
  {
    icon: Workflow,
    title: 'CRM & Pipeline Operations',
    kicker: 'Operating layer',
    copy: 'Salesforce, Zoho, and custom CRM workflows for tracking long-cycle sales activity with less manual drift.',
    points: ['Pipeline views', 'Field logic', 'Handoff clarity']
  },
  {
    icon: LineChart,
    title: 'Analytics & Attribution',
    kicker: 'Visibility layer',
    copy: 'GA4, Google Tag Manager, MS Clarity, and Power BI for tracking campaign performance and conversion paths.',
    points: ['Event tracking', 'Dashboards', 'Performance diagnosis']
  },
  {
    icon: Megaphone,
    title: 'Paid Acquisition',
    kicker: 'Demand layer',
    copy: 'Google Ads, LinkedIn Campaign Manager, and Meta Ads execution across acquisition and lead generation campaigns.',
    points: ['Search intent', 'Audience logic', 'Reporting']
  },
  {
    icon: Bot,
    title: 'AI-Assisted Workflows',
    kicker: 'Research layer',
    copy: 'GPT-4o and Midjourney for research support, content workflows, visual assets, and faster marketing operations.',
    points: ['Prompted research', 'Asset support', 'Acceleration']
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
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow mb-4">Core Systems</p>
            <h2 className="section-title-sm max-w-2xl">The operating layer beneath campaigns.</h2>
          </div>
          <p className="section-copy lg:max-w-xl">
            Campaigns become useful when sourcing, CRM logic, tracking, handoff, and reporting work as one system. These are the layers I focus on.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.035, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-[26px] border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-900/5"
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-stone-950 text-white transition-colors group-hover:bg-accent">
                    <Icon size={19} />
                  </div>
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-stone-400">{item.kicker}</span>
                </div>
                <h3 className="text-xl font-black tracking-tight text-stone-950">{item.title}</h3>
                <p className="mt-3 card-copy">{item.copy}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.points.map((point) => (
                    <span key={point} className="pill bg-stone-50">{point}</span>
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
