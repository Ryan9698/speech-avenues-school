import Link from 'next/link';
import { whatSetsUsApart } from '@/data/whatSetsUsApart';

export default function Mission() {
  return (
    <>
      <section className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-950 text-center mb-6">
          Our Mission & Approach
        </h2>
        <div className="space-y-5 leading-relaxed">
          <p>
            At{' '}
            <Link
              href="https://speechavenues.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className=" text-indigo-500">
                Speech Avenues Therapy Co
              </span>
            </Link>{' '}
            Communication Cultivation Academy (SATC-CCA), we are dedicated to
            creating a nurturing and inclusive therapeutic learning environment
            for nonverbal and minimally verbal children with autism and other
            developmental delays.
          </p>

          <p>
            Our approach combines evidence-based educational strategies, a
            well-rounded curriculum, and integrated speech and occupational
            therapy. Our therapists create individualized learning experiences
            tailored to each child's unique strengths and needs.
          </p>

          <p>
            We believe that all forms of communication count! Communication is
            the foundation of social connection, community, and independence.
            Through structured learning, sensory-friendly classrooms, and
            supportive interventions, we empower our students to thrive
            academically, socially, and emotionally.
          </p>

          <p>
            <strong>Positive Behavioral Support (PBS) </strong> is the system we
            use at SATC-CCA. PBS is a research-based approach that uses
            environmental systems to prevent or intervene in problem behaviors
            before they occur.
          </p>

          <p>
            At SATC-CCA, we stand firm in our belief that every child deserves
            respect, kindness, support, and the opportunity to thrive in a safe,
            welcoming community.
          </p>
          <div className="flex flex-col md:flex-row bg-pink-300 rounded-lg p-4">
            <div className="flex flex-col items-center flex-1">
              <h3 className="text-xl font-semibold mt-6 mb-4 ">
                PBS has three core principles:
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Focuses on instructional strategies rather than negative
                  consequences (unlike ABA).
                </li>
                <li>Supports observable and measurable behavior.</li>
                <li>
                  Ensures interventions are respectful of the individual’s life
                  and circumstances.
                </li>
              </ul>
            </div>
            {/* Image Container #1 */}
            <div className=" bg-green-400 rounded-lg h-64 w-64 m-4" />
          </div>
          <h3 className="text-4xl font-bold mt-10 text-green-700 text-center">
            Why We Stand Out:
          </h3>
        </div>
      </section>
      <section>
        <p>
          At SATC-CCA, we go beyond traditional education by providing a
          therapy-integrated approach that meets each child where they are.
          Here's what sets us apart:
        </p>
        <div className="max-w-4xl mx-auto">
          {whatSetsUsApart.map((item, index) => (
            <div key={index} className="p-2 space-y-4">
              <h3 className="text-2xl font-bold mt-6 mb-4 text-green-700">
                {item.title}
              </h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
