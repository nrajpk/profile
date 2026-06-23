import React from "react";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ShieldCheck, Zap, Globe } from 'lucide-react';

export default function CaseStudySlider() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-32 px-6 bg-white border-y border-stone-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] font-bold text-zapier uppercase tracking-[0.3em] mb-4 block">System Case Notes</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-stone-900 leading-none mb-6">Proof over posture.</h2>
            <p className="text-xl text-stone-500 font-medium leading-relaxed">
              Long-cycle growth needs clean operating logic: data source, CRM context, tracking, review and handoff.
            </p>
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-stone-900 bg-paper border border-stone-200 px-8 py-4 rounded-full hover:border-zapier transition-all active:scale-95"
          >
            <span>{isOpen ? 'Close Case Notes' : 'View Case Notes'}</span>
            <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
              <ChevronRight className="w-4 h-4 text-zapier" />
            </motion.div>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-12">
                <div className="p-8 bg-paper rounded-[24px] border border-stone-100">
                  <Globe className="w-6 h-6 text-stone-400 mb-6" />
                  <h4 className="font-bold text-stone-900 mb-4">The Context</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    B2B and B2G work where lead quality, CRM context and follow-through matter more than raw volume.
                  </p>
                </div>

                <div className="p-8 bg-paper rounded-[24px] border border-stone-100">
                  <ShieldCheck className="w-6 h-6 text-stone-400 mb-6" />
                  <h4 className="font-bold text-stone-900 mb-4">The Approach</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    Build the operating layer first: source definitions, structured records, tracking events and clear handoffs.
                  </p>
                </div>

                <div className="p-8 bg-stone-900 text-white rounded-[32px] lg:row-span-1 shadow-xl">
                  <Zap className="w-6 h-6 text-zapier mb-6" />
                  <h4 className="font-serif italic text-2xl mb-4">The Shift</h4>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    The goal is not louder marketing. The goal is cleaner decisions from better system visibility.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="h-px w-full bg-stone-100 mt-12 relative overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-1/3 bg-zapier/20"
          />
        </div>
      </div>
    </section>
  );
}
