import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Play,
  Bot,
  BellRing,
  ScanSearch,
  ArrowUpRight
} from "lucide-react";

/* ---------- Micro-demos (interactive toys, clearly labeled) ---------- */

const EnrichmentDemo = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="bg-stone-950 p-4 rounded-xl font-mono text-[9px] mt-4 border border-stone-800">
      <div className="flex justify-between items-center mb-3">
        <span className="text-stone-500 uppercase tracking-tighter">
          enrichment_waterfall.py
        </span>
        <button
          onClick={() => setActive(!active)}
          className="text-zapier hover:text-white transition-colors"
          aria-label="Run demo"
          type="button"
        >
          <Play size={12} fill={active ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="space-y-1.5 overflow-hidden">
        <p className="text-stone-600 font-bold leading-none italic">
          &gt; reading raw_contacts.csv...
        </p>
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -5 }}
              className="space-y-1 text-blue-400 border-l border-blue-900/50 pl-2 ml-1"
            >
              <p>&gt; Provider_A: no email found</p>
              <p>&gt; trying Provider_B instead</p>
              <p className="text-green-400 font-bold">
                &gt; output: enriched_record.csv
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const SignalHarvesterDemo = () => (
  <div className="mt-4 p-4 border border-dashed border-stone-200 rounded-xl font-mono text-[8px] text-stone-400 uppercase tracking-[0.18em] bg-white">
    <div className="flex items-center gap-2 mb-3">
      <ScanSearch size={12} className="text-zapier" />
      Public signal monitor
    </div>
    <div className="space-y-2">
      {["source_url", "rfp_keyword", "company_domain"].map((item) => (
        <div
          key={item}
          className="flex justify-between border-b border-stone-100 pb-1"
        >
          <span>{item}</span>
          <span className="text-stone-300">queued</span>
        </div>
      ))}
    </div>
  </div>
);

const RouterDemo = () => (
  <div className="mt-4 p-4 bg-stone-950 rounded-xl border border-stone-800 font-mono text-[9px]">
    <div className="flex items-center gap-2 mb-3">
      <div className="px-1.5 py-0.5 bg-zapier/20 text-zapier rounded border border-zapier/30">
        WEBHOOK
      </div>
      <span className="text-stone-600">→</span>
      <span className="text-blue-400 font-bold uppercase tracking-tighter">
        Slack Alert
      </span>
    </div>
    <div className="space-y-2">
      <div className="h-1 w-full bg-stone-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "74%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="h-full bg-zapier"
        />
      </div>
      <div className="flex justify-between text-stone-500 uppercase tracking-widest">
        <span>Lead parsed</span>
        <span>route: gcc</span>
      </div>
    </div>
  </div>
);

