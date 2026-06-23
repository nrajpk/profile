import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Code2, Terminal } from "lucide-react";

const deployments = [
  {
    id: "deployment-04",
    period: "2023 - PRESENT",
    role: "Marketing & Digital Transformation",
    company: "Mahindra Emirates Vehicle Armouring",
    location: "UAE (Global Markets)",
    environment: "B2B / B2G Defense Solutions",
    core: "Working across digital marketing, CRM workflows, data extraction and global campaign operations for high-consideration markets.",
    stack: ["Python", "Apify", "CRM", "Power BI"],
    metrics: ["B2G Lead Sourcing", "CRM Workflow Support"],
    highlights: [
      "Worked with custom CRM workflows and pipeline visibility requirements.",
      "Used Python and extraction workflows to support targeted lead sourcing.",
      "Supported digital campaigns and assets for Middle East, Africa and global market activity."
    ]
  },
  {
    id: "deployment-03",
    period: "2022 - 2023",
    role: "Digital Marketing Consultant",
    company: "Coach2Reach Inc.",
    location: "Global (Remote)",
    environment: "B2C EdTech",
    core: "Managed acquisition and tracking workflows across Google Ads, analytics and performance review loops.",
    stack: ["Google Ads", "GA4", "GTM", "Performance Tracking"],
    metrics: ["Paid Acquisition", "Tracking Setup"],
    highlights: [
      "Managed Google Ads execution and optimization roadmap.",
      "Configured conversion tracking and analytics review structures.",
      "Translated campaign data into practical acquisition insights."
    ]
  },
  {
    id: "deployment-02",
    period: "2020 - 2021",
    role: "Social Media Specialist",
    company: "ChalksnSlate Media",
    location: "India (Hybrid)",
    environment: "B2B Media Agency",
    core: "Built creative and campaign execution discipline across social channels, assets and reporting cycles.",
    stack: ["Creative Strategy", "Meta Ads", "Adobe Suite", "Campaign Ops"],
    metrics: ["Content Systems", "Campaign Iteration"],
    highlights: [
      "Developed campaign creative direction and content workflows.",
      "Managed outputs aligned to client campaign objectives.",
      "Supported ongoing optimization through performance review."
    ]
  },
  {
    id: "deployment-01",
    period: "2016 - 2020",
    role: "Sr. Digital Marketing Associate",
    company: "Markon Strategy Consulting",
    location: "India (Hybrid)",
    environment: "B2B Marketing Startup",
    core: "Built the early foundation across websites, UI/UX, campaign execution and marketing automation support.",
    stack: ["HTML/CSS", "Wireframing", "Automation Tools", "UI/UX"],
    metrics: ["Landing Pages", "Workflow Support"],
    highlights: [
      "Wireframed and developed conversion-focused landing pages.",
      "Supported automation workflows to reduce repetitive campaign tasks.",
      "Executed campaigns across brand awareness and lead generation goals."
    ]
  }
];

export default function CareerArchitecture() {
  const [activeId, setActiveId] = useState("deployment-04");

  return (
    <section id="experience" className="py-36 md:py-40 px-6 bg-paper border-t border-stone-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="mb-12">
              <span className="font-mono text-[10px] font-bold text-stone-400 uppercase tracking-[0.4em] mb-4 block">Background</span>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-stone-900 italic font-serif">A marketing path with a technical base.</h2>
              <p className="text-stone-500 leading-relaxed mt-6 max-w-md">
                The career thread is consistent: campaigns, websites, CRM, analytics and systems work moving closer to GTM Engineering.
              </p>
            </div>

            <div className="space-y-2">
              {deployments.map((job) => (
                <button
                  key={job.id}
                  onClick={() => setActiveId(job.id)}
                  className={`w-full p-5 md:p-6 rounded-2xl text-left transition-all duration-500 border flex items-center justify-between group ${
                    activeId === job.id
                    ? "bg-white border-zapier shadow-xl shadow-orange-500/5 translate-x-0 md:translate-x-2"
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

            <div className="mt-12 p-8 bg-stone-900 rounded-[32px] text-white relative overflow-hidden group">
              <div className="relative z-10">
                <Terminal className="text-zapier mb-4" size={20} />
                <p className="font-mono text-[9px] text-stone-500 uppercase tracking-widest mb-1">Root Foundation</p>
                <p className="font-bold text-lg leading-tight">B.Tech Computer Science Engineering</p>
                <p className="text-stone-400 text-xs mt-2 italic">Mar Athanasius College of Engineering</p>
              </div>
              <Code2 className="absolute -right-4 -bottom-4 text-white/5 w-32 h-32 rotate-12 transition-transform group-hover:scale-110" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {deployments.map((job) => job.id === activeId && (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white border border-stone-200 rounded-[40px] p-8 md:p-12 shadow-sm flex flex-col min-h-[620px]"
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
                    “{job.core}”
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                    {job.metrics.map(m => (
                      <div key={m} className="p-5 bg-stone-50 rounded-2xl border border-stone-100">
                        <p className="text-xl font-bold text-stone-900 tracking-tighter">{m}</p>
                        <p className="font-mono text-[9px] text-stone-400 uppercase tracking-widest mt-1">Focus Area</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 mb-10 flex-1">
                    <p className="font-mono text-[10px] font-bold text-stone-900 uppercase tracking-widest mb-4">Relevant Work:</p>
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
