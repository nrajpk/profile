import { motion } from 'framer-motion';

export default function InteractiveTerminal() {
  const logs = [
    "> initializing_growth_engine...",
    "> sync_complete: CRM_logic_aligned",
    "> attribution_signal: 98.4%_accuracy",
    "> status: scaling_with_confidence",
  ];

  return (
    <div className="bg-stone-950 p-6 rounded-2xl border border-stone-800 shadow-2xl font-mono text-[10px] md:text-xs">
      <div className="flex gap-1.5 mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-stone-800" />
        <div className="w-2.5 h-2.5 rounded-full bg-stone-800" />
        <div className="w-2.5 h-2.5 rounded-full bg-stone-800" />
      </div>
      <div className="space-y-2">
        {logs.map((log, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className={i === logs.length - 1 ? "text-zapier" : "text-stone-500"}
          >
            {log}
          </motion.p>
        ))}
        <motion.div 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-2 h-4 bg-zapier inline-block align-middle ml-1"
        />
      </div>
    </div>
  );
}