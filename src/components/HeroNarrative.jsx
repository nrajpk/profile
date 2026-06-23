import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Database, LineChart, Workflow } from 'lucide-react';

const smoothEase = [0.16, 1, 0.3, 1];

const proofPoints = [
  { label: 'Foundation', value: 'B.Tech Computer Science' },
  { label: 'Operating zone', value: 'CRM, analytics, lead gen' },
  { label: 'Current focus', value: 'Practical GTM systems' }
];

const systemRows = [
  { icon: Workflow, title: 'Lead source', value: 'Captured and structured' },
  { icon: Database, title: 'CRM record', value: 'Routed into pipeline view' },
  { icon: LineChart, title: 'Performance', value: 'Measured with reporting layer' }
];

export default function HeroNarrative() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden px-6 pb-16 pt-28 md:pt-34">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: smoothEase }}
            className="mb-7 flex items-center gap-4"
          >
            <img
              src="/dp.jpeg"
              alt="Nikhil Raj PK"
              className="h-13 w-13 rounded-full border border-stone-200 bg-white object-cover grayscale transition duration-500 hover:grayscale-0"
            />
            <div>
              <p className="text-sm font-bold text-stone-950">Nikhil Raj PK</p>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">
                Marketing Operations & GTM Systems Builder
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: smoothEase }}
            className="eyebrow mb-5"
          >
            CRM. Analytics. Automation. Lead generation.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: smoothEase }}
            className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-stone-950 sm:text-6xl lg:text-[5.8rem]"
          >
            Connecting marketing execution with technical infrastructure.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: smoothEase }}
            className="mt-7 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg"
          >
            With a B.Tech in Computer Science and hands-on experience across B2B and B2G marketing, CRM systems, websites, analytics, Python workflows, and AI-assisted operations, I build practical systems that make lead generation, tracking, and pipeline visibility cleaner.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: smoothEase }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#work" className="btn btn-primary">
              View My Work <ArrowUpRight size={15} />
            </a>
            <a href="#lab" className="btn btn-secondary">
              See What I’m Building
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: smoothEase }}
          className="relative"
        >
          <div className="rounded-[30px] border border-stone-200 bg-white p-4 shadow-xl shadow-stone-900/5">
            <div className="rounded-[24px] border border-stone-200 bg-stone-950 p-5 text-white md:p-6">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-stone-500">System view</p>
                  <p className="mt-2 text-lg font-semibold">Marketing stack health</p>
                </div>
                <span className="rounded-full bg-accent/15 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-accent">live logic</span>
              </div>

              <div className="space-y-3">
                {systemRows.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-stone-950">
                        <Icon size={18} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="text-xs text-stone-500">{item.value}</p>
                      </div>
                      <div className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {proofPoints.map((point) => (
              <div key={point.label} className="rounded-2xl border border-stone-200 bg-white/85 p-4 backdrop-blur">
                <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-stone-400">{point.label}</p>
                <p className="mt-2 text-sm font-semibold leading-5 text-stone-900">{point.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
