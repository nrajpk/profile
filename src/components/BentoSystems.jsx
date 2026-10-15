import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useMotionOff from "./useMotionOff.js";
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
  const [held, setHeld] = useState(false);
  const off = useMotionOff();

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

  // Stats advance every 5s unless animations are paused, or the visitor is
  // pointing at or focused inside the panel.
  const rotating = !off && !held;
  useEffect(() => {
    if (!rotating) return;
    const timer = setInterval(() => {
      setStatIndex((prev) => (prev + 1) % active.stats.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [view, active.stats.length, rotating]);

  useEffect(() => setStatIndex(0), [view]);

  return (
    <section id="expertise" className="py-24 md:py-32 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="kicker mb-6">
            Core Systems
          </span>
          <h2 className="text-4xl md:text-6xl font-normal tracking-tight text-stone-900 italic font-serif">
            The operating layer.
          </h2>
        </div>
        <p className="max-w-md text-stone-600 leading-relaxed">
          Three lenses on the same job — data, automation, and revenue. Switch between them to see how I approach each layer.
        </p>
      </div>

      <div
        className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-5 md:auto-rows-[225px]"
        onMouseEnter={() => setHeld(true)}
        onMouseLeave={() => setHeld(false)}
        onFocus={() => setHeld(true)}
        onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setHeld(false); }}
      >
        <div className="md:col-span-8 md:row-span-2 p-8 md:p-10 bg-white border border-stone-200 flex flex-col justify-between relative overflow-hidden group">
          <div className="relative z-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zapier-ink mb-5 block">
              Marketing Ops / GTM Systems
            </span>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={view}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="font-serif text-4xl md:text-5xl font-normal leading-[1.02] text-stone-900 tracking-tight max-w-xl">
                  {active.title}
                </h3>
                <p className="text-stone-600 text-base md:text-lg mt-5 max-w-lg leading-relaxed">
                  {active.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] font-bold uppercase relative z-10 pt-8 md:pt-0" role="group" aria-label="Lens">
            {Object.keys(content).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setView(item)}
                aria-pressed={view === item}
                className={`px-6 py-3 rounded-full transition-all duration-500 border ${
                  view === item
                    ? "bg-stone-900 text-white border-stone-900"
                    : "bg-paper text-stone-600 border-stone-300 hover:border-stone-500"
                }`}
              >
                {content[item].nav}
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-4 bg-stone-900 text-white p-8 flex flex-col justify-between relative overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${view}-${statIndex}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="h-full flex flex-col justify-between"
            >
              <div className="text-zapier">{active.stats[statIndex].icon}</div>
              <div>
                <p className="text-5xl md:text-6xl font-normal tracking-tight italic font-serif leading-none">
                  {active.stats[statIndex].value}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-wider text-stone-300 mt-2 font-bold">
                  {active.stats[statIndex].label}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-stone-800">
            {rotating && (
              <motion.div
                key={`${view}-${statIndex}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-full bg-zapier/50 origin-left"
              />
            )}
          </div>
        </div>

        <button
          type="button"
          className="md:col-span-4 bg-paper border border-stone-200 p-8 flex flex-col justify-between text-left group cursor-pointer hover:border-stone-400 transition-colors"
          onClick={() => setStatIndex((prev) => (prev + 1) % active.insights.length)}
        >
          <span className="sr-only">Show the next insight. </span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={`${view}-${statIndex}-insight`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full flex flex-col justify-between"
            >
              <span className="flex justify-between items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-zapier animate-pulse" aria-hidden="true" />
                <ChevronRight className="w-4 h-4 text-stone-500 group-hover:text-stone-900 transition-colors" aria-hidden="true" />
              </span>
              <span className="block">
                <span className="block text-xs font-semibold text-stone-600 uppercase tracking-[0.2em] mb-3">
                  Technical Insight
                </span>
                <span className="block font-serif text-3xl leading-none text-stone-900 mb-3">
                  {active.insights[statIndex].title}
                </span>
                <span className="block text-stone-600 text-sm leading-relaxed">
                  {active.insights[statIndex].detail}
                </span>
              </span>
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 mt-8 text-center md:text-left">
        <a href="/work" className="link-arrow">
          See how these run in production →
        </a>
      </div>
    </section>
  );
}
