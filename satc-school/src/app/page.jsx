import Image from 'next/image';
import { Mission } from '@/components';

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="relative bg-sky-400 w-full h-96">
        <p className="font-quicksand absolute top-3/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white font-geist">
          Speech Avenues Therapy Co Communication Cultivation Academy
        </p>
      </div>
      <Mission />
    </div>
  );
}
