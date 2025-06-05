import Image from 'next/image';
import { Mission } from '@/components';

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="relative flex flex-col justify-center items-center md:flex-row bg-sky-100 w-full h-auto">
        <div className="w-full md:w-1/2">
          <h1 className="my-10 font-quicksand text-3xl font-bold text-gray-700 font-geist px-10 text-center">
            Speech Avenues Therapy Co Communication Cultivation Academy
          </h1>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/images/satcschool.webp"
            alt="SATC Logo"
            height={250}
            width={500}
            className="w-full h-full object-cover px-10"
          />
        </div>
      </div>
      <Mission />
    </div>
  );
}
