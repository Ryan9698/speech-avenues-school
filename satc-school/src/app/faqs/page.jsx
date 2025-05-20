import Link from 'next/link';
import { faqs } from '@/data/faqs';

export default function FAQListPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-green-700">
        Frequently Asked Questions
      </h1>
      <ul className="space-y-4">
        {faqs.map((faq) => (
          <li key={faq.slug}>
            <Link
              href={`/faqs/${faq.slug}`}
              className="text-lg text-blue-700 hover:underline"
            >
              {faq.question}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
