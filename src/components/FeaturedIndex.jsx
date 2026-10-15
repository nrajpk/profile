import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectCover from "./ProjectCover.jsx";

const ease = [0.16, 1, 0.3, 1];

// Hover or focus a row and the stage on the right redraws that system.
// Below lg each row carries its own cover, so nothing depends on hover.
export default function FeaturedIndex({ projects }) {
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      <ol className="lg:col-span-7 border-t border-stone-200">
        {projects.map((project, i) => (
          <li key={project.slug} className="border-b border-stone-200">
            <a
              href={project.href}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group block py-6 md:py-8"
            >
              <div className="lg:hidden mb-5 bg-stone-100 border border-stone-200 p-3">
                <ProjectCover kind={project.cover} />
              </div>
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <h3
                    className={`font-serif text-3xl md:text-[2.6rem] leading-[1.02] tracking-tight transition-all duration-500 lg:group-hover:translate-x-3 ${
                      active === i ? "lg:text-stone-900" : "lg:text-quiet"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className="mt-3 text-stone-700 leading-relaxed max-w-xl">{project.after}</p>
                  <p className="mt-2 text-sm text-stone-600">{project.tools.join(" · ")}</p>
                </div>
                <span
                  className={`mt-2 shrink-0 h-10 w-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
                    active === i
                      ? "lg:bg-zapier lg:border-zapier lg:text-white lg:rotate-0"
                      : "lg:-rotate-45"
                  } border-stone-300 text-stone-600 group-hover:bg-zapier group-hover:border-zapier group-hover:text-white`}
                  aria-hidden="true"
                >
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </a>
          </li>
        ))}
      </ol>

      <div className="hidden lg:block lg:col-span-5 sticky top-28" aria-hidden="true">
        <div className="relative bg-stone-100 border border-stone-200 p-6 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.slug}
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <ProjectCover kind={current.cover} />
            </motion.div>
          </AnimatePresence>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={current.slug}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="mt-5 text-stone-600 leading-relaxed"
          >
            {current.desc}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
