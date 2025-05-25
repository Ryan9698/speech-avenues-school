import Link from 'next/link';

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
        Resources for Families
      </h1>

      <p className="text-lg mb-6 leading-relaxed">
        We understand that raising a child with autism is a unique experience,
        and we are here to support you every step of the way. Below you'll find
        a curated list of helpful resources including scholarships, parent
        support groups, educational workshops, therapy referrals, advocacy for
        IEP meetings, and more.
      </p>

      <div className="space-y-5 mb-10">
        <ul className="list-disc list-inside space-y-2">
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
        </ul>
      </div>

      <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-md shadow-sm">
        <h2 className="text-2xl font-semibold text-green-800 mb-2">
          School Hours
        </h2>
        <p className="text-gray-700 text-lg">
          Monday – Friday: <strong>8:15 AM – 3:15 PM</strong>
        </p>
      </div>
    </section>
  );
}
