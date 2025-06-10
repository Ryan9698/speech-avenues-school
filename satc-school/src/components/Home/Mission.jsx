import Link from 'next/link';
import { getWhatSetsUsApart } from '@/data';
import {
  SlideInViewport,
  PencilAnimation,
  FramedImage,
} from '@/components/General';
import { MessageCircle } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import { colors } from './colors';
import CallToAction from './CallToAction';

export default function Mission() {
  /*
  Calls the getWhatSetsUsApart function to return a base array of unstyled content blocks.

  Each block includes:
  - title: a string
  - getContent: a function that receives a `color` object and returns JSX with color classes applied

  We then map through this unstyled array (`uncoloredItems`) and inject the matching `colors[index]`
  into both:
    1. A new `color` key for external use (e.g. for borders, headings, icons)
    2. The `content` key, by calling `getContent(color)` to generate the JSX with dynamic color classes

  Final structure for each item:
  {
    title: string,
    getContent: (color) => JSX,
    color: { border, pencil, header, strong },
    content: JSX
  }
*/

  const uncoloredItems = getWhatSetsUsApart();

  const items = uncoloredItems.map((item, index) => ({
    ...item,
    color: colors[index],
    content: item.getContent(colors[index]),
  }));

  return (
    <>
      <section className="bg-pink-50 py-12 px-4 text-gray-800">
        <div className="max-w-4xl mx-auto text-gray-800">
          <h2 className="text-3xl font-bold font-nunito text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600 text-center mb-6">
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
                <span className=" text-indigo-700">
                  Speech Avenues Therapy Co
                </span>
              </Link>{' '}
              Communication Cultivation Academy (SATC-CCA), we are dedicated to
              creating a nurturing and inclusive therapeutic learning
              environment for nonverbal and minimally verbal children with
              autism and other developmental delays.
            </p>

            <p className="mb-6">
              Our approach combines evidence-based educational strategies, a
              well-rounded curriculum, and integrated speech and occupational
              therapy. Our therapists create individualized learning experiences
              tailored to each child's unique strengths and needs.
            </p>

            <div className="mx-auto mb-6">
              <FramedImage
                src="/images/important/board.webp"
                alt="Our Therapists are certified teachers and create comprehensive learning plans for each child."
                width={250}
                height={187}
                className="rounded object-cover"
                caption="Our Therapists are certified teachers and create comprehensive learning plans for each child. (Need caption; photo can be changed to whatever is preferred)"
              />
            </div>

            <p className="text-center max-w-2xl mx-auto mb-10">
              We believe that all forms of communication count! Communication is
              the foundation of social connection, community, and independence.
              Through structured learning, sensory-friendly classrooms, and
              supportive interventions, we empower our students to thrive
              academically, socially, and emotionally.
            </p>

            <p>
              <strong>Positive Behavioral Support (PBS) </strong> is the system
              we use at SATC-CCA. PBS is a research-based approach that uses
              environmental systems to prevent or intervene in problem behaviors
              before they occur.
            </p>

            <p className="pb-10">
              At SATC-CCA, we stand firm in our belief that every child deserves
              respect, kindness, support, and the opportunity to thrive in a
              safe, welcoming community.
            </p>

            <div className="flex flex-col md:flex-row bg-white/80 backdrop-blur-sm border border-pink-200 rounded-xl shadow-md overflow-hidden">
              <div className="md:w-2/3 p-4">
                <h3 className="flex text-xl font-semibold mt-4 pb-4 text-pink-600 font-quicksand justify-center">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  PBS has three core principles:
                </h3>
                <ul className="list-disc pl-6 space-y-6 text-gray-700">
                  <li>
                    Focuses on instructional strategies rather than negative
                    consequences (unlike ABA).
                  </li>
                  <li>Supports observable and measurable behavior.</li>
                  <li>
                    Ensures interventions are respectful of the individual’s
                    life and circumstances.
                  </li>
                </ul>
              </div>
              <div className="md:w-1/3 flex justify-center items-center p-4 ">
                <div className="relative aspect-square w-full mx-auto max-w-sm my-6 mr-6">
                  <Image
                    src="/images/important/image6.webp"
                    alt="SATC-CCA"
                    fill
                    className="object-cover object-top rounded-xl border border-pink-200 mx-auto "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-indigo-50 py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 font-quicksand mb-4 drop-shadow-sm tracking-tight">
            <span className="inline-block bg-white/70 backdrop-blur-md px-6 py-2 rounded-full border border-indigo-200 shadow-sm">
              Why We Stand Out
            </span>
          </h2>
          <p className="text-center font-semibold text-lg text-gray-700 max-w-2xl mx-auto px-4 mb-6 mt-10 font-nunito leading-relaxed">
            At SATC-CCA, we go beyond traditional education by providing a
            therapy-integrated approach that meets each child where they are.
          </p>
          <p className="text-center font-bold text-3xl text-gray-700 max-w-3xl mx-auto px-4 mb-6 font-nunito leading-relaxed">
            Here's what sets us apart:
          </p>
        </div>
        <div className="max-w-4xl lg:max-w-6xl mx-auto mt-10 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* DYNAMIC COLOR CONTENT BLOCKS */}
            {/* Mapping of a combined array with the associated color groups to have a different theme for each block
            Each map creates a dedicated section block with its own id for accessibility. */}
            {items.map((item, index) => (
              <SlideInViewport key={item.title} index={index}>
                <section
                  aria-labelledby={`section-${index}`}
                  className={`flex flex-col h-full bg-white rounded-xl shadow py-8 md:p-6 border-r-4 ${item.color.border}`}
                >
                  <div className="relative flex justify-center md:justify-start mb-4 mt-2">
                    <PencilAnimation
                      index={index}
                      color={item.color.pencil}
                      className={`absolute left-7 top-1 md:static md:mr-2 ${
                        item.title === 'Family Involvement and Support'
                          ? 'left-2'
                          : ''
                      }`}
                    />
                    <h3
                      id={`section-${index}`}
                      className={`text-2xl font-bold font-quicksand text-center md:text-left px-10 md:px-0  ${item.color.header}`}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex flex-1">
                    <div className="mx-8 my-2 text-gray-700 leading-relaxed ">
                      {item.content}
                    </div>
                  </div>
                </section>
              </SlideInViewport>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}

      <CallToAction />
      {/* <section className="py-16 px-4 bg-gradient-to-br from-blue-100 via-yellow-100 to-pink-100 text-gray-800">
        <div className="max-w-3xl mx-auto text-center rounded-xl p-8 shadow-md bg-white/80 backdrop-blur-md border border-pink-200">
          <h2 className="text-3xl md:text-4xl font-bold font-quicksand text-pink-600 mb-4">
            Ready to take the next step?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Whether you're exploring options or ready to schedule a visit, we're
            here to support you.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-4 bg-pink-500 hover:bg-indigo-500 transition-colors text-white font-semibold text-lg px-6 py-3 rounded-full shadow-md"
          >
            📞 Contact Us Today
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <Image
            src="/images/important/ctabanner.webp" // or wherever your final export is
            alt="The SATC-CCA Team smiling together"
            width={1600}
            height={1034} // or your scaled height
            className="rounded-xl shadow-md w-full max-w-6xl mx-auto object-cover border border-pink-200"
            priority
          />
        </div>
      </section> */}
    </>
  );
}
