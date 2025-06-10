import { AccentText } from '@/components/General';
import { FramedImage } from '@/components/General';
import Link from 'next/link';

export function getWhatSetsUsApart() {
  return [
    {
      title: 'Comprehensive Curriculum',
      getContent: (color) => (
        <div className="relative flex flex-col md:block space-y-4">
          <div className="order-2 md:order-none md:float-right md:w-[180px] md:ml-4 md:mb-2 mb-4 w-full mt-4 md:mt-0">
            <FramedImage
              src="/images/important/curriculum.webp"
              alt="Picture of an assignment at the school"
              caption="Caption 1"
            />
          </div>
          <p className="order-1 md:order-none">
            {' '}
            Our curriculum includes{' '}
            <AccentText colorClass={color.strong}>
              math, writing/vocab, science, reading, social studies, art, and
              vocational training
            </AccentText>
            , ensuring a well-rounded educational experience that caters to
            academic growth and functional life skills.
          </p>
        </div>
      ),
    },
    {
      title: 'Positive Behavior Approach',
      getContent: (color) => (
        <div className="relative flex flex-col md:block space-y-4">
          <div className="order-2 md:order-none md:float-right md:w-[180px] md:ml-4 md:mb-2 mb-4 w-full mt-4 md:mt-0">
            <FramedImage
              src="/images/important/image7.webp"
              alt="Child with headphones using beads"
              caption="Caption 2"
              className=""
            />
          </div>
          <p className="order-1 md:order-none">
            <AccentText colorClass={color.strong}>PBS</AccentText> is a
            research-based approach that uses systems to intervene in problem
            behaviors to{' '}
            <AccentText colorClass={color.strong}>
              alter or prevent the behavior by changing the environment
            </AccentText>
            .
          </p>
        </div>
      ),
    },
    {
      title: 'Therapy Integration',
      getContent: (color) => (
        <div className="relative flex flex-col md:block space-y-4">
          <div className="order-2 md:order-none md:float-right md:w-[180px] md:ml-4 md:mb-2 mb-4 w-full">
            <FramedImage
              src="/images/important/aac.webp"
              alt="Therapist working with student using an AAC device"
              caption="AAC devices allow easy communication with nonverbal learners (Caption 3)"
            />
          </div>
          <p className="order-1 md:order-none">
            For our nonverbal learners, we utilize curriculum materials
            specifically designed for{' '}
            <AccentText colorClass={color.strong}>
              AAC (Augmentative and Alternative Communication)
            </AccentText>{' '}
            users. AAC devices are an integral part of our classroom environment
            and are incorporated throughout the day across{' '}
            <AccentText colorClass={color.strong}>
              academic, social, and functional activities
            </AccentText>
            .
          </p>
          {/* Paragraph and photo break */}

          <p className="order-4 md:order-none">
            Additionally, we collaborate with families to help identify and
            secure the most appropriate device for their child, including{' '}
            <AccentText colorClass={color.strong}>
              assistance with funding when needed
            </AccentText>
            .
          </p>

          <p className="order-5 md:order-none clear-both ">
            Within our program, student progress is assessed using{' '}
            <AccentText colorClass={color.strong}>benchmark testing</AccentText>{' '}
            aligned with a specialized curriculum tailored for{' '}
            <AccentText colorClass={color.strong}>
              Exceptional Student Education (ESE)
            </AccentText>{' '}
            learners.
          </p>
        </div>
      ),
    },
    {
      title: 'Sensory-Friendly Classroom',
      getContent: (color) => (
        <div className="relative flex flex-col md:block space-y-4">
          <div className="order-2 md:order-none md:float-right md:w-[180px] md:ml-4 md:mb-2 mb-4 w-full">
            <FramedImage
              src="/images/important/classroom2.webp"
              alt="Picture of the SATC classroom"
              caption="A comfortable and welcoming place to learn (Caption 4)"
            />
          </div>

          <p className="order-1 md:order-none">
            Our Sensory-Friendly Classroom is thoughtfully designed to create a{' '}
            <AccentText colorClass={color.strong}>
              welcoming and supportive learning environment
            </AccentText>{' '}
            for all students, especially those with sensory sensitivities.
          </p>

          <p className="order-3 md:order-none">
            In this classroom, we incorporate{' '}
            <AccentText colorClass={color.strong}>
              flexible seating options, soft lighting, noise-reducing materials
            </AccentText>
            , and a{' '}
            <AccentText colorClass={color.strong}>
              calm, organized layout
            </AccentText>{' '}
            to help minimize overstimulation and promote focus.
          </p>

          <p className="order-4 md:order-none ">
            Sensory tools and calming strategies are integrated into the daily
            routine, giving students the opportunity to self-regulate in a way
            that works best for them.
          </p>

          <p className="order-5 md:order-none clear-both">
            We believe that when students feel comfortable and supported,
            they’re better able to{' '}
            <AccentText colorClass={color.strong}>
              learn, grow, and reach their full potential
            </AccentText>
            . Our Sensory-Friendly Classroom is just one of the many ways we
            tailor education to meet the diverse needs of our learners.
          </p>
        </div>
      ),
    },
    {
      title: 'Sensory Gym and Sensory Room',
      getContent: (color) => (
        <div className="relative flex flex-col md:block space-y-4">
          <div className="order-2 md:order-none md:float-right md:w-[180px] md:ml-4 md:mb-2 mb-4 w-full">
            <FramedImage
              src="/images/important/sensoryroom.webp"
              alt="Picture of the Sensory Gym"
              caption="Our sensory gym gives children a place to play and relax (Caption 5)"
              className=""
            />
          </div>
          <p className="order-1 md:order-none">
            Our Sensory Gym is an active space equipped with{' '}
            <AccentText colorClass={color.strong}>
              swings, climbing structures, balance tools
            </AccentText>
            , and other movement-based equipment to help students regulate their
            energy levels, build motor skills, and improve focus. It’s a fun,
            engaging environment that encourages{' '}
            <AccentText colorClass={color.strong}>
              physical development
            </AccentText>{' '}
            in a safe and supportive setting.
          </p>
          <p className="order-3 md:order-none ">
            The Sensory Room offers a{' '}
            <AccentText colorClass={color.strong}>
              calming, quiet environment
            </AccentText>{' '}
            tailored for relaxation and self-regulation. With{' '}
            <AccentText colorClass={color.strong}>
              soothing lights, soft textures, gentle sounds
            </AccentText>
            , and sensory tools, this space is ideal for students who may need a
            break from stimulation or a moment to reset during the day.
          </p>
          <p className="order-4 md:order-none clear-both">
            These spaces are part of our commitment to providing{' '}
            <AccentText colorClass={color.strong}>
              inclusive, student-centered education
            </AccentText>{' '}
            where every child has the tools they need to thrive—emotionally,
            physically, and academically.
          </p>
        </div>
      ),
    },
    {
      title: 'Family Involvement and Support',
      getContent: (color) => (
        <div className="relative flex flex-col md:block space-y-4">
          <div className="order-3 md:order-none md:float-right md:w-[180px] md:ml-4 md:mb-2 mb-4 w-full">
            <FramedImage
              src="/images/important/support.webp"
              alt="Working together hand-in-hand to ensure success"
              caption="We believe working together is key to student success (Caption 6)"
            />
          </div>
          <p className="order-1 md:order-none">
            We believe that a{' '}
            <AccentText colorClass={color.strong}>
              partnership between school and home
            </AccentText>{' '}
            is key to student success. At our school, we actively encourage and
            support family involvement in every step of a child's educational
            journey.
          </p>
          <p className="order-2 md:order-none">
            From{' '}
            <AccentText colorClass={color.strong}>
              regular communication and family workshops
            </AccentText>{' '}
            to{' '}
            <AccentText colorClass={color.strong}>
              volunteer opportunities
            </AccentText>{' '}
            and special events, we work hand-in-hand with parents and caregivers
            to create a{' '}
            <AccentText colorClass={color.strong}>
              connected, supportive learning community
            </AccentText>
            .
          </p>
          <p className="order-4 md:order-none">
            We also offer{' '}
            <Link
              href="/resources"
              className="font-bold text-indigo-400 tracking-wider  underline decoration-indigo-400"
            >
              resources
            </Link>{' '}
            and guidance to help families navigate their child’s unique
            needs—academically, socially, and emotionally.
          </p>
          <p className="order-5 md:order-none clear-both">
            Whether it’s through{' '}
            <AccentText colorClass={color.strong}>
              parent-teacher conferences
            </AccentText>
            , classroom activities, or school-wide initiatives, we value the
            vital role families play in helping our students grow, thrive, and
            feel confident in their abilities.
          </p>
        </div>
      ),
    },
  ];
}
