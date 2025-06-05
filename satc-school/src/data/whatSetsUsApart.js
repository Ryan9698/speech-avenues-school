import { AccentText } from '@/components/General';
import { FramedImage } from '@/components/General';

export function getWhatSetsUsApart(color) {
  return [
    {
      title: 'Comprehensive Curriculum',
      content: (
        <div aria-labelledby="creative-approaches">
          <div className="flex flex-col md:flex-row">
            <p className="w-full md:w-[80%]">
              {' '}
              Our curriculum includes{' '}
              <AccentText colorClass={color.strong}>
                math, writing/vocab, science, reading, social studies, art, and
                vocational training
              </AccentText>
              , ensuring a well-rounded educational experience that caters to
              academic growth and functional life skills.
            </p>
            <FramedImage
              src="/images/IMG_0419.jpeg"
              alt="Therapist working with student"
              caption="Therapy in action"
              className="w-[250px] md:w-[180px] lg:w-[200px]"
            />
          </div>
        </div>
      ),
      image: (
        <FramedImage
          src="/images/IMG_0419.jpeg"
          alt="Therapist working with student"
          caption="Therapy in action"
        />
      ),
    },
    {
      title: 'Positive Behavior Approach',
      content: (
        <>
          <AccentText colorClass={color.strong}>PBS</AccentText> is a
          research-based approach that uses systems to intervene in problem
          behaviors to{' '}
          <AccentText colorClass={color.strong}>
            alter or prevent the behavior by changing the environment
          </AccentText>
          .
        </>
      ),
    },
    {
      title: 'Therapy Integration',
      content: (
        <>
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
          <br />
          <br />
          Additionally, we collaborate with families to help identify and secure
          the most appropriate device for their child, including{' '}
          <AccentText colorClass={color.strong}>
            assistance with funding when needed
          </AccentText>
          .
          <br />
          <br />
          Within our program, student progress is assessed using{' '}
          <AccentText colorClass={color.strong}>
            benchmark testing
          </AccentText>{' '}
          aligned with a specialized curriculum tailored for{' '}
          <AccentText colorClass={color.strong}>
            Exceptional Student Education (ESE)
          </AccentText>{' '}
          learners.
        </>
      ),
    },
    // {
    //   title: 'Sensory-Friendly Classroom',
    //   content: (
    //     <>
    //       Our Sensory-Friendly Classroom is thoughtfully designed to create a{' '}
    //       <AccentText colorClass={color.strong}>
    //         welcoming and supportive learning environment
    //       </AccentText>{' '}
    //       for all students, especially those with sensory sensitivities.
    //       <br />
    //       <br />
    //       In this classroom, we incorporate{' '}
    //       <AccentText colorClass={color.strong}>
    //         flexible seating options
    //       </AccentText>
    //       , <AccentText colorClass={color.strong}>soft lighting</AccentText>,{' '}
    //       <AccentText colorClass={color.strong}>
    //         noise-reducing materials
    //       </AccentText>
    //       , and a{' '}
    //       <AccentText colorClass={color.strong}>
    //         calm, organized layout
    //       </AccentText>{' '}
    //       to help minimize overstimulation and promote focus.
    //       <br />
    //       <br />
    //       Sensory tools and calming strategies are integrated into the daily
    //       routine, giving students the opportunity to self-regulate in a way
    //       that works best for them.
    //       <br />
    //       <br />
    //       We believe that when students feel comfortable and supported, they’re
    //       better able to{' '}
    //       <AccentText colorClass={color.strong}>
    //         learn, grow, and reach their full potential
    //       </AccentText>
    //       . Our Sensory-Friendly Classroom is just one of the many ways we
    //       tailor education to meet the diverse needs of our learners.
    //     </>
    //   ),
    // },
    {
      title: 'Sensory-Friendly Classroom',
      content: (
        <>
          <FramedImage
            src="/images/classroom.jpg"
            alt="Sensory-friendly classroom"
            caption="Calm and organized learning space"
            size={200}
          />
          <br />
          <br />
          Our Sensory-Friendly Classroom is thoughtfully designed to create a{' '}
          <AccentText colorClass={color.strong}>
            welcoming and supportive learning environment
          </AccentText>{' '}
          for all students, especially those with sensory sensitivities.
          <br />
          <br />
          In this classroom, we incorporate{' '}
          <AccentText colorClass={color.strong}>
            flexible seating options
          </AccentText>
          , <AccentText colorClass={color.strong}>soft lighting</AccentText>,{' '}
          <AccentText colorClass={color.strong}>
            noise-reducing materials
          </AccentText>
          , and a{' '}
          <AccentText colorClass={color.strong}>
            calm, organized layout
          </AccentText>{' '}
          to help minimize overstimulation and promote focus.
          <br />
          <br />
          Sensory tools and calming strategies are integrated into the daily
          routine, giving students the opportunity to self-regulate in a way
          that works best for them.
          <br />
          <br />
          We believe that when students feel comfortable and supported, they’re
          better able to{' '}
          <AccentText colorClass={color.strong}>
            learn, grow, and reach their full potential
          </AccentText>
          . Our Sensory-Friendly Classroom is just one of the many ways we
          tailor education to meet the diverse needs of our learners.
        </>
      ),
    },
    {
      title: 'Sensory Gym and Sensory Room',
      content: (
        <>
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
          <br />
          <br />
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
          <br />
          <br />
          These spaces are part of our commitment to providing{' '}
          <AccentText colorClass={color.strong}>
            inclusive, student-centered education
          </AccentText>{' '}
          where every child has the tools they need to thrive—emotionally,
          physically, and academically.
        </>
      ),
    },
    {
      title: 'Family Involvement and Support',
      content: (
        <>
          We believe that a{' '}
          <AccentText colorClass={color.strong}>
            partnership between school and home
          </AccentText>{' '}
          is key to student success. At our school, we actively encourage and
          support family involvement in every step of a child's educational
          journey.
          <br />
          <br />
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
          <br />
          <br />
          We also offer resources and guidance to help families navigate their
          child’s unique needs—academically, socially, and emotionally.
          <br />
          <br />
          Whether it’s through{' '}
          <AccentText colorClass={color.strong}>
            parent-teacher conferences
          </AccentText>
          , classroom activities, or school-wide initiatives, we value the vital
          role families play in helping our students grow, thrive, and feel
          confident in their abilities.
        </>
      ),
    },
  ];
}

