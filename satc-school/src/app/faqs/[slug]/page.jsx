import { notFound } from 'next/navigation';
import { faqs } from '@/data/faqs';

export async function generateStaticParams() {
  return faqs.map((faq) => ({ slug: faq.slug }));
}

export default function FAQDetailPage({ params }) {
  const faq = faqs.find((f) => f.slug === params.slug);

  if (!faq) return notFound();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold text-green-800 mb-4">{faq.question}</h1>
      <p className="text-gray-700 whitespace-pre-line">{faq.answer}</p>
      <div className="mt-6">
        <a href="/faqs" className="text-blue-600 hover:underline">
          ← Back to all FAQs
        </a>
      </div>
    </div>
  );
}
