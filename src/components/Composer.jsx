import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const dot = {
  live: "bg-green-500",
  internal: "bg-zapier",
  built: "bg-stone-700",
  build: "bg-stone-500",
  pilot: "bg-stone-400",
  prototype: "bg-stone-300",
};

// Shows how separate builds line up into one larger system. Pick a system;
// each row is one handoff and names the build that owns it.
export default function Composer({ chains, statusLabels }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(chains[0].id);
  const chain = chains.find((c) => c.id === active);

  // Deep link: /systems#compose-treasury opens that system.
  React.useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.replace("#compose-", "");
      if (chains.some((c) => c.id === id)) setActive(id);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [chains]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10 md:mb-14" role="tablist" aria-label="Composed systems">
        {chains.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={c.id === active}
            onClick={() => setActive(c.id)}
            className={`h-11 px-5 rounded-full border text-sm font-semibold transition-colors ${
              c.id === active ? "bg-stone-900 border-stone-900 text-white" : "border-stone-300 text-stone-600 hover:border-stone-500"
            }`}
          >
            {c.tab}
            <span className={`ml-2 tabular-nums font-normal ${c.id === active ? "opacity-70" : "text-stone-400"}`}>{c.stages.length}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={chain.id}
          role="tabpanel"
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduce ? 0 : -10 }}
          transition={{ duration: 0.4, ease }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14"
        >
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h3 className="font-serif text-4xl md:text-5xl leading-[1.02] tracking-tight">{chain.title}</h3>
              <p className="mt-5 text-stone-600 leading-relaxed">{chain.thesis}</p>
              <p className="mt-5 text-sm text-stone-500 leading-relaxed border-t border-stone-200 pt-5">{chain.note}</p>
            </div>
          </div>

          <ol className="lg:col-span-8 relative">
            {/* The rail, with a pulse travelling down it */}
            <span className="absolute left-[13px] top-3 bottom-3 w-px bg-stone-200" aria-hidden="true" />
            {!reduce && (
              <motion.span
                aria-hidden="true"
                className="absolute left-[10px] w-[7px] h-10 rounded-full bg-zapier"
                initial={{ top: "0%", opacity: 0 }}
                animate={{ top: ["0%", "96%"], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 }}
              />
            )}

            {chain.stages.map((stage, i) => (
              <motion.li
                key={stage.verb}
                initial={{ opacity: 0, x: reduce ? 0 : 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + i * 0.05, duration: 0.5, ease }}
                className="relative"
              >
                <a
                  href={stage.href}
                  className="group grid grid-cols-[27px_1fr] md:grid-cols-[27px_11rem_1fr_auto] gap-x-5 md:gap-x-7 gap-y-1 items-baseline py-4 md:py-5 border-b border-stone-200"
                >
                  <span className="relative z-10 self-center flex h-[27px] w-[27px] items-center justify-center rounded-full border-2 border-stone-300 bg-paper text-[11px] font-semibold tabular-nums text-stone-500 transition-colors duration-300 group-hover:border-zapier group-hover:bg-zapier group-hover:text-white">
                    {chain.sequence ? i + 1 : ""}
                  </span>
                  <span className="font-serif text-3xl leading-none tracking-tight transition-transform duration-500 group-hover:translate-x-1.5">
                    {stage.verb}
                  </span>
                  <span className="col-start-2 md:col-start-auto">
                    <span className="block font-semibold text-stone-900">{stage.project}</span>
                    <span className="block mt-1 text-sm text-stone-600 leading-relaxed">{stage.line}</span>
                  </span>
                  <span className="col-start-2 md:col-start-auto flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500 whitespace-nowrap">
                    <span className={`h-1.5 w-1.5 rounded-full ${dot[stage.status]}`} />
                    {statusLabels[stage.status]}
                    <ArrowUpRight size={13} className="text-stone-400 transition-all duration-300 group-hover:text-zapier group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
