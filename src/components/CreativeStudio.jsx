import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Video, 
  Camera, 
  Layers, 
  PlayCircle, 
  Focus,
  Eye,
  Crosshair,
  Aperture,
  Activity
} from "lucide-react";

// --- 1. THE EYE MOTIF (Technical Vision) ---
const ArchitectEye = () => (
  <div className="relative w-48 h-48 flex items-center justify-center group">
    {/* Outer Calibration Ring */}
    <div className="absolute inset-0 border border-white/10 rounded-full" />
    
    {/* Spinning Dashed Ring */}
    <div className="absolute inset-4 border border-stone-700 border-dashed rounded-full group-hover:rotate-180 transition-transform duration-[10s] ease-linear" />
    
    {/* Inner Focus Ring */}
    <div className="absolute inset-10 border border-white/5 rounded-full" />
    
    {/* Crosshairs */}
    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/10" />
    <div className="absolute left-0 right-0 top-1/2 h-px bg-white/10" />
    
    {/* The Core Eye */}
    <motion.div 
      animate={{ scale: [1, 1.1, 1] }} 
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10 bg-stone-950 p-4 rounded-full border border-zapier/30 shadow-[0_0_30px_rgba(255,79,0,0.15)]"
    >
      <Eye className="text-zapier w-10 h-10" />
    </motion.div>

    {/* Readouts */}
    <div className="absolute -right-8 top-8 font-mono text-[8px] text-stone-500 uppercase tracking-widest hidden md:block">
      FOCAL_LENGTH: <span className="text-stone-300">50MM</span>
    </div>
    <div className="absolute -left-6 bottom-8 font-mono text-[8px] text-stone-500 uppercase tracking-widest hidden md:block text-right">
      APERTURE: <span className="text-stone-300">f/1.4</span>
    </div>
  </div>
);

// --- 2. VIDEO COMPONENT: TACTICAL COLOR GRADE ---
const VideoGradingEngine = () => {
  const [isGraded, setIsGraded] = useState(false);
  return (
    <div 
      className="relative h-72 bg-stone-900 rounded-[32px] mt-8 overflow-hidden group cursor-pointer border border-stone-800 shadow-xl" 
      onClick={() => setIsGraded(!isGraded)}
    >
      <motion.div 
        animate={{ 
          filter: isGraded 
            ? "saturate(1.25) contrast(1.15) brightness(1.05) sepia(0.05)" 
            : "grayscale(1) brightness(0.4) contrast(0.85)" 
        }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200')] bg-cover bg-center"
      />
      
      {/* HUD OVERLAY */}
      <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between opacity-80">
        <div className="flex justify-between font-mono text-[9px] text-white tracking-[0.2em]">
          <span className="flex items-center gap-2">
             <div className={`w-2 h-2 rounded-full ${isGraded ? 'bg-zapier animate-pulse' : 'bg-white/20'}`} />
             {isGraded ? 'REC // GRADED' : 'STBY // RAW_LOG'}
          </span>
          <span>TC: 00:14:52:18</span>
        </div>
        
        <div className="flex justify-between items-end font-mono text-[9px] text-white tracking-[0.2em]">
          <div>
            <p className="text-stone-500 mb-1">CODEC</p>
            <p>PRORES_422_HQ</p>
          </div>
          <div className="text-right">
             <p className="text-stone-500 mb-1">COLOR_SPACE</p>
             <p className={isGraded ? "text-zapier transition-colors" : ""}>{isGraded ? "REC.709_DISPLAY" : "S-LOG3_NATIVE"}</p>
          </div>
        </div>
      </div>

      {!isGraded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] transition-opacity duration-500">
           <div className="px-6 py-3 bg-white/10 border border-white/20 rounded-full backdrop-blur-md flex items-center gap-3">
              <PlayCircle className="text-white w-5 h-5" />
              <span className="font-mono text-[10px] font-bold text-white uppercase tracking-widest">Apply Color Science</span>
           </div>
        </div>
      )}
    </div>
  );
};

