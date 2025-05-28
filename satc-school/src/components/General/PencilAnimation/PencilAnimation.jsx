'use client';
import { motion } from 'framer-motion';
import { FaPencilAlt } from 'react-icons/fa';

export default function PencilAnimation({
  index = 0,
  className = '',
  color = 'text-yellow-600',
}) {
  return (
    <motion.div
      initial={{ rotate: 45, opacity: 0 }}
      whileInView={{ rotate: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, delay: index * 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <FaPencilAlt className={`${color} text-xl rotate-270 ${className}`} />
    </motion.div>
  );
}
