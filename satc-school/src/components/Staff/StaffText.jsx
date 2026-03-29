'use client';
import Image from 'next/image';
import StaffCard from './StaffCard';
import { useState } from 'react';
import { staffData } from '@/data';
import { Modal } from '@/components/General';

// Staff members: Gail, Erica, Bryan, Ashley, Selina

export default function StaffText() {
  const [selectedStaff, setSelectedStaff] = useState(null);
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-16 text-gray-800 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold font-nunito text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600 sm:text-4xl">
            Meet Our Team
          </h2>

          <div className="space-y-5 text-base leading-8">
            <p>
              At SATC-CCA, our team is made up of passionate educators, teacher
              aides, therapists, and directors dedicated to supporting children.
              We are committed to creating a safe, secure, inclusive, and
              nurturing environment.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 w-full max-w-5xl">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-pink-200 shadow-md">
            <Image
              src="/images/important/staffphoto.webp"
              alt="The SATC-CCA Team smiling together"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <div className="space-y-5 text-base leading-8">
            <p>
              Our lead teachers are certified speech-language pathologists
              (SLPs), bringing a unique blend of educational and therapeutic
              expertise to our classrooms. This dual qualification allows them
              to seamlessly integrate speech and language development strategies
              into daily instruction, enhancing communication skills alongside
              academic learning.
            </p>

            <p>
              We believe that every child deserves a space where they feel safe,
              supported, and celebrated. That's why we are committed to
              maintaining an all-inclusive, loving, respectful, kind, caring,
              and bully-free zone.
            </p>

            <p>
              <strong>
                We do not discriminate, and we do not tolerate exclusion,
                bullying, or anything that threatens the emotional or physical
                well-being of our students.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Profiles */}
      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {staffData.map((person, index) => {
            return (
              <div key={person.id}>
                <StaffCard
                  {...person}
                  index={index}
                  onClick={() => setSelectedStaff(person)}
                />
              </div>
            );
          })}
        </div>

        <Modal isOpen={!!selectedStaff} onClose={() => setSelectedStaff(null)}>
          <h2 className="mb-2 text-2xl font-bold text-gray-800">
            {selectedStaff?.name}
          </h2>
          <p className="mb-1 text-sm text-gray-500">{selectedStaff?.title}</p>
          {selectedStaff?.description()}
        </Modal>
      </section>
    </>
  );
}
