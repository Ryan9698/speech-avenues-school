'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { colorClasses } from '@/data';

export default function StaffCard({
  name,
  title,
  description,
  imageSrc,
  color = 'pink',
  delay = 0,
  index = 0,
  onClick,
}) {
  const selected = colorClasses[color] || colorClasses.neutral;

  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * delay }}
      className="w-full max-w-lg p-6 rounded-xl text-center flex flex-col items-center h-full"
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
