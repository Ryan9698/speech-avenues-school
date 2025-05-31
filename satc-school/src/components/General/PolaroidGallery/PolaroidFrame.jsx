'use client';
import React from 'react';
import { Caveat } from 'next/font/google';
import Image from 'next/image';

const caveat = Caveat({ subsets: ['latin'], weight: ['400'] });

export default function PolaroidFrame({
  src,
  caption,
  className = '',
  children,
  width = 200,
  height = 200,
}) {
  return (
    <div
      className={`${
        className || 'w-48 h-64'
      } bg-white p-3 rounded-md border border-gray-300 shadow-md flex flex-col items-center justify-between`}
    >
      <Image
        src={src}
        alt={caption || 'Polaroid'}
        className="w-full h-[70%] object-cover rounded-sm border border-gray-200"
        width={width}
        height={height}
      />
      {caption && (
        <p
          className={`${caveat.className} text-xl mt-2 text-gray-700 text-center`}
          style={{ height: '20%' }}
        >
          {caption}
        </p>
      )}
      {children}
    </div>
  );
}
