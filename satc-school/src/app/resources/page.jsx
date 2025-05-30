'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpenCheck } from 'lucide-react';

export default function Contact() {
  return (
    <section className="bg-indigo-50 px-6 py-12 text-gray-800 h-full">
      <div className="max-w-4xl mx-auto">
        <h1 className="flex items-center justify-center text-4xl font-bold font-nunito text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600 text-center mb-8">
          <BookOpenCheck className="w-8 h-8 text-pink-400 mr-4" />
          Resources for Families
        </h1>

        <p className="text-lg mb-6 leading-relaxed">
          We understand that raising a child with autism is a unique experience,
          and we are here to support you every step of the way. Below you'll
          find a curated list of helpful resources including scholarships,
          parent support groups, educational workshops, therapy referrals,
          advocacy for IEP meetings, and more.
        </p>

        <div className="space-y-5 mb-10">
          <motion.ul
            className="list-disc list-inside space-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <li>
              <Link
                href="https://speechavenues.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                Speech Avenues Therapy Co
              </Link>
            </li>
            <li>
              <Link
                href="https://www.stepupforstudents.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                Step Up for Students Scholarship Program
              </Link>
            </li>
            <li>
              <Link
                href="https://www.brevardschools.org/page/child-find"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                Brevard County Child Find Services
              </Link>
            </li>
            <li>
              <Link
                href="https://www.autismspeaks.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                Autism Speaks
              </Link>
            </li>
            <li>
              <Link
                href="http://www.soakautism.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                SOAK (Supporting Our ASD Kids)
              </Link>
            </li>
            <li>
              <Link
                href="http://centerforautism.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                Center for Autism and Related Disorders (CARD)
              </Link>
            </li>
            <li>
              <Link
                href="https://www.behaviorcounts.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                Behavior Counts – ABA Services
              </Link>
            </li>
          </motion.ul>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-600 italic font-bold">
        We're here to help. If you have any further questions or need
        assistance, please don't hesitate to{' '}
        <Link href="/contact" className="text-pink-600 hover:underline">
          reach out to us
        </Link>
        .
      </div>
    </section>
  );
}
