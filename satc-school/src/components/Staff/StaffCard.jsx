'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

export default function StaffCard({
  name,
  title,
  description,
  imageSrc,
  color = 'pink',
  delay = 0,
}) {
  const colorClasses = {
    pink: {
      name: 'text-pink-600',
      ring: 'ring-pink-200',
    },
    blue: {
      name: 'text-blue-600',
      ring: 'ring-blue-200',
    },
    indigo: {
      name: 'text-indigo-600',
      ring: 'ring-indigo-200',
    },
    neutral: {
      name: 'text-gray-800',
      ring: 'ring-gray-200',
    },
  };

  const selected = colorClasses[color] || colorClasses.neutral;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.5 }}
      className="flex flex-col items-center text-center"
    >
      <Image
        src={imageSrc}
        alt={name}
        width={120}
        height={120}
        className={`rounded-full ring-4 shadow-sm mb-4 ${selected.ring}`}
      />
      <h3 className={`text-xl font-bold font-nunito ${selected.name}`}>
        {name}
      </h3>
      <p className="text-sm font-medium text-gray-800">{title}</p>
      <p className="text-sm text-gray-600 mt-2 max-w-sm">{description}</p>
    </motion.div>
  );
}
