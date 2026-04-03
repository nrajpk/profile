import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, 
  Mail, 
  Database, 
  Activity, 
  ShieldCheck, 
  Play, 
  Code2,
  Terminal,
  ActivitySquare
} from "lucide-react";

// --- MICRO-DEMO 1: EXECUTIVE BRIEF ---
const ExecutiveBriefDemo = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="bg-stone-950 p-4 rounded-xl font-mono text-[9px] mt-4 border border-stone-800 group/demo">
      <div className="flex justify-between items-center mb-3">
        <span className="text-stone-500 uppercase tracking-tighter">CFO_Daily_Brief.py</span>
        <button onClick={() => setActive(!active)} className="text-zapier hover:text-white transition-colors">
          <Play size={12} fill={active ? "currentColor" : "none"}/>
        </button>
      </div>
      <div className="space-y-1.5 overflow-hidden">
        <p className="text-stone-600 font-bold leading-none animate-pulse italic">&gt; fetching_approval_chains...</p>
        <AnimatePresence>
          {active && (
            <motion.div 
              initial={{ opacity: 0, x: -5 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="space-y-1 text-blue-400 border-l border-blue-900/50 pl-2 ml-1"
            >
              <p className="">&gt; Pending Approvals: 12 [CRITICAL]</p>
              <p className="">&gt; YTD Performance: +18.4% vs Target</p>
              <p className="text-green-400 font-bold">&gt; Dispatching to C-Suite...</p>
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
    <div className="mt-4 p-4 bg-stone-900 rounded-xl border border-white/5 font-mono text-[9px] group/demo">
      <div className="flex items-center gap-2 mb-3">
        <div className="px-1.5 py-0.5 bg-zapier/20 text-zapier rounded border border-zapier/30">ID: 3</div>
        <span className="text-stone-600">→</span>
        <span className="text-blue-400 font-bold uppercase tracking-tighter">Proposal_Sent</span>
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

// --- NATIVE RENDERERS FOR THE HUB ---

const PowerBIView = ({ metric }) => {
  const dataMap = {
    velocity: [32, 45, 42, 65, 58, 82, 75],
    attribution: [88, 89, 92, 94, 91, 98, 97],
    health: [70, 75, 80, 85, 90, 95, 100]
  };
  const data = dataMap[metric];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 flex items-end justify-between gap-2 md:gap-3 h-full px-2 md:px-4 w-full">
      {data.map((val, i) => (
        <div key={`pbi-${metric}-${i}`} className="flex-1 flex flex-col justify-end items-center gap-4 group h-full">
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: `${val}%` }}
            transition={{ type: "spring", bounce: 0, duration: 1, delay: i * 0.05 }}
            className="w-full rounded-t-sm transition-all duration-700 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            style={{ minHeight: '4px' }} 
          />
          <span className="font-mono text-[8px] text-stone-700 uppercase">M.0{i+1}</span>
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
      { event: "generate_lead", users: "412", rate: "3.3%" }
    ],
    attribution: [
      { event: "organic_search", users: "45%", rate: "+12%" },
      { event: "paid_social", users: "32%", rate: "-2%" },
      { event: "direct", users: "23%", rate: "0%" }
    ],
    health: [
      { event: "engaged_sessions", users: "98.2%", rate: "Valid" },
      { event: "bounce_rate", users: "42.1%", rate: "Stable" },
      { event: "data_loss_flags", users: "0", rate: "Clean" }
    ]
  };
  const events = eventMap[metric];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 flex flex-col justify-center gap-4 h-full w-full px-2">
      {events.map((ev, i) => (
        <motion.div 
          key={`ga4-${metric}-${i}`}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.15 }}
          className="flex justify-between items-center p-3 bg-stone-950 border border-stone-800 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <ActivitySquare className="text-zapier" size={14} />
            <span className="font-mono text-[10px] text-stone-300 truncate max-w-[90px] md:max-w-none">{ev.event}</span>
          </div>
          <div className="flex items-center gap-4 md:gap-6 text-right">
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
      { name: "Hubspot_Form", status: "Succeeded", type: "Image Tag" }
    ],
    attribution: [
      { name: "LinkedIn_Tag", status: "Succeeded", type: "Template" },
      { name: "G_Ads_Conv", status: "Succeeded", type: "Template" }
    ],
    health: [
      { name: "Consent_Update", status: "Fired", type: "Trigger" },
      { name: "DataLayer_Val", status: "Passed", type: "Variable" }
    ]
  };
  const tags = tagMap[metric];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 flex flex-col md:flex-row gap-4 h-full w-full">
      <div className="w-full md:w-1/2 border border-stone-800 bg-stone-950 rounded-lg p-3 md:p-4 flex flex-col">
        <span className="font-mono text-[8px] text-stone-500 uppercase tracking-widest mb-3 border-b border-stone-800 pb-2 block">Tags Fired</span>
        <div className="space-y-2 flex-1">
          {tags.map((tag, i) => (
            <motion.div key={`gtm-tag-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.2 }} className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[9px] text-stone-300 truncate">{tag.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="hidden md:flex w-1/2 border border-stone-800 bg-stone-950 rounded-lg p-4 flex-col font-mono text-[8px] text-emerald-400 overflow-hidden relative">
         <span className="text-stone-500 uppercase tracking-widest mb-3 border-b border-stone-800 pb-2 block">DataLayer.Push</span>
         <div className="opacity-80">
           &#123;<br/>
           &nbsp;&nbsp;"event": "{metric}_check",<br/>
           &nbsp;&nbsp;"status": 200,<br/>
           &nbsp;&nbsp;"integrity": true<br/>
           &#125;
         </div>
      </div>
    </motion.div>
  );
};

// --- FULL-WIDTH MATRIX REPORTING HUB ---
const ExecutivePerformanceHub = () => {
  const [activeMetric, setActiveMetric] = useState("velocity");
  const [activeTool, setActiveTool] = useState("powerbi");

  const metricConfig = {
    velocity: { label: "Pipeline Velocity", short: "Velocity" },
    attribution: { label: "Attribution Accuracy", short: "Attribution" },
    health: { label: "Data Ecosystem Health", short: "Health" }
  };

  const toolConfig = {
    powerbi: { name: "Power BI", color: "bg-blue-500", text: "text-blue-400", fileExt: "_model.pbix" },
    ga4: { name: "GA4", color: "bg-zapier", text: "text-zapier", fileExt: "_stream.json" },
    gtm: { name: "GTM", color: "bg-emerald-500", text: "text-emerald-400", fileExt: "_container.js" }
  };

  const currentTheme = toolConfig[activeTool];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 p-6 md:p-12 bg-stone-900 rounded-[32px] md:rounded-[40px] text-white border border-white/5 shadow-2xl relative overflow-hidden"
    >
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
        
        {/* Left Side: Metric Selection */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg transition-colors duration-500 bg-white/5 ${currentTheme.text}`}>
                <BarChart3 size={20} />
              </div>
              <h4 className="font-bold text-lg md:text-xl uppercase tracking-tighter">Performance Hub</h4>
            </div>
            <p className="hidden md:block text-stone-400 text-sm leading-relaxed mb-8">
              Select a core growth metric and observe the data through native rendering environments. Bridging infrastructure with boardroom visibility.
            </p>
            
            {/* MOBILE OPTIMIZED: Horizontal scroll for metrics */}
            <div className="flex lg:flex-col overflow-x-auto no-scrollbar gap-2 mb-6 md:mb-0">
              {Object.keys(metricConfig).map((metric) => (
                <button 
                  key={metric}
                  onClick={() => setActiveMetric(metric)}
                  className={`whitespace-nowrap px-5 py-3 lg:w-full lg:text-left rounded-full lg:rounded-xl font-mono text-[10px] font-bold uppercase tracking-widest transition-all duration-300 flex justify-center lg:justify-between items-center ${activeMetric === metric ? 'bg-white text-stone-900 shadow-xl' : 'bg-white/5 text-stone-500 hover:bg-white/10'}`}
                >
                  <span className="hidden lg:inline">{metricConfig[metric].label}</span>
                  <span className="lg:hidden">{metricConfig[metric].short}</span>
                  {activeMetric === metric && <Activity size={12} className="hidden lg:block animate-pulse" />}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Left: Tool Selection */}
          <div className="pt-4 md:mt-12 md:pt-8 border-t border-white/10">
            <span className="font-mono text-[8px] text-stone-600 uppercase tracking-widest mb-3 block">Rendering Engine</span>
            <div className="flex flex-wrap gap-2">
              {Object.keys(toolConfig).map((tool) => (
                 <button
                   key={tool}
                   onClick={() => setActiveTool(tool)}
                   className={`px-3 md:px-4 py-2 rounded-lg font-mono text-[9px] font-bold uppercase tracking-widest transition-all border ${
                     activeTool === tool 
                     ? `border-${currentTheme.color.replace('bg-', '')}/30 bg-white/10 ${toolConfig[tool].text}` 
                     : 'border-transparent text-stone-500 hover:text-stone-300 hover:bg-white/5'
                   }`}
                 >
                   {toolConfig[tool].name}
                 </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: The Native Visualization Area */}
        <div className="lg:col-span-8 bg-black/40 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/5 flex flex-col h-[300px] md:h-[360px] relative">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <div className="flex items-center gap-2 md:gap-3">
              <div className={`h-2 w-2 rounded-full animate-pulse ${currentTheme.color}`} />
              <div className="flex flex-col">
                 <span className="font-mono text-[8px] text-stone-600 uppercase tracking-widest block mb-0.5">Data_Source</span>
                 <span className="font-mono text-[9px] md:text-[10px] text-stone-300 uppercase truncate max-w-[120px] md:max-w-none">{activeMetric}{currentTheme.fileExt}</span>
              </div>
            </div>
            <div className="text-right">
               <span className="font-mono text-[8px] text-stone-600 uppercase tracking-widest block mb-0.5">Active_Dimension</span>
               <span className={`font-mono text-[9px] md:text-[10px] font-bold uppercase ${currentTheme.text} hidden md:inline`}>{metricConfig[activeMetric].label}</span>
               <span className={`font-mono text-[9px] font-bold uppercase ${currentTheme.text} md:hidden`}>{metricConfig[activeMetric].short}</span>
            </div>
          </div>
          
          {/* THE BESPOKE RENDERER */}
          <div className="flex-1 flex items-end justify-center w-full">
            <AnimatePresence mode="wait">
              {activeTool === 'powerbi' && <PowerBIView key="pbi" metric={activeMetric} />}
              {activeTool === 'ga4' && <GA4View key="ga4" metric={activeMetric} />}
              {activeTool === 'gtm' && <GTMView key="gtm" metric={activeMetric} />}
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

// --- DATA STRUCTURE FOR MICRO TOOLS ---
const tools = [
  { 
    title: "Executive Nerve Center", 
    desc: "Automated daily performance digests for C-Suite mapping approval chains and YTD targets.",
    impact: "100% Task Clarity", 
    tech: "CRM / Python / API", 
    icon: <BarChart3 size={20}/>,
    demo: <ExecutiveBriefDemo />
  },
  { 
    title: "BDM Velocity Engine", 
    desc: "Weekly hygiene reports for Sales Managers tracking lead-to-proposal conversion velocity.",
    impact: "12hrs/mo Saved", 
    tech: "Automation / CRM", 
    icon: <Activity size={20}/>,
    demo: <div className="mt-4 p-4 bg-stone-950 rounded-xl flex items-center justify-center border border-stone-800 h-[100px]">
      <Mail className="text-zapier animate-bounce" size={16} />
      <span className="ml-3 font-mono text-[9px] text-stone-500 uppercase tracking-widest">Generating Digest...</span>
    </div>
  },
  { 
    title: "Pipeline Logic Layer", 
    desc: "Refactoring Opportunity Status IDs (1-5) into a high-fidelity revenue forecasting model.",
    impact: "Predictable Growth", 
    tech: "Data Engineering", 
    icon: <Database size={20}/>,
    demo: <PipelineLogicDemo />
  },
  { 
    title: "Omni-Channel Sync", 
    desc: "Middleware normalizing payloads across LinkedIn and CRM to preserve lead attribution.",
    impact: "99.9% Integrity", 
    tech: "Node.js / Webhooks", 
    icon: <ShieldCheck size={20}/>,
    demo: <div className="mt-4 p-4 border border-dashed border-stone-200 rounded-xl flex items-center justify-center font-mono text-[8px] text-stone-300 uppercase tracking-[0.2em] h-[100px]">
      Tracing_Signal_Active
    </div>
  }
];

export default function UtilityLab() {
  return (
    <section id="lab" className="py-24 md:py-32 px-6 bg-paper relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-4 block">Engineered Efficiency</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 italic font-serif">The Utility Lab.</h2>
          </div>
          <div className="px-4 py-2 bg-white border border-stone-200 rounded-full shadow-sm hidden md:block">
            <span className="font-mono text-[9px] font-bold text-stone-400 uppercase">System Health: 100% Operational</span>
          </div>
        </div>

        {/* MOBILE OPTIMIZED: Horizontal Snap Carousel for Tools */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 md:pb-0">
          {tools.map((tool, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[85vw] md:min-w-0 snap-center p-8 bg-white border border-stone-200 rounded-[32px] flex flex-col justify-between group hover:border-zapier transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/5"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                   <div className="w-10 h-10 rounded-2xl bg-paper flex items-center justify-center text-stone-400 group-hover:text-zapier transition-colors">
                    {tool.icon}
                   </div>
                   <Code2 className="w-4 h-4 text-stone-100 group-hover:text-stone-300 transition-colors" />
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

        <ExecutivePerformanceHub />

      </div>
    </section>
  );
}
