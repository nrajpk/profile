import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, DatabaseZap, LayoutDashboard } from 'lucide-react';

const builtWork = [
  {
    icon: DatabaseZap,
    title: 'B2G Procurement Data Extraction Workflow',
    status: 'Built, Mahindra Emirates Vehicle Armouring',
    description: 'Automated workflows for sourcing and structuring defense and procurement-related contact data.',
    problem: 'Manual sourcing of niche B2B and B2G contacts is slow, inconsistent, and difficult to scale.',
    workflow: 'Identify target sources, run Python and Apify extraction workflow, clean records, prepare structured data for CRM import or outbound campaigns.',
    tools: ['Python', 'Apify', 'LinkedIn Ads', 'CRM workflows'],
    proof: 'Architecture diagram, sanitized extraction log, cleaned output sample.',
    cta: 'View Workflow'
  },
  {
    icon: BarChart3,
    title: 'Ads, Analytics & Attribution Setup',
    status: 'Built, Coach2Reach',
    description: 'Campaign tracking and reporting workflows connecting paid acquisition activity with performance visibility.',
    problem: 'Marketing teams often track clicks and leads without enough clarity on which campaigns are producing qualified opportunities.',
    workflow: 'Configure tracking events, set up GA4 and GTM measurement, monitor campaign performance, build reporting views for acquisition and conversion analysis.',
    tools: ['Google Ads', 'GA4', 'Google Tag Manager', 'MS Power BI'],
    proof: 'Blurred reporting dashboard, tracking structure, campaign performance view.',
    cta: 'View Tracking Setup'
  },
  {
    icon: LayoutDashboard,
    title: 'Custom CRM Product Ownership',
    status: 'Built, Enterprise CRM work',
    description: 'CRM workflow and dashboard ownership for long-cycle sales visibility across regions.',
    problem: 'Fragmented pipeline data makes it harder to understand active opportunities, handoffs, and sales movement.',
    workflow: 'Map sales process, structure fields and views, coordinate dashboard requirements, improve pipeline visibility for management review.',
    tools: ['Custom CRM', 'Salesforce', 'Zoho', 'Power BI'],
    proof: 'Sanitized pipeline structure, dashboard wireframe, workflow map.',
    cta: 'View CRM Work'
  }
];

export default function HighTicketProof() {
  return (
    <section id="work" className="section-wrap bg-stone-950 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow mb-5 text-accent">Built Work</p>
            <h2 className="section-title text-white">Production work, kept factual.</h2>
          </div>
          <p className="section-copy text-stone-400 lg:max-w-xl">
            These are professional deployments and operating responsibilities from real roles. No invented metrics, no inflated case study claims, only the systems and workflows that can be shown with sanitized proof.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {builtWork.map((work, index) => {
            const Icon = work.icon;
            return (
              <motion.article
                key={work.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="flex min-h-full flex-col rounded-[32px] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/[0.06]"
              >
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-stone-950">
                    <Icon size={20} />
                  </div>
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-accent">
                    Built
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white">{work.title}</h3>
                <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-stone-500">{work.status}</p>
                <p className="mt-5 text-sm leading-7 text-stone-400">{work.description}</p>

                <div className="mt-7 space-y-5 text-sm leading-7 text-stone-400">
                  <div>
                    <p className="mb-1 font-mono text-[9px] font-bold uppercase tracking-widest text-stone-500">Problem</p>
                    <p>{work.problem}</p>
                  </div>
                  <div>
                    <p className="mb-1 font-mono text-[9px] font-bold uppercase tracking-widest text-stone-500">Workflow</p>
                    <p>{work.workflow}</p>
                  </div>
                  <div>
                    <p className="mb-1 font-mono text-[9px] font-bold uppercase tracking-widest text-stone-500">Proof to show</p>
                    <p>{work.proof}</p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {work.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-stone-400">
                      {tool}
                    </span>
                  ))}
                </div>

                <a href="mailto:nrajpk@outlook.com" className="mt-8 inline-flex text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:text-accent">
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
