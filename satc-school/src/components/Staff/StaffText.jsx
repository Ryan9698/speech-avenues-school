import Image from 'next/image';

export default function StaffText() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        Meet Our Team
      </h2>
      <div className="space-y-5 leading-relaxed">
        <p>
          At SATC-CCA, our team is made up of passionate educators, teacher
          aides, therapists, and directors dedicated to supporting children. We
          are committed to creating a safe, secure, inclusive, and nurturing
          environment.
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
          supported, and celebrated. That’s why we are committed to maintaining
          an all-inclusive, loving, respectful, kind, caring, and bully-free
          zone.{' '}
        </p>
        <p>
          <strong>
            We do not discriminate, and we do not tolerate exclusion, bullying,
            or anything that threatens the emotional or physical well-being of
            our students.
          </strong>
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-3 mt-10">
        <div className="space-y-4">
          <Image
            src="/images/chalkavatar.webp"
            alt="staff"
            width={300}
            height={400}
            className="rounded-full mx-auto"
          />
          <p className="text-center bg-green-300">
            <strong>Dr. Chalk</strong>
          </p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            officiis atque deleniti quae laborum amet odio rem voluptates
            nostrum vitae odit, laudantium debitis nulla soluta labore maiores
            cupiditate accusamus ipsa?
          </p>
        </div>
        <div className="space-y-4 border border-gray-200 rounded-xl">
          <Image
            src="/images/chalkavatar.webp"
            alt="staff"
            width={300}
            height={400}
            className="rounded-full p-2 mx-auto"
          />
          <p className="text-center bg-sky-400 font-bold">Dr. Something</p>
          <p className="text-sm p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            blanditiis, eveniet incidunt debitis placeat illo qui! Rerum
            distinctio iusto voluptate molestias voluptatibus deleniti maxime
            quos dolore, corporis eos doloremque saepe.
          </p>
        </div>
        <div className="space-y-4 border bg-gradient-to-tl from-sky-300 to-sky-100 border-sky-200 rounded-xl">
          <Image
            src="/images/chalkavatar.webp"
            alt="staff"
            width={300}
            height={400}
            className="rounded-full p-2 mx-auto"
          />
          <p className="text-center bg-sky-400 font-bold">Dr. Something</p>
          <p className="text-sm p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            blanditiis, eveniet incidunt debitis placeat illo qui! Rerum
            distinctio iusto voluptate molestias voluptatibus deleniti maxime
            quos dolore, corporis eos doloremque saepe.
          </p>
        </div>
        <Image
          src="/images/chalkavatar.webp"
          alt="staff"
          width={300}
          height={400}
          className="rounded-full"
        />
      </div>
    </section>
  );
}
