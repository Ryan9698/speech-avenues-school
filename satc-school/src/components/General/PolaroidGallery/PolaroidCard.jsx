'use client';
import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import PolaroidFrame from './PolaroidFrame';

export default function PolaroidCard({ photo, onClick }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const rotation = useMemo(() => Math.floor(Math.random() * 9) - 4, []);
  const offsetX = useMemo(() => Math.floor(Math.random() * 10) - 5, []);
  const offsetY = useMemo(() => Math.floor(Math.random() * 10) - 5, []);

  if (!hasMounted) return null;
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 300 }}
      onClick={onClick}
      className="cursor-pointer hover:z-50"
      style={{
        rotate: rotation,
        transform: `translate(${offsetX}px, ${offsetY}px)`,
      }}
    >
      <PolaroidFrame src={photo.src} caption={photo.caption} />
    </motion.div>
  );
}
