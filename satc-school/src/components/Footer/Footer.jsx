import Link from 'next/link';

const footerLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
  {
    name: 'Staff',
    href: '/staff',
  },
  {
    name: 'FAQs',
    href: '/faqs',
  },
];
export default function Footer() {
  return (
    <div>
      <div className="bg-green-600 h-24 w-full flex justify-center item-center gap-24">
        {footerLinks.map(({ name, href }, index) => {
          return (
            <Link key={index} href={href}>
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