// --- 3. PHOTOGRAPHY COMPONENT: OPTICAL INSPECTION LENS ---
const OpticalInspectionLens = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  return (
    <div 
      className="relative h-72 bg-stone-100 rounded-[32px] mt-8 overflow-hidden cursor-none border border-stone-200 shadow-inner group"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200')] bg-cover bg-center grayscale brightness-90 opacity-40" />

      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{ 
          WebkitMaskImage: active 
            ? `radial-gradient(circle 100px at ${pos.x}% ${pos.y}%, black 100%, transparent 100%)`
            : `radial-gradient(circle 0px at 50% 50%, black 100%, transparent 100%)`
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.2 }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200')] bg-cover bg-center scale-[1.05]" />
        
        <div 
          className="absolute border-2 border-zapier rounded-full shadow-[0_0_40px_rgba(255,79,0,0.2)] flex items-center justify-center bg-white/5"
          style={{ left: `${pos.x}%`, top: `${pos.y}%`, width: '200px', height: '200px', transform: 'translate(-50%, -50%)' }}
        >
          <Crosshair className="text-zapier/50 w-8 h-8 absolute" />
          <div className="absolute -top-10 bg-zapier text-white font-mono text-[8px] px-3 py-1 rounded-full uppercase tracking-tighter shadow-xl">
            Macro_Audit_Active
          </div>
        </div>
      </motion.div>

      {!active && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <div className="px-5 py-2.5 bg-white border border-stone-200 rounded-full font-mono text-[9px] text-stone-500 font-bold uppercase tracking-widest shadow-sm flex items-center gap-2">
              <Focus size={14} className="text-zapier" />
              Scan for Optical Integrity
           </div>
        </div>
      )}
    </div>
  );
};

// --- 4. CONVERSION ARCHITECTURE COMPONENT: DYNAMIC OPTIMIZER ---
const ConversionOptimizerDemo = () => {
  const [isOptimized, setIsOptimized] = useState(false);

  return (
    <div className="relative w-64 md:w-72 bg-stone-900 border border-stone-800 shadow-2xl rounded-[24px] p-4 flex flex-col gap-3 group">
      
      {/* HUD Bar */}
      <div className="flex justify-between items-center mb-2 px-1">
        <span className="font-mono text-[8px] text-stone-500 uppercase tracking-widest">
          {isOptimized ? 'Optimized_State' : 'Base_Layout_v1'}
        </span>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[8px] text-stone-400">CVR:</span>
          <span className={`font-mono text-[12px] font-bold transition-colors duration-700 ${isOptimized ? 'text-emerald-400' : 'text-stone-300'}`}>
            {isOptimized ? '4.8%' : '1.2%'}
          </span>
        </div>
      </div>

      {/* The Dynamic Wireframe Container */}
      <div className={`grid gap-2 transition-all duration-700 ${isOptimized ? 'grid-cols-2' : 'grid-cols-1'}`}>
        
        {/* Block 1: Hero/Value Prop */}
        <motion.div 
          layout 
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className={`bg-stone-800 rounded-xl p-3 flex flex-col justify-center ${isOptimized ? 'col-span-2 h-16' : 'h-24'}`}
        >
          <div className="w-1/2 h-2 bg-stone-500 rounded-full mb-3" />
          <div className="w-full h-1 bg-stone-600 rounded-full mb-1.5" />
          <div className="w-3/4 h-1 bg-stone-600 rounded-full" />
        </motion.div>

        {/* Block 2: Form/CTA (Moves up when optimized) */}
        <motion.div 
          layout 
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className={`rounded-xl p-3 border ${isOptimized ? 'border-zapier/50 bg-zapier/10 h-24' : 'border-stone-700 bg-stone-800/50 h-20'}`}
        >
           <div className={`w-1/3 h-1.5 rounded-full mb-4 ${isOptimized ? 'bg-zapier' : 'bg-stone-500'}`} />
           <div className="w-full h-4 bg-stone-900 rounded mb-2" />
           <div className={`w-full h-6 rounded ${isOptimized ? 'bg-zapier' : 'bg-stone-700'}`} />
        </motion.div>

        {/* Block 3: Trust Badges/Social Proof (Moves under Hero when optimized) */}
        <motion.div 
          layout 
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className={`bg-stone-800 rounded-xl p-3 flex flex-col items-center justify-center ${isOptimized ? 'h-24 order-last' : 'h-12'}`}
        >
          <div className="flex gap-2">
             {[1, 2, 3].map(i => (
               <div key={i} className={`rounded-full ${isOptimized ? 'w-6 h-6 bg-stone-600' : 'w-4 h-4 bg-stone-700'}`} />
             ))}
          </div>
          {isOptimized && <div className="w-1/2 h-1 bg-stone-600 rounded-full mt-3" />}
        </motion.div>

      </div>

      {/* Action Trigger */}
      <button 
        onClick={() => setIsOptimized(!isOptimized)}
        className="mt-2 w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-mono text-[9px] text-white uppercase tracking-widest transition-colors flex justify-center items-center gap-2"
      >
        <Activity size={10} className={isOptimized ? 'text-emerald-400' : 'text-stone-400'} />
        {isOptimized ? 'Revert Architecture' : 'Run Optimization'}
      </button>

    </div>
  );
};