const ScoringDemo = () => {
  const [active, setActive] = useState("score");

  return (
    <div className="mt-4 p-4 bg-stone-50 rounded-xl border border-stone-200 font-mono text-[9px]">
      <div className="flex gap-2 mb-3">
        {["score", "rules"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            type="button"
            className={`px-2 py-1 rounded uppercase font-bold ${
              active === tab
                ? "bg-stone-900 text-white"
                : "bg-white text-stone-400 border border-stone-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
        >
          {active === "score" ? (
            <div className="text-stone-500 leading-relaxed">
              &#123; "fit_score": 78,
              <br />
              "reason": "fleet and procurement signal present" &#125;
            </div>
          ) : (
            <div className="text-stone-500 leading-relaxed">
              rules: title_match, market_fit,
              <br />
              public_signal, exclusion_filter
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

/* ---------- Lab projects: public rebuilds of production patterns ---------- */

const labProjects = [
  {
    id: "enrichment-waterfall",
    title: "Enrichment Waterfall",
    desc: "Fills in missing contact data by trying one provider, then falling back to the next — so incomplete records get completed and you only pay for lookups that work.",
    productionNote: "Runs in production as the enrichment stage of the outbound pipeline.",
    productionHref: "/work/b2g-gtm-pipeline",
    rebuild: "Public rebuild in progress",
    tech: "Python / REST APIs / CSV + JSON",
    icon: <Database size={20} />,
    demo: <EnrichmentDemo />
  },
  {
    id: "procurement-signal-harvester",
    title: "Procurement Signal Harvester",
    desc: "Watches public procurement and tender sources, and turns announcements into structured, CRM-ready records — instead of someone finding them by accident.",
    productionNote: "Runs in production as automated tender discovery inside the CRM.",
    productionHref: "/work/crm-product-ownership",
    rebuild: "Public rebuild in progress",
    tech: "Python / Apify / n8n",
    icon: <ScanSearch size={20} />,
    demo: <SignalHarvesterDemo />
  },
  {
    id: "inbound-signal-router",
    title: "Inbound Signal Router",
    desc: "Takes an incoming lead, applies routing rules to decide who owns it, updates the CRM and alerts the team — in seconds, not next-morning.",
    productionNote: "The same event-driven pattern powers the production approval-to-send flow.",
    productionHref: "/work/b2g-gtm-pipeline",
    rebuild: "Public rebuild queued",
    tech: "Webhooks / n8n / Slack API",
    icon: <BellRing size={20} />,
    demo: <RouterDemo />
  },
  {
    id: "llm-account-qualification",
    title: "LLM Account Qualification",
    desc: "Scores a company against a written ideal-customer profile and returns structured JSON with its reasoning. A human still makes the final call — by design.",
    productionNote: "Runs in production as the AI qualification stage of the lead pipeline.",
    productionHref: "/work/b2g-gtm-pipeline",
    rebuild: "Public rebuild queued",
    tech: "LLM APIs / JSON / ICP rules",
    icon: <Bot size={20} />,
    demo: <ScoringDemo />
  }
];

const LabProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.08 }}
    viewport={{ once: true }}
    className="p-7 bg-white border border-stone-200 rounded-[32px] flex flex-col justify-between group hover:border-zapier hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-500"
  >
    <div>
      <div className="flex justify-between items-start mb-7">
        <div className="w-10 h-10 rounded-2xl flex items-center justify-center border bg-paper text-stone-400 group-hover:text-zapier border-stone-100 transition-colors">
          {project.icon}
        </div>
        <span className="px-2 py-1 rounded-full font-mono text-[8px] font-bold uppercase tracking-widest bg-stone-100 text-stone-400">
          {project.rebuild}
        </span>
      </div>

      <h4 className="font-bold text-stone-900 text-lg mb-2 leading-tight">
        {project.title}
      </h4>

      <p className="text-stone-500 text-sm leading-relaxed mb-4">
        {project.desc}
      </p>

      <p className="text-xs text-stone-400 leading-relaxed mb-4">
        {project.productionNote}
      </p>

      {project.demo}
    </div>

    <div className="mt-8 pt-6 border-t border-stone-50 flex justify-between items-center text-[9px] font-mono font-bold uppercase tracking-widest gap-4">
      <span className="text-stone-400">{project.tech}</span>
      <a
        href={project.productionHref}
        className="whitespace-nowrap inline-flex items-center gap-1 text-stone-400 group-hover:text-zapier transition-colors"
      >
        Production version <ArrowUpRight size={11} />
      </a>
    </div>
  </motion.div>
);

export default function UtilityLab() {
  return (
    <section id="lab" className="py-32 px-6 bg-paper relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] font-bold text-zapier uppercase tracking-[0.3em] mb-4 block">
              GTM Systems Lab
            </span>

            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-stone-900 italic font-serif">
              Production patterns, rebuilt in the open.
            </h2>

            <p className="mt-6 text-stone-500 text-lg leading-relaxed max-w-xl">
              Each of these systems already runs in production — their full
              breakdowns are above. The lab versions are sanitized rebuilds
              I'm publishing so the code itself can be read. "In progress"
              means the public version isn't ready yet, not that the pattern
              is unproven.
            </p>
          </div>

          <div className="px-4 py-2 bg-white border border-stone-200 rounded-full shadow-sm flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-zapier" />
            <span className="font-mono text-[9px] font-bold text-stone-400 uppercase">
              Proven in production
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {labProjects.map((project, index) => (
            <LabProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
