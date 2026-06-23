import React from 'react';
import { motion } from 'framer-motion';
import { BellRing, Bot, Filter, GitBranch, Radar } from 'lucide-react';

const labProjects = [
  {
    id: 'waterfall',
    icon: GitBranch,
    title: 'Custom Multi-Provider Enrichment Waterfall',
    status: 'Currently Building',
    description: 'A Python workflow for testing fallback logic across multiple enrichment sources.',
    workflow: ['Read CSV', 'Query source A', 'Fallback source B', 'Export enriched record'],
    tools: ['Python', 'REST APIs', 'CSV', 'GitHub'],
    proof: 'Code log, terminal output, fallback diagram, sample enriched CSV.'
  },
  {
    id: 'router',
    icon: BellRing,
    title: 'Real-Time Inbound Signal Router',
    status: 'Planned',
    description: 'A webhook workflow that routes form submissions and sends instant sales alerts.',
    workflow: ['Capture form', 'Parse payload', 'Apply rules', 'Send Slack alert'],
    tools: ['Webhooks', 'Python or n8n', 'Slack API', 'HTML/CSS'],
    proof: 'Form demo, Slack alert screenshot, routing logic, CRM record update.'
  },
  {
    id: 'scoring',
    icon: Bot,
    title: 'LLM-Assisted Account Qualification Engine',
    status: 'Planned',
    description: 'A GPT-4o API workflow for scoring company profiles against defined ICP rules.',
    workflow: ['Input profile', 'Apply ICP prompt', 'Parse JSON', 'Output score'],
    tools: ['Python', 'OpenAI API', 'Prompting', 'JSON'],
    proof: 'Prompt constraints, sample JSON output, scoring criteria, test dataset.'
  },
  {
    id: 'signals',
    icon: Radar,
    title: 'Automated B2B Procurement Signal Harvester',
    status: 'Building',
    description: 'A portfolio version of public procurement signal monitoring and structured output.',
    workflow: ['Monitor sources', 'Extract records', 'Apply filters', 'Prepare CRM export'],
    tools: ['Python', 'Apify', 'Public sources', 'CRM import'],
    proof: 'Architecture map, sanitized run log, sample structured output.'
  },
  {
    id: 'attribution',
    icon: Filter,
    title: 'Closed-Loop Ads Attribution Engine',
    status: 'Planned',
    description: 'A workflow concept for connecting CRM outcomes back to ad performance reporting.',
    workflow: ['Export CRM data', 'Map identifiers', 'Format payload', 'Report limits'],
    tools: ['Google Ads API', 'Python', 'CRM data', 'CSV testing'],
    proof: 'Data loop diagram, dummy GCLID CSV, upload payload example.'
  }
];

function statusClasses(status) {
  if (status === 'Currently Building') return 'border-accent/30 bg-accent/10 text-accent';
  if (status === 'Building') return 'border-stone-300 bg-white text-stone-950';
  return 'border-stone-200 bg-white text-stone-500';
}

export default function UtilityLab() {
  return (
    <section id="lab" className="section-wrap border-y border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow mb-4">GTM Systems Lab</p>
            <h2 className="section-title-sm max-w-2xl">Projects being turned into proof.</h2>
          </div>
          <p className="section-copy lg:max-w-xl">
            Active and planned portfolio builds around enrichment logic, routing, qualification, procurement signals, and attribution. Status labels are intentional, planned is not claimed as completed.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {labProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.45, delay: index * 0.035, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[28px] border border-stone-200 bg-paper p-6 transition duration-300 hover:-translate-y-1 hover:border-stone-300 hover:bg-white hover:shadow-xl hover:shadow-stone-900/5"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-stone-950 shadow-sm">
                    <Icon size={19} />
                  </div>
                  <span className={`rounded-full border px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest ${statusClasses(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-black leading-tight tracking-tight text-stone-950">{project.title}</h3>
                <p className="mt-3 card-copy">{project.description}</p>

                <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-4">
                  <p className="mb-3 font-mono text-[9px] font-bold uppercase tracking-widest text-stone-400">Workflow</p>
                  <div className="grid gap-2">
                    {project.workflow.map((step, stepIndex) => (
                      <div key={step} className="flex items-center gap-3 text-sm font-semibold text-stone-800">
                        <span className="font-mono text-[9px] font-bold text-accent">0{stepIndex + 1}</span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <p className="mb-2 font-mono text-[9px] font-bold uppercase tracking-widest text-stone-400">Proof target</p>
                  <p className="text-sm leading-6 text-stone-600">{project.proof}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="pill bg-white">{tool}</span>
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
