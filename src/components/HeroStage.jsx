import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const headline = [
  { text: "Marketing" },
  { text: "instinct.", br: true },
  { text: "Engineering", accent: true },
  { text: "discipline.", br: true },
  { text: "Live", soft: true },
  { text: "systems.", soft: true },
];

// One person, one desk. Every item is a layer documented elsewhere on the site.
const juggling = [
  "paid campaigns",
  "CRM logic",
  "data pipelines",
  "AI qualification",
  "landing pages",
  "reporting views",
  "creative direction",
];


export default function HeroStage() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % juggling.length), 1900);
    return () => clearInterval(timer);
  }, [reduce]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 18 });
  const sy = useSpring(my, { stiffness: 70, damping: 18 });
  const discX = useTransform(sx, (v) => v * -34);
  const discY = useTransform(sy, (v) => v * -34);
  const faceX = useTransform(sx, (v) => v * 16);
  const faceY = useTransform(sy, (v) => v * 16);
  const wedgeX = useTransform(sx, (v) => v * -12);
  const wedgeY = useTransform(sy, (v) => v * -12);
  const towerX = useTransform(sx, (v) => v * 30);
  const towerY = useTransform(sy, (v) => v * 22);
  const deskX = useTransform(sx, (v) => v * 22);
  const deskY = useTransform(sy, (v) => v * 16);

  const onMove = (e) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative max-w-7xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center"
    >
      <div className="lg:col-span-7 relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="kicker mb-8"
        >
          Growth Engineering — Proven in Production
        </motion.span>

        <h1 className="display text-stone-900 lg:text-[clamp(3.5rem,5.5vw,5.25rem)]">
          {headline.map((word, i) => (
            <React.Fragment key={word.text}>
              <span className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em] mr-[0.22em]">
                <motion.span
                  initial={reduce ? false : { y: "105%", rotate: 4 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ delay: 0.15 + i * 0.09, duration: 1, ease }}
                  className={`inline-block origin-bottom-left ${
                    word.accent ? "text-zapier" : word.soft ? "italic text-stone-400" : ""
                  }`}
                >
                  {word.text}
                </motion.span>
              </span>
              {word.br && <br />}
            </React.Fragment>
          ))}
        </h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.9, ease }}
        >
          <p className="mt-8 text-lg md:text-xl text-stone-600 max-w-xl leading-relaxed">
            I'm a digital marketer who builds the systems growth runs on —
            pipelines, CRM logic, qualification and reporting that hold up in production.
          </p>

          <div className="mt-6 flex items-baseline gap-2 text-sm text-stone-500" aria-live="off">
            <span>All on one desk:</span>
            <span className="relative inline-block h-[1.4em] overflow-hidden min-w-[11rem]">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={juggling[index]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.55, ease }}
                  className="absolute left-0 top-0 font-semibold text-stone-900 whitespace-nowrap"
                >
                  {juggling[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="/work"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-stone-900 text-white font-semibold text-sm hover:bg-zapier transition-colors active:scale-95"
            >
              See the built work <ArrowUpRight size={16} />
            </a>
            <a href="/about" className="link-arrow">
              Who am I <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Collage stage: cut-out portrait layered with shapes, lines, a tower
          whose windows are the builds, a second photo and a handwritten note */}
      <div className="lg:col-span-5 relative">
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none xl:w-[118%] aspect-[10/11]">
          {/* Pale panel behind the head */}
          <motion.div
            initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            transition={{ delay: 0.15, duration: 1.2, ease }}
            className="absolute right-0 top-0 w-[32%] h-[66%] bg-stone-200"
          />

          {/* Construction lines */}
          <svg viewBox="0 0 100 110" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
            <motion.line x1="24" y1="0" x2="24" y2="110" stroke="var(--color-stone-300)" strokeWidth="0.25" vectorEffect="non-scaling-stroke"
              initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2, duration: 1.4, ease }} />
            <motion.path d="M24 30 C 14 58, 6 80, -4 104" fill="none" stroke="var(--color-stone-400)" strokeWidth="0.25" vectorEffect="non-scaling-stroke"
              initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 1.6, ease }} />
            <motion.line x1="-22" y1="94" x2="100" y2="94" stroke="var(--color-stone-400)" strokeWidth="0.25" vectorEffect="non-scaling-stroke"
              initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7, duration: 1.4, ease }} />
          </svg>

          {/* Translucent wedge */}
          <motion.div
            style={{ x: wedgeX, y: wedgeY, clipPath: "polygon(0 0, 100% 30%, 100% 100%, 0 100%)" }}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute left-[4%] top-[36%] w-[40%] h-[50%] bg-stone-300/60"
          />

          {/* Disc */}
          <motion.div style={{ x: discX, y: discY }} className="absolute left-[25%] top-[22%] w-[52%] aspect-square">
            <motion.div
              initial={reduce ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.25, duration: 1.3, ease }}
              className="h-full w-full rounded-full bg-zapier"
            />
          </motion.div>

          {/* Portrait, cut out */}
          <motion.div style={{ x: faceX, y: faceY }} className="absolute right-[9%] top-[1%] w-[70%] h-[78%]">
            <motion.div
              initial={reduce ? false : { clipPath: "inset(100% 0 0 0)", y: 30 }}
              animate={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
              transition={{ delay: 0.5, duration: 1.3, ease }}
              className="h-full w-full overflow-hidden"
            >
              <img
                src="/photos/portrait-cutout.webp"
                alt="Nikhil Raj PK, arms crossed, looking to one side"
                width="1122"
                height="1402"
                fetchPriority="high"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Tower: every window is a build */}
          <motion.a
            href="/work"
            aria-label="21 builds — see the work"
            style={{ x: towerX, y: towerY }}
            initial={reduce ? false : { y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 1.1, ease }}
            className="group absolute left-[3%] bottom-[14.5%] w-[40%] h-[36%] block"
          >
            <span className="absolute left-0 bottom-0 w-[42%] h-full bg-stone-900 p-[7%] grid grid-cols-3 gap-[9%] content-start">
              {Array.from({ length: 9 }, (_, i) => (
                <i key={i} className={`window aspect-[3/4] ${[1, 5].includes(i) ? "lit" : ""}`} style={{ "--i": i }} />
              ))}
            </span>
            <span className="absolute right-0 bottom-0 w-[62%] h-[68%] bg-stone-800 p-[6%] grid grid-cols-4 gap-[7%] content-start">
              {Array.from({ length: 12 }, (_, i) => (
                <i key={i} className={`window aspect-[3/4] ${[2, 7, 9].includes(i) ? "lit" : ""}`} style={{ "--i": i + 9 }} />
              ))}
            </span>
            <span className="absolute left-0 -bottom-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 group-hover:text-zapier transition-colors whitespace-nowrap">
              21 builds, one desk
            </span>
          </motion.a>

          {/* Second photo */}
          <motion.div
            style={{ x: deskX, y: deskY }}
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 1.1, ease }}
            className="absolute right-0 bottom-[2%] w-[42%] aspect-[4/3] overflow-hidden border-4 border-paper bg-stone-200"
          >
            <img src="/photos/desk.webp" alt="At the desk" width="1672" height="941" loading="lazy" className="h-full w-full object-cover object-[68%_30%] grayscale contrast-[1.05]" />
          </motion.div>

          {/* Handwritten note */}
          <motion.p
            initial={reduce ? false : { opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: -6 }}
            transition={{ delay: 1.4, duration: 0.9, ease }}
            className="hand absolute right-[3%] top-[7%] text-stone-800 leading-[1.05] text-[clamp(1.25rem,2.1vw,1.9rem)]"
            aria-hidden="true"
          >
            Signals
            <br />
            Systems
            <br />
            Shipped
          </motion.p>
        </div>
      </div>
    </section>
  );
}
