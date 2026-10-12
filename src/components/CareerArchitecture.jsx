import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { Code2, Terminal } from "lucide-react";

const deployments = [
  {
    id: "deployment-04",
    period: "2023 - PRESENT",
    phase: "Systems Layer",
    role: "Marketing & Digital Transformation",
    company: "Mahindra Emirates Vehicle Armouring",
    location: "UAE (Global Markets)",
    environment: "B2B / B2G Defense Solutions",
    core: "Working across digital marketing, CRM workflows, data extraction, and global campaign operations for high-consideration markets.",
    stack: ["Python", "Apify", "CRM", "Power BI"],
    metrics: ["B2G Lead Sourcing", "CRM Workflow Support"],
    highlights: [
      "Worked with custom CRM workflows and pipeline visibility requirements.",
      "Used Python and extraction workflows to support targeted lead sourcing.",
      "Supported digital campaigns and assets for Middle East, Africa and global market activity."
    ]
  },
  {
    id: "deployment-03",
    period: "2022 - 2023",
    phase: "Acquisition Layer",
    role: "Digital Marketing Consultant",
    company: "Coach2Reach Inc.",
    location: "Global (Remote)",
    environment: "B2C EdTech",
    core: "Managed acquisition and tracking workflows across Google Ads, analytics, and performance review loops.",
    stack: ["Google Ads", "GA4", "GTM", "Performance Tracking"],
    metrics: ["Paid Acquisition", "Tracking Setup"],
    highlights: [
      "Managed Google Ads execution and optimization roadmap.",
      "Configured conversion tracking and analytics review structures.",
      "Translated campaign data into practical acquisition insights."
    ]
  },
  {
    id: "deployment-02",
    period: "2020 - 2021",
    phase: "Campaign Layer",
    role: "Social Media Specialist",
    company: "ChalksnSlate Media",
    location: "India (Hybrid)",
    environment: "B2B Media Agency",
    core: "Built creative and campaign execution discipline across social channels, assets, and reporting cycles.",
    stack: ["Creative Strategy", "Meta Ads", "Adobe Suite", "Campaign Ops"],
    metrics: ["Content Systems", "Campaign Iteration"],
    highlights: [
      "Developed campaign creative direction and content workflows.",
      "Managed outputs aligned to client campaign objectives.",
      "Supported ongoing optimization through performance review."
    ]
  },
  {
    id: "deployment-01",
    period: "2016 - 2020",
    phase: "Foundation Layer",
    role: "Sr. Digital Marketing Associate",
    company: "Markon Strategy Consulting",
    location: "India (Hybrid)",
    environment: "B2B Marketing Startup",
    core: "Built the early foundation across websites, UI/UX, campaign execution, and marketing automation support.",
    stack: ["HTML/CSS", "Wireframing", "Automation Tools", "UI/UX"],
    metrics: ["Landing Pages", "Workflow Support"],
    highlights: [
      "Wireframed and developed conversion-focused landing pages.",
      "Supported automation workflows to reduce repetitive campaign tasks.",
      "Executed campaigns across brand awareness and lead generation goals."
    ]
  }
];

// Scroll-pinned timeline adapted from 21st.dev "Scroll Reveal Content A" (@abui).
// Each role owns an equal slice of the track's scroll progress.
const SLICE_VH = 90;

export default function CareerArchitecture() {
  return (
    <section
      id="experience"
      className="pt-36 md:pt-40 pb-24 lg:pb-12 px-6 bg-paper border-t border-stone-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <span className="font-mono text-[10px] font-bold text-zapier uppercase tracking-[0.4em] mb-4 block">
              Background
            </span>

            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-stone-900 italic font-serif">
              A marketing path with a technical base.
            </h2>

            <p className="text-stone-500 leading-relaxed mt-6 max-w-md">
              My career has moved through campaign execution, websites,
              acquisition, CRM workflows, analytics, and data systems. The
              common thread is operational: making the visible parts of
              marketing work through cleaner systems underneath.
            </p>
          </div>

          <div className="lg:col-span-5">
            <EducationCard />
          </div>
        </div>

        <PinnedTimeline />
        <StackedTimeline />
      </div>
    </section>
  );
}

