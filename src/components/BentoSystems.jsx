import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Workflow,
  Target,
  TrendingUp,
  ChevronRight,
  Zap,
  ShieldCheck,
} from "lucide-react";

export default function BentoSystems() {
  const [view, setView] = useState("data");
  const [statIndex, setStatIndex] = useState(0);

  const content = {
    intent: {
      title: "Capturing signal before the spend.",
      desc: "Demand isn't just volume; it's qualified intent. I map paid acquisition to actual buyer psychology to ensure zero-waste growth.",
      stats: [
        {
          value: "4.2x",
          label: "Pipeline Velocity",
          icon: <Target className="w-5 h-5" />,
        },
        {
          value: "65%",
          label: "CPL Reduction",
          icon: <Zap className="w-5 h-5" />,
        },
      ],
      insights: [
        {
          title: "Psychological Mapping",
          detail: "Aligning ad copy to high-intent search behavior.",
        },
        {
          title: "Funnel Integrity",
          detail: "Removing low-intent friction points from the lead flow.",
        },
      ],
    },
    data: {
      title: "Architecting systems that survive scale.",
      desc: "I bridge marketing execution with technical infrastructure. Most systems break because the logic is fragmented—I build the glue.",
      stats: [
        {
          value: "98%",
          label: "Attribution Accuracy",
          icon: <Workflow className="w-5 h-5" />,
        },
        {
          value: "Zero",
          label: "Data Drift",
          icon: <ShieldCheck className="w-5 h-5" />,
        },
      ],
      insights: [
        {
          title: "Unified Tracking",
          detail: "Global definitions that stay consistent across regions.",
        },
        {
          title: "CRM Orchestration",
          detail: "Automating the handoff between marketing and sales.",
        },
      ],
    },
    revenue: {
      title: "Turning infrastructure into a financial asset.",
      desc: "When systems are reliable, growth becomes a predictable decision. I align sales and marketing under one source of truth.",
      stats: [
        {
          value: "100%",
          label: "Revenue Visibility",
          icon: <TrendingUp className="w-5 h-5" />,
        },
        {
          value: "22%",
          label: "ACV Increase",
          icon: <TrendingUp className="w-5 h-5" />,
        },
      ],
      insights: [
        {
          title: "Predictable Scaling",
          detail: "Confidence to double down on what truly drives revenue.",
        },
        {
          title: "Sales Alignment",
          detail: "Higher lead quality leads to higher contract values.",
        },
      ],
    },
  };

  const active = content[view];

  useEffect(() => {
    const timer = setInterval(() => {
      setStatIndex((prev) => (prev + 1) % active.stats.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [view, active.stats.length]);

  useEffect(() => {
    setStatIndex(0);
  }, [view]);

  return (
    <section
      id="expertise"
      className="py-16 px-4 sm:px-5 md:py-24 md:px-6 bg-paper"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {/* LEFT: THE STRATEGY ENGINE */}
        <div className="md:col-span-8 md:row-span-2 p-6 sm:p-7 md:p-12 bg-white border border-stone-200 rounded-[24px] md:rounded-[32px] flex flex-col justify-between relative overflow-hidden min-h-[360px] md:min-h-0">
          <div className="relative z-10">
            <span className="font-mono text-[9px] sm:text-[10px] text-zapier font-bold uppercase mb-4 md:mb-6 block tracking-[0.22em]">
              Growth Architecture
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={view}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="text-[30px] sm:text-[34px] md:text-5xl font-bold leading-[1.04] text-stone-900 tracking-tight max-w-lg text-balance">
                  {active.title}
                </h3>

                <p className="text-stone-500 text-[15px] sm:text-base md:text-lg mt-4 sm:mt-5 md:mt-8 max-w-md leading-7 md:leading-relaxed">
                  {active.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* MOBILE/ALL NAV */}
          <div className="relative z-10 mt-8 md:mt-10">
            <div className="-mx-1 px-1 overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-2 md:gap-3 font-mono text-[9px] md:text-[10px] font-bold uppercase w-max min-w-full pb-1">
                {["intent", "data", "revenue"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setView(item)}
                    className={`px-4 sm:px-4.5 md:px-5 py-2.5 md:py-2.5 rounded-full transition-all duration-300 border whitespace-nowrap shrink-0 ${
                      view === item
                        ? "bg-stone-900 text-white border-stone-900 shadow-md"
                        : "bg-paper text-stone-500 border-stone-200"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: MOBILE SWIPE / DESKTOP STACK */}
        <div className="md:col-span-4">
          <div className="flex md:flex-col gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-1 md:pb-0">
            {/* ROI STATS CARD */}
            <div className="min-w-[84%] sm:min-w-[78%] md:min-w-0 snap-center md:snap-align-none h-[240px] sm:h-[250px] md:h-full shrink-0">
              <div className="h-full bg-stone-900 text-white rounded-[24px] md:rounded-[32px] p-6 sm:p-7 md:p-8 flex flex-col justify-between relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${view}-${statIndex}`}
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -16, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="h-full flex flex-col justify-between"
                  >
                    <div className="text-zapier">
                      {active.stats[statIndex].icon}
                    </div>

                    <div>
                      <p className="text-[42px] sm:text-[48px] md:text-5xl font-bold tracking-tighter italic font-serif leading-none">
                        {active.stats[statIndex].value}
                      </p>
                      <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-stone-400 mt-2 font-bold">
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
                    className="h-full bg-zapier/40"
                  />
                </div>
              </div>
            </div>

            {/* INSIGHT CARD */}
            <div className="min-w-[84%] sm:min-w-[78%] md:min-w-0 snap-center md:snap-align-none h-[240px] sm:h-[250px] md:h-full shrink-0">
              <button
                type="button"
                className="h-full w-full text-left bg-white border border-stone-200 rounded-[24px] md:rounded-[32px] p-6 sm:p-7 md:p-8 flex flex-col justify-between group"
                onClick={() =>
                  setStatIndex((prev) => (prev + 1) % active.insights.length)
                }
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${view}-${statIndex}-insight`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-zapier" />
                      <ChevronRight className="w-4 h-4 text-stone-300 md:group-hover:text-stone-900 transition-colors" />
                    </div>

                    <div>
                      <p className="text-[10px] sm:text-xs font-mono font-bold text-stone-400 uppercase tracking-[0.18em] mb-2">
                        Technical Insight
                      </p>
                      <p className="text-[20px] sm:text-[22px] md:text-xl font-bold leading-tight text-stone-900 mb-2">
                        {active.insights[statIndex].title}
                      </p>
                      <p className="text-stone-500 text-[14px] sm:text-sm leading-6">
                        {active.insights[statIndex].detail}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
