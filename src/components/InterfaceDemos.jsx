import React, { useState } from "react";
import { motion } from "framer-motion";
import useMotionOff from "./useMotionOff.js";
import { Eye, Crosshair, Focus, Activity } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

// --- 1. THE EYE MOTIF ---
export const ArchitectEye = () => (
  <div className="relative w-48 h-48 flex items-center justify-center group">
    <div className="absolute inset-0 border border-stone-300 rounded-full" />
    <div className="absolute inset-4 border border-stone-400 border-dashed rounded-full group-hover:rotate-180 transition-transform duration-[10s] ease-linear" />
    <div className="absolute inset-10 border border-stone-200 rounded-full" />
    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-stone-200" />
    <div className="absolute left-0 right-0 top-1/2 h-px bg-stone-200" />

    <motion.div
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10 bg-paper p-4 rounded-full border border-zapier/40 shadow-[0_10px_30px_-8px_rgba(255,79,0,0.35)]"
    >
      <Eye className="text-zapier w-10 h-10" />
    </motion.div>
  </div>
);

// --- 2. ONE ASSET, EVERY PLACEMENT ---
// A single composition re-cropped for each placement a campaign needs.
// Built from this site's own portrait and palette — no stock imagery.
const formats = [
  { id: "16:9", ratio: 16 / 9, use: "Web hero · video" },
  { id: "1:1", ratio: 1, use: "Feed post" },
  { id: "4:5", ratio: 4 / 5, use: "Paid social" },
  { id: "9:16", ratio: 9 / 16, use: "Story · reel" },
];

export const FormatReframe = () => {
  const [active, setActive] = useState(0);
  const format = formats[active];
  const tall = format.ratio <= 1;
  const reduce = useMotionOff();
  const spring = reduce ? { duration: 0 } : { type: "spring", stiffness: 170, damping: 22 };

  return (
    <div>
      <div className="h-80 md:h-96 flex items-center justify-center bg-stone-100 border border-stone-200 overflow-hidden">
        <motion.div
          layout
          transition={spring}
          style={{ aspectRatio: format.ratio, height: tall ? "88%" : "auto", width: tall ? "auto" : "88%" }}
          className="relative bg-paper border border-stone-300 overflow-hidden shadow-[0_24px_50px_-24px_rgb(0_0_0/0.4)]"
        >
          <motion.div
            layout
            transition={spring}
            className="absolute rounded-full bg-zapier aspect-square"
            style={tall ? { width: "92%", left: "-22%", top: "30%" } : { height: "100%", right: "3%", top: "0%" }}
          />
          <motion.img
            layout
            transition={spring}
            src="/photos/portrait-bw.webp"
            alt=""
            width="1122"
            height="1402"
            loading="lazy"
            decoding="async"
            className="absolute object-cover grayscale contrast-[1.08]"
            style={
              tall
                ? { width: "74%", height: "52%", right: 0, bottom: 0 }
                : { height: "86%", width: "32%", right: "9%", bottom: 0 }
            }
          />
          <motion.div layout transition={spring} className="absolute" style={{ left: "8%", top: tall ? "8%" : "18%", width: tall ? "74%" : "30%" }}>
            <p className="font-serif leading-[0.95] text-stone-900" style={{ fontSize: "1.15rem" }}>
              Marketing instinct. <span className="text-zapier-ink">Engineering</span> discipline.
            </p>
            <div className="mt-3 h-5 w-20 rounded-full bg-stone-900" />
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2" role="group" aria-label="Placement format">
        {formats.map((f, i) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={`h-10 px-4 rounded-full border text-sm font-semibold tabular-nums transition-colors ${
              i === active ? "bg-stone-900 border-stone-900 text-white" : "border-stone-300 text-stone-600 hover:border-stone-500"
            }`}
          >
            {f.id}
          </button>
        ))}
        <span className="ml-2 text-sm text-stone-500">{format.use}</span>
      </div>
    </div>
  );
};

