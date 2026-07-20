import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Activity, Database, Workflow } from "lucide-react";

export default function HeroNarrative() {
  const titleWords = "Marketing works better when the systems behind it are clean.".split(" ");
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto relative overflow-hidden pt-24">
      <div className="absolute right-0 top-1/4 hidden lg:block opacity-70 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="w-64 h-64 rounded-full border border-stone-200 border-dashed"
        />
        <div className="absolute inset-10 rounded-full border border-stone-200/80" />
        <div className="absolute inset-24 bg-zapier/10 rounded-full blur-2xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: smoothEase }}
        className="flex items-center gap-5 mb-12 relative z-10"
      >
        <div className="relative group">
          <img
            src="/dp.jpeg"
            alt="Nikhil Raj PK"
            className="h-14 w-14 rounded-full object-cover border border-stone-200 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out shadow-sm"
          />
          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-paper border-2 border-paper">
            <div className="h-full w-full rounded-full bg-zapier animate-pulse" />
          </div>
        </div>

        <div className="flex flex-col">
          <span className="font-mono text-[11px] font-bold text-stone-900 uppercase tracking-widest">
            Nikhil Raj PK
          </span>
          <span className="font-mono text-[9px] text-stone-400 uppercase tracking-[0.2em] mt-0.5">
            Growth Engineer · Marketing Ops & GTM Systems
          </span>
        </div>
      </motion.div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-10 text-stone-900 max-w-5xl relative z-10">
        {titleWords.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: i * 0.065 + 0.3, duration: 0.8, ease: smoothEase }}
            className="inline-block mr-[0.24em]"
          >
            {word === "clean." || word === "systems" ? (
              <span className="font-serif italic font-normal text-stone-400">{word}</span>
            ) : (
              word
            )}
          </motion.span>
        ))}
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, ease: smoothEase }}
        className="relative z-10"
      >
        <p className="text-xl md:text-2xl text-stone-500 font-medium max-w-2xl leading-relaxed mb-10">
          I connect websites, campaigns, CRM workflows, analytics, data extraction and AI-assisted operations into practical systems that make growth work easier to track and scale.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a href="#proof" className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-7 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-zapier transition-all active:scale-95">
            View Built Work <ArrowUpRight size={14} />
          </a>
          <a href="#lab" className="inline-flex items-center justify-center gap-2 bg-white border border-stone-200 text-stone-700 px-7 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:border-zapier hover:text-zapier transition-all active:scale-95">
            See GTM Lab
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
          {[
            { icon: <Database size={14} />, label: "Data extraction", value: "Python / Apify" },
            { icon: <Workflow size={14} />, label: "Ops layer", value: "CRM / Analytics" },
            { icon: <Activity size={14} />, label: "Current focus", value: "GTM Engineering" },
          ].map((item) => (
            <div key={item.label} className="bg-white/70 border border-stone-200 rounded-2xl p-4 flex items-center gap-3 shadow-sm backdrop-blur-sm">
              <div className="h-8 w-8 rounded-xl bg-paper flex items-center justify-center text-zapier border border-stone-100">
                {item.icon}
              </div>
              <div>
                <p className="font-mono text-[8px] uppercase tracking-widest text-stone-400 font-bold">{item.label}</p>
                <p className="text-sm font-bold text-stone-900">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
