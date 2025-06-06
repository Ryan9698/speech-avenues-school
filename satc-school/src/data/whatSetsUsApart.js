import { AccentText } from '@/components/General';
import { FramedImage } from '@/components/General';
import Link from 'next/link';

export function getWhatSetsUsApart() {
  return [
    {
      title: 'Comprehensive Curriculum',
      getContent: (color) => (
        <div className="relative">
          <div className="md:float-right md:w-[180px] md:ml-4 md:mb-2 mb-4 w-full">
            <FramedImage
              src="/images/IMG_0419.jpeg"
              alt="Therapist working with student"
              caption="Therapy in action"
              className=""
            />
          </div>
          <p className="">
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
        <div className="relative">
          <div className="md:float-right md:w-[180px] md:ml-4 md:mb-2 mb-4 w-full">
            <FramedImage
              src="/images/IMG_0420.jpeg"
              alt="Therapist working with student"
              caption="Therapy in action"
              className=""
            />
          </div>
          <AccentText colorClass={color.strong}>PBS</AccentText> is a
          research-based approach that uses systems to intervene in problem
          behaviors to{' '}
          <AccentText colorClass={color.strong}>
            alter or prevent the behavior by changing the environment
          </AccentText>
          .
        </div>
      ),
    },
    {
      title: 'Therapy Integration',
      getContent: (color) => (
        <div className="relative space-y-4">
          <div className="md:float-right md:w-[180px] md:ml-4 md:mb-2 mb-4 w-full">
            <FramedImage
              src="/images/IMG_0421.jpeg"
              alt="Therapist working with student"
              caption="Therapy in action"
            />
          </div>
          <p className="">
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

          <p className="clear-both">
            Additionally, we collaborate with families to help identify and
            secure the most appropriate device for their child, including{' '}
            <AccentText colorClass={color.strong}>
              assistance with funding when needed
            </AccentText>
            .
          </p>

          <p className="">
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
        <div className="relative space-y-4">
          <div className="md:float-right md:w-[180px] md:ml-4 md:mb-2 mb-4 w-full">
            <FramedImage
              src="/images/IMG_0420.jpeg"
              alt="Child using AAC device"
              caption="A classroom designed with your child's needs in mind"
            />
          </div>

          <p>
            Our Sensory-Friendly Classroom is thoughtfully designed to create a{' '}
            <AccentText colorClass={color.strong}>
              welcoming and supportive learning environment
            </AccentText>{' '}
            for all students, especially those with sensory sensitivities.
          </p>

          <p>
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

          <p className="clear-both">
            Sensory tools and calming strategies are integrated into the daily
            routine, giving students the opportunity to self-regulate in a way
            that works best for them.
          </p>

          <p className="">
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
        <div className="relative space-y-4">
          <div className="float-right md:w-[180px] md:ml-4 md:mb-2 mb-4 w-full">
            <FramedImage
              src="/images/IMG_0420.jpeg"
              alt="Child using AAC device"
              caption="A classroom designed with your child's needs in mind"
              className=""
            />
          </div>
          <p className="">
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
          <p className="clear-both">
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
          <p>
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
        <div className="relative space-y-4">
          <div className="float-right md:w-[180px] md:ml-4 md:mb-2 mb-4 w-full">
            <FramedImage
              src="/images/IMG_0420.jpeg"
              alt="Child using AAC device"
              caption="A classroom designed with your child's needs in mind"
            />
          </div>
          <p>
            We believe that a{' '}
            <AccentText colorClass={color.strong}>
              partnership between school and home
            </AccentText>{' '}
            is key to student success. At our school, we actively encourage and
            support family involvement in every step of a child's educational
            journey.
          </p>
          <p>
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
          <p className="clear-both">
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
          <p>
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