// --- MAIN EXPORT ---
export default function CreativeStudio() {
  return (
    <section id="studio" className="py-40 px-6 bg-white overflow-hidden border-t border-stone-100">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="mb-8 flex items-center gap-3">
           <Aperture className="text-stone-400 animate-spin-slow" size={20} />
           <span className="font-mono text-[10px] font-bold text-stone-400 uppercase tracking-[0.4em]">Creative Studio // Aesthetic Intelligence</span>
        </div>

        {/* 1. FULL WIDTH THEME MANIFESTO: "THE EYE FOR DESIGN" */}
        <div className="w-full bg-stone-950 text-white rounded-[48px] p-10 md:p-20 mb-8 flex flex-col md:flex-row justify-between items-center relative overflow-hidden group shadow-2xl">
           <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
           
           <div className="relative z-10 max-w-2xl text-center md:text-left">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter italic font-serif mb-6 leading-none">
                An Eye for Design.<br/>
                <span className="text-stone-500 text-4xl md:text-6xl">A Mind for Systems.</span>
              </h2>
              <p className="text-stone-400 text-lg leading-relaxed max-w-xl">
                 Great design isn't subjective; it's a measurable parameter of trust.</p>
           </div>

           <div className="relative z-10 mt-16 md:mt-0">
              <ArchitectEye />
           </div>
        </div>

        {/* 2. THE PRODUCTION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* VIDEO PRODUCTION (Left, 7 Cols) */}
          <div className="lg:col-span-7 p-10 md:p-12 bg-paper rounded-[48px] border border-stone-200 group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-zapier/30">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-10">
                 <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-stone-400 group-hover:text-zapier transition-colors border border-stone-100">
                   <Video size={28} />
                 </div>
                 <span className="px-3 py-1 bg-stone-100 rounded-full font-mono text-[8px] font-bold text-stone-400 uppercase tracking-widest">Color & Pacing</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-4">Narrative Post-Production.</h3>
              <p className="text-stone-500 mb-6 leading-relaxed max-w-md">
                Cinematic color workflows designed to translate industrial complexity into high-impact, premium visual storytelling.
              </p>
              <VideoGradingEngine />
            </div>
          </div>

          {/* PHOTOGRAPHY / IMAGERY (Right, 5 Cols) */}
          <div className="lg:col-span-5 p-10 md:p-12 bg-white border border-stone-200 rounded-[48px] shadow-sm hover:shadow-xl transition-all duration-500 hover:border-zapier/30 flex flex-col justify-between">
             <div>
               <div className="flex justify-between items-start mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-stone-50 flex items-center justify-center text-stone-400 group-hover:text-zapier transition-colors">
                    <Camera size={28} />
                  </div>
                  <div className="h-2 w-2 rounded-full bg-zapier animate-pulse" />
               </div>
               <h3 className="text-3xl font-bold text-stone-900 tracking-tight mb-4">Optics & Imagery.</h3>
               <p className="text-stone-500 leading-relaxed max-w-xs">
                  Precision asset photography focused on material texture, defect removal, and manufacturing scale.
               </p>
             </div>
             <OpticalInspectionLens />
          </div>

          {/* 3. CONVERSION ARCHITECTURE (Web & Landing Pages - Full Width) */}
          <div className="lg:col-span-12 p-10 md:p-14 bg-stone-50 border border-stone-200 rounded-[48px] flex flex-col md:flex-row items-center justify-between group overflow-hidden relative shadow-sm hover:shadow-xl transition-all duration-500">
             <div className="relative z-10 max-w-xl mb-12 md:mb-0">
                <div className="flex items-center gap-3 mb-6">
                   <Layers className="text-stone-400 group-hover:text-zapier transition-colors" size={28} />
                   <span className="font-mono text-[10px] font-bold text-stone-500 uppercase tracking-widest border border-stone-200 px-3 py-1 rounded-full bg-white">UX / UI & CRO</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tighter mb-6 leading-none">Conversion <br/> Architecture.</h3>
                <p className="text-stone-500 leading-relaxed text-lg mb-8">
                   Engineering high-intent digital real estate. I design and optimize B2B landing pages, focusing on frictionless UX, A/B testing, and aesthetic intelligence to convert global traffic into qualified manufacturing pipeline.
                </p>
                <div className="flex gap-2">
                   {['Figma', 'A/B Testing', 'Heatmaps', 'Web Optimization'].map(t => (
                     <span key={t} className="px-4 py-2 bg-white border border-stone-200 rounded-lg font-mono text-[9px] font-bold text-stone-500 uppercase tracking-widest">{t}</span>
                   ))}
                </div>
             </div>
             
             {/* Landing Page Wireframe Visualization (Dynamic Optimizer) */}
             <div className="relative z-10 w-full md:w-auto flex justify-end">
                <ConversionOptimizerDemo />
             </div>

             {/* Background Grid Accent */}
             <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-200/50 to-transparent opacity-50 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
