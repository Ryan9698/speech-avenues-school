// data/staff.js or wherever you keep reusable content
export const staffData = [
  {
    id: 1,
    name: 'Lucy Johnson',
    title: 'Speech-Language Pathologist',
    description: 'Lucy specializes in augmentative communication...',
    imageSrc: '/images/staff/lucy.jpeg',
    color: 'pink',
  },
  {
    id: 2,
    name: 'Marco Garcia',
    title: 'Occupational Therapist',
    description:
      'Marco helps students build fine motor and sensory regulation skills...',
    imageSrc: '/images/staff/marco.jpeg',
    color: 'blue',
  },
  {
    id: 3,
    name: 'Emily Davis',
    title: 'Speech-Language Pathologist',
    description: 'Emily provides individualized speech and language therapy...',
    imageSrc: '/images/staff/emily.jpeg',
    color: 'indigo',
  },
  {
    id: 4,
    name: 'Sofia Rodriguez',
    title: 'Speech-Language Pathologist',
    description: 'Sofia specializes in speech and language processing...',
    imageSrc: '/images/staff/sofia.jpeg',
    color: 'neutral',
  },
  // Add more staff members here
];

export const colorClasses = {
  pink: {
    name: 'text-pink-600',
    ring: 'ring-pink-200',
  },
  blue: {
    name: 'text-blue-600',
    ring: 'ring-blue-200',
  },
  indigo: {
    name: 'text-indigo-600',
    ring: 'ring-indigo-200',
  },
  neutral: {
    name: 'text-gray-800',
    ring: 'ring-gray-200',
  },
};
