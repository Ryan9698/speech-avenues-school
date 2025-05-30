import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'Staff', href: '/staff' },
  { name: 'Contact', href: '/contact' },
  { name: 'Resources', href: '/resources' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Calendar', href: '/calendar' },
  { name: 'Gallery', href: '/gallery' },
];

export default function Footer() {
  return (
    <footer className="bg-pink-100 text-gray-700 border-t border-pink-200">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-sm">
        {/* Logo + tagline */}
        <div>
          <h2 className="text-lg font-bold mb-2 text-pink-500">
            Speech Avenues
          </h2>
          <p className="text-gray-600">
            Empowering communication through compassion, creativity, and care.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-pink-400 mb-3">Quick Links</h3>
          <ul className="space-y-1">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-pink-500 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-pink-400 mb-3">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Phone size={16} />{' '}
              <Link href="tel:3213382419" className="hover:underline">
                (321) 338-2419
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />{' '}
              <Link
                href="mailto:admin@speechavenues.com"
                className=" hover:underline"
              >
                admin@speechavenues.com
              </Link>
            </li>
            <li>
              <Link
                href="https://www.google.com/maps?q=107+Longwood+Avenue,+Rockledge,+FL+32955"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                107 Longwood Avenue, Rockledge, FL 32955
              </Link>
            </li>
            <li>Mon – Fri: 8am – 3pm</li>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center text-xs text-gray-400 py-4 border-t border-pink-200">
        © {new Date().getFullYear()} Speech Avenues. All rights reserved.
      </div>
    </footer>
  );
}
