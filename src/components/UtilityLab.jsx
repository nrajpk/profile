import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import {
  BarChart3,
  Mail,
  Database,
  Activity,
  ShieldCheck,
  Play,
  Code2,
  ActivitySquare,
} from "lucide-react";

// --- WALLET-STYLE SNAP CARD (MOBILE OPTIMIZED) ---
function WalletSnapCard({ children, scrollRef }) {
  const cardRef = useRef(null);

  const scale = useMotionValue(1);
  const y = useMotionValue(0);
  const opacity = useMotionValue(1);

  const smoothScale = useSpring(scale, { stiffness: 400, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 400, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 400, damping: 30 });

  useEffect(() => {
    let container = scrollRef?.current;
    let card = cardRef.current;
    let animationFrameId;

    const updateCardState = () => {
      // Instantly reset physics for Desktop Grid
      if (window.innerWidth >= 768) {
        scale.set(1);
        y.set(0);
        opacity.set(1);
        return;
      }

      if (!container || !card) return;

      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();

      const containerCenter = containerRect.left + containerRect.width / 2;
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      const maxDistance = containerRect.width * 0.7;
      const progress = Math.min(distance / maxDistance, 1);

      scale.set(1 - progress * 0.08);
      y.set(progress * 18);
      opacity.set(1 - progress * 0.5);
    };

    const initBind = () => {
      container = scrollRef?.current;
      card = cardRef.current;
      if (container && card) {
        updateCardState();
        container.addEventListener("scroll", updateCardState, { passive: true });
        window.addEventListener("resize", updateCardState);
      } else {
        animationFrameId = requestAnimationFrame(initBind);
      }
    };

    initBind();

    return () => {
      if (container) {
        container.removeEventListener("scroll", updateCardState);
        window.removeEventListener("resize", updateCardState);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollRef]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale: smoothScale,
        y: smoothY,
        opacity: smoothOpacity,
      }}
      // STRUCTURAL FIX: Mobile min-widths vs Desktop full-width
      className="snap-center shrink-0 min-w-[88%] sm:min-w-[74%] md:min-w-0 md:w-full h-full"
    >
      {children}
    </motion.div>
  );
}

// --- MICRO-DEMO 1: EXECUTIVE BRIEF ---
const ExecutiveBriefDemo = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="bg-stone-950 p-4 rounded-xl font-mono text-[9px] mt-3 border border-stone-800 group/demo">
      <div className="flex justify-between items-center mb-3">
        <span className="text-stone-500 uppercase tracking-tighter">
          CFO_Daily_Brief.py
        </span>
        <button
          onClick={() => setActive(!active)}
          className="text-zapier hover:text-white transition-colors"
        >
          <Play size={12} fill={active ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="space-y-1.5 overflow-hidden">
        <p className="text-stone-600 font-bold leading-none animate-pulse italic">
          &gt; fetching_approval_chains...
        </p>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-1 text-blue-400 border-l border-blue-900/50 pl-2 ml-1"
            >
              <p>&gt; Pending Approvals: 12 [CRITICAL]</p>
              <p>&gt; YTD Performance: +18.4% vs Target</p>
              <p className="text-green-400 font-bold">
                &gt; Dispatching to C-Suite...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// --- MICRO-DEMO 2: PIPELINE LOGIC ---
const PipelineLogicDemo = () => {
  return (
    <div className="mt-3 p-4 bg-stone-900 rounded-xl border border-white/5 font-mono text-[9px] group/demo h-full flex flex-col justify-center">
      <div className="flex items-center gap-2 mb-3">
        <div className="px-1.5 py-0.5 bg-zapier/20 text-zapier rounded border border-zapier/30">
          ID: 3
        </div>
        <span className="text-stone-600">→</span>
        <span className="text-blue-400 font-bold uppercase tracking-tighter">
          Proposal_Sent
        </span>
      </div>

      <div className="space-y-2">
        <div className="h-1 w-full bg-stone-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60%" }}
            className="h-full bg-zapier"
          />
        </div>

        <div className="flex justify-between text-stone-500">
          <span>Forecast Weight: 60%</span>
          <span className="text-white">BQL_QUALIFIED</span>
        </div>
      </div>
    </div>
  );
};

// --- NATIVE RENDERERS ---
const PowerBIView = ({ metric }) => {
  const dataMap = {
    velocity: [32, 45, 42, 65, 58, 82, 75],
    attribution: [88, 89, 92, 94, 91, 98, 97],
    health: [70, 75, 80, 85, 90, 95, 100],
  };
  const data = dataMap[metric];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1 flex items-end justify-between gap-2 md:gap-3 h-full px-2 md:px-4 w-full"
    >
      {data.map((val, i) => (
        <div key={`pbi-${metric}-${i}`} className="flex-1 flex flex-col justify-end items-center gap-3 md:gap-4 group h-full">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: `${val}%` }}
            transition={{ type: "spring", bounce: 0, duration: 1, delay: i * 0.05 }}
            className="w-full rounded-t-sm transition-all duration-700 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            style={{ minHeight: "4px" }}
          />
          <span className="font-mono text-[8px] text-stone-700 uppercase">M.0{i + 1}</span>
        </div>
      ))}
    </motion.div>
  );
};

