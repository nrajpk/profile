import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Database, Globe, Cpu, Layout, Code2, Terminal } from "lucide-react";

const deployments = [
  {
    id: "deployment-04",
    period: "2023 — PRESENT",
    role: "Marketing & Digital Transformation Manager",
    company: "Mahindra Emirates Vehicle Armouring",
    location: "UAE (Global Markets)",
    environment: "B2B / B2G Defense Solutions",
    core: "Building the Growth Operating Model that connects global demand to production reality.",
    stack: ["Python", "Salesforce", "API Integrations", "Power BI"],
    metrics: ["100% Pipeline Visibility", "Multi-Market Sync"],
    highlights: [
      "Virtual Product Owner for custom-built CRM infrastructure.",
      "Automating data tasks and workflows using Python scripting.",
      "Leading digital roadmaps for Middle East, Africa, and European markets."
    ]
  },
  {
    id: "deployment-03",
    period: "2022 — 2023",
    role: "Digital Marketing Consultant",
    company: "Coach2Reach Inc.",
    location: "Global (Remote)",
    environment: "B2C EdTech",
    core: "Designing end-to-end Google Ads strategy and performance scaling roadmaps.",
    stack: ["Google Ads", "GA4", "GTM", "Advanced Bidding"],
    metrics: ["Global Scaling", "Quality Score Optimization"],
    highlights: [
      "Owned end-to-end Google Ads strategy and budget management.",
      "Established conversion tracking and performance reporting logic.",
      "Translated campaign data into actionable scaling insights."
    ]
  },
  {
    id: "deployment-02",
    period: "2020 — 2021",
    role: "Social Media Specialist",
    company: "ChalksnSlate Media",
    location: "India (Hybrid)",
    environment: "B2B Media Agency",
    core: "Developing cross-platform creative direction and ROI-focused strategies.",
    stack: ["Adobe Suite", "Creative Strategy", "Meta Ads"],
    metrics: ["Creative Iteration", "ROI Growth"],
    highlights: [
      "Defined creative direction and enforced content best practices.",
      "Managed outputs to align with diverse client campaign objectives.",
      "Implemented continuous optimization for creative performance."
    ]
  },
  {
    id: "deployment-01",
    period: "2016 — 2020",
    role: "Sr. Digital Marketing Associate",
    company: "Markon Strategy Consulting",
    location: "India (Hybrid)",
    environment: "B2B Marketing Startup",
    core: "FE/UI/UX development and marketing automation implementation.",
    stack: ["HTML/CSS", "Wireframing", "Automation Tools", "UI/UX"],
    metrics: ["Funnel Efficiency", "Lead-to-Conversion"],
    highlights: [
      "Wireframed and developed conversion-driven landing pages.",
      "Implemented automation systems to streamline workflow efficiency.",
      "Executed campaigns focused on brand awareness and lead goals."
    ]
  }
];

export default function CareerArchitecture() {
  const [activeId, setActiveId] = useState("deployment-04");

  return (
    <section id="experience" className="py-40 px-6 bg-paper border-t border-stone-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: The Selector */}
          <div className="lg:col-span-5">
            <div className="mb-12">
              <span className="font-mono text-[10px] font-bold text-stone-400 uppercase tracking-[0.4em] mb-4 block">Archive</span>
              <h2 className="text-5xl font-bold tracking-tight text-stone-900 italic font-serif">Deployment History.</h2>
            </div>

            <div className="space-y-2">
              {deployments.map((job) => (
                <button
                  key={job.id}
                  onClick={() => setActiveId(job.id)}
                  className={`w-full p-6 rounded-2xl text-left transition-all duration-500 border flex items-center justify-between group ${
                    activeId === job.id 
                    ? "bg-white border-zapier shadow-xl shadow-orange-500/5 translate-x-2" 
                    : "bg-transparent border-transparent text-stone-400 hover:text-stone-600"
                  }`}
                >
                  <div>
                    <p className="font-mono text-[8px] font-bold uppercase tracking-widest mb-1">{job.id} // {job.period}</p>
                    <p className={`font-bold transition-colors ${activeId === job.id ? "text-stone-900" : "text-inherit"}`}>
                      {job.company}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-500 ${activeId === job.id ? "rotate-0 text-zapier" : "-rotate-90 opacity-0 group-hover:opacity-100"}`} />
                </button>
              ))}
            </div>

            {/* Educational Foundation */}
            <div className="mt-16 p-8 bg-stone-900 rounded-[32px] text-white relative overflow-hidden group">
               <div className="relative z-10">
                <Terminal className="text-zapier mb-4" size={20} />
                <p className="font-mono text-[9px] text-stone-500 uppercase tracking-widest mb-1">Root Foundation</p>
                <p className="font-bold text-lg leading-tight">B.Tech Computer Science Engineering</p>
                <p className="text-stone-400 text-xs mt-2 italic">Mar Athanasius College of Engineering</p>
               </div>
               <Code2 className="absolute -right-4 -bottom-4 text-white/5 w-32 h-32 rotate-12 transition-transform group-hover:scale-110" />
            </div>
          </div>

          {/* Right Column: The "System View" (Expanded Content) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {deployments.map((job) => job.id === activeId && (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white border border-stone-200 rounded-[48px] p-10 md:p-16 shadow-sm h-full flex flex-col"
                >
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="px-3 py-1 bg-stone-50 border border-stone-100 rounded-full font-mono text-[9px] font-bold text-stone-400 uppercase tracking-widest">
                      {job.location}
                    </span>
                    <span className="px-3 py-1 bg-stone-50 border border-stone-100 rounded-full font-mono text-[9px] font-bold text-zapier uppercase tracking-widest">
                      {job.environment}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 leading-tight tracking-tight">
                    {job.role}
                  </h3>
                  
                  <p className="text-stone-500 text-lg leading-relaxed mb-10 italic font-serif">
                    "{job.core}"
                  </p>

                  <div className="grid grid-cols-2 gap-8 mb-12">
                     {job.metrics.map(m => (
                       <div key={m}>
                          <p className="text-2xl font-bold text-stone-900 tracking-tighter">{m}</p>
                          <p className="font-mono text-[9px] text-stone-400 uppercase tracking-widest mt-1">Key Outcome</p>
                       </div>
                     ))}
                  </div>

                  <div className="space-y-4 mb-12 flex-1">
                    <p className="font-mono text-[10px] font-bold text-stone-900 uppercase tracking-widest mb-4">Technical Highlights:</p>
                    {job.highlights.map((point, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zapier flex-shrink-0" />
                        <p className="text-stone-500 text-sm leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-stone-100 flex flex-wrap gap-2">
                    {job.stack.map(s => (
                      <span key={s} className="px-3 py-1 bg-stone-900 text-white font-mono text-[8px] font-bold uppercase tracking-widest rounded-md">
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}