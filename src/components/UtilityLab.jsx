import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

// --- MICRO-DEMOS (Optimized for space) ---
const ExecutiveBriefDemo = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="bg-stone-950 p-4 rounded-xl font-mono text-[9px] mt-3 border border-stone-800">
      <div className="flex justify-between items-center mb-3">
        <span className="text-stone-500 uppercase tracking-tighter">CFO_Daily_Brief.py</span>
        <button onClick={() => setActive(!active)} className="text-zapier hover:text-white transition-colors">
          <Play size={12} fill={active ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="space-y-1.5 overflow-hidden">
        <p className="text-stone-600 font-bold animate-pulse italic">&gt; fetching_data...</p>
        <AnimatePresence>
          {active && (
            <motion.div initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} className="space-y-1 text-blue-400 border-l border-blue-900/50 pl-2 ml-1">
              <p>&gt; YTD Performance: +18.4%</p>
              <p className="text-green-400 font-bold">&gt; Dispatching to C-Suite...</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// --- PERFORMANCE HUB INTERNAL COMPONENTS ---
const PowerBIView = ({ metric }) => {
  const data = { velocity: [32, 45, 42, 65, 58, 82, 75], attribution: [88, 89, 92, 94, 91, 98, 97], health: [70, 75, 80, 85, 90, 95, 100] }[metric];
  return (
    <div className="flex-1 flex items-end justify-between gap-2 h-full px-2 w-full">
      {data.map((val, i) => (
        <div key={i} className="flex-1 flex flex-col justify-end items-center gap-3 h-full">
          <motion.div initial={{ height: 0 }} animate={{ height: `${val}%` }} className="w-full rounded-t-sm bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]" style={{ minHeight: "4px" }} />
          <span className="font-mono text-[8px] text-stone-700 uppercase">M.0{i + 1}</span>
        </div>
      ))}
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function UtilityLab() {
  const [activeMetric, setActiveMetric] = useState("velocity");
  const [activeTool, setActiveTool] = useState("powerbi");

  const toolConfig = {
    powerbi: { name: "Power BI", color: "bg-blue-500", text: "text-blue-400", border: "border-blue-500/30", ext: ".pbix" },
    ga4: { name: "GA4", color: "bg-zapier", text: "text-zapier", border: "border-orange-500/30", ext: ".json" },
    gtm: { name: "GTM", color: "bg-emerald-500", text: "text-emerald-400", border: "border-emerald-500/30", ext: ".js" }
  };
  const theme = toolConfig[activeTool];

  const tools = [
    { title: "Executive Nerve Center", desc: "Automated daily digests for C-Suite mapping approval chains.", impact: "100% Clarity", tech: "Python / API", icon: <BarChart3 size={20} />, demo: <ExecutiveBriefDemo /> },
    { title: "BDM Velocity Engine", desc: "Weekly hygiene reports for Sales tracking lead conversion velocity.", impact: "12hrs/mo Saved", tech: "Automation / CRM", icon: <Activity size={20} />, demo: <div className="mt-4 p-4 bg-stone-950 rounded-xl flex items-center justify-center border border-stone-800 h-24"><Mail className="text-zapier animate-bounce" size={16} /><span className="ml-3 font-mono text-[9px] text-stone-500">GENERATING...</span></div> },
    { title: "Pipeline Logic Layer", desc: "Refactoring Opportunity Status IDs into revenue models.", impact: "Predictable Growth", tech: "Data Engineering", icon: <Database size={20} />, demo: <div className="mt-4 h-24 bg-stone-900 rounded-xl border border-white/5 flex items-center justify-center font-mono text-[8px] text-stone-500">FORECAST_MODEL_ACTIVE</div> },
    { title: "Omni-Channel Sync", desc: "Middleware normalizing payloads to preserve lead attribution.", impact: "99.9% Integrity", tech: "Node / Webhooks", icon: <ShieldCheck size={20} />, demo: <div className="mt-4 p-4 border border-dashed border-stone-200 rounded-xl flex items-center justify-center font-mono text-[8px] text-stone-300 h-24 uppercase tracking-widest">Tracing_Signal</div> },
  ];

  return (
    <section id="lab" className="py-16 md:py-32 px-4 md:px-6 bg-paper relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <span className="font-mono text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-4 block">Engineered Efficiency</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 italic font-serif">The Utility Lab.</h2>
        </div>

        {/* --- THE MASTER GRID --- */}
        {/* Mobile: 1 Col (Stacking) | Desktop: 4 Col Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-6 relative">
          
          {/* 1-4: THE TOOL CARDS */}
          {tools.map((tool, i) => (
            <div 
              key={i} 
              style={{
                top: `${80 + (i * 36)}px`, 
                zIndex: i + 10,
              }}
              className={`
                sticky md:static 
                bg-white border border-stone-200 
                rounded-[32px] p-7 md:p-8 
                flex flex-col justify-between 
                transition-all duration-500
                shadow-[0_-12px_40px_-15px_rgba(0,0,0,0.08)] md:shadow-none
                h-[360px] md:h-[520px]
                ${i > 0 ? "-mt-56 sm:-mt-64 md:mt-0" : ""} 
              `}
            >
              <div>
                <div className="flex justify-between mb-8">
                  <div className="w-10 h-10 rounded-2xl bg-paper flex items-center justify-center text-stone-400">{tool.icon}</div>
                  <Code2 className="w-4 h-4 text-stone-200" />
                </div>
                <h4 className="font-bold text-stone-900 text-lg mb-2">{tool.title}</h4>
                <p className="text-stone-500 text-sm mb-6">{tool.desc}</p>
                {tool.demo}
              </div>
              <div className="mt-8 pt-6 border-t border-stone-50 flex justify-between text-[9px] font-mono font-bold uppercase tracking-widest">
                <span className="text-stone-400">{tool.tech}</span>
                <span className="text-zapier">{tool.impact}</span>
              </div>
            </div>
          ))}

          {/* 5: THE PERFORMANCE HUB (Participates in Mobile Wallet Stack) */}
          <div 
            style={{
              top: `${80 + (4 * 36)}px`, 
              zIndex: 15,
            }}
            className="sticky md:static md:col-span-2 lg:col-span-4 -mt-56 sm:-mt-64 md:mt-12 lg:mt-20 w-full h-[450px] md:h-auto"
          >
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="h-full p-6 md:p-12 bg-stone-900 rounded-[32px] md:rounded-[40px] text-white border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 h-full md:h-auto">
                <div className="lg:col-span-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-2 rounded-lg bg-white/5 ${theme.text}`}><BarChart3 size={20} /></div>
                      <h4 className="font-bold text-lg uppercase tracking-tighter">Performance Hub</h4>
                    </div>
                    <div className="flex lg:flex-col overflow-x-auto no-scrollbar gap-2 mb-6">
                      {["velocity", "attribution", "health"].map((m) => (
                        <button key={m} onClick={() => setActiveMetric(m)} className={`px-5 py-3 lg:w-full lg:text-left rounded-xl font-mono text-[10px] font-bold uppercase transition-all ${activeMetric === m ? "bg-white text-stone-900" : "bg-white/5 text-stone-500 hover:bg-white/10"}`}>{m}</button>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:block border-t border-white/10 pt-8">
                    <span className="font-mono text-[8px] text-stone-600 uppercase mb-3 block">Engineered Engine</span>
                    <div className="flex gap-2">
                      {Object.keys(toolConfig).map((t) => (
                        <button key={t} onClick={() => setActiveTool(t)} className={`px-3 py-2 rounded-lg font-mono text-[9px] font-bold border transition-all ${activeTool === t ? `${toolConfig[t].border} bg-white/10 ${toolConfig[t].text}` : "border-transparent text-stone-500"}`}>{toolConfig[t].name}</button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-8 bg-black/40 rounded-3xl p-6 md:p-8 border border-white/5 flex flex-col flex-1 h-[200px] md:h-[400px]">
                  <div className="flex justify-between mb-4 md:mb-8">
                    <div className="flex items-center gap-3"><div className={`h-2 w-2 rounded-full animate-pulse ${theme.color}`} /><span className="font-mono text-[10px] text-stone-300 uppercase">{activeMetric}{theme.ext}</span></div>
                  </div>
                  <div className="flex-1 flex items-end justify-center w-full">
                    <AnimatePresence mode="wait">
                       <PowerBIView key={activeMetric} metric={activeMetric} />
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
