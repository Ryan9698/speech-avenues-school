// components/FAQContentMotion.jsx
'use client';
import { motion } from 'framer-motion';

export default function FAQContentMotion({ faq }) {
  return (
    <motion.div
      className="md:col-span-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl font-bold font-nunito text-pink-700 mb-4">
        {faq.question}
      </h1>
      <p className="text-gray-700 whitespace-pre-line mb-6">{faq.answer}</p>
      <a href="/faqs" className="text-blue-600 hover:underline">
        ← Back to all FAQs
      </a>
    </motion.div>
  );
}
