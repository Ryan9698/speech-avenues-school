import Link from 'next/link';

const navLinks = [
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
];
export default function Navbar() {
  return (
    <div className="bg-gradient-to-bl from-green-400 to-green-600 p-2 w-full">
      <div className="text-xl font-bold text-white font-geist">
        <ul className="flex items-center justify-around">
          {navLinks.map(({ name, href }, index) => {
            return (
              <div key={index}>
                <Link href={href}>
                  <li>{name}</li>
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
