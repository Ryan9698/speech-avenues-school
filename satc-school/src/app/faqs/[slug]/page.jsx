import { notFound } from 'next/navigation';
import Link from 'next/link';
import { faqs } from '@/data/faqs';

export async function generateStaticParams() {
  const { faqs } = await import('@/data/faqs');
  return faqs.map((faq) => ({
    slug: faq.slug,
  }));
}

export default function FAQDetailPage({ params }) {
  const faq = faqs.find((f) => f.slug === params.slug);

  if (!faq) return notFound();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Main FAQ answer */}
      <div className="md:col-span-3">
        <h1 className="text-2xl font-bold text-green-800 mb-4">
          {faq.question}
        </h1>
        <p className="text-gray-700 whitespace-pre-line mb-6">{faq.answer}</p>
        <Link href="/faqs" className="text-blue-600 hover:underline">
          ← Back to all FAQs
        </Link>
      </div>

      {/* Sidebar: all FAQ links */}
      <aside className="md:col-span-1 border-l pl-4">
        <h2 className="text-lg font-semibold mb-3 text-green-700">
          All Questions
        </h2>
        <nav aria-label="FAQ Sidebar">
          <ul className="space-y-3">
            {faqs.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/faqs/${item.slug}`}
                  className={`text-sm block hover:underline ${
                    item.slug === params.slug
                      ? 'text-green-800 font-bold'
                      : 'text-gray-700'
                  }`}
                >
                  {item.question}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
