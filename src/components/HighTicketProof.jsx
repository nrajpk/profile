import React from "react";
import { motion } from "framer-motion";
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
  },
  {
    icon: <LineChart size={30} />,
    title: "Ads, Analytics & Attribution Setup",
    desc: "Campaign tracking and reporting workflows connecting paid acquisition activity with performance visibility.",
    flow: ["Configure GTM events", "Set up GA4 conversions", "Map campaign sources", "Build reporting views", "Review acquisition quality"],
    tools: ["Google Ads", "GA4", "GTM", "MS Power BI"],
    proof: "Blurred reporting dashboard, tracking structure, source mapping and campaign performance view.",
    wide: true
  }
];

export default function HighTicketArchitecture() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deployments.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className={`p-8 md:p-9 bg-white/[0.035] border border-white/10 rounded-[36px] hover:border-zapier/45 transition-all duration-500 group flex flex-col min-h-[440px] ${item.wide ? "md:col-span-2 md:min-h-0" : ""}`}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="text-zapier group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <div className="flex items-center gap-2 font-mono text-[8px] font-bold uppercase tracking-widest text-stone-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-zapier animate-pulse" /> Built
                </div>
              </div>

              <h3 className="text-2xl font-bold leading-tight mb-4 text-white">{item.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-8">{item.desc}</p>

              <div className="space-y-3 mb-8 flex-1">
                {item.flow.map((step, i) => (
                  <div key={step} className="flex items-center gap-3 text-sm text-stone-300">
                    <span className="font-mono text-[8px] text-stone-600 w-5">0{i + 1}</span>
                    <span className="h-px w-5 bg-stone-800" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              <div className="mb-7">
                <p className="font-mono text-[8px] uppercase tracking-widest text-stone-600 mb-3 font-bold">Proof to show</p>
                <p className="text-xs leading-relaxed text-stone-500">{item.proof}</p>
                {item.href && (
                  <a href={item.href} className="inline-flex items-center gap-2 mt-4 text-[10px] font-bold uppercase tracking-widest text-zapier hover:text-white transition-colors">
                    Read the full system breakdown <ArrowUpRight size={12} />
                  </a>
                )}
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
                {item.tools.map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md font-mono text-[8px] font-bold uppercase tracking-widest text-stone-400">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
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
                <span className="font-mono text-[9px] font-bold text-stone-400 uppercase tracking-widest">Operating Model</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 italic font-serif">The work is the system.</h3>
              <p className="text-stone-500 text-lg leading-relaxed mb-8">
                My strongest lane is not making marketing louder. It is making the operating layer cleaner: source data, CRM logic, tracking, reporting views, API-ready handoffs and campaign operations.
              </p>
              <a href="#lab" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-stone-900 hover:text-zapier transition-colors">
                See the lab layer <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="bg-stone-50 rounded-[36px] p-7 border border-stone-200">
              <div className="space-y-4">
                {[
                  { l: "Signal Sourcing", v: "Structured" },
                  { l: "CRM Workflow", v: "Mapped" },
                  { l: "Analytics Review", v: "Traceable" },
                  { l: "Human Approval", v: "Preserved" },
                ].map(item => (
                  <div key={item.l} className="flex justify-between items-center p-4 bg-white rounded-2xl border border-stone-100 shadow-sm">
                    <span className="font-mono text-[10px] font-bold text-stone-900 uppercase">{item.l}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-zapier animate-pulse" />
                      <span className="font-mono text-[8px] text-stone-400 font-bold uppercase">{item.v}</span>
                    </div>
                  </div>
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
