import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Staff', href: '/staff' },
  { name: 'Contact', href: '/contact' },
  { name: 'Resources', href: '/resources' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Calendar', href: '/calendar' },
  { name: 'Gallery', href: '/gallery' },
];

export default function Navbar() {
  return (
    <header className="w-full bg-pink-100 text-gray-800 shadow-sm border-b border-pink-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/navlogo2.webp"
            alt="SATC Logo"
            width={60}
            height={60}
            className="rounded-md"
          />
          <span className="text-xl font-bold font-geist text-pink-600">
            Speech Avenues
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-base font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-pink-500 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
