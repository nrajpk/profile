import React from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({ href = '#contact', children = 'Start a Conversation', variant = 'primary' }) {
  const className = variant === 'secondary' ? 'btn btn-secondary' : 'btn btn-primary';

  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}
