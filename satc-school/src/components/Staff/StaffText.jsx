import Image from 'next/image';
import StaffCard from './StaffCard';

export default function StaffText() {
  return (
    <>
      <section className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-6 font-quicksand">
          Meet Our Team
        </h2>
        <div className="space-y-5 leading-relaxed">
          <p>
            At SATC-CCA, our team is made up of passionate educators, teacher
            aides, therapists, and directors dedicated to supporting children.
            We are committed to creating a safe, secure, inclusive, and
            nurturing environment.
          </p>

          <p>
            Our lead teachers are certified speech-language pathologists (SLPs),
            bringing a unique blend of educational and therapeutic expertise to
            our classrooms. This dual qualification allows them to seamlessly
            integrate speech and language development strategies into daily
            instruction, enhancing communication skills alongside academic
            learning.
          </p>

          <p>
            We believe that every child deserves a space where they feel safe,
            supported, and celebrated. That’s why we are committed to
            maintaining an all-inclusive, loving, respectful, kind, caring, and
            bully-free zone.{' '}
          </p>
          <p>
            <strong>
              We do not discriminate, and we do not tolerate exclusion,
              bullying, or anything that threatens the emotional or physical
              well-being of our students.
            </strong>
          </p>
        </div>
      </section>

      {/* Profiles */}
      <StaffCard
        name="Dr. Chalk"
        title="Speech-Language Pathologist"
        description="Dr. Chalk brings a decade of experience helping nonverbal learners thrive."
        imageSrc="/images/chalkavatar.webp"
        theme="blue"
        direction="left"
      />
      <StaffCard
        name="Mrs. Something"
        title="Teacher"
        description="Mrs. Something is a teacher at SATC-CCA."
        imageSrc="/images/chalkavatar.webp"
        theme="pink"
        direction="right"
      />

      <StaffCard
        name="Indigo"
        title="Teacher-Aide"
        description="Indigo is a teacher aide at SATC-CCA."
        imageSrc="/images/chalkavatar.webp"
        theme="indigo"
        direction="left"
      />
    </>
  );
}