function PinnedTimeline() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = deployments.length;

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(count - 1, Math.max(0, Math.floor(value * count)));
    setActiveIndex((current) => (current === next ? current : next));
  });

  const jumpTo = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const trackTop = track.getBoundingClientRect().top + window.scrollY;
    const scrollable = track.offsetHeight - window.innerHeight;
    const target = trackTop + scrollable * ((index + 0.05) / count);
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <div
      ref={trackRef}
      className="hidden lg:block relative mt-8"
      style={{ height: `${count * SLICE_VH + 100}vh` }}
    >
      <div className="sticky top-0 h-screen pt-20 flex items-center">
        <div className="grid grid-cols-12 gap-16 w-full items-center">
          <ol className="col-span-5 flex flex-col gap-3">
            {deployments.map((job, index) => (
              <PointItem
                key={job.id}
                job={job}
                index={index}
                count={count}
                isActive={index === activeIndex}
                isPast={index < activeIndex}
                progress={scrollYProgress}
                onSelect={() => jumpTo(index)}
              />
            ))}
          </ol>

          <div className="col-span-7">
            <AnimatePresence mode="wait">
              <DetailCard key={deployments[activeIndex].id} job={deployments[activeIndex]} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function PointItem({ job, index, count, isActive, isPast, progress, onSelect }) {
  const start = index / count;
  const end = (index + 1) / count;
  const fill = useTransform(progress, [start, end], [0, 1]);
  const lit = isActive || isPast;

  return (
    <li>
      <button
        type="button"
        onClick={onSelect}
        aria-current={isActive ? "step" : undefined}
        className="group w-full text-left flex gap-5"
      >
        <div className="relative w-px self-stretch bg-stone-200 ml-2">
          <motion.div
            className="absolute inset-0 bg-zapier origin-top"
            style={{ scaleY: fill }}
          />
        </div>

        <div
          className={`py-3 transition-opacity duration-500 ${
            lit ? "opacity-100" : "opacity-40 group-hover:opacity-70"
          }`}
        >
          <p
            className={`font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-2 transition-colors duration-500 ${
              isActive ? "text-zapier" : "text-stone-400"
            }`}
          >
            {String(index + 1).padStart(2, "0")} · {job.period}
          </p>

          <p className="text-xl font-bold leading-tight text-stone-950 tracking-tight">
            {job.company}
          </p>

          <p className="text-sm text-stone-500 mt-1">{job.role}</p>
        </div>
      </button>
    </li>
  );
}

function DetailCard({ job }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: reduceMotion ? 0 : -24 }}
      transition={{ duration: reduceMotion ? 0.2 : 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white border border-stone-200 rounded-[36px] p-7 xl:p-9 shadow-sm"
    >
      <JobDetails job={job} />
    </motion.article>
  );
}

function JobDetails({ job }) {
  return (
    <>
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="px-3 py-1 bg-stone-900 text-white rounded-full font-mono text-[9px] font-bold uppercase tracking-widest">
          {job.phase}
        </span>

        <span className="px-3 py-1 bg-stone-50 border border-stone-100 rounded-full font-mono text-[9px] font-bold text-stone-400 uppercase tracking-widest">
          {job.location}
        </span>

        <span className="px-3 py-1 bg-stone-50 border border-stone-100 rounded-full font-mono text-[9px] font-bold text-zapier uppercase tracking-widest">
          {job.environment}
        </span>
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-2 leading-tight tracking-tight">
        {job.role}
      </h3>

      <p className="text-stone-500 font-semibold mb-5">{job.company}</p>

      <p className="text-stone-500 text-base xl:text-lg leading-relaxed mb-5 italic font-serif">
        “{job.core}”
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {job.metrics.map((metric) => (
          <span
            key={metric}
            className="px-4 py-2 bg-stone-50 rounded-xl border border-stone-100 text-sm font-bold text-stone-900 tracking-tight"
          >
            {metric}
          </span>
        ))}
      </div>

      <div className="space-y-2.5 mb-5">
        <p className="font-mono text-[10px] font-bold text-stone-900 uppercase tracking-widest">
          Relevant Work:
        </p>

        {job.highlights.map((point) => (
          <div key={point} className="flex gap-4 items-start">
            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zapier flex-shrink-0" />
            <p className="text-stone-500 text-sm leading-relaxed">{point}</p>
          </div>
        ))}
      </div>

      <div className="pt-5 border-t border-stone-100 flex flex-wrap gap-2">
        {job.stack.map((tool) => (
          <span
            key={tool}
            className="px-3 py-1 bg-stone-900 text-white font-mono text-[8px] font-bold uppercase tracking-widest rounded-md"
          >
            {tool}
          </span>
        ))}
      </div>
    </>
  );
}

// Below lg the pinned layout can't fit a viewport, so roles stack normally.
function StackedTimeline() {
  const reduceMotion = useReducedMotion();

  return (
    <ol className="lg:hidden mt-14 space-y-6">
      {deployments.map((job, index) => (
        <motion.li
          key={job.id}
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-stone-200 rounded-[32px] p-6 md:p-8 shadow-sm"
        >
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-zapier mb-4">
            {String(index + 1).padStart(2, "0")} · {job.period}
          </p>
          <JobDetails job={job} />
        </motion.li>
      ))}
    </ol>
  );
}

function EducationCard() {
  return (
    <div className="p-8 bg-stone-900 rounded-[32px] text-white relative overflow-hidden group">
      <div className="relative z-10">
        <Terminal className="text-zapier mb-4" size={20} />

        <p className="font-mono text-[9px] text-stone-500 uppercase tracking-widest mb-1">
          Root Foundation
        </p>

        <p className="font-bold text-lg leading-tight">B.Tech in Computer Science</p>

        <p className="text-stone-400 text-xs mt-2 italic">
          Mar Athanasius College of Engineering
        </p>
      </div>

      <Code2 className="absolute -right-4 -bottom-4 text-white/5 w-32 h-32 rotate-12 transition-transform group-hover:scale-110" />
    </div>
  );
}
