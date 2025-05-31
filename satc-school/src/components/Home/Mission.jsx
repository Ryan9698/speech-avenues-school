import Link from 'next/link';
import { getWhatSetsUsApart } from '@/data';
import { SlideInViewport, PencilAnimation } from '@/components/General';
import { MessageCircle } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import { PolaroidFrame } from '@/components/General/PolaroidGallery';

export default function Mission() {
  // Object for animated info card map
  const colors = [
    {
      border: 'border-blue-300',
      pencil: 'text-blue-400',
      header: 'text-blue-700',
      strong: 'text-blue-600',
    },
    {
      border: 'border-green-300',
      pencil: 'text-green-400',
      header: 'text-green-700',
      strong: 'text-green-600',
    },
    {
      border: 'border-purple-300',
      pencil: 'text-purple-400',
      header: 'text-purple-700',
      strong: 'text-purple-600',
    },
    {
      border: 'border-pink-300',
      pencil: 'text-pink-400',
      header: 'text-pink-700',
      strong: 'text-pink-600',
    },
    {
      border: 'border-blue-300',
      pencil: 'text-blue-400',
      header: 'text-blue-700',
      strong: 'text-blue-600',
    },
    {
      border: 'border-green-300',
      pencil: 'text-green-400',
      header: 'text-green-700',
      strong: 'text-green-600',
    },
  ];

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

            {/* <PolaroidFrame
              src="/images/IMG_0420.jpeg"
              caption="SATC-CCA"
              width="500"
              height="500"
            /> */}
            <div className="flex flex-col md:flex-row w-full">
              <div className="flex flex-col md:w-1/2 space-y-4">
                <p className="">
                  Our approach combines evidence-based educational strategies, a
                  well-rounded curriculum, and integrated speech and
                  occupational therapy. Our therapists create individualized
                  learning experiences tailored to each child's unique strengths
                  and needs.
                </p>
                <p>
                  We believe that all forms of communication count!
                  Communication is the foundation of social connection,
                  community, and independence. Through structured learning,
                  sensory-friendly classrooms, and supportive interventions, we
                  empower our students to thrive academically, socially, and
                  emotionally.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/images/IMG_0420.jpeg"
                  alt="SATC-CCA"
                  width={300}
                  height={250}
                  className="object-fill rounded-xl border border-pink-200"
                />
              </div>
            </div>

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

            <div className="flex flex-col md:flex-row bg-white/80 backdrop-blur-sm border border-pink-200 rounded-xl shadow-md">
              <div className="flex flex-col items-center p-4">
                <h3 className="flex text-xl font-semibold mt-4 pb-4 text-pink-600 font-quicksand">
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
              <div className="flex-1 flex justify-center items-center ">
                <Image
                  src="/images/IMG_0419.jpeg"
                  alt="SATC-CCA"
                  width={200}
                  height={200}
                  className="object-cover rounded-xl border m-4 border-pink-200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-indigo-50 py-10">
        <h3 className="text-4xl font-bold p-8 text-indigo-700 text-center  font-quicksand">
          Why We Stand Out:
        </h3>
        <p className="text-center font-bold text-lg text-gray-700 max-w-3xl mx-auto px-4 mb-6 font-nunito">
          At SATC-CCA, we go beyond traditional education by providing a
          therapy-integrated approach that meets each child where they are.
          Here's what sets us apart:
        </p>
        <div className="max-w-4xl lg:max-w-6xl mx-auto mt-10 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {colors.map((color, index) => {
              const item = getWhatSetsUsApart(color)[index];
              return (
                <SlideInViewport key={item.title} index={index}>
                  <div
                    className={`flex flex-col h-full bg-white rounded-xl shadow p-6 border-r-4 
        ${color.border}`}
                  >
                    <div className="flex items-center gap-3">
                      <PencilAnimation index={index} color={color.pencil} />
                      <h3
                        className={`text-2xl font-bold font-quicksand ${color.header}`}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <div className="mx-8 mt-2 text-gray-700 leading-relaxed">
                      {item.content}
                    </div>
                  </div>
                </SlideInViewport>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-blue-100 via-yellow-100 to-pink-100 text-gray-800">
        <div className="max-w-3xl mx-auto text-center rounded-xl p-8 shadow-md bg-white/80 backdrop-blur-md border border-pink-200">
          <h3 className="text-3xl md:text-4xl font-bold font-quicksand text-pink-600 mb-4">
            Ready to take the next step?
          </h3>
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
    </>
  );
}
