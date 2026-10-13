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
import SystemField, { STAGES, stageAt } from "./SystemField.jsx";

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

const proof = [
  { value: "79", label: "workflow executions", x: "-6%", y: "58%", delay: 0 },
  { value: "37/37", label: "tests passing", x: "66%", y: "8%", delay: 1.2 },
  { value: "14", label: "stages tracked", x: "70%", y: "82%", delay: 2.1 },
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
  const chipX = useTransform(sx, (v) => v * 42);
  const chipY = useTransform(sy, (v) => v * 42);

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
    <div className="relative overflow-hidden">
    <SystemField />
    <section
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative max-w-7xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-20 md:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center"
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

      {/* Portrait stage */}
      <div className="lg:col-span-5 relative">
        <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm lg:max-w-none aspect-[4/5]">
          <motion.div
            style={{ x: discX, y: discY }}
            className="absolute left-[-10%] lg:left-[2%] top-[4%] w-[82%] lg:w-[76%] aspect-square"
          >
            <motion.div
              initial={reduce ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 1.3, ease }}
              className="h-full w-full rounded-full bg-zapier"
            />
            <svg viewBox="0 0 200 200" className="absolute inset-[-13%] w-[126%] h-[126%] orbit" aria-hidden="true">
              <defs>
                <path id="orbit-path" d="M100,100 m-92,0 a92,92 0 1,1 184,0 a92,92 0 1,1 -184,0" />
              </defs>
              <text className="fill-stone-500" style={{ fontFamily: "var(--font-mono)", fontSize: "6.2px", letterSpacing: "0.32em" }}>
                <textPath href="#orbit-path">
                  SOURCE · ENRICH · QUALIFY · APPROVE · SEND · TRACK · REPORT · SOURCE · ENRICH · QUALIFY · APPROVE · SEND · TRACK · REPORT ·
                </textPath>
              </text>
            </svg>
          </motion.div>

          <motion.div
            style={{ x: faceX, y: faceY }}
            className="absolute right-0 bottom-0 w-[74%] aspect-[3/4]"
          >
            <motion.div
              initial={reduce ? false : { clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ delay: 0.45, duration: 1.3, ease }}
              className="group relative h-full w-full overflow-hidden bg-stone-200"
            >
              {/* Two sides: the studio portrait, and the colour one underneath it on hover */}
              <img
                src="/photos/portrait-bw.webp"
                alt="Nikhil Raj PK, arms crossed, leaning against a textured wall"
                width="1122"
                height="1402"
                fetchPriority="high"
                className="absolute inset-0 h-full w-full object-cover object-[50%_18%] scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
              />
              <img
                src="/photos/portrait-steps.webp"
                alt=""
                width="1086"
                height="1448"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-[50%_12%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
              />
            </motion.div>
            <p className="mt-3 text-xs text-stone-500 leading-snug">
              <span className="font-semibold text-stone-900">Nikhil Raj PK</span>
              <br />
              Growth Engineer · Marketing Ops &amp; GTM Systems
            </p>
          </motion.div>

          <motion.div style={{ x: chipX, y: chipY }} className="absolute inset-0 pointer-events-none">
            {proof.map((item) => (
              <motion.div
                key={item.label}
                initial={reduce ? false : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + item.delay * 0.15, duration: 0.8, ease }}
                className="absolute"
                style={{ left: item.x, top: item.y }}
              >
                <motion.div
                  animate={reduce ? undefined : { y: [0, -9, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
                  className="bg-white border border-stone-200 shadow-[0_14px_30px_-14px_rgb(0_0_0/0.35)] rounded-xl px-3.5 py-2.5"
                >
                  <p className="font-serif text-2xl leading-none text-stone-900 tabular-nums">{item.value}</p>
                  <p className="text-[10px] font-medium text-stone-500 mt-1 whitespace-nowrap">{item.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    {/* Stage rail for the field behind the hero */}
    <ol className="hidden md:block absolute inset-x-0 bottom-5 h-4 pointer-events-none" aria-label="The handoff chain">
      {STAGES.map((stage, i) => (
        <li
          key={stage}
          className={`absolute -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.22em] ${
            stage === "Approve" ? "text-zapier" : "text-stone-400"
          }`}
          style={{ left: `${stageAt(i) * 100}%` }}
        >
          {stage}
        </li>
      ))}
    </ol>
    </div>
  );
}
