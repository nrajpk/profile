import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, DatabaseZap, LayoutDashboard } from 'lucide-react';

const builtWork = [
  {
    icon: DatabaseZap,
    title: 'B2G Procurement Data Extraction Workflow',
    status: 'Built, Mahindra Emirates Vehicle Armouring',
    description: 'Automated workflows for sourcing and structuring defense and procurement-related contact data.',
    workflow: ['Map public sources', 'Extract and clean records', 'Prepare CRM or campaign output'],
    proof: ['Architecture diagram', 'Sanitized extraction log', 'Cleaned output sample'],
    tools: ['Python', 'Apify', 'LinkedIn Ads', 'CRM workflows'],
    cta: 'View workflow'
  },
  {
    icon: BarChart3,
    title: 'Ads, Analytics & Attribution Setup',
    status: 'Built, Coach2Reach',
    description: 'Campaign tracking and reporting workflows connecting paid acquisition activity with performance visibility.',
    workflow: ['Configure tracking events', 'Set up GA4 and GTM', 'Build reporting views'],
    proof: ['Blurred dashboard', 'Tracking structure', 'Campaign performance view'],
    tools: ['Google Ads', 'GA4', 'Google Tag Manager', 'MS Power BI'],
    cta: 'View tracking setup'
  },
  {
    icon: LayoutDashboard,
    title: 'Custom CRM Product Ownership',
    status: 'Built, Enterprise CRM work',
    description: 'CRM workflow and dashboard ownership for long-cycle sales visibility across regions.',
    workflow: ['Map sales process', 'Structure fields and views', 'Improve pipeline visibility'],
    proof: ['Pipeline structure', 'Dashboard wireframe', 'Workflow map'],
    tools: ['Custom CRM', 'Salesforce', 'Zoho', 'Power BI'],
    cta: 'View CRM work'
  }
];

function MiniList({ label, items }) {
  return (
    <div>
      <p className="mb-2 font-mono text-[9px] font-bold uppercase tracking-widest text-stone-500">{label}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-stone-400">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HighTicketProof() {
  return (
    <section id="work" className="section-wrap bg-stone-950 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow mb-4 text-accent">Built Work</p>
            <h2 className="section-title-sm text-white">Proof from production roles.</h2>
          </div>
          <p className="section-copy text-stone-400 lg:max-w-xl">
            Professional work and operating responsibilities from real roles. No invented metrics, no inflated case study claims, only systems that can be explained with sanitized proof.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {builtWork.map((work, index) => {
            const Icon = work.icon;
            return (
              <motion.article
                key={work.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.45, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="flex min-h-full flex-col rounded-[28px] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/[0.065]"
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-stone-950">
                    <Icon size={19} />
                  </div>
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-accent">
                    Built
                  </span>
                </div>

                <h3 className="text-xl font-black leading-tight tracking-tight text-white">{work.title}</h3>
                <p className="mt-3 font-mono text-[9px] font-bold uppercase tracking-[0.17em] text-stone-500">{work.status}</p>
                <p className="mt-4 text-sm leading-7 text-stone-400">{work.description}</p>

                <div className="mt-6 grid gap-5">
                  <MiniList label="Workflow" items={work.workflow} />
                  <MiniList label="Proof to show" items={work.proof} />
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {work.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-stone-400">
                      {tool}
                    </span>
                  ))}
                </div>

                <a href="mailto:nrajpk@outlook.com" className="mt-auto pt-7 text-xs font-black uppercase tracking-[0.18em] text-white transition-colors hover:text-accent">
                  {work.cta}
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
