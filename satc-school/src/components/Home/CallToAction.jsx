'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <section className="py-16 px-4 bg-gradient-to-br from-blue-100 via-yellow-100 to-pink-100 text-gray-800">
        <div className="max-w-3xl mx-auto text-center rounded-xl p-8 shadow-md bg-white/80 backdrop-blur-md border border-pink-200">
          <h2 className="text-3xl md:text-4xl font-bold font-quicksand text-pink-600 mb-4">
            Ready to take the next step?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Whether you're exploring options or ready to schedule a visit, we're
            here to support you.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-4 bg-pink-500 hover:bg-indigo-500 transition-colors text-white font-semibold text-lg px-6 py-3 rounded-full shadow-md"
          >
            📞 Contact Us Today
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <Image
            src="/images/important/ctabanner.webp"
            alt="The SATC-CCA Team smiling together"
            width={1600}
            height={865}
            className="rounded-xl shadow-md w-full max-w-6xl mx-auto object-cover border border-pink-200"
            priority
          />
        </div>
      </section>
    </motion.div>
  );
}
