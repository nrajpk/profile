import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Workflow,
  Target,
  TrendingUp,
  ChevronRight,
  ShieldCheck,
  Database,
  Radar
} from "lucide-react";

export default function BentoSystems() {
  const [view, setView] = useState("data");
  const [statIndex, setStatIndex] = useState(0);

  const content = {
    data: {
      nav: "data",
      title: "Data becomes useful only after it is cleaned, shaped and routed.",
      desc: "I focus on the layer before campaigns and CRM handoffs: public signals, CSV/JSON structure, source normalization, enrichment prep and data hygiene.",
      stats: [
        { value: "CSV / JSON", label: "Data Shape", icon: <Database className="w-5 h-5" /> },
        { value: "Clean Records", label: "Output State", icon: <Target className="w-5 h-5" /> }
      ],
      insights: [
        {
          title: "Source Normalization",
          detail: "Python and Apify workflows used to turn scattered public B2B/B2G information into cleaner operating records."
        },
        {
          title: "Enrichment-Ready Inputs",
          detail: "Contact and company data structured before it moves into provider checks, campaign files or CRM workflows."
        }
      ]
    },
    automation: {
      nav: "automation",
      title: "Automation is useful only when the handoffs are clear.",
      desc: "The strongest systems are not magic. They use clear triggers, routing rules, webhook-style inputs, status checks and human review where judgment still matters.",
      stats: [
        { value: "Webhooks", label: "Trigger Layer", icon: <Workflow className="w-5 h-5" /> },
        { value: "Rules", label: "Control Layer", icon: <ShieldCheck className="w-5 h-5" /> }
      ],
      insights: [
        {
          title: "Workflow Orchestration",
          detail: "n8n / Make / Zapier-style logic mapped around scheduled triggers, alerts, enrichment steps and CRM prep."
        },
        {
          title: "API Handoffs",
          detail: "REST payloads, webhooks and rate-limit-aware notes used to make scattered tools behave like one workflow."
        }
      ]
    },
    revenue: {
      nav: "revenue",
      title: "Marketing systems have to reflect how revenue actually moves.",
      desc: "Campaign work becomes stronger when CRM stages, assignment rules, lead scoring, tracking events and reporting views mirror the real buying process.",
      stats: [
        { value: "CRM Ready", label: "Pipeline State", icon: <Radar className="w-5 h-5" /> },
        { value: "Reviewable", label: "Decision State", icon: <TrendingUp className="w-5 h-5" /> }
      ],
      insights: [
        {
          title: "CRM & Pipeline Logic",
          detail: "Lifecycle stages, assignment logic, custom fields and reporting views aligned to long-cycle B2B and B2G activity."
        },
        {
          title: "AI-Assisted Qualification",
          detail: "ICP rules, prompt specs and structured JSON outputs used for first-pass scoring, not fake revenue prediction."
        }
      ]
    }
  };

  const active = content[view];

  useEffect(() => {
    const timer = setInterval(() => {
      setStatIndex((prev) => (prev + 1) % active.stats.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [view, active.stats.length]);

  useEffect(() => setStatIndex(0), [view]);

  return (
    <section id="expertise" className="py-28 px-6 bg-white border-y border-stone-100">
      <div className="max-w-6xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-mono text-[10px] text-zapier font-bold uppercase mb-4 block tracking-[0.35em]">
            Core Systems
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 italic font-serif">
            The operating layer.
          </h2>
        </div>
        <p className="max-w-md text-stone-500 leading-relaxed">
          Three lenses on the same job — data, automation, and revenue. Switch between them to see how I approach each layer.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[280px]">
        <div className="md:col-span-8 md:row-span-2 p-10 md:p-12 bg-white border border-stone-200 rounded-[32px] flex flex-col justify-between relative overflow-hidden group shadow-sm">
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-zapier/5 rounded-full blur-3xl group-hover:bg-zapier/10 transition-colors" />
          <div className="relative z-10">
            <span className="font-mono text-[10px] text-zapier font-bold uppercase mb-6 block tracking-widest">
              Marketing Ops / GTM Systems
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={view}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="text-4xl md:text-5xl font-bold leading-[1.1] text-stone-900 tracking-tight max-w-xl">
                  {active.title}
                </h3>
                <p className="text-stone-500 text-lg mt-8 max-w-lg leading-relaxed">
                  {active.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] font-bold uppercase relative z-10 pt-12 md:pt-0">
            {Object.keys(content).map((item) => (
              <button
                key={item}
                onClick={() => setView(item)}
                className={`px-6 py-2.5 rounded-full transition-all duration-500 border ${
                  view === item
                    ? "bg-stone-900 text-white border-stone-900 shadow-xl"
                    : "bg-paper text-stone-400 border-stone-200 hover:border-stone-400"
                }`}
              >
                {content[item].nav}
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-4 bg-stone-900 text-white rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${view}-${statIndex}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="h-full flex flex-col justify-between"
            >
              <div className="text-zapier">{active.stats[statIndex].icon}</div>
              <div>
                <p className="text-4xl md:text-5xl font-bold tracking-tighter italic font-serif leading-none">
                  {active.stats[statIndex].value}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-stone-500 mt-2 font-bold">
                  {active.stats[statIndex].label}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-stone-800">
            <motion.div
              key={`${view}-${statIndex}`}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="h-full bg-zapier/50"
            />
          </div>
        </div>

        <div
          className="md:col-span-4 bg-paper border border-stone-200 rounded-[32px] p-8 flex flex-col justify-between group cursor-pointer hover:border-stone-400 transition-colors"
          onClick={() => setStatIndex((prev) => (prev + 1) % active.insights.length)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${view}-${statIndex}-insight`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-zapier animate-pulse" />
                <ChevronRight className="w-4 h-4 text-stone-300 group-hover:text-stone-900 transition-colors" />
              </div>
              <div>
                <p className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest mb-2">
                  Technical Insight
                </p>
                <p className="text-xl font-bold leading-tight text-stone-900 mb-2">
                  {active.insights[statIndex].title}
                </p>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {active.insights[statIndex].detail}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 text-center md:text-left">
        <a href="#proof" className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500 hover:text-zapier transition-colors">
          See how these run in production →
        </a>
      </div>
    </section>
  );
}
