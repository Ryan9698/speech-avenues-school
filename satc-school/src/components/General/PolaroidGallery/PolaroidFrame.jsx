'use client';
import React from 'react';
import { Caveat } from 'next/font/google';
import Image from 'next/image';

const caveat = Caveat({ subsets: ['latin'], weight: ['400'] });

export default function PolaroidFrame({
  src,
  alt = 'Gallery image',
  caption,
  className = '',
}) {
  return (
    <div
      className={`${
        className || 'w-48 h-64'
      } bg-white p-3 rounded-md border border-gray-300 shadow-md flex flex-col`}
    >
      <div className="relative w-full flex-1 overflow-hidden rounded-sm border border-gray-200">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 45vw, 200px"
        />
      </div>

      {caption ? (
        <p
          className={`${caveat.className} text-xl mt-2 text-gray-700 text-center min-h-8`}
        >
          {caption}
        </p>
      ) : (
        <div className="min-h-8 mt-2" />
      )}
    </div>
  );
}
