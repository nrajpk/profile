import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Database, Activity, Play, Code2, Terminal, Route, Bot, BellRing, ScanSearch } from "lucide-react";

const EnrichmentDemo = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="bg-stone-950 p-4 rounded-xl font-mono text-[9px] mt-4 border border-stone-800 group/demo">
      <div className="flex justify-between items-center mb-3">
        <span className="text-stone-500 uppercase tracking-tighter">enrichment_waterfall.py</span>
        <button onClick={() => setActive(!active)} className="text-zapier hover:text-white transition-colors" aria-label="Run demo">
          <Play size={12} fill={active ? "currentColor" : "none"}/>
        </button>
      </div>
      <div className="space-y-1.5 overflow-hidden">
        <p className="text-stone-600 font-bold leading-none animate-pulse italic">&gt; reading raw_contacts.csv...</p>
        <AnimatePresence>
          {active && (
            <motion.div initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} className="space-y-1 text-blue-400 border-l border-blue-900/50 pl-2 ml-1">
              <p>&gt; Provider_A: no email found</p>
              <p>&gt; routing fallback to Provider_B</p>
              <p className="text-green-400 font-bold">&gt; output: enriched_record.csv</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const RouterDemo = () => (
  <div className="mt-4 p-4 bg-stone-950 rounded-xl border border-stone-800 font-mono text-[9px]">
    <div className="flex items-center gap-2 mb-3">
      <div className="px-1.5 py-0.5 bg-zapier/20 text-zapier rounded border border-zapier/30">WEBHOOK</div>
      <span className="text-stone-600">→</span>
      <span className="text-blue-400 font-bold uppercase tracking-tighter">Slack Alert</span>
    </div>
    <div className="space-y-2">
      <div className="h-1 w-full bg-stone-800 rounded-full overflow-hidden">
        <motion.div initial={{ width: 0 }} whileInView={{ width: "74%" }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="h-full bg-zapier" />
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
        {['score', 'rules'].map((tab) => (
          <button key={tab} onClick={() => setActive(tab)} className={`px-2 py-1 rounded uppercase font-bold ${active === tab ? 'bg-stone-900 text-white' : 'bg-white text-stone-400 border border-stone-100'}`}>{tab}</button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}>
          {active === 'score' ? (
            <div className="text-stone-500 leading-relaxed">
              &#123; "fit_score": 78,<br/> "reason": "fleet and procurement signal present" &#125;
            </div>
          ) : (
            <div className="text-stone-500 leading-relaxed">
              rules: title_match, market_fit,<br/> public_signal, exclusion_filter
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const SignalHarvesterDemo = () => (
  <div className="mt-4 p-4 border border-dashed border-stone-200 rounded-xl font-mono text-[8px] text-stone-400 uppercase tracking-[0.18em] bg-white">
    <div className="flex items-center gap-2 mb-3">
      <ScanSearch size={12} className="text-zapier animate-pulse" />
      Public signal monitor
    </div>
    <div className="space-y-2">
      {['source_url', 'rfp_keyword', 'company_domain'].map((item) => (
        <div key={item} className="flex justify-between border-b border-stone-100 pb-1">
          <span>{item}</span><span className="text-stone-300">queued</span>
        </div>
      ))}
    </div>
  </div>
);

const labProjects = [
  {
    title: "Custom Enrichment Waterfall",
    desc: "A Python-based workflow for testing fallback logic across multiple enrichment sources.",
    status: "Building",
    tech: "Python / REST APIs / CSV",
    icon: <Database size={20}/>,
    proof: "Code log, fallback diagram, terminal output and sample enriched CSV.",
    demo: <EnrichmentDemo />
  },
  {
    title: "B2B Procurement Signal Harvester",
    desc: "A lab version of the sourcing workflow, focused on public procurement and business signals.",
    status: "Building",
    tech: "Python / Apify / CRM Prep",
    icon: <ScanSearch size={20}/>,
    proof: "Source map, extraction log and sanitized output structure.",
    demo: <SignalHarvesterDemo />
  },
  {
    title: "Real-Time Inbound Signal Router",
    desc: "Webhook-based routing for form submissions, rule checks and instant team alerts.",
    status: "Planned",
    tech: "Webhooks / n8n / Slack API",
    icon: <BellRing size={20}/>,
    proof: "Form demo, Slack alert screenshot, routing logic and CRM update view.",
    demo: <RouterDemo />
  },
  {
    title: "LLM Account Qualification Engine",
    desc: "GPT-4o API workflow for evaluating company profiles against defined ICP criteria.",
    status: "Planned",
    tech: "OpenAI API / JSON / ICP Rules",
    icon: <Bot size={20}/>,
    proof: "Prompt constraints, JSON output, scoring rules and test dataset.",
    demo: <ScoringDemo />
  }
];

const MatrixHub = () => {
  const [activeMetric, setActiveMetric] = useState("handoff");
  const [activeTool, setActiveTool] = useState("crm");

  const metricConfig = {
    handoff: { label: "Lead Handoff", values: [34, 54, 72, 88, 78, 92] },
    tracking: { label: "Tracking Readiness", values: [42, 48, 64, 70, 82, 90] },
    hygiene: { label: "Data Hygiene", values: [55, 58, 61, 74, 80, 86] }
  };

  const toolConfig = {
    crm: { name: "CRM", color: "bg-blue-500", text: "text-blue-400", fileExt: "_workflow.json" },
    analytics: { name: "GA4", color: "bg-zapier", text: "text-zapier", fileExt: "_events.json" },
    report: { name: "Power BI", color: "bg-emerald-500", text: "text-emerald-400", fileExt: "_view.pbix" }
  };

  const currentTheme = toolConfig[activeTool];
  const metric = metricConfig[activeMetric];

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 p-8 md:p-12 bg-stone-900 rounded-[40px] text-white border border-white/5 shadow-2xl relative overflow-hidden">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg bg-white/5 ${currentTheme.text}`}>
                <BarChart3 size={20} />
              </div>
              <h4 className="font-bold text-xl uppercase tracking-tighter">Systems Visibility Hub</h4>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-8">
              A compact operating view for the work behind campaigns: routing, tracking, hygiene and reporting readiness.
            </p>
            <div className="space-y-2">
              {Object.keys(metricConfig).map((key) => (
                <button key={key} onClick={() => setActiveMetric(key)} className={`w-full text-left px-5 py-3 rounded-xl font-mono text-[10px] font-bold uppercase tracking-widest transition-all duration-300 flex justify-between items-center ${activeMetric === key ? 'bg-white text-stone-900 shadow-xl' : 'bg-white/5 text-stone-500 hover:bg-white/10'}`}>
                  <span>{metricConfig[key].label}</span>
                  {activeMetric === key && <Activity size={12} className="animate-pulse" />}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <span className="font-mono text-[8px] text-stone-600 uppercase tracking-widest mb-3 block">Rendering Layer</span>
            <div className="flex flex-wrap gap-2">
              {Object.keys(toolConfig).map((tool) => (
                <button key={tool} onClick={() => setActiveTool(tool)} className={`px-4 py-2 rounded-lg font-mono text-[9px] font-bold uppercase tracking-widest transition-all border ${activeTool === tool ? `border-white/20 bg-white/10 ${toolConfig[tool].text}` : 'border-transparent text-stone-500 hover:text-stone-300 hover:bg-white/5'}`}>
                  {toolConfig[tool].name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 bg-black/40 rounded-3xl p-8 border border-white/5 flex flex-col min-h-[360px] relative">
          <div className="flex justify-between items-center mb-8 gap-6">
            <div className="flex items-center gap-3">
              <div className={`h-2 w-2 rounded-full animate-pulse ${currentTheme.color}`} />
              <div>
                <span className="font-mono text-[8px] text-stone-600 uppercase tracking-widest block mb-0.5">Data_Source</span>
                <span className="font-mono text-[10px] text-stone-300 uppercase">{activeMetric}{currentTheme.fileExt}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="font-mono text-[8px] text-stone-600 uppercase tracking-widest block mb-0.5">Active_View</span>
              <span className={`font-mono text-[10px] font-bold uppercase ${currentTheme.text}`}>{metric.label}</span>
            </div>
          </div>

          <div className="flex-1 flex items-end gap-3 w-full">
            {metric.values.map((value, index) => (
              <motion.div key={`${activeMetric}-${index}`} initial={{ height: 0, opacity: 0 }} animate={{ height: `${value}%`, opacity: 1 }} transition={{ delay: index * 0.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="flex-1 bg-white/10 rounded-t-xl relative overflow-hidden border border-white/5">
                <div className={`absolute inset-x-0 bottom-0 ${currentTheme.color} opacity-70`} style={{ height: '42%' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Route className={`absolute -right-20 -bottom-20 opacity-[0.04] pointer-events-none w-[420px] h-[420px] ${currentTheme.text}`} />
    </motion.div>
  );
};

export default function UtilityLab() {
  return (
    <section id="lab" className="py-32 px-6 bg-paper relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-4 block">GTM Systems Lab</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-stone-900 italic font-serif">Building the next proof layer.</h2>
            <p className="mt-6 text-stone-500 text-lg leading-relaxed max-w-xl">
              Active portfolio systems that turn the GTM Engineering direction into visible demos: enrichment logic, signal harvesting, routing and AI-assisted qualification.
            </p>
          </div>
          <div className="px-4 py-2 bg-white border border-stone-200 rounded-full shadow-sm flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-zapier animate-pulse" />
            <span className="font-mono text-[9px] font-bold text-stone-400 uppercase">Status: Building with proof</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {labProjects.map((tool, i) => (
            <motion.div key={tool.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }} className="p-8 bg-white border border-stone-200 rounded-[32px] flex flex-col justify-between group hover:border-zapier transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/5">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="w-10 h-10 rounded-2xl bg-paper flex items-center justify-center text-stone-400 group-hover:text-zapier transition-colors border border-stone-100">
                    {tool.icon}
                  </div>
                  <span className={`px-2 py-1 rounded-full font-mono text-[8px] font-bold uppercase tracking-widest ${tool.status === 'Building' ? 'bg-zapier/10 text-zapier' : 'bg-stone-100 text-stone-400'}`}>{tool.status}</span>
                </div>
                <h4 className="font-bold text-stone-900 text-lg mb-2">{tool.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed mb-5">{tool.desc}</p>
                <p className="font-mono text-[8px] text-stone-400 uppercase tracking-widest font-bold mb-2">Proof target</p>
                <p className="text-xs text-stone-400 leading-relaxed mb-5">{tool.proof}</p>
                {tool.demo}
              </div>
              <div className="mt-8 pt-6 border-t border-stone-50 flex justify-between items-center text-[9px] font-mono font-bold uppercase tracking-widest gap-4">
                <span className="text-stone-400">{tool.tech}</span>
                <span className="text-zapier whitespace-nowrap">Lab</span>
              </div>
            </motion.div>
          ))}
        </div>

        <MatrixHub />
      </div>
    </section>
  );
}
