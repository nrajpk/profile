import { motion } from 'framer-motion';

export default function Navigation() {
  const navLinks = [
  { name: 'Expertise', href: '#expertise' },
  { name: 'The Lab', href: '#lab' },
  { name: 'Studio', href: '#studio' }, // Add this
  { name: 'Proof', href: '#proof' },
];

  return (
    <motion.header 
      initial={{ y: -100 }} 
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 bg-paper/80 backdrop-blur-md border-b border-stone-200/50"
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-8">
          <a href="#" className="font-bold text-xl tracking-tighter text-stone-900 group">
            nrajpk<span className="text-zapier group-hover:opacity-50 transition-opacity">_</span>
          </a>

          {/* Live Status Badge - The "Cool Guy" Element */}
          <div className="hidden lg:flex items-center gap-2.5 px-3 py-1.5 bg-stone-100/50 border border-stone-200/50 rounded-full">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            <span className="font-mono text-[9px] font-bold text-stone-500 uppercase tracking-tight">
              Currently: Abu Dhabi / Designing Systems
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="relative text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-zapier transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Contact Action */}
        <div className="flex items-center gap-4">
          <a 
            href="mailto:nrajpk@outlook.com" 
            className="text-[10px] font-bold uppercase tracking-widest text-white bg-stone-900 px-6 py-3 rounded-full hover:bg-zapier transition-all shadow-xl shadow-stone-900/10 active:scale-95"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.header>
  );
}