import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Workflow, Target, TrendingUp, ChevronRight, Zap, ShieldCheck } from "lucide-react";

export default function BentoSystems() {
  const [view, setView] = useState("data");
  const [statIndex, setStatIndex] = useState(0);

  const content = {
    intent: {
      title: "Capturing signal before the spend.",
      desc: "Demand isn't just volume; it's qualified intent. I map paid acquisition to actual buyer psychology to ensure zero-waste growth.",
      stats: [
        { value: "4.2x", label: "Pipeline Velocity", icon: <Target className="w-5 h-5"/> },
        { value: "65%", label: "CPL Reduction", icon: <Zap className="w-5 h-5"/> }
      ],
      insights: [
        { title: "Psychological Mapping", detail: "Aligning ad copy to high-intent search behavior." },
        { title: "Funnel Integrity", detail: "Removing low-intent friction points from the lead flow." }
      ]
    },
    data: {
      title: "Architecting systems that survive scale.",
      desc: "I bridge marketing execution with technical infrastructure. Most systems break because the logic is fragmented—I build the glue.",
      stats: [
        { value: "98%", label: "Attribution Accuracy", icon: <Workflow className="w-5 h-5"/> },
        { value: "Zero", label: "Data Drift", icon: <ShieldCheck className="w-5 h-5"/> }
      ],
      insights: [
        { title: "Unified Tracking", detail: "Global definitions that stay consistent across regions." },
        { title: "CRM Orchestration", detail: "Automating the handoff between marketing and sales." }
      ]
    },
    revenue: {
      title: "Turning infrastructure into a financial asset.",
      desc: "When systems are reliable, growth becomes a predictable decision. I align sales and marketing under one source of truth.",
      stats: [
        { value: "100%", label: "Revenue Visibility", icon: <TrendingUp className="w-5 h-5"/> },
        { value: "22%", label: "ACV Increase", icon: <TrendingUp className="w-5 h-5"/> }
      ],
      insights: [
        { title: "Predictable Scaling", detail: "Confidence to double down on what truly drives revenue." },
        { title: "Sales Alignment", detail: "Higher lead quality leads to higher contract values." }
      ]
    }
  };

  const active = content[view];

  useEffect(() => {
    const timer = setInterval(() => {
      setStatIndex((prev) => (prev + 1) % active.stats.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [view]);

  useEffect(() => setStatIndex(0), [view]);

  return (
    <section id="expertise" className="py-24 px-6 bg-paper">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* LEFT: THE STRATEGY ENGINE (Main Card) */}
        <div className="md:col-span-8 md:row-span-2 p-8 md:p-12 bg-white border border-stone-200 rounded-[32px] flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <span className="font-mono text-[10px] text-zapier font-bold uppercase mb-4 md:mb-6 block tracking-widest">Growth Architecture</span>
            <AnimatePresence mode="wait">
              <motion.div
                key={view}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="text-3xl md:text-5xl font-bold leading-[1.1] text-stone-900 tracking-tight max-w-lg">
                  {active.title}
                </h3>
                <p className="text-stone-500 text-base md:text-lg mt-6 md:mt-8 max-w-md leading-relaxed">
                  {active.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons: Fixed row for mobile accessibility */}
          <div className="flex items-center gap-2 md:gap-3 font-mono text-[9px] md:text-[10px] font-bold uppercase relative z-10 mt-10 md:mt-0 overflow-x-auto no-scrollbar pb-2">
             {['intent', 'data', 'revenue'].map((item) => (
               <button
                key={item}
                onClick={() => setView(item)}
                className={`px-5 py-2.5 rounded-full transition-all duration-500 border whitespace-nowrap ${
                  view === item 
                  ? "bg-stone-900 text-white border-stone-900 shadow-lg" 
                  : "bg-paper text-stone-400 border-stone-200"
                }`}
               >
                 {item}
               </button>
             ))}
          </div>
        </div>

        {/* MOBILE CAROUSEL WRAPPER: Stats & Insights become a horizontal swipe on small screens */}
        <div className="md:col-span-4 flex md:flex-col gap-6 overflow-x-auto snap-x snap-mandatory md:overflow-visible no-scrollbar pb-4 md:pb-0">
          
          {/* ROI STATS CARD (Snap Item 1) */}
          <div className="min-w-[85vw] md:min-w-0 snap-center h-[280px] md:h-full">
            <div className="h-full bg-stone-900 text-white rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden">
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
                    <p className="text-5xl font-bold tracking-tighter italic font-serif leading-none">
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
                  className="h-full bg-zapier/40"
                />
              </div>
            </div>
          </div>

          {/* INSIGHT CARD (Snap Item 2) */}
          <div className="min-w-[85vw] md:min-w-0 snap-center h-[280px] md:h-full">
            <div 
              className="h-full bg-white border border-stone-200 rounded-[32px] p-8 flex flex-col justify-between group cursor-pointer" 
              onClick={() => setStatIndex((prev) => (prev + 1) % active.insights.length)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${view}-${statIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col justify-between"
                >
                  <div className="flex justify-between items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-zapier" />
                    <ChevronRight className="w-4 h-4 text-stone-300 md:group-hover:text-stone-900 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest mb-2">Technical Insight</p>
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

        </div>
      </div>
    </section>
  );
}
