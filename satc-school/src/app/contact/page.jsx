import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
        Contact Us
      </h1>

      <div className="space-y-6 text-lg">
        <p>
          For more information, feel free to reach out to us through any of the
          methods below. We are here to help and answer any questions you may
          have.
        </p>

        <div>
          <h2 className="text-2xl font-semibold text-green-800 mb-2">Phone</h2>
          <p>
            <Link
              href="tel:3213382419"
              className="text-blue-700 hover:underline"
            >
              (321) 338-2419
            </Link>
          </p>
          <p className="text-sm text-gray-600">FAX: (321) 806-2713</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-green-800 mb-2">Email</h2>
          <p>
            <Link
              href="mailto:admin@speechavenues.com"
              className="text-blue-700 hover:underline"
            >
              admin@speechavenues.com
            </Link>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-green-800 mb-2">
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
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-green-800 mb-2">
            Office Hours
          </h2>
          <p>
            Monday – Friday: <strong>8:15 AM – 3:15 PM</strong>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-green-800 mb-2">
            Follow Us
          </h2>
          <div className="flex gap-4 items-center text-2xl">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-600 transition-colors"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition-colors"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
