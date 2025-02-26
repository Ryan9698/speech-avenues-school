import Link from "next/link";
export default function Navbar() {
  return (
    <div className="bg-green-600 h-24 w-full">
      <div className="text-2xl font-bold text-white">
        <ul className="flex justify-around p-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
