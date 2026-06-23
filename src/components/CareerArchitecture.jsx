import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal } from 'lucide-react';

const roles = [
  {
    period: '2023 to Present',
    role: 'Marketing & Digital Transformation Manager',
    company: 'Mahindra Emirates Vehicle Armouring',
    context: 'B2B and B2G defense solutions',
    summary: 'Marketing operations, CRM workflows, digital roadmaps, lead generation, and technical systems for high-consideration markets.',
    stack: ['Python', 'Apify', 'Salesforce', 'Power BI', 'LinkedIn Ads'],
    highlights: ['Data sourcing', 'CRM visibility', 'Market development']
  },
  {
    period: '2022 to 2023',
    role: 'Digital Marketing Consultant',
    company: 'Coach2Reach Inc.',
    context: 'B2C EdTech',
    summary: 'Paid acquisition, conversion tracking, and performance analysis for a global education platform.',
    stack: ['Google Ads', 'GA4', 'GTM', 'Analytics'],
    highlights: ['Paid acquisition', 'Tracking', 'Performance review']
  },
  {
    period: '2020 to 2021',
    role: 'Social Media Specialist',
    company: 'ChalksnSlate Media',
    context: 'B2B media agency',
    summary: 'Creative operations, campaign execution, and performance improvement across client marketing work.',
    stack: ['Meta Ads', 'Creative Strategy', 'Content Systems', 'Reporting'],
    highlights: ['Campaign execution', 'Creative ops', 'Reporting']
  },
  {
    period: '2016 to 2020',
    role: 'Sr. Digital Marketing Associate',
    company: 'Markon Strategy Consulting',
    context: 'B2B marketing startup',
    summary: 'Landing pages, UI/UX, campaign execution, and workflow automation across early digital marketing systems.',
    stack: ['HTML/CSS', 'Wireframing', 'Automation Tools', 'UI/UX'],
    highlights: ['Landing pages', 'Workflow support', 'Technical implementation']
  }
];

export default function CareerArchitecture() {
  return (
    <section id="background" className="section-wrap bg-paper">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow mb-4">Background</p>
            <h2 className="section-title-sm max-w-2xl">A marketing path with a technical base.</h2>
          </div>
          <p className="section-copy lg:max-w-xl">
            The common thread is operational: campaigns, websites, CRM systems, tracking, reporting, and workflows that make visible marketing work function better.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {roles.map((role, index) => (
            <motion.article
              key={`${role.company}-${role.period}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.035, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="pill bg-stone-50">{role.period}</span>
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-accent">
                  {role.context}
                </span>
              </div>

              <h3 className="text-2xl font-black leading-tight tracking-tight text-stone-950">{role.role}</h3>
              <p className="mt-2 text-base font-bold text-stone-500">{role.company}</p>
              <p className="mt-4 card-copy">{role.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {role.highlights.map((item) => (
                  <span key={item} className="pill bg-stone-50">{item}</span>
                ))}
              </div>

              <div className="mt-5 border-t border-stone-200 pt-5">
                <div className="flex flex-wrap gap-2">
                  {role.stack.map((tool) => (
                    <span key={tool} className="rounded-full bg-stone-950 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-white">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[28px] border border-stone-800 bg-stone-950 p-6 text-white">
            <Terminal className="mb-4 text-accent" size={20} />
            <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-stone-500">Education</p>
            <p className="mt-2 text-2xl font-black tracking-tight">B.Tech in Computer Science</p>
            <p className="mt-3 text-sm leading-7 text-stone-400">The technical foundation behind how I approach marketing systems, automation, and data flow.</p>
          </div>
          <div className="rounded-[28px] border border-stone-200 bg-white p-6">
            <Code2 className="mb-4 text-accent" size={22} />
            <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-stone-400">Current direction</p>
            <p className="mt-2 text-2xl font-black tracking-tight text-stone-950">Building toward practical GTM Engineering.</p>
            <p className="mt-3 text-sm leading-7 text-stone-600">The next layer is proof: enrichment logic, lead routing, account qualification, procurement signal detection, and attribution workflows that can be shown through demos, code logs, and sanitized outputs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