// import { AccentText } from '@/components/General';

// export const whatSetsUsApart = [
//   {
//     title: 'Comprehensive Curriculum',
//     content: (
//       <>
//         Our curriculum includes{' '}
//         <AccentText>
//           math, writing/vocab, science, reading, social studies, art, and
//           vocational training
//         </AccentText>
//         , ensuring a well-rounded educational experience that caters to academic
//         growth and functional life skills.
//       </>
//     ),
//   },
//   {
//     title: 'Positive Behavior Approach',
//     content: (
//       <>
//         <AccentText>PBS</AccentText> is a research-based approach that uses
//         systems to intervene in problem behaviors to{' '}
//         <AccentText>
//           alter or prevent the behavior by changing the environment
//         </AccentText>
//         .
//       </>
//     ),
//   },
//   {
//     title: 'Therapy Integration',
//     content: (
//       <>
//         For our nonverbal learners, we utilize curriculum materials specifically
//         designed for{' '}
//         <AccentText>
//           AAC (Augmentative and Alternative Communication)
//         </AccentText>{' '}
//         users. AAC devices are an integral part of our classroom environment and
//         are incorporated throughout the day across{' '}
//         <AccentText>academic, social, and functional activities</AccentText>
//         . Our learners engage with a variety of AAC programs, and our staff is
//         well-versed in supporting different platforms and communication systems.
//         <br />
//         <br />
//         Additionally, we collaborate with families to help identify and secure
//         the most appropriate device for their child, including{' '}
//         <AccentText>assistance with funding when needed</AccentText>
//         .
//         <br />
//         <br />
//         Within our program, student progress is assessed using{' '}
//         <AccentText>benchmark testing</AccentText> aligned with a specialized
//         curriculum tailored for{' '}
//         <AccentText>Exceptional Student Education (ESE)</AccentText> learners.
//       </>
//     ),
//   },
//   {
//     title: 'Sensory-Friendly Classroom',
//     content: (
//       <>
//         Our Sensory-Friendly Classroom is thoughtfully designed to create a{' '}
//         <AccentText>welcoming and supportive learning environment</AccentText>{' '}
//         for all students, especially those with sensory sensitivities.
//         <br />
//         <br />
//         In this classroom, we incorporate{' '}
//         <AccentText>flexible seating options</AccentText>,{' '}
//         <AccentText>soft lighting</AccentText>,{' '}
//         <AccentText>noise-reducing materials</AccentText>, and a{' '}
//         <AccentText>calm, organized layout</AccentText> to help minimize
//         overstimulation and promote focus. Sensory tools and calming strategies
//         are integrated into the daily routine, giving students the opportunity
//         to self-regulate in a way that works best for them.
//         <br />
//         <br />
//         We believe that when students feel comfortable and supported, they’re
//         better able to{' '}
//         <AccentText>learn, grow, and reach their full potential</AccentText>.
//         Our Sensory-Friendly Classroom is just one of the many ways we tailor
//         education to meet the diverse needs of our learners.
//       </>
//     ),
//   },
//   {
//     title: 'Sensory Gym and Sensory Room',
//     content: (
//       <>
//         Our Sensory Gym is an active space equipped with{' '}
//         <AccentText>swings, climbing structures, balance tools</AccentText>, and
//         other movement-based equipment to help students regulate their energy
//         levels, build motor skills, and improve focus. It’s a fun, engaging
//         environment that encourages{' '}
//         <AccentText>physical development</AccentText> in a safe and supportive
//         setting.
//         <br />
//         <br />
//         The Sensory Room offers a{' '}
//         <AccentText>calming, quiet environment</AccentText> tailored for
//         relaxation and self-regulation. With{' '}
//         <AccentText>soothing lights, soft textures, gentle sounds</AccentText>
//         , and sensory tools, this space is ideal for students who may need a
//         break from stimulation or a moment to reset during the day.
//         <br />
//         <br />
//         These spaces are part of our commitment to providing{' '}
//         <AccentText>inclusive, student-centered education</AccentText> where
//         every child has the tools they need to thrive—emotionally, physically,
//         and academically.
//       </>
//     ),
//   },
//   {
//     title: 'Family Involvement and Support',
//     content: (
//       <>
//         We believe that a{' '}
//         <AccentText>AccentText partnership between school and home</AccentText>{' '}
//         is key to student success. At our school, we actively encourage and
//         support family involvement in every step of a child's educational
//         journey.
//         <br />
//         <br />
//         From <AccentText>
//           regular communication and family workshops
//         </AccentText>{' '}
//         to <AccentText>volunteer opportunities</AccentText> and special events,
//         we work hand-in-hand with parents and caregivers to create a{' '}
//         <AccentText>connected, supportive learning community</AccentText>
//         . We also offer resources and guidance to help families navigate their
//         child’s unique needs—academically, socially, and emotionally.
//         <br />
//         <br />
//         Whether it’s through <AccentText>parent-teacher conferences</AccentText>
//         , classroom activities, or school-wide initiatives, we value the vital
//         role families play in helping our students grow, thrive, and feel
//         confident in their abilities.
//       </>
//     ),
//   },
// ];