// --- 3. OPTICAL INSPECTION LENS ---
export const OpticalInspectionLens = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  const track = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
  };

  return (
    <div
      className="relative h-80 md:h-96 bg-stone-100 overflow-hidden cursor-none border border-stone-200 touch-none"
      onPointerMove={track}
      onPointerDown={(e) => {
        setActive(true);
        track(e);
      }}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
    >
      <img src="/photos/sofa-black.webp" alt="" width="1448" height="1086" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover object-[66%_30%] grayscale brightness-75 opacity-50" />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          WebkitMaskImage: active
            ? `radial-gradient(circle 100px at ${pos.x}% ${pos.y}%, black 100%, transparent 100%)`
            : `radial-gradient(circle 0px at 50% 50%, black 100%, transparent 100%)`,
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.2 }}
      >
        <img src="/photos/sofa-black.webp" alt="" width="1448" height="1086" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover object-[66%_30%] scale-[1.12]" />
        <div
          className="absolute border-2 border-zapier rounded-full flex items-center justify-center"
          style={{ left: `${pos.x}%`, top: `${pos.y}%`, width: "200px", height: "200px", transform: "translate(-50%, -50%)" }}
        >
          <Crosshair className="text-zapier/60 w-8 h-8 absolute" />
        </div>
      </motion.div>

      {!active && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="px-5 py-2.5 bg-white border border-stone-200 rounded-full text-xs text-stone-600 font-semibold shadow-sm flex items-center gap-2">
            <Focus size={14} className="text-zapier" />
            Scan for Detail Integrity
          </div>
        </div>
      )}
    </div>
  );
};

// --- 4. CONVERSION ARCHITECTURE: DYNAMIC OPTIMIZER ---
export const ConversionOptimizerDemo = () => {
  const [isOptimized, setIsOptimized] = useState(false);
  const spring = { type: "spring", stiffness: 200, damping: 20 };

  return (
    <div className="relative w-full max-w-sm bg-stone-900 border border-stone-800 shadow-2xl rounded-[24px] p-4 flex flex-col gap-3">
      <div className="flex justify-between items-center mb-2 px-1">
        <span className="font-mono text-[11px] text-stone-300 uppercase tracking-wider">
          {isOptimized ? "Optimized_State" : "Base_Layout_v1"}
        </span>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] text-stone-300">STATE:</span>
          <span className={`font-mono text-[12px] font-bold transition-colors duration-700 ${isOptimized ? "text-emerald-400" : "text-stone-300"}`}>
            {isOptimized ? "READY" : "BASE"}
          </span>
        </div>
      </div>

      <div className={`grid gap-2 transition-all duration-700 ${isOptimized ? "grid-cols-2" : "grid-cols-1"}`}>
        <motion.div layout transition={spring} className={`bg-stone-800 rounded-xl p-3 flex flex-col justify-center ${isOptimized ? "col-span-2 h-16" : "h-24"}`}>
          <div className="w-1/2 h-2 bg-stone-500 rounded-full mb-3" />
          <div className="w-full h-1 bg-stone-600 rounded-full mb-1.5" />
          <div className="w-3/4 h-1 bg-stone-600 rounded-full" />
        </motion.div>

        <motion.div layout transition={spring} className={`rounded-xl p-3 border ${isOptimized ? "border-zapier/50 bg-zapier/10 h-24" : "border-stone-700 bg-stone-800/50 h-20"}`}>
          <div className={`w-1/3 h-1.5 rounded-full mb-4 ${isOptimized ? "bg-zapier" : "bg-stone-500"}`} />
          <div className="w-full h-4 bg-stone-950 rounded mb-2" />
          <div className={`w-full h-6 rounded ${isOptimized ? "bg-zapier" : "bg-stone-700"}`} />
        </motion.div>

        <motion.div layout transition={spring} className={`bg-stone-800 rounded-xl p-3 flex flex-col items-center justify-center ${isOptimized ? "h-24 order-last" : "h-12"}`}>
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`rounded-full ${isOptimized ? "w-6 h-6 bg-stone-600" : "w-4 h-4 bg-stone-700"}`} />
            ))}
          </div>
          {isOptimized && <div className="w-1/2 h-1 bg-stone-600 rounded-full mt-3" />}
        </motion.div>
      </div>

      <button
        type="button"
        onClick={() => setIsOptimized(!isOptimized)}
        className="mt-2 w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-mono text-[11px] text-white uppercase tracking-widest transition-colors flex justify-center items-center gap-2"
      >
        <Activity size={11} className={isOptimized ? "text-emerald-400" : "text-stone-400"} />
        {isOptimized ? "Revert Layout" : "Run Layout Check"}
      </button>
    </div>
  );
};
