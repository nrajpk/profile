import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BellRing, Bot, ChevronRight, Filter, GitBranch, Radar } from 'lucide-react';

const labProjects = [
  {
    id: 'waterfall',
    icon: GitBranch,
    title: 'Custom Multi-Provider Enrichment Waterfall',
    status: 'Currently Building',
    description: 'A Python-based workflow for testing fallback logic across multiple enrichment sources.',
    problem: 'Relying on one data source often leaves gaps in prospect records. A waterfall approach helps test multiple sources in sequence.',
    workflow: ['Read raw CSV', 'Query Provider A', 'Check response quality', 'Route missing records to Provider B', 'Output enriched record with source tag'],
    tools: ['Python', 'REST APIs', 'CSV processing', 'GitHub'],
    proof: 'Code snippet, terminal output, fallback logic diagram, sample enriched CSV.'
  },
  {
    id: 'router',
    icon: BellRing,
    title: 'Real-Time Inbound Signal Router',
    status: 'Planned',
    description: 'A webhook-based workflow for routing inbound form submissions and sending instant alerts.',
    problem: 'Inbound leads lose value when they sit unassigned or unnoticed after submission.',
    workflow: ['Capture form submission', 'Parse JSON payload', 'Apply routing logic', 'Create or update CRM record', 'Send Slack alert'],
    tools: ['Webhooks', 'Python or n8n', 'Slack API', 'HTML/CSS'],
    proof: 'Form submission demo, Slack alert screenshot, routing logic, CRM record update.'
  },
  {
    id: 'scoring',
    icon: Bot,
    title: 'LLM-Assisted Account Qualification Engine',
    status: 'Planned',
    description: 'A GPT-4o API workflow for scoring company profiles against defined ICP rules.',
    problem: 'Sales teams often qualify accounts manually using inconsistent judgment. This workflow applies structured criteria for first-pass account review.',
    workflow: ['Input company profile', 'Apply ICP rules through structured prompt', 'Call GPT-4o API', 'Parse JSON response', 'Output score and qualification reason'],
    tools: ['Python', 'OpenAI API', 'Prompt engineering', 'JSON parsing'],
    proof: 'Prompt constraints, sample JSON output, scoring criteria, test dataset.'
  },
  {
    id: 'signals',
    icon: Radar,
    title: 'Automated B2B Procurement Signal Harvester',
    status: 'Building',
    description: 'A portfolio version of procurement signal monitoring using public sources and structured output.',
    problem: 'Teams in niche B2B markets need earlier visibility into relevant public signals without building a manual research habit.',
    workflow: ['Monitor public sources', 'Extract relevant records', 'Normalize fields', 'Apply fit filters', 'Prepare CRM-ready export'],
    tools: ['Python', 'Apify', 'Public sources', 'CRM import logic'],
    proof: 'Architecture map, sanitized run log, sample structured output.'
  },
  {
    id: 'attribution',
    icon: Filter,
    title: 'Closed-Loop Ads Attribution Engine',
    status: 'Planned',
    description: 'A workflow concept for connecting CRM revenue outcomes back to ad performance reporting.',
    problem: 'Ad reporting can overvalue cheap form fills when it is not connected to downstream opportunity quality.',
    workflow: ['Export CRM outcome data', 'Map lead source and click identifiers', 'Format conversion payload', 'Test offline conversion logic', 'Report limitations clearly'],
    tools: ['Google Ads API', 'Python', 'CRM data', 'CSV testing'],
    proof: 'Data loop diagram, dummy GCLID CSV, upload payload example.'
  }
];

export default function UtilityLab() {
  const [activeId, setActiveId] = useState(labProjects[0].id);
  const active = labProjects.find((project) => project.id === activeId) ?? labProjects[0];
  const Icon = active.icon;

  return (
    <section id="lab" className="section-wrap border-y border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow mb-5">GTM Systems Lab</p>
            <h2 className="section-title">Building the next proof layer.</h2>
          </div>
          <p className="section-copy lg:max-w-xl">
            Active portfolio projects focused on enrichment logic, routing, qualification, procurement signals, and attribution. The status labels are intentional: building means in progress, planned means not claimed as completed.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {labProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveId(project.id)}
                className={`w-full rounded-3xl border p-5 text-left transition duration-300 ${
                  activeId === project.id
                    ? 'border-stone-950 bg-stone-950 text-white shadow-xl shadow-stone-900/10'
                    : 'border-stone-200 bg-paper text-stone-950 hover:border-stone-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className={`font-mono text-[9px] font-bold uppercase tracking-[0.2em] ${activeId === project.id ? 'text-accent' : 'text-stone-400'}`}>
                      {project.status}
                    </p>
                    <p className="mt-2 font-bold tracking-tight">{project.title}</p>
                  </div>
                  <ChevronRight size={18} className={activeId === project.id ? 'text-accent' : 'text-stone-300'} />
                </div>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[36px] border border-stone-200 bg-paper p-7 md:p-9"
            >
              <div className="mb-8 flex items-start justify-between gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-stone-950 shadow-sm">
                  <Icon size={22} />
                </div>
                <span className="rounded-full border border-stone-200 bg-white px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-stone-500">
                  {active.status}
                </span>
              </div>

              <h3 className="text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{active.title}</h3>
              <p className="mt-4 text-base leading-8 text-stone-600">{active.description}</p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-stone-200 bg-white p-5">
                  <p className="mb-2 font-mono text-[9px] font-bold uppercase tracking-widest text-stone-400">Problem</p>
                  <p className="text-sm leading-7 text-stone-600">{active.problem}</p>
                </div>
                <div className="rounded-3xl border border-stone-200 bg-white p-5">
                  <p className="mb-2 font-mono text-[9px] font-bold uppercase tracking-widest text-stone-400">Proof to show</p>
                  <p className="text-sm leading-7 text-stone-600">{active.proof}</p>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-5">
                <p className="mb-4 font-mono text-[9px] font-bold uppercase tracking-widest text-stone-400">Workflow</p>
                <div className="grid gap-3 md:grid-cols-5">
                  {active.workflow.map((step, index) => (
                    <div key={step} className="rounded-2xl bg-stone-50 p-4">
                      <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-accent">0{index + 1}</p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-stone-900">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {active.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-stone-200 bg-white px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-stone-500">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
