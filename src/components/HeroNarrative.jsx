import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function HeroNarrative() {
  const titleWords = "Marketing instinct. Engineering discipline. Live systems.".split(" ");
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto relative pt-24">
      {/* Identity */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: smoothEase }}
        className="flex items-center gap-5 mb-10 relative z-10"
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

      {/* Kicker */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.8, ease: smoothEase }}
        className="font-mono text-[10px] font-bold text-zapier uppercase tracking-[0.35em] mb-6 block relative z-10"
      >
        Growth Engineering — Proven in Production
      </motion.span>

      {/* Headline: three beats, nothing else */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8 text-stone-900 max-w-5xl relative z-10">
        {titleWords.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: i * 0.065 + 0.3, duration: 0.8, ease: smoothEase }}
            className="inline-block mr-[0.24em]"
          >
            {word === "Live" || word === "systems." ? (
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
        {/* One subline */}
        <p className="text-xl md:text-2xl text-stone-500 font-medium max-w-2xl leading-relaxed mb-10">
          I'm a digital marketer who builds the systems growth runs on —
          pipelines, CRM logic, qualification and reporting that hold up in production.
        </p>

        {/* One CTA */}
        <div className="mb-10">
          <a
            href="#proof"
            className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-zapier transition-all active:scale-95"
          >
            See the built work <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Proof strip — real numbers, quietly */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] font-bold uppercase tracking-widest text-stone-400">
          <span><span className="text-stone-900">5</span> systems in production</span>
          <span className="hidden sm:inline text-stone-300">·</span>
          <span><span className="text-stone-900">79</span> workflow executions</span>
          <span className="hidden sm:inline text-stone-300">·</span>
          <span><span className="text-stone-900">37/37</span> tests passing</span>
        </div>
      </motion.div>
    </section>
  );
}
