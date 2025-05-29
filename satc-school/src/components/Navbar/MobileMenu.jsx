'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const menuLinks = [
  { name: 'Home', href: '/', icon: '🏠' },
  { name: 'About', href: '/about', icon: '👋' },
  { name: 'Staff', href: '/staff', icon: '🧑‍🏫' },
  { name: 'Contact', href: '/contact', icon: '📞' },
  { name: 'FAQs', href: '/faqs', icon: '❓' },
];

const linkVariants = {
  hidden: { opacity: 0, y: 30, rotate: -3 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      delay: i * 0.08,
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  }),
};

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 z-50 relative text-gray-700"
      >
        {isOpen ? <X size={40} /> : <Menu size={40} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            className="fixed  inset-0 z-40 bg-gradient-to-br from-pink-100/90  to-blue-100/90 backdrop-blur-md"
          >
            <nav className="flex flex-col rounded-xl justify-center items-center h-full gap-6 text-xl text-gray-800">
              {menuLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={linkVariants}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 hover:scale-105 hover:text-pink-400 transition-transform duration-300"
                  >
                    <span>{link.icon}</span> {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
