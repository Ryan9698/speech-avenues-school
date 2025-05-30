'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

export default function StaffCard({
  name,
  title,
  description,
  imageSrc,
  theme = 'pink',
  direction = 'left',
}) {
  const colors = {
    pink: {
      name: 'text-pink-600',
      border: 'border-pink-200',
      bg: 'bg-pink-50',
    },
    blue: {
      name: 'text-blue-600',
      border: 'border-blue-200',
      bg: 'bg-blue-50',
    },
    indigo: {
      name: 'text-indigo-600',
      border: 'border-indigo-200',
      bg: 'bg-indigo-50',
    },
  };

  const selected = colors[theme] || colors.pink;

  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col md:flex-row max-w-4xl mx-auto gap-4 p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.015] ${selected.bg} border ${selected.border}`}
    >
      <Image
        src={imageSrc}
        alt={name}
        width={150}
        height={150}
        className="rounded-full mx-auto md:mx-0"
      />
      <div className="flex flex-col justify-center w-full">
        <h3 className={`text-xl font-bold font-nunito ${selected.name}`}>
          {name}
        </h3>
        <h4 className="text-lg font-semibold text-gray-800 font-nunito">
          {title}
        </h4>
        <p className="text-sm text-gray-700 mt-2">{description}</p>
      </div>
    </motion.div>
  );
}
