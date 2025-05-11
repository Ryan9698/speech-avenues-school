import Link from 'next/link';
import Image from 'next/image';

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
    // Used grid layout for more control over responsiveness
    <div className="p-2 w-full grid grid-cols-6 h-20">
      <div className="col-span-2 h-full">
        <Image
          src="/images/navlogo2.webp"
          alt="satclogo"
          width={100}
          height={75}
        />
      </div>
      <div className="text-2xl font-bold text-gray-950 font-geist col-span-4">
        <ul className="flex gap-20 justify-start items-center h-full">
          {navLinks.map(({ name, href }, index) => {
            return (
              <li key={index}>
                <Link href={href}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
