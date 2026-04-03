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
  ArrowUpRight
} from "lucide-react";

// --- MICRO-DEMOS (Optimized for Interactive Clickability) ---
const ExecutiveBriefDemo = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="bg-stone-950 p-4 rounded-xl font-mono text-[9px] mt-4 border border-stone-800">
      <div className="flex justify-between items-center mb-3">
        <span className="text-stone-500 uppercase tracking-tighter">CFO_Daily_Brief.py</span>
        <button 
          onClick={(e) => { e.stopPropagation(); setActive(!active); }} 
          className="text-zapier hover:text-white transition-colors p-1"
        >
          <Play size={12} fill={active ? "currentColor" : "none"}/>
        </button>
      </div>
      <div className="space-y-1.5 overflow-hidden h-12">
        <p className="text-stone-600 font-bold animate-pulse italic">&gt; fetching_data...</p>
        <AnimatePresence>
          {active && (
            <motion.div initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} className="text-blue-400 border-l border-blue-900/50 pl-2 ml-1">
              <p>&gt; YTD Performance: +18.4%</p>
              <p className="text-green-400 font-bold">&gt; Dispatched to C-Suite</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// --- NATIVE RENDERERS (Fixing the "Missing" parts) ---
const PowerBIView = ({ metric }) => {
  const data = { velocity: [32, 45, 42, 65, 58, 82, 75], attribution: [88, 89, 92, 94, 91, 98, 97], health: [70, 75, 80, 85, 90, 95, 100] }[metric];
  return (
    <div className="flex-1 flex items-end justify-between gap-2 h-40 px-2 w-full">
      {data.map((val, i) => (
        <div key={i} className="flex-1 flex flex-col justify-end items-center gap-3 h-full group">
          <motion.div initial={{ height: 0 }} animate={{ height: `${val}%` }} className="w-full rounded-t-sm bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
          <span className="font-mono text-[7px] text-stone-700 uppercase">M.{i+1}</span>
        </div>
      ))}
    </div>
  );
};

const GA4View = ({ metric }) => {
  const events = {
    velocity: [{ e: "session_start", v: "12k" }, { e: "view_item", v: "8.2k" }, { e: "lead", v: "412" }],
    attribution: [{ e: "organic", v: "45%" }, { e: "paid", v: "32%" }, { e: "direct", v: "23%" }],
    health: [{ e: "engaged", v: "98%" }, { e: "bounce", v: "42%" }, { e: "loss", v: "0" }]
  }[metric];
  return (
    <div className="flex-1 flex flex-col justify-center gap-2 h-40 w-full px-1">
      {events.map((ev, i) => (
        <div key={i} className="flex justify-between items-center p-3 bg-stone-950 border border-stone-800 rounded-lg">
          <span className="font-mono text-[9px] text-stone-300">{ev.e}</span>
          <span className="font-mono text-[9px] font-bold text-white uppercase">{ev.v}</span>
        </div>
      ))}
    </div>
  );
};

// --- MAIN UTILITY LAB COMPONENT ---
export default function UtilityLab() {
  const [activeMetric, setActiveMetric] = useState("velocity");
  const [activeTool, setActiveTool] = useState("powerbi");

  const tools = [
    { title: "Executive Nerve Center", desc: "Automated daily performance digests for C-Suite mapping.", tech: "Python / API", impact: "100% Clarity", icon: <BarChart3 size={20}/>, demo: <ExecutiveBriefDemo /> },
    { title: "BDM Velocity Engine", desc: "Weekly hygiene reports for Sales tracking lead conversion.", tech: "Automation / CRM", impact: "12hrs/mo Saved", icon: <Activity size={20}/>, demo: <div className="mt-4 p-4 bg-stone-950 rounded-xl flex items-center justify-center border border-stone-800 h-24"><Mail className="text-zapier animate-bounce" size={16}/><span className="ml-3 font-mono text-[9px] text-stone-500 uppercase">Generating...</span></div> },
    { title: "Pipeline Logic Layer", desc: "Refactoring Opportunity Status IDs into revenue models.", tech: "Data Engineering", impact: "Predictable Growth", icon: <Database size={20}/>, demo: <div className="mt-4 p-4 bg-stone-900 rounded-xl border border-white/5 h-24 flex items-center justify-center font-mono text-[8px] text-stone-500">FORECAST_ACTIVE</div> },
    { title: "Omni-Channel Sync", desc: "Middleware normalizing payloads across LinkedIn and CRM.", tech: "Node / Webhooks", impact: "99.9% Integrity", icon: <ShieldCheck size={20}/>, demo: <div className="mt-4 p-4 border border-dashed border-stone-200 rounded-xl text-center font-mono text-[8px] text-stone-300 h-24 flex items-center justify-center">SIGNAL_ACTIVE</div> }
  ];

  const toolConfig = {
    powerbi: { name: "Power BI", color: "bg-blue-500", text: "text-blue-400" },
    ga4: { name: "GA4", color: "bg-zapier", text: "text-zapier" },
    gtm: { name: "GTM", color: "bg-emerald-500", text: "text-emerald-400" }
  };

  return (
    <section id="lab" className="py-24 md:py-32 px-6 bg-paper relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-4 block">Engineered Efficiency</span>
            <h2 className="text-5xl font-bold tracking-tight text-stone-900 italic font-serif">The Utility Lab.</h2>
          </div>
        </div>

        {/* --- THE WALLET STACK GRID --- */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-6 relative">
          {tools.map((tool, i) => (
            <motion.div 
              key={i} 
              style={{ top: `${80 + (i * 40)}px`, zIndex: i + 10 }}
              className={`
                sticky md:static 
                bg-white border border-stone-200 rounded-[32px] 
                p-8 flex flex-col justify-between 
                h-[380px] md:h-[500px]
                transition-all duration-500
                shadow-[0_-12px_40px_-15px_rgba(0,0,0,0.08)] md:shadow-none
                cursor-pointer group hover:border-zapier
                ${i > 0 ? "-mt-60 sm:-mt-64 md:mt-0" : ""}
              `}
              onClick={() => window.location.href = '#'}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="w-10 h-10 rounded-2xl bg-paper flex items-center justify-center text-stone-400 group-hover:text-zapier transition-colors">{tool.icon}</div>
                  <ArrowUpRight className="w-4 h-4 text-stone-200 group-hover:text-zapier transition-colors" />
                </div>
                <h4 className="font-bold text-stone-900 text-lg mb-2">{tool.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed mb-6">{tool.desc}</p>
                {tool.demo}
              </div>
              <div className="mt-8 pt-6 border-t border-stone-50 flex justify-between items-center text-[9px] font-mono font-bold uppercase tracking-widest">
                <span className="text-stone-400">{tool.tech}</span>
                <span className="text-zapier">{tool.impact}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- PERFORMANCE HUB (Full Width Below) --- */}
        <div className="mt-12 md:mt-24 p-8 md:p-12 bg-stone-900 rounded-[40px] text-white border border-white/5 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-white/5 ${toolConfig[activeTool].text}`}><BarChart3 size={20} /></div>
                <h4 className="font-bold text-xl uppercase tracking-tighter">Performance Hub</h4>
              </div>
              <div className="space-y-2">
                {["velocity", "attribution", "health"].map((m) => (
                  <button 
                    key={m} 
                    onClick={() => setActiveMetric(m)} 
                    className={`w-full text-left px-5 py-3 rounded-xl font-mono text-[10px] font-bold uppercase transition-all ${activeMetric === m ? 'bg-white text-stone-900' : 'bg-white/5 text-stone-500 hover:bg-white/10'}`}
                  >
                    {m.replace('_', ' ')}
                  </button>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 flex gap-2">
                {Object.keys(toolConfig).map((t) => (
                  <button 
                    key={t} 
                    onClick={() => setActiveTool(t)} 
                    className={`px-3 py-2 rounded-lg font-mono text-[8px] font-bold uppercase border transition-all ${activeTool === t ? 'border-white/20 bg-white/10 text-white' : 'border-transparent text-stone-600'}`}
                  >
                    {toolConfig[t].name}
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8 bg-black/40 rounded-3xl p-8 border border-white/5 h-[300px] flex flex-col">
              <div className="flex justify-between mb-8 items-center">
                <div className="flex items-center gap-2"><div className={`h-2 w-2 rounded-full animate-pulse ${toolConfig[activeTool].color}`} /><span className="font-mono text-[9px] text-stone-500 uppercase tracking-widest">{activeMetric}.json</span></div>
                <span className="font-mono text-[9px] text-stone-500 uppercase tracking-widest">Live Engine</span>
              </div>
              <div className="flex-1 flex items-end justify-center">
                <AnimatePresence mode="wait">
                  {activeTool === 'powerbi' ? <PowerBIView key="pbi" metric={activeMetric} /> : <GA4View key="ga" metric={activeMetric} />}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
