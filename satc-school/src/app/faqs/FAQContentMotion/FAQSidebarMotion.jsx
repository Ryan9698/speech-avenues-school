'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FAQSidebarMotion({ faqs, activeSlug }) {
  return (
    <motion.aside
      className="md:col-span-1 border-l pl-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-semibold font-nunito mb-3 text-pink-700">
        All Questions
      </h2>
      <nav aria-label="FAQ Sidebar">
        <ul className="space-y-3">
          {faqs.map((item) => (
            <motion.li
              key={item.slug}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link
                href={`/faqs/${item.slug}`}
                className={`text-sm block font-nunito rounded px-2 py-1 transition-all duration-200 ${
                  item.slug === activeSlug
                    ? 'bg-pink-100 text-pink-700 font-bold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.question}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.aside>
  );
}
