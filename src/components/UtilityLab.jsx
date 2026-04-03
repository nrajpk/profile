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
  ChevronDown
} from "lucide-react";

// --- MICRO-DEMOS ---
const ExecutiveBriefDemo = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="bg-stone-950 p-4 rounded-xl font-mono text-[9px] mt-4 border border-stone-800">
      <div className="flex justify-between items-center mb-3">
        <span className="text-stone-500 uppercase tracking-tighter">CFO_Daily_Brief.py</span>
        <button onClick={(e) => { e.stopPropagation(); setActive(!active); }} className="text-zapier p-1">
          <Play size={12} fill={active ? "currentColor" : "none"}/>
        </button>
      </div>
      <div className="h-12 overflow-hidden">
        {active ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-400 border-l border-blue-900/50 pl-2">
            <p>&gt; YTD Performance: +18.4%</p>
            <p className="text-green-400 font-bold">&gt; Dispatched to C-Suite</p>
          </motion.div>
        ) : (
          <p className="text-stone-600 italic animate-pulse">&gt; waiting_for_init...</p>
        )}
      </div>
    </div>
  );
};

// --- GRAPHS / VISUALIZATIONS ---
const PowerBIView = ({ metric }) => {
  const data = { velocity: [32, 65, 42, 82], attribution: [88, 94, 91, 98], health: [70, 80, 90, 100] }[metric];
  return (
    <div className="flex items-end justify-between gap-2 h-32 w-full px-2">
      {data.map((val, i) => (
        <motion.div 
          key={i}
          initial={{ height: 0 }} 
          animate={{ height: `${val}%` }} 
          className="flex-1 bg-blue-500 rounded-t-sm shadow-[0_0_15px_rgba(59,130,246,0.3)]" 
        />
      ))}
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function UtilityLab() {
  const [expandedIndex, setExpandedIndex] = useState(0); // Card 0 open by default
  const [activeMetric, setActiveMetric] = useState("velocity");
  const [activeTool, setActiveTool] = useState("powerbi");

  const tools = [
    { title: "Executive Nerve Center", desc: "Automated daily performance digests for C-Suite mapping.", tech: "Python / API", impact: "100% Clarity", icon: <BarChart3 size={20}/>, demo: <ExecutiveBriefDemo /> },
    { title: "BDM Velocity Engine", desc: "Weekly hygiene reports tracking lead-to-proposal speed.", tech: "Automation / CRM", impact: "12hrs/mo Saved", icon: <Activity size={20}/>, demo: <div className="mt-4 p-4 bg-stone-950 rounded-xl flex items-center justify-center border border-stone-800 h-24 text-stone-500 font-mono text-[9px]">ENGINE_STANDBY</div> },
    { title: "Pipeline Logic Layer", desc: "Refactoring Opportunity Status IDs into revenue models.", tech: "Data Engineering", impact: "Predictable Growth", icon: <Database size={20}/>, demo: <div className="mt-4 p-4 bg-stone-950 rounded-xl flex items-center justify-center border border-stone-800 h-24 text-stone-500 font-mono text-[9px]">LOGIC_GATE_ACTIVE</div> },
    { title: "Omni-Channel Sync", desc: "Middleware normalizing payloads across LinkedIn and CRM.", tech: "Node / Webhooks", impact: "99.9% Integrity", icon: <ShieldCheck size={20}/>, demo: <div className="mt-4 p-4 bg-stone-950 rounded-xl flex items-center justify-center border border-stone-800 h-24 text-stone-500 font-mono text-[9px]">SYNC_LISTENING</div> }
  ];

  return (
    <section id="lab" className="py-24 md:py-32 px-6 bg-paper">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-4 block">The Operating Model</span>
            <h2 className="text-5xl font-bold tracking-tight text-stone-900 italic font-serif">The Utility Lab.</h2>
          </div>
          <div className="hidden md:block px-4 py-2 bg-white border border-stone-100 rounded-full text-[9px] font-mono font-bold text-stone-400 uppercase">
            System Status: 100% Operational
          </div>
        </div>

        {/* --- THE INTERACTIVE WALLET STACK --- */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
          {tools.map((tool, i) => {
            const isExpanded = expandedIndex === i;
            
            return (
              <motion.div
                key={i}
                layout
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
                className={`
                  relative overflow-hidden cursor-pointer
                  bg-white border transition-all duration-500
                  ${isExpanded ? 'border-zapier shadow-xl' : 'border-stone-200 hover:border-stone-400'}
                  rounded-[32px] p-8
                  flex flex-col
                  /* Mobile Stack Logic: If not expanded, show only 80px peeking */
                  ${!isExpanded ? 'h-[90px] md:h-[500px]' : 'h-[420px] md:h-[500px]'}
                  /* Vertical overlap for mobile cards */
                  ${i > 0 && !isExpanded ? '-mt-4 md:mt-0' : 'mt-0'}
                `}
              >
                {/* Card Header (Always visible) */}
                <div className="flex justify-between items-start min-h-[40px]">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${isExpanded ? 'bg-zapier text-white' : 'bg-paper text-stone-400'}`}>
                    {tool.icon}
                  </div>
                  <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} className="md:hidden">
                    <ChevronDown size={16} className="text-stone-300" />
                  </motion.div>
                  <Code2 className="hidden md:block w-4 h-4 text-stone-100" />
                </div>

                {/* Card Body (Animate height for mobile) */}
                <AnimatePresence>
                  {(isExpanded || window.innerWidth >= 768) && (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      className="mt-6 flex-1 flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="font-bold text-stone-900 text-lg mb-2">{tool.title}</h4>
                        <p className="text-stone-500 text-sm leading-relaxed mb-6">{tool.desc}</p>
                        {tool.demo}
                      </div>
                      <div className="mt-8 pt-6 border-t border-stone-50 flex justify-between text-[9px] font-mono font-bold uppercase tracking-widest">
                        <span className="text-stone-400">{tool.tech}</span>
                        <span className="text-zapier">{tool.impact}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* --- PERFORMANCE HUB (Full Width Below) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 p-8 md:p-12 bg-stone-900 rounded-[40px] text-white border border-white/5 relative overflow-hidden"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-white/5 text-zapier"><ActivitySquare size={20} /></div>
                <h4 className="font-bold text-xl uppercase tracking-tighter">Performance Hub</h4>
              </div>
              <div className="flex flex-col gap-2">
                {["velocity", "attribution", "health"].map((m) => (
                  <button 
                    key={m} 
                    onClick={() => setActiveMetric(m)} 
                    className={`text-left px-5 py-3 rounded-xl font-mono text-[10px] font-bold uppercase transition-all ${activeMetric === m ? 'bg-white text-stone-900' : 'bg-white/5 text-stone-500'}`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-8 bg-black/40 rounded-3xl p-8 border border-white/5 h-[320px] flex flex-col justify-between">
              <div className="flex justify-between items-center text-[9px] font-mono text-stone-500 uppercase tracking-widest">
                <span>Active_Metric: {activeMetric}.pbix</span>
                <span className="text-zapier animate-pulse">Live_Sync</span>
              </div>
              <PowerBIView metric={activeMetric} />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
