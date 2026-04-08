'use client';
import React from 'react';
import { motion } from 'framer-motion';
import PolaroidFrame from './PolaroidFrame';
import { getThumbnailUrl } from '@/data/cloudinary';

const transforms = [
  { rotate: -4, x: -4, y: 2 },
  { rotate: 3, x: 5, y: -3 },
  { rotate: -2, x: 2, y: 4 },
  { rotate: 4, x: -3, y: -2 },
  { rotate: -1, x: 4, y: 1 },
];

export default function PolaroidCard({ photo, onClick, index }) {
  const t = transforms[index % transforms.length];

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 300 }}
      onClick={onClick}
      className="cursor-pointer hover:z-50"
      style={{
        rotate: t.rotate,
        transform: `translate(${t.x}px, ${t.y}px)`,
      }}
    >
      <PolaroidFrame
        src={getThumbnailUrl(photo.publicId)}
        caption={photo.caption}
        alt={photo.alt || 'Gallery image'}
      />
    </motion.div>
  );
}
