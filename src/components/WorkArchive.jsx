import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

// The wider body of work as a filterable index. Rows open in place.
export default function WorkArchive({ items, groups, statusLabels }) {
  const reduce = useReducedMotion();
  const [group, setGroup] = useState("all");
  const [open, setOpen] = useState(null);

  const filters = [{ id: "all", name: "All" }, ...groups];
  const visible = group === "all" ? items : items.filter((item) => item.group === group);
  const count = (id) => (id === "all" ? items.length : items.filter((item) => item.group === id).length);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-8" role="group" aria-label="Filter work by type">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => {
              setGroup(f.id);
              setOpen(null);
            }}
            aria-pressed={group === f.id}
            className={`h-10 px-4 rounded-full border text-sm font-semibold transition-colors ${
              group === f.id
                ? "bg-stone-900 border-stone-900 text-white"
                : "border-stone-300 text-stone-600 hover:border-stone-500"
            }`}
          >
            {f.name}
            <span className={`ml-2 tabular-nums font-normal ${group === f.id ? "opacity-70" : "text-stone-400"}`}>{count(f.id)}</span>
          </button>
        ))}
      </div>

      <ul className="border-t border-stone-200">
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map((item) => {
            const isOpen = open === item.id;
            return (
              <motion.li
                key={item.id}
                layout={reduce ? false : "position"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease }}
                className="border-b border-stone-200"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`archive-${item.id}`}
                  className="group w-full text-left grid grid-cols-[1fr_auto] md:grid-cols-12 gap-x-6 gap-y-2 items-baseline py-5 md:py-6"
                >
                  <span className="md:col-span-4 font-serif text-3xl md:text-[2rem] leading-none tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                    {item.title}
                  </span>
                  <span className="md:order-last md:col-span-1 justify-self-end">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-500 ${
                        isOpen ? "bg-zapier border-zapier text-white rotate-45" : "border-stone-300 text-stone-500 group-hover:border-stone-500"
                      }`}
                    >
                      <Plus size={16} />
                    </span>
                  </span>
                  <span className="col-span-2 md:col-span-5 text-stone-600 leading-relaxed">{item.line}</span>
                  <span className="col-span-2 md:col-span-2 flex md:justify-end items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-stone-500 whitespace-nowrap">
                    <span className={`h-1.5 w-1.5 rounded-full ${item.status === "live" ? "bg-green-500" : item.status === "internal" ? "bg-zapier" : "bg-stone-400"}`} />
                    {statusLabels[item.status]}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`archive-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduce ? 0 : 0.5, ease }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-6 pb-8 md:pb-10">
                        <div className="md:col-start-5 md:col-span-5 space-y-5">
                          <div>
                            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 mb-2">What it is</h4>
                            <p className="text-stone-700 leading-relaxed">{item.what}</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 mb-2">My part</h4>
                            <p className="text-stone-700 leading-relaxed">{item.part}</p>
                          </div>
                        </div>
                        <div className="md:col-span-3 space-y-5">
                          <ul className="flex flex-wrap gap-2">
                            {item.stack.map((tool) => (
                              <li key={tool} className="px-3 py-1.5 border border-stone-300 rounded-full text-xs font-medium text-stone-600">
                                {tool}
                              </li>
                            ))}
                          </ul>
                          <p className="text-sm text-stone-500 tabular-nums">{item.evidence}</p>
                          {item.link && (
                            <a href={item.link.href} target="_blank" rel="noreferrer" className="link-arrow">
                              {item.link.label} <ArrowUpRight size={14} />
                            </a>
                          )}
                          {item.related && (
                            <a href={item.related.href} className="link-arrow">
                              Related: {item.related.label} <ArrowUpRight size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </div>
  );
}
