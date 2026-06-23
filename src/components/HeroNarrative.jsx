import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Database, LineChart, Workflow } from 'lucide-react';

const smoothEase = [0.16, 1, 0.3, 1];

const proofPoints = [
  { label: 'Computer Science', value: 'B.Tech foundation' },
  { label: 'Operating zone', value: 'Marketing ops, CRM, analytics' },
  { label: 'Current focus', value: 'Practical GTM systems' }
];

export default function HeroNarrative() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: smoothEase }}
            className="mb-8 flex items-center gap-4"
          >
            <img
              src="/dp.jpeg"
              alt="Nikhil Raj PK"
              className="h-14 w-14 rounded-full border border-stone-200 bg-white object-cover grayscale transition duration-500 hover:grayscale-0"
            />
            <div>
              <p className="text-sm font-bold text-stone-950">Nikhil Raj PK</p>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-stone-500">
                Marketing Operations & GTM Systems Builder
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: smoothEase }}
            className="eyebrow mb-6"
          >
            CRM. Analytics. Automation. Lead generation.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: smoothEase }}
            className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-stone-950 sm:text-6xl lg:text-7xl"
          >
            Connecting marketing execution with technical infrastructure.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: smoothEase }}
            className="mt-8 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl"
          >
            With a B.Tech in Computer Science and hands-on experience across B2B and B2G marketing, CRM systems, websites, analytics, Python workflows, and AI-assisted operations, I build practical systems that make lead generation, tracking, and pipeline visibility cleaner.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: smoothEase }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#work" className="btn btn-primary">
              View My Work <ArrowUpRight size={16} />
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
          <div className="rounded-[36px] border border-stone-200 bg-white p-5 shadow-xl shadow-stone-900/5">
            <div className="rounded-[28px] border border-stone-200 bg-stone-950 p-6 text-white">
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-stone-500">System view</p>
                  <p className="mt-2 text-lg font-semibold">Marketing stack health</p>
                </div>
                <span className="rounded-full bg-accent/15 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-accent">live logic</span>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Workflow, title: 'Lead source', value: 'Captured and structured' },
                  { icon: Database, title: 'CRM record', value: 'Routed into pipeline view' },
                  { icon: LineChart, title: 'Performance', value: 'Measured with reporting layer' }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-stone-950">
                        <Icon size={18} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="text-xs text-stone-500">{item.value}</p>
                      </div>
                      <div className="h-2 w-2 rounded-full bg-accent" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {proofPoints.map((point) => (
              <div key={point.label} className="rounded-2xl border border-stone-200 bg-white/80 p-4 backdrop-blur">
                <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-stone-400">{point.label}</p>
                <p className="mt-2 text-sm font-semibold text-stone-900">{point.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
