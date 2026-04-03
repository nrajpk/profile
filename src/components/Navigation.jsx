import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Expertise", href: "#expertise" },
    { name: "The Lab", href: "#lab" },
    { name: "Studio", href: "#studio" },
    { name: "Proof", href: "#proof" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 bg-paper/80 backdrop-blur-md border-b border-stone-200/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-5 md:px-6 h-16 sm:h-18 md:h-20 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-8 min-w-0">
          <a
            href="#"
            className="font-bold text-lg sm:text-xl tracking-tighter text-stone-900 group shrink-0"
          >
            nrajpk
            <span className="text-zapier group-hover:opacity-50 transition-opacity">
              _
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-2.5 px-3 py-1.5 bg-stone-100/50 border border-stone-200/50 rounded-full">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </div>
            <span className="font-mono text-[9px] font-bold text-stone-500 uppercase tracking-tight">
              Currently: Abu Dhabi / Designing Systems
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-zapier transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <a
            href="mailto:nrajpk@outlook.com"
            className="hidden sm:inline-flex text-[10px] font-bold uppercase tracking-widest text-white bg-stone-900 px-4 sm:px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-zapier transition-all shadow-xl shadow-stone-900/10 active:scale-95"
          >
            Contact
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-stone-200 bg-white/80 text-stone-900 active:scale-95 transition"
          >
            {mobileOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-stone-200/60 bg-paper/95 backdrop-blur-xl"
          >
            <div className="px-4 sm:px-5 py-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ delay: index * 0.04 }}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-bold uppercase tracking-widest text-stone-700 hover:text-stone-900 hover:bg-white transition-colors"
                  >
                    <span>{link.name}</span>
                    <span className="text-stone-300">↗</span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-stone-200/70">
                <a
                  href="mailto:nrajpk@outlook.com"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex w-full items-center justify-center text-[10px] font-bold uppercase tracking-widest text-white bg-stone-900 px-5 py-3 rounded-full hover:bg-zapier transition-all shadow-lg shadow-stone-900/10 active:scale-95"
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
