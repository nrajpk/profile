import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectCover from "./ProjectCover.jsx";
import useMotionOff from "./useMotionOff.js";

// One person, one desk. Every item is a layer documented elsewhere on the site.
const desk = [
  "paid campaigns",
  "CRM logic",
  "data pipelines",
  "AI qualification",
  "landing pages",
  "reporting views",
  "creative direction",
];

// The headline paints with the page; only the collage beside it assembles.
// Entrances are CSS (global.css §7) so they finish without this script and
// the motion switch can skip them. React only adds the pointer parallax.
export default function HeroStage({ name, title, location, builds = 21 }) {
  const off = useMotionOff();

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
    if (off) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  // One window per build: the first tower holds nine, the second the rest.
  const firstTower = Math.min(9, builds);
  const secondTower = Math.max(0, builds - firstTower);

  return (
    <section
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative max-w-7xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center"
    >
      <div className="lg:col-span-7 relative z-10">
        <h1>
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-8 text-base">
            <span className="font-semibold text-stone-900">{name}</span>
            <span aria-hidden="true" className="hidden sm:block h-1.5 w-1.5 rounded-full bg-zapier" />
            <span className="sr-only">, </span>
            <span className="text-stone-600">
              {title}, {location}
            </span>
            <span className="sr-only">. </span>
          </span>
          <span className="display block text-stone-900 lg:text-[clamp(3.5rem,5.5vw,5.25rem)]">
            Marketing instinct.{" "}
            <br />
            <span className="text-zapier">Engineering</span> discipline.{" "}
            <br />
            <span className="italic text-quiet">Live systems.</span>
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-stone-600 max-w-xl leading-relaxed">
          Ten years of marketing, now building the systems growth runs on: pipelines, CRM logic,
          qualification and reporting that hold up in production.
        </p>

        <p className="mt-5 text-sm text-stone-600 max-w-xl leading-relaxed">
          <span className="font-semibold text-stone-900">All on one desk:</span> {desk.join(" · ")}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="/work"
            className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-stone-900 text-white font-semibold text-sm hover:bg-zapier-ink transition-colors active:scale-95"
          >
            See the built work <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a href="/cv" className="link-arrow">
            One-page CV <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Collage stage: cut-out portrait layered with shapes, lines, a tower
          whose windows are the builds, a framed system diagram and a
          handwritten note */}
      <div className="lg:col-span-5 relative">
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none xl:w-[118%] aspect-[10/11]">
          {/* Pale panel behind the head */}
          <div className="hero-wipe-down absolute right-0 top-0 w-[32%] h-[66%] bg-stone-200" style={{ "--d": "100ms" }} />

          {/* Construction lines */}
          <svg
            viewBox="0 0 100 110"
            preserveAspectRatio="none"
            className="hero-wipe-down absolute inset-0 h-full w-full overflow-visible"
            style={{ "--d": "200ms" }}
            aria-hidden="true"
          >
            <line x1="24" y1="0" x2="24" y2="110" stroke="var(--color-stone-300)" strokeWidth="0.25" vectorEffect="non-scaling-stroke" />
            <path d="M24 30 C 14 58, 6 80, -4 104" fill="none" stroke="var(--color-stone-400)" strokeWidth="0.25" vectorEffect="non-scaling-stroke" />
            <line x1="-22" y1="94" x2="100" y2="94" stroke="var(--color-stone-400)" strokeWidth="0.25" vectorEffect="non-scaling-stroke" />
          </svg>

          {/* Translucent wedge */}
          <motion.div
            style={{ x: wedgeX, y: wedgeY, clipPath: "polygon(0 0, 100% 30%, 100% 100%, 0 100%)", "--d": "400ms" }}
            className="hero-in absolute left-[4%] top-[36%] w-[40%] h-[50%] bg-stone-300/60"
          />

          {/* Disc */}
          <motion.div style={{ x: discX, y: discY }} className="absolute left-[25%] top-[22%] w-[52%] aspect-square">
            <div className="hero-pop h-full w-full rounded-full bg-zapier" style={{ "--d": "150ms" }} />
          </motion.div>

          {/* Portrait, cut out */}
          <motion.div style={{ x: faceX, y: faceY }} className="absolute right-[9%] top-[1%] w-[70%] h-[78%]">
            <div className="hero-wipe-up h-full w-full overflow-hidden" style={{ "--d": "150ms" }}>
              <img
                src="/photos/portrait-cutout.webp"
                alt={`${name}, arms crossed, looking to one side`}
                width="1122"
                height="1402"
                fetchPriority="high"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Tower: every window is a build */}
          <motion.a
            href="/work"
            aria-label={`${builds} builds — see the work`}
            style={{ x: towerX, y: towerY }}
            className="group absolute left-[3%] bottom-[14.5%] w-[40%] h-[36%] block"
          >
            <span className="hero-rise absolute inset-0 block" style={{ "--d": "650ms" }}>
              <span className="absolute left-0 bottom-0 w-[42%] h-full bg-stone-900 p-[7%] grid grid-cols-3 gap-[9%] content-start">
                {Array.from({ length: firstTower }, (_, i) => (
                  <i key={i} className={`window aspect-[3/4] ${[1, 5].includes(i) ? "lit" : ""}`} style={{ "--i": i }} />
                ))}
              </span>
              <span className="absolute right-0 bottom-0 w-[62%] h-[68%] bg-stone-800 p-[6%] grid grid-cols-4 gap-[7%] content-start">
                {Array.from({ length: secondTower }, (_, i) => (
                  <i key={i} className={`window aspect-[3/4] ${[2, 7, 9].includes(i) ? "lit" : ""}`} style={{ "--i": i + firstTower }} />
                ))}
              </span>
              <span className="absolute left-0 -bottom-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-600 group-hover:text-zapier-ink transition-colors whitespace-nowrap">
                {builds} builds, one desk
              </span>
            </span>
          </motion.a>

          {/* A system diagram where a second photo used to be: evidence, not another face */}
          <motion.a
            href="/work/b2g-gtm-pipeline"
            aria-label="B2G outbound pipeline — read the system breakdown"
            style={{ x: deskX, y: deskY }}
            className="absolute right-0 bottom-[2%] w-[46%] block"
          >
            <span className="hero-rise block border-4 border-paper bg-stone-100 p-1.5 shadow-[0_18px_40px_-24px_rgb(0_0_0_/_0.45)]" style={{ "--d": "800ms" }}>
              <span aria-hidden="true" className="block">
                <ProjectCover kind="pipeline" />
              </span>
            </span>
          </motion.a>

          {/* Handwritten note */}
          <p
            className="hand hero-note absolute right-[3%] top-[7%] text-stone-800 leading-[1.05] text-[clamp(1.25rem,2.1vw,1.9rem)]"
            style={{ "--d": "1000ms" }}
            aria-hidden="true"
          >
            Signals
            <br />
            Systems
            <br />
            Shipped
          </p>
        </div>
      </div>
    </section>
  );
}
