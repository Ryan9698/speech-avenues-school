'use client';
import { motion } from 'framer-motion';

export default function SlideInViewport({
  children,
  title,
  index = 0,
  delay = 0,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: delay || index * 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
