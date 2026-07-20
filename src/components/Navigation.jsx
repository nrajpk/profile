import React from "react";
import { motion } from 'framer-motion';
const LinkedInIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

export default function Navigation() {
  const navLinks = [
    { name: 'Systems', href: '/#expertise' },
    { name: 'Built Work', href: '/#proof' },
    { name: 'Lab', href: '/#lab' },
    { name: 'Interface', href: '/#studio' },
    { name: 'Background', href: '/#experience' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 bg-paper/82 backdrop-blur-md border-b border-stone-200/60"
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="font-bold text-xl tracking-tighter text-stone-900 group">
            nrajpk<span className="text-zapier group-hover:opacity-50 transition-opacity">_</span>
          </a>

          <div className="hidden lg:flex items-center gap-2.5 px-3 py-1.5 bg-stone-100/60 border border-stone-200/60 rounded-full">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            <span className="font-mono text-[9px] font-bold text-stone-500 uppercase tracking-tight">
              United Arab Emirates
            </span>
          </div>
        </div>

        <nav className="hidden md:flex gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[13px] font-medium text-stone-500 hover:text-stone-900 transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-zapier transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/nrajpk"
            target="_blank"
            rel="noreferrer"
            aria-label="Nikhil Raj PK on LinkedIn"
            className="h-10 w-10 rounded-full border border-stone-200 bg-white flex items-center justify-center text-stone-500 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all active:scale-95"
          >
            <LinkedInIcon size={15} />
          </a>
          <a
            href="mailto:nrajpk@outlook.com"
            className="text-[10px] font-bold uppercase tracking-widest text-white bg-stone-900 px-6 py-3 rounded-full hover:bg-zapier transition-all shadow-xl shadow-stone-900/10 active:scale-95"
          >
            Connect
          </a>
        </div>
      </div>
    </motion.header>
  );
}
