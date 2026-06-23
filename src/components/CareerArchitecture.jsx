import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Code2, Terminal } from 'lucide-react';

const roles = [
  {
    id: 'role-04',
    period: '2023 to Present',
    role: 'Marketing & Digital Transformation Manager',
    company: 'Mahindra Emirates Vehicle Armouring',
    location: 'UAE, global markets',
    context: 'B2B and B2G defense solutions',
    summary: 'Marketing operations, CRM workflows, digital roadmaps, lead generation, and technical systems for high-consideration markets.',
    stack: ['Python', 'Apify', 'Salesforce', 'Power BI', 'LinkedIn Ads'],
    highlights: [
      'Worked across digital marketing, CRM visibility, and market development workflows.',
      'Used Python and extraction workflows to support public data sourcing and campaign preparation.',
      'Supported systems that connect marketing activity with sales visibility.'
    ]
  },
  {
    id: 'role-03',
    period: '2022 to 2023',
    role: 'Digital Marketing Consultant',
    company: 'Coach2Reach Inc.',
    location: 'Global, remote',
    context: 'B2C EdTech',
    summary: 'Paid acquisition, conversion tracking, and performance analysis for a global education platform.',
    stack: ['Google Ads', 'GA4', 'GTM', 'Analytics'],
    highlights: [
      'Managed Google Ads execution and campaign performance review.',
      'Configured conversion tracking and measurement workflows.',
      'Translated acquisition data into practical scaling and optimization decisions.'
    ]
  },
  {
    id: 'role-02',
    period: '2020 to 2021',
    role: 'Social Media Specialist',
    company: 'ChalksnSlate Media',
    location: 'India, hybrid',
    context: 'B2B media agency',
    summary: 'Creative operations, campaign execution, and performance improvement across client marketing work.',
    stack: ['Meta Ads', 'Creative Strategy', 'Content Systems', 'Reporting'],
    highlights: [
      'Worked on social media execution, creative direction, and campaign improvement.',
      'Aligned content output with client objectives and audience behavior.',
      'Built an early foundation in the operational side of marketing delivery.'
    ]
  },
  {
    id: 'role-01',
    period: '2016 to 2020',
    role: 'Sr. Digital Marketing Associate',
    company: 'Markon Strategy Consulting',
    location: 'India, hybrid',
    context: 'B2B marketing startup',
    summary: 'Landing pages, UI/UX, campaign execution, and workflow automation across early digital marketing systems.',
    stack: ['HTML/CSS', 'Wireframing', 'Automation Tools', 'UI/UX'],
    highlights: [
      'Built and refined conversion-focused landing page experiences.',
      'Supported automation and workflow improvements for campaign delivery.',
      'Worked close to both creative execution and technical implementation.'
    ]
  }
];

export default function CareerArchitecture() {
  const [activeId, setActiveId] = useState(roles[0].id);
  const active = roles.find((role) => role.id === activeId) ?? roles[0];

  return (
    <section id="background" className="section-wrap bg-paper">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow mb-5">Background</p>
            <h2 className="section-title">A marketing path with a technical base.</h2>
            <p className="section-copy mt-6">
              The common thread is operational: campaigns, websites, CRM systems, tracking, reporting, and workflows that make the visible marketing work function better.
            </p>

            <div className="mt-10 space-y-3">
              {roles.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`w-full rounded-3xl border p-5 text-left transition duration-300 ${
                    activeId === item.id
                      ? 'border-stone-950 bg-white shadow-xl shadow-stone-900/5'
                      : 'border-transparent bg-transparent text-stone-500 hover:border-stone-200 hover:bg-white/60'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-stone-400">{item.period}</p>
                      <p className={`mt-2 font-bold ${activeId === item.id ? 'text-stone-950' : 'text-stone-600'}`}>{item.company}</p>
                    </div>
                    <ChevronRight size={18} className={activeId === item.id ? 'text-accent' : 'text-stone-300'} />
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-[30px] border border-stone-800 bg-stone-950 p-7 text-white">
              <Terminal className="mb-4 text-accent" size={20} />
              <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-stone-500">Education</p>
              <p className="mt-2 text-xl font-bold">B.Tech in Computer Science</p>
              <p className="mt-2 text-sm leading-6 text-stone-400">The technical foundation behind the way I approach marketing systems, automation, and data flow.</p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={active.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[40px] border border-stone-200 bg-white p-8 shadow-sm md:p-10"
            >
              <div className="mb-7 flex flex-wrap gap-2">
                <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-stone-500">{active.location}</span>
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-accent">{active.context}</span>
              </div>

              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">{active.period}</p>
              <h3 className="mt-3 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{active.role}</h3>
              <p className="mt-2 text-lg font-semibold text-stone-500">{active.company}</p>
              <p className="mt-7 max-w-2xl text-base leading-8 text-stone-600">{active.summary}</p>

              <div className="mt-9 space-y-4">
                <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-stone-400">Role signals</p>
                {active.highlights.map((point) => (
                  <div key={point} className="flex gap-4 rounded-2xl bg-stone-50 p-4">
                    <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <p className="text-sm leading-7 text-stone-600">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-2 border-t border-stone-200 pt-7">
                {active.stack.map((tool) => (
                  <span key={tool} className="rounded-full bg-stone-950 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-white">
                    {tool}
                  </span>
                ))}
              </div>

              <Code2 className="mt-10 text-stone-200" size={34} />
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
