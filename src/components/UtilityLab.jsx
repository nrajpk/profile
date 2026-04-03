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

// --- MICRO-DEMOS (Preserved for Logic) ---
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
        <p className="text-stone-600 font-bold animate-pulse italic">&gt; fetching_approval_chains...</p>
        <AnimatePresence>
          {active && (
            <motion.div initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} className="space-y-1 text-blue-400 border-l border-blue-900/50 pl-2 ml-1">
              <p>&gt; Pending Approvals: 12 [CRITICAL]</p>
              <p>&gt; YTD Performance: +18.4% vs Target</p>
              <p className="text-green-400 font-bold">&gt; Dispatching to C-Suite...</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const PipelineLogicDemo = () => (
  <div className="mt-3 p-4 bg-stone-900 rounded-xl border border-white/5 font-mono text-[9px] h-full flex flex-col justify-center">
    <div className="flex items-center gap-2 mb-3">
      <div className="px-1.5 py-0.5 bg-zapier/20 text-zapier rounded border border-zapier/30">ID: 3</div>
      <span className="text-stone-600">→</span>
      <span className="text-blue-400 font-bold uppercase tracking-tighter">Proposal_Sent</span>
    </div>
    <div className="space-y-2">
      <div className="h-1 w-full bg-stone-800 rounded-full overflow-hidden">
        <motion.div initial={{ width: 0 }} whileInView={{ width: "60%" }} className="h-full bg-zapier" />
      </div>
      <div className="flex justify-between text-stone-500">
        <span>Forecast: 60%</span>
        <span className="text-white font-bold">BQL_QUALIFIED</span>
      </div>
    </div>
  </div>
);

// --- PERFORMANCE HUB RENDERERS ---
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

const GA4View = ({ metric }) => {
  const events = {
    velocity: [{ e: "session_start", v: "12,450", r: "100%" }, { e: "view_item", v: "8,230", r: "66%" }, { e: "lead", v: "412", r: "3%" }],
    attribution: [{ e: "organic", v: "45%", r: "+12%" }, { e: "paid", v: "32%", r: "-2%" }, { e: "direct", v: "23%", r: "0%" }],
    health: [{ e: "engaged", v: "98.2%", r: "Valid" }, { e: "bounce", v: "42%", r: "Stable" }, { e: "loss", v: "0", r: "Clean" }]
  }[metric];
  return (
    <div className="flex-1 flex flex-col justify-center gap-3 w-full px-1">
      {events.map((ev, i) => (
        <div key={i} className="flex justify-between items-center p-3 bg-stone-950 border border-stone-800 rounded-lg">
          <div className="flex items-center gap-3"><ActivitySquare className="text-zapier" size={14} /><span className="font-mono text-[10px] text-stone-300">{ev.e}</span></div>
          <div className="flex gap-4"><span className="font-mono text-[10px] font-bold text-white">{ev.v}</span><span className="font-mono text-[9px] text-stone-500 w-8">{ev.r}</span></div>
        </div>
      ))}
    </div>
  );
};

const GTMView = ({ metric }) => {
  const tags = { velocity: ["SFDC_Sync", "Hubspot_Form"], attribution: ["LinkedIn_Tag", "G_Ads_Conv"], health: ["Consent_Update", "DataLayer_Val"] }[metric];
  return (
    <div className="flex-1 flex flex-col md:flex-row gap-4 w-full">
      <div className="flex-1 border border-stone-800 bg-stone-950 rounded-lg p-4">
        <span className="font-mono text-[8px] text-stone-500 uppercase tracking-widest mb-3 border-b border-stone-800 pb-2 block">Tags Fired</span>
        <div className="space-y-2">
          {tags.map((tag, i) => (
            <div key={i} className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /><span className="font-mono text-[9px] text-stone-300">{tag}</span></div>
          ))}
        </div>
      </div>
      <div className="hidden md:block flex-1 border border-stone-800 bg-stone-950 rounded-lg p-4 font-mono text-[8px] text-emerald-400">
        <span className="text-stone-500 uppercase mb-3 block border-b border-stone-800 pb-2">DataLayer.Push</span>
        &#123; "event": "{metric}", "status": 200 &#125;
      </div>
    </div>
  );
};

// --- CORE COMPONENTS ---
const ExecutivePerformanceHub = () => {
  const [activeMetric, setActiveMetric] = useState("velocity");
  const [activeTool, setActiveTool] = useState("powerbi");
  const toolConfig = {
    powerbi: { name: "Power BI", color: "bg-blue-500", text: "text-blue-400", border: "border-blue-500/30", ext: ".pbix" },
    ga4: { name: "GA4", color: "bg-zapier", text: "text-zapier", border: "border-orange-500/30", ext: ".json" },
    gtm: { name: "GTM", color: "bg-emerald-500", text: "text-emerald-400", border: "border-emerald-500/30", ext: ".js" }
  };
  const theme = toolConfig[activeTool];

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 md:p-12 bg-stone-900 rounded-[32px] md:rounded-[40px] text-white border border-white/5 relative overflow-hidden">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg bg-white/5 ${theme.text}`}><BarChart3 size={20} /></div>
              <h4 className="font-bold text-lg uppercase tracking-tighter">Performance Hub</h4>
            </div>
            <div className="flex lg:flex-col overflow-x-auto no-scrollbar gap-2 mb-8">
              {["velocity", "attribution", "health"].map((m) => (
                <button key={m} onClick={() => setActiveMetric(m)} className={`px-5 py-3 lg:w-full lg:text-left rounded-xl font-mono text-[10px] font-bold uppercase transition-all ${activeMetric === m ? "bg-white text-stone-900" : "bg-white/5 text-stone-500 hover:bg-white/10"}`}>{m}</button>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <span className="font-mono text-[8px] text-stone-600 uppercase mb-3 block">Rendering Engine</span>
            <div className="flex gap-2">
              {Object.keys(toolConfig).map((t) => (
                <button key={t} onClick={() => setActiveTool(t)} className={`px-3 py-2 rounded-lg font-mono text-[9px] font-bold border transition-all ${activeTool === t ? `${toolConfig[t].border} bg-white/10 ${toolConfig[t].text}` : "border-transparent text-stone-500 hover:text-stone-300"}`}>{toolConfig[t].name}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 bg-black/40 rounded-3xl p-6 md:p-8 border border-white/5 flex flex-col h-[300px] md:h-[400px]">
          <div className="flex justify-between mb-8">
            <div className="flex items-center gap-3"><div className={`h-2 w-2 rounded-full animate-pulse ${theme.color}`} /><span className="font-mono text-[10px] text-stone-300 uppercase">{activeMetric}{theme.ext}</span></div>
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
    </motion.div>
  );
};

export default function UtilityLab() {
  const tools = [
    { title: "Executive Nerve Center", desc: "Automated daily digests for C-Suite mapping approval chains.", impact: "100% Clarity", tech: "Python / API", icon: <BarChart3 size={20} />, demo: <ExecutiveBriefDemo /> },
    { title: "BDM Velocity Engine", desc: "Weekly hygiene reports for Sales tracking lead conversion velocity.", impact: "12hrs/mo Saved", tech: "Automation / CRM", icon: <Activity size={20} />, demo: <div className="mt-4 p-4 bg-stone-950 rounded-xl flex items-center justify-center border border-stone-800 h-24"><Mail className="text-zapier animate-bounce" size={16} /><span className="ml-3 font-mono text-[9px] text-stone-500">GENERATING...</span></div> },
    { title: "Pipeline Logic Layer", desc: "Refactoring Opportunity Status IDs into revenue models.", impact: "Predictable Growth", tech: "Data Engineering", icon: <Database size={20} />, demo: <PipelineLogicDemo /> },
    { title: "Omni-Channel Sync", desc: "Middleware normalizing payloads to preserve lead attribution.", impact: "99.9% Integrity", tech: "Node / Webhooks", icon: <ShieldCheck size={20} />, demo: <div className="mt-4 p-4 border border-dashed border-stone-200 rounded-xl flex items-center justify-center font-mono text-[8px] text-stone-300 h-24">TRACING_SIGNAL_ACTIVE</div> },
  ];

  return (
    <section id="lab" className="py-16 md:py-32 px-4 md:px-6 bg-paper relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20">
          <div>
            <span className="font-mono text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-4 block">Engineered Efficiency</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 italic font-serif">The Utility Lab.</h2>
          </div>
        </div>

        {/* --- STRIPE/APPLE WALLET ARCHITECTURE --- */}
        {/* Mobile: Full-width stacked. Desktop: 4 Columns */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-6 relative">
          {tools.map((tool, i) => (
            <div 
              key={i} 
              style={{
                [cite_start]top: `${80 + (i * 32)}px`, // This creates the exact "Peek" sliver seen in Wallet [cite: 4]
                zIndex: i + 10,
              }}
              className={`
                sticky md:static 
                bg-white border border-stone-200 
                rounded-[32px] p-7 md:p-8 
                flex flex-col justify-between 
                transition-all duration-500
                shadow-[0_-12px_40px_-15px_rgba(0,0,0,0.1)] md:shadow-none
                h-[340px] md:h-[480px]
                ${i > 0 ? "-mt-48 sm:-mt-56 md:mt-0" : ""} // Overlap Logic 
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
        </div>

        {/* --- PERFORMANCE HUB (FULL WIDTH BELOW) --- */}
        <div className="mt-12 md:mt-24">
          <ExecutivePerformanceHub />
        </div>
      </div>
    </section>
  );
}
