import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Code2, Terminal } from "lucide-react";

const deployments = [
  {
    id: "deployment-04",
    period: "2023 - PRESENT",
    phase: "Systems Layer",
    role: "Marketing & Digital Transformation",
    company: "Mahindra Emirates Vehicle Armouring",
    location: "UAE (Global Markets)",
    environment: "B2B / B2G Defense Solutions",
    core: "Working across digital marketing, CRM workflows, data extraction, and global campaign operations for high-consideration markets.",
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
    phase: "Acquisition Layer",
    role: "Digital Marketing Consultant",
    company: "Coach2Reach Inc.",
    location: "Global (Remote)",
    environment: "B2C EdTech",
    core: "Managed acquisition and tracking workflows across Google Ads, analytics, and performance review loops.",
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
    phase: "Campaign Layer",
    role: "Social Media Specialist",
    company: "ChalksnSlate Media",
    location: "India (Hybrid)",
    environment: "B2B Media Agency",
    core: "Built creative and campaign execution discipline across social channels, assets, and reporting cycles.",
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
    phase: "Foundation Layer",
    role: "Sr. Digital Marketing Associate",
    company: "Markon Strategy Consulting",
    location: "India (Hybrid)",
    environment: "B2B Marketing Startup",
    core: "Built the early foundation across websites, UI/UX, campaign execution, and marketing automation support.",
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

  const activeJob = deployments.find((job) => job.id === activeId);

  return (
    <section
      id="experience"
      className="py-36 md:py-40 px-6 bg-paper border-t border-stone-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="mb-10">
              <span className="font-mono text-[10px] font-bold text-stone-400 uppercase tracking-[0.4em] mb-4 block">
                Background
              </span>

              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-stone-900 italic font-serif">
                A marketing path with a technical base.
              </h2>

              <p className="text-stone-500 leading-relaxed mt-6 max-w-md">
                My career has moved through campaign execution, websites,
                acquisition, CRM workflows, analytics, and data systems. The
                common thread is operational: making the visible parts of
                marketing work through cleaner systems underneath.
              </p>
            </div>

            <div className="relative mt-10 pl-8">
              <div className="absolute left-[10px] top-3 bottom-3 w-px bg-stone-200" />

              <div className="space-y-5">
                {deployments.map((job) => {
                  const isActive = activeId === job.id;

                  return (
                    <button
                      key={job.id}
                      onClick={() => setActiveId(job.id)}
                      className={`relative w-full text-left transition-all duration-500 group ${
                        isActive ? "translate-x-1" : "opacity-55 hover:opacity-100"
                      }`}
                    >
                      <span
                        className={`absolute -left-[30px] top-5 h-4 w-4 rounded-full border transition-all duration-500 ${
                          isActive
                            ? "bg-stone-950 border-stone-950 shadow-[0_0_0_6px_rgba(255,80,20,0.10)]"
                            : "bg-paper border-stone-400 group-hover:border-zapier"
                        }`}
                      />

                      <div
                        className={`rounded-2xl border px-5 py-4 transition-all duration-500 ${
                          isActive
                            ? "bg-white border-stone-950 shadow-xl shadow-stone-900/5"
                            : "bg-transparent border-transparent hover:bg-white/70 hover:border-stone-200"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p
                              className={`font-mono text-[8px] font-bold uppercase tracking-[0.28em] mb-2 ${
                                isActive ? "text-zapier" : "text-stone-400"
                              }`}
                            >
                              {job.period}
                            </p>

                            <p
                              className={`font-bold leading-tight transition-colors ${
                                isActive ? "text-stone-950" : "text-stone-600"
                              }`}
                            >
                              {job.company}
                            </p>

                            <p className="font-mono text-[8px] font-bold uppercase tracking-[0.24em] text-stone-400 mt-2">
                              {job.phase}
                            </p>
                          </div>

                          <ChevronRight
                            className={`w-4 h-4 transition-all duration-500 ${
                              isActive
                                ? "text-zapier translate-x-0"
                                : "text-stone-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                            }`}
                          />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 p-8 bg-stone-900 rounded-[32px] text-white relative overflow-hidden group">
              <div className="relative z-10">
                <Terminal className="text-zapier mb-4" size={20} />

                <p className="font-mono text-[9px] text-stone-500 uppercase tracking-widest mb-1">
                  Root Foundation
                </p>

                <p className="font-bold text-lg leading-tight">
                  B.Tech in Computer Science
                </p>

                <p className="text-stone-400 text-xs mt-2 italic">
                  Mar Athanasius College of Engineering
                </p>
              </div>

              <Code2 className="absolute -right-4 -bottom-4 text-white/5 w-32 h-32 rotate-12 transition-transform group-hover:scale-110" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {activeJob && (
                <motion.div
                  key={activeJob.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white border border-stone-200 rounded-[40px] p-8 md:p-12 shadow-sm flex flex-col min-h-[620px]"
                >
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="px-3 py-1 bg-stone-900 text-white rounded-full font-mono text-[9px] font-bold uppercase tracking-widest">
                      {activeJob.phase}
                    </span>

                    <span className="px-3 py-1 bg-stone-50 border border-stone-100 rounded-full font-mono text-[9px] font-bold text-stone-400 uppercase tracking-widest">
                      {activeJob.location}
                    </span>

                    <span className="px-3 py-1 bg-stone-50 border border-stone-100 rounded-full font-mono text-[9px] font-bold text-zapier uppercase tracking-widest">
                      {activeJob.environment}
                    </span>
                  </div>

                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.32em] text-stone-400 mb-4">
                    {activeJob.period}
                  </p>

                  <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3 leading-tight tracking-tight">
                    {activeJob.role}
                  </h3>

                  <p className="text-stone-500 text-base md:text-lg font-semibold mb-8">
                    {activeJob.company}
                  </p>

                  <p className="text-stone-500 text-lg leading-relaxed mb-10 italic font-serif">
                    “{activeJob.core}”
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                    {activeJob.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="p-5 bg-stone-50 rounded-2xl border border-stone-100"
                      >
                        <p className="text-xl font-bold text-stone-900 tracking-tighter">
                          {metric}
                        </p>
                        <p className="font-mono text-[9px] text-stone-400 uppercase tracking-widest mt-1">
                          Focus Area
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 mb-10 flex-1">
                    <p className="font-mono text-[10px] font-bold text-stone-900 uppercase tracking-widest mb-4">
                      Relevant Work:
                    </p>

                    {activeJob.highlights.map((point, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zapier flex-shrink-0" />
                        <p className="text-stone-500 text-sm leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-stone-100 flex flex-wrap gap-2">
                    {activeJob.stack.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-stone-900 text-white font-mono text-[8px] font-bold uppercase tracking-widest rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}