const GA4View = ({ metric }) => {
  const eventMap = {
    velocity: [
      { event: "session_start", users: "12,450", rate: "100%" },
      { event: "view_item", users: "8,230", rate: "66.1%" },
      { event: "generate_lead", users: "412", rate: "3.3%" },
    ],
    attribution: [
      { event: "organic_search", users: "45%", rate: "+12%" },
      { event: "paid_social", users: "32%", rate: "-2%" },
      { event: "direct", users: "23%", rate: "0%" },
    ],
    health: [
      { event: "engaged_sessions", users: "98.2%", rate: "Valid" },
      { event: "bounce_rate", users: "42.1%", rate: "Stable" },
      { event: "data_loss_flags", users: "0", rate: "Clean" },
    ],
  };
  const events = eventMap[metric];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1 flex flex-col justify-center gap-3 md:gap-4 h-full w-full px-1 md:px-2"
    >
      {events.map((ev, i) => (
        <motion.div
          key={`ga4-${metric}-${i}`}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.15 }}
          className="flex justify-between items-center p-3 bg-stone-950 border border-stone-800 rounded-lg"
        >
          <div className="flex items-center gap-3 min-w-0">
            <ActivitySquare className="text-zapier shrink-0" size={14} />
            <span className="font-mono text-[10px] text-stone-300 truncate max-w-[88px] sm:max-w-[120px] md:max-w-none">
              {ev.event}
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 text-right shrink-0">
            <span className="font-mono text-[10px] font-bold text-white">{ev.users}</span>
            <span className="font-mono text-[9px] text-stone-500 w-8 md:w-10">{ev.rate}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const GTMView = ({ metric }) => {
  const tagMap = {
    velocity: [
      { name: "SFDC_Sync", status: "Succeeded", type: "Custom HTML" },
      { name: "Hubspot_Form", status: "Succeeded", type: "Image Tag" },
    ],
    attribution: [
      { name: "LinkedIn_Tag", status: "Succeeded", type: "Template" },
      { name: "G_Ads_Conv", status: "Succeeded", type: "Template" },
    ],
    health: [
      { name: "Consent_Update", status: "Fired", type: "Trigger" },
      { name: "DataLayer_Val", status: "Passed", type: "Variable" },
    ],
  };
  const tags = tagMap[metric];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1 flex flex-col md:flex-row gap-4 h-full w-full"
    >
      <div className="w-full md:w-1/2 border border-stone-800 bg-stone-950 rounded-lg p-3 md:p-4 flex flex-col">
        <span className="font-mono text-[8px] text-stone-500 uppercase tracking-widest mb-3 border-b border-stone-800 pb-2 block">
          Tags Fired
        </span>
        <div className="space-y-2 flex-1">
          {tags.map((tag, i) => (
            <motion.div
              key={`gtm-tag-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="flex items-center gap-2"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[9px] text-stone-300 truncate">{tag.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex w-1/2 border border-stone-800 bg-stone-950 rounded-lg p-4 flex-col font-mono text-[8px] text-emerald-400 overflow-hidden relative">
        <span className="text-stone-500 uppercase tracking-widest mb-3 border-b border-stone-800 pb-2 block">
          DataLayer.Push
        </span>
        <div className="opacity-80">
          &#123;<br />
          &nbsp;&nbsp;"event": "{metric}_check",<br />
          &nbsp;&nbsp;"status": 200,<br />
          &nbsp;&nbsp;"integrity": true<br />
          &#125;
        </div>
      </div>
    </motion.div>
  );
};

// --- EXECUTIVE PERFORMANCE HUB ---
const ExecutivePerformanceHub = () => {
  const [activeMetric, setActiveMetric] = useState("velocity");
  const [activeTool, setActiveTool] = useState("powerbi");

  const metricConfig = {
    velocity: { label: "Pipeline Velocity", short: "Velocity" },
    attribution: { label: "Attribution Accuracy", short: "Attribution" },
    health: { label: "Data Ecosystem Health", short: "Health" },
  };

  const toolConfig = {
    powerbi: { name: "Power BI", color: "bg-blue-500", text: "text-blue-400", border: "border-blue-500/30", fileExt: "_model.pbix" },
    ga4: { name: "GA4", color: "bg-zapier", text: "text-zapier", border: "border-orange-500/30", fileExt: "_stream.json" },
    gtm: { name: "GTM", color: "bg-emerald-500", text: "text-emerald-400", border: "border-emerald-500/30", fileExt: "_container.js" },
  };

  const currentTheme = toolConfig[activeTool];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-5 sm:p-6 md:p-12 bg-stone-900 rounded-[28px] md:rounded-[40px] text-white border border-white/5 shadow-2xl relative overflow-hidden"
    >
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12">
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-5 md:mb-6">
              <div className={`p-2 rounded-lg transition-colors duration-500 bg-white/5 ${currentTheme.text}`}>
                <BarChart3 size={20} />
              </div>
              <h4 className="font-bold text-lg md:text-xl uppercase tracking-tighter">Performance Hub</h4>
            </div>

            <p className="hidden md:block text-stone-400 text-sm leading-relaxed mb-8">
              Select a core growth metric and observe the data through native rendering environments. Bridging infrastructure with boardroom visibility.
            </p>

            <div className="flex lg:flex-col overflow-x-auto no-scrollbar gap-2 mb-5 md:mb-0 -mx-1 px-1">
              {Object.keys(metricConfig).map((metric) => (
                <button
                  key={metric}
                  onClick={() => setActiveMetric(metric)}
                  className={`whitespace-nowrap px-4 sm:px-5 py-2.5 sm:py-3 lg:w-full lg:text-left rounded-full lg:rounded-xl font-mono text-[10px] font-bold uppercase tracking-widest transition-all duration-300 flex justify-center lg:justify-between items-center shrink-0 ${
                    activeMetric === metric ? "bg-white text-stone-900 shadow-xl" : "bg-white/5 text-stone-500 hover:bg-white/10"
                  }`}
                >
                  <span className="hidden lg:inline">{metricConfig[metric].label}</span>
                  <span className="lg:hidden">{metricConfig[metric].short}</span>
                  {activeMetric === metric && <Activity size={12} className="hidden lg:block animate-pulse" />}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 md:mt-12 md:pt-8 border-t border-white/10">
            <span className="font-mono text-[8px] text-stone-600 uppercase tracking-widest mb-3 block">Rendering Engine</span>
            <div className="flex flex-wrap gap-2">
              {Object.keys(toolConfig).map((tool) => (
                <button
                  key={tool}
                  onClick={() => setActiveTool(tool)}
                  className={`px-3 py-2 rounded-lg font-mono text-[9px] font-bold uppercase tracking-widest transition-all border ${
                    activeTool === tool
                      ? `${toolConfig[tool].border} bg-white/10 ${toolConfig[tool].text}`
                      : "border-transparent text-stone-500 hover:text-stone-300 hover:bg-white/5"
                  }`}
                >
                  {toolConfig[tool].name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 bg-black/40 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/5 flex flex-col h-[260px] sm:h-[300px] md:h-[360px] relative">
          <div className="flex justify-between items-center mb-5 md:mb-8 gap-3">
            <div className="flex items-center gap-2 md:gap-3 min-w-0">
              <div className={`h-2 w-2 rounded-full animate-pulse ${currentTheme.color}`} />
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[8px] text-stone-600 uppercase tracking-widest block mb-0.5">Data_Source</span>
                <span className="font-mono text-[9px] md:text-[10px] text-stone-300 uppercase truncate max-w-[120px] sm:max-w-[180px] md:max-w-none">
                  {activeMetric}{currentTheme.fileExt}
                </span>
              </div>
            </div>
            <div className="text-right shrink-0">
              <span className="font-mono text-[8px] text-stone-600 uppercase tracking-widest block mb-0.5">Active_Dimension</span>
              <span className={`font-mono text-[9px] md:text-[10px] font-bold uppercase ${currentTheme.text} hidden md:inline`}>{metricConfig[activeMetric].label}</span>
              <span className={`font-mono text-[9px] font-bold uppercase ${currentTheme.text} md:hidden`}>{metricConfig[activeMetric].short}</span>
            </div>
          </div>

          <div className="flex-1 flex items-end justify-center w-full">
            <AnimatePresence mode="wait">
              {activeTool === "powerbi" && <PowerBIView key="pbi" metric={activeMetric} />}
              {activeTool === "ga4" && <GA4View key="ga4" metric={activeMetric} />}
              {activeTool === "gtm" && <GTMView key="gtm" metric={activeMetric} />}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className={`absolute -right-20 -bottom-20 opacity-[0.03] pointer-events-none transition-colors duration-1000 ${currentTheme.text}`}>
        <Activity size={480} />
      </div>
    </motion.div>
  );
};

// --- DATA STRUCTURE ---
const tools = [
  {
    title: "Executive Nerve Center",
    desc: "Automated daily performance digests for C-Suite mapping approval chains and YTD targets.",
    impact: "100% Task Clarity",
    tech: "CRM / Python / API",
    icon: <BarChart3 size={20} />,
    demo: <ExecutiveBriefDemo />,
  },
  {
    title: "BDM Velocity Engine",
    desc: "Weekly hygiene reports for Sales Managers tracking lead-to-proposal conversion velocity.",
    impact: "12hrs/mo Saved",
    tech: "Automation / CRM",
    icon: <Activity size={20} />,
    demo: (
      <div className="mt-4 p-4 bg-stone-950 rounded-xl flex items-center justify-center border border-stone-800 h-[84px] sm:h-[96px]">
        <Mail className="text-zapier animate-bounce" size={16} />
        <span className="ml-3 font-mono text-[9px] text-stone-500 uppercase tracking-widest">Generating Digest...</span>
      </div>
    ),
  },
  {
    title: "Pipeline Logic Layer",
    desc: "Refactoring Opportunity Status IDs (1-5) into a high-fidelity revenue forecasting model.",
    impact: "Predictable Growth",
    tech: "Data Engineering",
    icon: <Database size={20} />,
    demo: <PipelineLogicDemo />,
  },
  {
    title: "Omni-Channel Sync",
    desc: "Middleware normalizing payloads across LinkedIn and CRM to preserve lead attribution.",
    impact: "99.9% Integrity",
    tech: "Node.js / Webhooks",
    icon: <ShieldCheck size={20} />,
    demo: (
      <div className="mt-4 p-4 border border-dashed border-stone-200 rounded-xl flex items-center justify-center font-mono text-[8px] text-stone-300 uppercase tracking-[0.2em] h-[84px] sm:h-[96px]">
        Tracing_Signal_Active
      </div>
    ),
  },
];

// --- MAIN EXPORT ---
export default function UtilityLab() {
  const mobileScrollRef = useRef(null);

  return (
    <section id="lab" className="scroll-mt-24 py-16 md:py-32 px-4 sm:px-5 md:px-6 bg-paper relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-20 gap-4 md:gap-6">
          <div className="max-w-xl pt-1">
            <span className="font-mono text-[9px] md:text-[10px] font-bold text-stone-400 uppercase tracking-[0.22em] md:tracking-[0.3em] mb-2 md:mb-4 block">
              Engineered Efficiency
            </span>
            <h2 className="text-[34px] sm:text-[40px] md:text-5xl font-bold tracking-tight text-stone-900 italic font-serif leading-none">
              The Utility Lab.
            </h2>
          </div>

          <div className="px-4 py-2 bg-white border border-stone-200 rounded-full shadow-sm hidden md:block">
            <span className="font-mono text-[9px] font-bold text-stone-400 uppercase">
              System Health: 100% Operational
            </span>
          </div>
        </div>

        {/* Structural Fix: Mobile Scroll Container vs Desktop CSS Grid */}
        <div className="relative">
          <div
            ref={mobileScrollRef}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory md:overflow-visible pb-6 md:pb-0 -mx-4 px-4 sm:px-5 md:mx-0 md:px-0"
            style={{ WebkitOverflowScrolling: "touch", scrollPaddingLeft: "1rem", scrollPaddingRight: "1rem" }}
          >
            {tools.map((tool, i) => (
              <WalletSnapCard key={i} scrollRef={mobileScrollRef}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="h-full p-5 sm:p-7 md:p-8 bg-white border border-stone-200 rounded-[24px] md:rounded-[32px] flex flex-col justify-between group hover:border-zapier transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/5"
                >
                  <div>
                    <div className="flex justify-between items-start mb-5 md:mb-8">
                      <div className="w-10 h-10 rounded-2xl bg-paper flex items-center justify-center text-stone-400 group-hover:text-zapier transition-colors">
                        {tool.icon}
                      </div>
                      <Code2 className="w-4 h-4 text-stone-100 group-hover:text-stone-300 transition-colors" />
                    </div>

                    <h4 className="font-bold text-stone-900 text-lg mb-2">{tool.title}</h4>
                    <p className="text-stone-500 text-[13px] sm:text-sm leading-relaxed mb-4 md:mb-6">{tool.desc}</p>
                    {tool.demo}
                  </div>

                  <div className="mt-5 md:mt-8 pt-4 md:pt-6 border-t border-stone-50 flex justify-between items-center text-[9px] font-mono font-bold uppercase tracking-widest gap-3">
                    <span className="text-stone-400 truncate">{tool.tech}</span>
                    <span className="text-zapier shrink-0">{tool.impact}</span>
                  </div>
                </motion.div>
              </WalletSnapCard>
            ))}
          </div>
        </div>

        <div className="mt-6 md:mt-12">
          <ExecutivePerformanceHub />
        </div>
        
      </div>
    </section>
  );
}
