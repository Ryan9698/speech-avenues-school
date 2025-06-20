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
      <section className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
        <h2 className="text-3xl font-bold font-nunito text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600 text-center mb-6">
          Meet Our Team
        </h2>
        <div className="space-y-5 leading-relaxed text-sm">
          <p className="text-center">
            At SATC-CCA, our team is made up of passionate educators, teacher
            aides, therapists, and directors dedicated to supporting children.
            We are committed to creating a safe, secure, inclusive, and
            nurturing environment.
          </p>
          <div className="mx-auto w-full max-w-2xl">
            <div className="relative aspect-[16/10] w-full rounded-xl shadow-md border border-pink-200 overflow-hidden">
              <Image
                src="/images/important/staffphoto.webp"
                alt="The SATC-CCA Team smiling together"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <p className="text-center">
            Our lead teachers are certified speech-language pathologists (SLPs),
            bringing a unique blend of educational and therapeutic expertise to
            our classrooms. This dual qualification allows them to seamlessly
            integrate speech and language development strategies into daily
            instruction, enhancing communication skills alongside academic
            learning.
          </p>

          <p className="text-center">
            We believe that every child deserves a space where they feel safe,
            supported, and celebrated. That’s why we are committed to
            maintaining an all-inclusive, loving, respectful, kind, caring, and
            bully-free zone.{' '}
          </p>
          <p className="text-center">
            <strong>
              We do not discriminate, and we do not tolerate exclusion,
              bullying, or anything that threatens the emotional or physical
              well-being of our students.
            </strong>
          </p>
        </div>
      </section>

      {/* Profiles */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {staffData.map((person, index) => {
            return (
              <div key={person.id} className=" p-6">
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
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {selectedStaff?.name}
          </h2>
          <p className="text-sm text-gray-500 mb-1">{selectedStaff?.title}</p>
          <p className="text-gray-700 leading-relaxed">
            {selectedStaff?.description}
          </p>
        </Modal>
      </section>
    </>
  );
}
