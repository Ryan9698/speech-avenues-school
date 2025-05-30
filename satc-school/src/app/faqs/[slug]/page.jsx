import { notFound } from 'next/navigation';
import Link from 'next/link';
import { HelpCircle } from 'lucide-react';
import { faqs } from '@/data/faqs';
import FAQContentMotion from '../FAQContentMotion/FAQContentMotion';
import FAQSidebarMotion from '../FAQContentMotion/FAQSidebarMotion';

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
    <section className="bg-indigo-50 px-4 py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Main FAQ answer */}
        <FAQContentMotion faq={faq} />

        {/* Sidebar: all FAQ links */}
        <FAQSidebarMotion faqs={faqs} activeSlug={params.slug} />
        {/* <aside className="md:col-span-1 border-l pl-4">
          <h2 className="text-lg font-semibold font-nunito mb-3 text-pink-700">
            All Questions
          </h2>
          <nav aria-label="FAQ Sidebar">
            <ul className="space-y-3">
              {faqs.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/faqs/${item.slug}`}
                    className={`text-sm block hover:underline font-nunito transition-colors duration-200 ${
                      item.slug === params.slug
                        ? 'text-pink-600 font-bold'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.question}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside> */}
      </div>
    </section>
  );
}
