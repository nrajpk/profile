import { motion } from "framer-motion";

export default function HeroNarrative() {
  const titleWords = "Growth usually drifts quietly.".split(" ");
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto">
      
      {/* Identity Badge Section */}
      <motion.div 
        initial={{ opacity: 0, x: -10 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1, delay: 0.2, ease: smoothEase }}
        className="flex items-center gap-5 mb-12"
      >
        {/* Profile Headshot */}
        <div className="relative group">
          <img 
            src="/dp.jpeg" 
            alt="Nikhil Raj PK" 
            className="h-14 w-14 rounded-full object-cover border border-stone-200 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out shadow-sm" 
          />
          {/* Status Indicator overlapping the image */}
          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-paper border-2 border-paper">
             <div className="h-full w-full rounded-full bg-zapier animate-pulse" />
          </div>
        </div>

        <div className="flex flex-col">
          <span className="font-mono text-[11px] font-bold text-stone-900 uppercase tracking-widest">
            Nikhil Raj PK
          </span>
          <span className="font-mono text-[9px] text-stone-400 uppercase tracking-[0.2em] mt-0.5">
            Systems-Led Growth Architect
          </span>
        </div>
      </motion.div>

      {/* Staggered Title Reveal */}
      <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight mb-10 text-stone-900">
        {titleWords.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ 
              delay: i * 0.1 + 0.3, // Slight extra delay so the badge loads first
              duration: 0.8, 
              ease: smoothEase 
            }}
            className="inline-block mr-[0.25em]"
          >
            {word === "quietly." ? (
              <span className="font-serif italic font-normal text-stone-400">
                {word}
              </span>
            ) : (
              word
            )}
          </motion.span>
        ))}
      </h1>

      {/* Subtext Reveal */}
      <motion.p 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 1, duration: 1, ease: smoothEase }}
        className="text-xl md:text-2xl text-stone-500 font-medium max-w-2xl leading-relaxed"
      >
        Metrics slip. Sales questions lead quality. Reporting slows down decisions. These are signals your systems need to catch up to your momentum.
      </motion.p>
    </section>
  );
}