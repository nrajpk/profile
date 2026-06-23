import { motion } from "framer-motion";

export default function HeroNarrative() {
  const titleWords =
    "I build GTM systems that turn campaigns, leads, CRM data, and sales activity into one working growth engine.".split(" ");

  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-28 md:pt-32 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: smoothEase }}
        className="flex items-center gap-5 mb-12"
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
            GTM Engineer & Marketing Operations Builder
          </span>
        </div>
      </motion.div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-10 text-stone-900">
        {titleWords.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: i * 0.055 + 0.3,
              duration: 0.8,
              ease: smoothEase,
            }}
            className="inline-block mr-[0.25em]"
          >
            {word === "engine." ? (
              <span className="font-serif italic font-normal text-stone-400">
                {word}
              </span>
            ) : (
              word
            )}
          </motion.span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, ease: smoothEase }}
        className="text-xl md:text-2xl text-stone-500 font-medium max-w-3xl leading-relaxed"
      >
        I help B2B and B2G teams clean up fragmented marketing operations, automate reporting,
        improve lead visibility, and build workflows that make revenue execution easier to manage.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.15, duration: 1, ease: smoothEase }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <a
          href="#systems"
          className="inline-flex items-center justify-center bg-stone-900 text-white px-7 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-zapier transition-all shadow-xl shadow-stone-900/10 active:scale-95"
        >
          See the Systems
        </a>

        <a
          href="#gtm-engineer"
          className="inline-flex items-center justify-center border border-stone-200 bg-white/50 text-stone-700 px-7 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:border-zapier hover:text-zapier transition-all active:scale-95"
        >
          What is GTM Engineering?
        </a>
      </motion.div>
    </section>
  );
}
