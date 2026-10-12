import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { UserCheck } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

// The seven-stage handoff chain as a working diagram. A record travels the
// line on its own until the visitor takes over by choosing a stage.
export default function HandoffChain({ chain }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto || reduce) return;
    const timer = setInterval(() => setActive((i) => (i + 1) % chain.length), 2400);
    return () => clearInterval(timer);
  }, [auto, reduce, chain.length]);

  const select = (i) => {
    setAuto(false);
    setActive(i);
  };

  const stage = chain[active];
  const progress = active / (chain.length - 1);

  return (
    <div>
      <div className="relative">
        {/* Rail — horizontal on desktop, vertical on small screens */}
        <div className="absolute bg-stone-200 lg:left-0 lg:right-0 lg:top-[13px] lg:h-px left-[13px] top-0 bottom-0 w-px lg:w-auto" />
        <motion.div
          className="absolute bg-zapier hidden lg:block left-0 top-[12px] h-[3px] origin-left w-full"
          animate={{ scaleX: progress }}
          transition={{ duration: 0.9, ease }}
        />
        <motion.div
          className="absolute bg-zapier lg:hidden left-[12px] top-0 w-[3px] origin-top h-full"
          animate={{ scaleY: progress }}
          transition={{ duration: 0.9, ease }}
        />

        <ol className="relative grid grid-cols-1 lg:grid-cols-7 gap-y-1">
          {chain.map((item, i) => {
            const lit = i <= active;
            const current = i === active;
            return (
              <li key={item.n}>
                <button
                  type="button"
                  onClick={() => select(i)}
                  aria-pressed={current}
                  className="group w-full text-left flex lg:block items-center gap-5 py-3 lg:py-0 lg:pr-4"
                >
                  <span
                    className={`relative shrink-0 flex h-[27px] w-[27px] items-center justify-center rounded-full border-2 transition-all duration-500 ${
                      current
                        ? "bg-zapier border-zapier text-white scale-110"
                        : lit
                        ? "bg-paper border-zapier text-zapier"
                        : "bg-paper border-stone-300 text-stone-400 group-hover:border-stone-500"
                    }`}
                  >
                    {item.human ? <UserCheck size={12} /> : <span className="h-1.5 w-1.5 rounded-full bg-current" />}
                    {current && !reduce && (
                      <span className="absolute inset-[-6px] rounded-full border border-zapier animate-ping opacity-40" />
                    )}
                  </span>
                  <span className="block lg:mt-5">
                    <span
                      className={`block font-serif text-2xl lg:text-[1.7rem] leading-none transition-colors duration-500 ${
                        current ? "text-stone-900" : "text-stone-400 group-hover:text-stone-700"
                      }`}
                    >
                      {item.verb}
                    </span>
                    <span className="block mt-1.5 text-xs text-stone-500">{item.line}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="mt-10 lg:mt-14 border-t border-stone-200 pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[9.5rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage.n}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease }}
            className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6"
          >
            <p className="md:col-span-5 font-serif text-4xl md:text-5xl leading-none tracking-tight">
              <span className="text-zapier tabular-nums">{stage.n}</span> {stage.line}
              <span className="text-stone-400">.</span>
            </p>
            <div className="md:col-span-7">
              <p className="text-sm text-stone-500 mb-3">
                {stage.human
                  ? "The one stage that is deliberately not automated."
                  : `What does the ${stage.verb.toLowerCase()} work`}
              </p>
              <ul className="flex flex-wrap gap-2">
                {stage.tools.map((tool) => (
                  <li key={tool} className="px-3.5 py-2 border border-stone-300 rounded-full text-sm font-medium text-stone-700">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={() => setAuto((a) => !a)}
        className="mt-6 text-xs font-semibold text-stone-500 hover:text-zapier transition-colors"
      >
        {auto ? "Pause the walkthrough" : "Resume the walkthrough"}
      </button>
    </div>
  );
}
