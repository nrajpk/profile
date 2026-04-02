import { motion } from "framer-motion";
import { ShieldCheck, Globe, Zap, Settings, Share2, Database } from "lucide-react";

export default function HighTicketArchitecture() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section id="b2b-architecture" className="py-40 bg-stone-950 text-white overflow-hidden relative">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-8">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="font-mono text-[10px] font-bold text-zapier uppercase tracking-[0.4em] mb-6 block">Expertise Vertical</motion.span>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] italic font-serif">High-Ticket <br/> B2B Architecture.</h2>
          </div>
          <div className="lg:col-span-4 lg:pt-12">
            <p className="text-stone-500 text-lg leading-relaxed italic border-l border-stone-800 pl-8">
              "When a single lead represents a quarter's revenue, the system cannot have blind spots. I engineer growth as a high-fidelity feedback loop."
            </p>
          </div>
        </div>

        {/* The Growth Operating Model (Conceptual) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="p-10 bg-white/[0.03] border border-white/10 rounded-[40px] hover:border-zapier/50 transition-colors group">
            <Globe className="text-zapier mb-8" size={32} />
            <h4 className="text-2xl font-bold mb-4">Global Signal Sync</h4>
            <p className="text-stone-500 text-sm leading-relaxed">
              Managing demand signals across multi-continental markets, ensuring every regional touchpoint feeds back into a central source of truth.
            </p>
          </div>

          <div className="p-10 bg-white/[0.03] border border-white/10 rounded-[40px] hover:border-zapier/50 transition-colors">
            <Share2 className="text-zapier mb-8" size={32} />
            <h4 className="text-2xl font-bold mb-4">CRM Orchestration</h4>
            <p className="text-stone-500 text-sm leading-relaxed">
              Refactoring CRM logic (Salesforce/Zoho) to mirror complex B2G/B2B buying committees and 18-month conversion cycles.
            </p>
          </div>

          <div className="p-10 bg-white/[0.03] border border-white/10 rounded-[40px] hover:border-zapier/50 transition-colors">
            <Database className="text-zapier mb-8" size={32} />
            <h4 className="text-2xl font-bold mb-4">Governance Layer</h4>
            <p className="text-stone-500 text-sm leading-relaxed">
              Deploying Python-based hygiene scripts to prevent data drift and ensure 99.9% attribution accuracy at scale.
            </p>
          </div>

        </div>

        {/* Full Width Visualization of the Operating Model */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 p-12 bg-white rounded-[56px] text-stone-900 overflow-hidden relative group shadow-2xl"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h3 className="text-4xl font-bold tracking-tight mb-6 italic font-serif">The Growth Operating Model</h3>
                <p className="text-stone-500 text-lg leading-relaxed mb-8">
                  My architecture bridges the gap between high-intent technical signals and actual production reality. It’s a system designed for accountability, not just volume.
                </p>
                <div className="flex gap-4">
                   <div className="px-4 py-2 bg-stone-100 rounded-full font-mono text-[9px] font-bold uppercase tracking-widest text-stone-400">Systems-Led</div>
                   <div className="px-4 py-2 bg-stone-100 rounded-full font-mono text-[9px] font-bold uppercase tracking-widest text-stone-400">Revenue-Focused</div>
                </div>
             </div>
             
             {/* Abstract System Topology Visual */}
             <div className="bg-stone-50 rounded-[40px] p-8 border border-stone-200">
                <div className="space-y-4">
                   {[
                     { l: "Intent Mapping", v: "Active" },
                     { l: "CRM Pipeline Sync", v: "Operational" },
                     { l: "Automated Reporting", v: "Live" }
                   ].map(item => (
                     <div key={item.l} className="flex justify-between items-center p-4 bg-white rounded-2xl border border-stone-100">
                        <span className="font-mono text-[10px] font-bold text-stone-900 uppercase">{item.l}</span>
                        <div className="flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-zapier animate-pulse" />
                           <span className="font-mono text-[8px] text-stone-400 font-bold uppercase">{item.v}</span>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}