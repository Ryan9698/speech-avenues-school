import Image from 'next/image';
import { Caveat } from 'next/font/google';

//Handwriting font for the polaroid captions
const caveat = Caveat({ subsets: ['latin'], weight: ['400'] });

export default function FramedImage({
  src,
  alt,
  caption,
  size = 300,
  className = '',
  priority = false,
  width,
  height,
  sizes = '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
  ...rest
}) {
  return (
    <div
      className="bg-white rounded-xl shadow-md border border-pink-200 p-2 mx-auto"
      style={{ maxWidth: `${width || size}px` }}
    >
      <Image
        src={src}
        alt={alt}
        caption={caption}
        width={width || size}
        height={width || size}
        priority={priority}
        sizes={sizes}
        className={className}
      />
      {caption && (
        <p
          className={`${caveat.className} text-center text-sm italic mt-2 text-gray-600`}
        >
          {caption}
        </p>
      )}
    </div>
  );
}
