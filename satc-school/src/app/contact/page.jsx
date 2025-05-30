'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { ContactMotion } from '@/components/General';

export default function ContactPage() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-white py-20">
      <ContactMotion className="max-w-4xl mx-auto px-6 py-12 text-gray-800 bg-white/80 backdrop-blur rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold font-nunito text-center text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600 mb-10">
          Contact Us
        </h1>

        <div className="space-y-10 text-lg">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            For more information, feel free to reach out to us through any of
            the methods below. We are here to help and answer any questions you
            may have.
          </motion.p>

          {/* PHONE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="flex items-center text-2xl font-semibold font-nunito text-pink-600 mb-2">
              <Phone className="w-5 h-5 mr-2 text-pink-500" />
              Phone
            </h2>
            <p>
              <Link
                href="tel:3213382419"
                className="text-blue-700 hover:underline"
              >
                (321) 338-2419
              </Link>
            </p>
            <p className="text-sm text-gray-600">FAX: (321) 806-2713</p>
          </motion.div>

          {/* EMAIL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="flex items-center text-2xl font-semibold font-nunito text-pink-600 mb-2">
              <Mail className="w-5 h-5 mr-2 text-pink-500" />
              Email
            </h2>
            <p>
              <Link
                href="mailto:admin@speechavenues.com"
                className="text-blue-700 hover:underline"
              >
                admin@speechavenues.com
              </Link>
            </p>
          </motion.div>

          {/* ADDRESS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="flex items-center text-2xl font-semibold font-nunito text-pink-600 mb-2">
              <MapPin className="w-5 h-5 mr-2 text-pink-500" />
              Visit Us
            </h2>
            <p>
              <Link
                href="https://www.google.com/maps?q=107+Longwood+Avenue,+Rockledge,+FL+32955"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                107 Longwood Avenue, Rockledge, FL 32955
              </Link>
            </p>
          </motion.div>

          {/* HOURS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="flex items-center text-2xl font-semibold font-nunito text-pink-600 mb-2">
              <Clock className="w-5 h-5 mr-2 text-pink-500" />
              Office Hours
            </h2>
            <p className="text-gray-700 text-lg">
              Monday – Friday: <strong>8:15 AM – 3:15 PM</strong>
            </p>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold font-nunito text-pink-600 mb-2">
              Follow Us
            </h2>
            <div className="flex gap-4 items-center text-2xl">
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-all"
              >
                <FaFacebook className="text-blue-600" />
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-3 bg-pink-100 rounded-full hover:bg-pink-200 transition-all"
              >
                <FaInstagram className="text-pink-500" />
              </Link>
            </div>
          </motion.div>
        </div>
      </ContactMotion>
    </section>
  );
}
