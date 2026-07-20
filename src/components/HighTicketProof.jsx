import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Share2, Database, LineChart, ShieldCheck, ArrowUpRight } from "lucide-react";

const deployments = [
  {
    icon: <Globe size={30} />,
    title: "B2G Procurement Data Extraction Workflow",
    desc: "Automated workflows for sourcing and structuring defense and procurement-related contact data from public sources.",
    flow: ["Identify target sources", "Run Python/Apify extraction", "Clean fields", "Prepare CRM-ready output", "Campaign handoff"],
    tools: ["Python", "Apify", "LinkedIn Ads", "CRM Workflows"],
    proof: "Architecture diagram, sanitized extraction log, source map and cleaned output sample.",
    href: "/work/b2g-gtm-pipeline"
  },
  {
    icon: <Share2 size={30} />,
    title: "Custom CRM Product Ownership",
    desc: "Structured CRM logic and dashboards for long-cycle global sales activity across B2B and B2G markets.",
    flow: ["Map sales stages", "Define custom fields", "Align lifecycle views", "Support pipeline reporting", "Management dashboard"],
    tools: ["Custom CRM", "Salesforce", "Zoho", "Power BI"],
    proof: "Sanitized CRM workflow map, lifecycle structure and pipeline reporting view.",
    href: "/work/crm-product-ownership"
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "Tender Compliance Matrix Engine",
    desc: "A shipped FastAPI + React system that turns defense tender PDFs into reviewed compliance matrices — with an un-overridable safety hold on ballistic requirements.",
    flow: ["Lock tender as case bible", "Extract numbered requirements", "Route through 6 deterministic stages", "Human review + approved cache", "Generate DOCX with traceability"],
    tools: ["FastAPI", "PyMuPDF", "React", "Docker"],
    proof: "37/37 tests passing, e2e-verified flow, Dockerized deploy, documented limitations.",
    href: "/work/tender-compliance-engine"
  },
  {
    icon: <Database size={30} />,
    title: "Vehicle Production Tracker",
    desc: "A Supabase-backed production console with a 14-stage rail, near-zero write access and database-enforced integrity — closing the loop from sale to delivery.",
    flow: ["Create order with unit breakdown", "Vehicles enter 14-stage rail", "Stage updates via RPC only", "Views aggregate KPIs & distribution", "Decision dashboard flags stalls"],
    tools: ["Next.js", "Supabase", "Vercel", "React"],
    proof: "Repository, schema contract (5 views, 3 RPCs), role model and deployed build.",
    href: "/work/production-tracker"
  }
];

const tabLabels = ["B2G Extraction", "Custom CRM", "Tender Engine", "Production Tracker"];

export default function HighTicketArchitecture() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = deployments[activeIndex];

  return (
    <section id="proof" className="py-36 md:py-40 bg-stone-950 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute -left-32 top-20 w-96 h-96 bg-zapier/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start mb-20">
          <div className="lg:col-span-8">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-mono text-[10px] font-bold text-zapier uppercase tracking-[0.4em] mb-6 block">
              Built Work // Production Systems
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] italic font-serif">
              Production work, <br/><span className="text-stone-500">kept factual.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-10">
            <p className="text-stone-400 text-lg leading-relaxed border-l border-stone-800 pl-8">
              Real work across data extraction, CRM workflows, paid acquisition and reporting. No fake metrics, no invented outcomes, only systems that can be explained and shown with sanitized proof.
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-8">
            {deployments.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`px-5 py-2.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeIndex === index
                    ? "bg-white text-stone-900 border-white shadow-xl"
                    : "bg-white/5 text-stone-400 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                <span className={`mr-2 ${activeIndex === index ? "text-zapier" : "text-stone-600"}`}>0{index + 1}</span>
                {tabLabels[index]}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={active.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-12 bg-white/[0.035] border border-white/10 rounded-[36px] lg:min-h-[420px]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                <div className="lg:col-span-7">
                  <div className="flex items-start justify-between mb-8">
                    <div className="text-zapier">{active.icon}</div>
                    <div className="flex items-center gap-2 font-mono text-[8px] font-bold uppercase tracking-widest text-stone-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-zapier" /> Built
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-5 text-white tracking-tight">{active.title}</h3>
                  <p className="text-stone-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl">{active.desc}</p>

                  <div className="mb-8">
                    <p className="font-mono text-[8px] uppercase tracking-widest text-stone-600 mb-3 font-bold">Proof to show</p>
                    <p className="text-xs leading-relaxed text-stone-500 max-w-xl">{active.proof}</p>
                    {active.href && (
                      <a href={active.href} className="inline-flex items-center gap-2 mt-5 text-[10px] font-bold uppercase tracking-widest text-zapier hover:text-white transition-colors">
                        Read the full system breakdown <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>

                  <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
                    {active.tools.map((tool) => (
                      <span key={tool} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md font-mono text-[8px] font-bold uppercase tracking-widest text-stone-400">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <p className="font-mono text-[8px] uppercase tracking-widest text-stone-600 mb-4 font-bold">How it flows</p>
                  <div className="space-y-3">
                    {active.flow.map((step, i) => (
                      <div key={step} className="flex items-start gap-3 p-4 bg-white/5 border border-white/5 rounded-2xl text-sm text-stone-300">
                        <span className="font-mono text-[9px] text-zapier font-bold mt-0.5">0{i + 1}</span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-10 md:p-12 bg-white rounded-[48px] text-stone-900 overflow-hidden relative group shadow-2xl"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <ShieldCheck className="text-zapier" size={22} />
                <span className="font-mono text-[9px] font-bold text-stone-400 uppercase tracking-widest">Measurement & Attribution</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 italic font-serif">The work is the system.</h3>
              <p className="text-stone-500 text-lg leading-relaxed mb-8">
                Every system above ships with its measurement wired in: GTM events, GA4 conversions, source-to-CRM attribution and reporting views leadership actually opens. That discipline comes from years of running paid acquisition — where untracked spend is just spending.
              </p>
              <a href="#lab" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-stone-900 hover:text-zapier transition-colors">
                Next: the lab — these patterns, rebuilt in the open <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="bg-stone-50 rounded-[36px] p-7 border border-stone-200">
              <div className="space-y-4">
                {[
                  { l: "GTM Events", v: "Configured per campaign" },
                  { l: "GA4 Conversions", v: "Mapped to pipeline" },
                  { l: "Source Attribution", v: "Campaign → CRM" },
                  { l: "Reporting Views", v: "Built in Power BI" },
                ].map(item => (
                  <div key={item.l} className="flex justify-between items-center p-4 bg-white rounded-2xl border border-stone-100 shadow-sm">
                    <span className="font-mono text-[10px] font-bold text-stone-900 uppercase">{item.l}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-zapier" />
                      <span className="font-mono text-[8px] text-stone-400 font-bold uppercase">{item.v}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-5">
                {["Google Ads", "GA4", "GTM", "MS Power BI"].map(t => (
                  <span key={t} className="px-3 py-1 bg-white border border-stone-200 rounded-md font-mono text-[8px] font-bold uppercase tracking-widest text-stone-500">{t}</span>
                ))}
              </div>
            </div>
          </div>
          <Database className="absolute -right-10 -bottom-10 text-stone-100 w-56 h-56 rotate-12 transition-transform duration-700 group-hover:scale-110" />
        </motion.div>
      </div>
    </section>
  );
}
