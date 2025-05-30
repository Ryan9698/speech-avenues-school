'use client';
import Link from 'next/link';
import { faqs } from '@/data/faqs';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

export default function FAQListPage() {
  return (
    <section className="bg-indigo-50/60 min-h-screen px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="flex items-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-8 font-nunito">
          <HelpCircle className="w-6 h-6 mr-2 text-pink-500" />
          Frequently Asked Questions
        </h1>
        <motion.ul
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {faqs.map((faq) => (
            <motion.li
              key={faq.slug}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                href={`/faqs/${faq.slug}`}
                className="block text-lg font-nunito text-gray-800 hover:text-pink-600 hover:underline transition-colors"
              >
                {faq.question}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
