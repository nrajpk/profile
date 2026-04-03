import { ArrowUpRight, Github, Linkedin, Mail, ArrowUp, Activity } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-white pt-24 pb-12 px-6 border-t border-stone-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* TOP SECTION: Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 pb-20 border-b border-stone-800/50 gap-10">
          <div className="max-w-2xl">
            <span className="flex items-center gap-2 font-mono text-[10px] font-bold text-stone-500 uppercase tracking-[0.3em] mb-6">
              <Activity size={14} className="text-zapier animate-pulse" />
              System Status: Ready for Deployment
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter italic font-serif leading-none mb-6">
              Initialize Project.
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed max-w-md">
              Bridging the gap between technical infrastructure and high-ticket B2B revenue. Let's architect your next growth phase.
            </p>
          </div>
          
          <div>
            <a 
              href="mailto:your.email@example.com" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-zapier text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-stone-900 transition-all duration-300 shadow-[0_0_30px_rgba(255,79,0,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              Open Communications <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* MIDDLE SECTION: Navigation Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-4">
             <div className="font-mono text-sm font-bold tracking-tight text-white mb-4 uppercase">
               Systems-Led<br/>
               <span className="text-stone-500">Architect.</span>
             </div>
             <p className="font-mono text-[9px] text-stone-500 leading-relaxed uppercase tracking-widest max-w-xs">
               B.Tech Computer Science Engineering <br/>
               Specializing in Digital Transformation, CRO, and High-Fidelity Collateral.
             </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-2 md:col-start-7 flex flex-col gap-4">
             <span className="font-mono text-[9px] text-stone-600 uppercase tracking-[0.2em] mb-2">Sitemap</span>
             {['Architecture', 'Utility Lab', 'Creative Studio', 'Career Log'].map((link) => (
               <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-stone-400 hover:text-zapier transition-colors text-sm font-medium">
                 {link}
               </a>
             ))}
          </div>

          {/* Social / Connect */}
          <div className="md:col-span-2 flex flex-col gap-4">
             <span className="font-mono text-[9px] text-stone-600 uppercase tracking-[0.2em] mb-2">Network</span>
             <a href="#" className="text-stone-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
               LinkedIn <ArrowUpRight size={12} className="text-stone-600" />
             </a>
             <a href="#" className="text-stone-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
               GitHub <ArrowUpRight size={12} className="text-stone-600" />
             </a>
          </div>
        </div>

        {/* BOTTOM SECTION: Legal & Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-800/50 gap-6">
           <div className="flex items-center gap-4">
              <span className="font-mono text-[9px] text-stone-500 uppercase tracking-widest">
                © {currentYear} All Rights Reserved
              </span>
              <div className="w-1 h-1 rounded-full bg-stone-700" />
              <span className="font-mono text-[9px] text-stone-500 uppercase tracking-widest">
                Compiled in React & Astro
              </span>
           </div>

           <button 
             onClick={scrollToTop}
             className="p-3 bg-stone-900 border border-stone-800 rounded-full text-stone-400 hover:text-zapier hover:border-zapier/50 transition-all duration-300 group"
             aria-label="Scroll to top"
           >
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
           </button>
        </div>

      </div>
      
      {/* Background Graphic */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-zapier opacity-[0.02] blur-[100px] rounded-full pointer-events-none" />
    </footer>
  );
}
