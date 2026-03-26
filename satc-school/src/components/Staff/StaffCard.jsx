'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { colorClasses } from '@/data';

export default function StaffCard({
  name,
  title,
  shortDescription,
  description,
  imageSrc,
  color = 'pink',
  delay = 0,
  index = 0,
  onClick, // for modal on desktop
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const selected = colorClasses[color] || colorClasses.neutral;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * delay }}
      className="w-full max-w-lg p-6 rounded-xl text-center flex flex-col items-center h-full"
    >
      <Image
        src={imageSrc}
        alt={`Portrait of ${name}, ${title}`}
        width={120}
        height={120}
        className={`rounded-full ring-4 shadow-sm mb-4 ${selected.ring}`}
      />
      <h3 className={`text-xl font-bold font-nunito ${selected.name}`}>
        {name}
      </h3>
      <p className="text-sm font-medium text-gray-800">{title}</p>

      {/* Short description */}
      <p
        className={`text-sm text-gray-600 mt-2 ${
          isExpanded ? '' : 'line-clamp-3'
        } md:line-clamp-3`}
      >
        {shortDescription}
      </p>

      {/* Mobile: Expand/collapse */}
      <div className="block md:hidden mt-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-pink-600 text-sm underline"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>

        {isExpanded && (
          <div className="text-gray-700 text-sm mt-3 space-y-2">
            {description()}
          </div>
        )}
      </div>

      {/* Desktop: Open modal */}
      <div className="hidden md:block mt-3">
        <button
          onClick={onClick}
          className="text-pink-600 text-sm underline"
          aria-label={`Read full bio of ${name}`}
        >
          Read Full Bio
        </button>
      </div>
    </motion.article>
  );
}
