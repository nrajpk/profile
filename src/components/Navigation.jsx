import React from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Systems', href: '#capabilities' },
  { name: 'Work', href: '#work' },
  { name: 'Lab', href: '#lab' },
  { name: 'Background', href: '#background' }
];

export default function Navigation() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/70 bg-paper/85 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
        <a href="#" className="group flex items-center gap-3" aria-label="Nikhil Raj PK home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white text-xs font-black tracking-tight text-stone-950 shadow-sm">
            NR
          </span>
          <span className="hidden text-sm font-bold tracking-tight text-stone-950 sm:block">
            nrajpk<span className="text-accent">.</span>com
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-[0.22em] text-stone-500 transition-colors hover:text-stone-950"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a href="mailto:nrajpk@outlook.com" className="btn btn-dark text-[10px]">
          Contact
        </a>
      </div>
    </motion.header>
  );
}
