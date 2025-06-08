'use client';
import React, { useState } from 'react';
import PolaroidCard from './PolaroidCard';
import PolaroidFrame from './PolaroidFrame';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PolaroidGallery({ photos = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const nextPhoto = () => {
    setActiveIndex((current) => (current + 1) % photos.length);
  };

  const prevPhoto = () => {
    setActiveIndex((current) =>
      current === 0 ? photos.length - 1 : current - 1
    );
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-8 mb-10 mx-auto ">
        {photos.map((photo, index) => (
          <PolaroidCard
            key={photo.id || index}
            photo={photo}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setActiveIndex(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="w-80 h-[26rem] sm:w-96 sm:h-[30rem] p-4 bg-white border border-gray-300 shadow-xl rounded-md relative"
            >
              <PolaroidFrame
                src={photos[activeIndex].src}
                caption={photos[activeIndex].caption}
                className="w-full h-full"
              />

              {/* Navigation Buttons */}
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevPhoto}
                className="absolute left-[-2.5rem] top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow"
              >
                <ChevronLeft />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextPhoto}
                className="absolute right-[-2.5rem] top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow"
              >
                <ChevronRight />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
