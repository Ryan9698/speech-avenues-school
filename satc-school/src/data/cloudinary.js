const CLOUD_NAME = 'dfchcqbiq';
const BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

export function getThumbnailUrl(publicId) {
  return `${BASE}/w_220,h_220,c_fill,g_auto,q_auto,f_auto/${publicId}`;
}

export function getModalUrl(publicId) {
  return `${BASE}/w_600,h_600,c_limit,q_auto,f_auto/${publicId}`;
}

export const cloudPhotos = [
  {
    id: '1',
    publicId: 'Speech Avenues School/Gallery/crafts',
    caption: 'Crafts',
    alt: 'Students working on crafts',
  },
  {
    id: '2',
    publicId: 'Speech Avenues School/Gallery/friend',
    caption: 'Friendship',
    alt: 'Students and friends hugging',
  },
  {
    id: '3',
    publicId: 'Speech Avenues School/Gallery/apple',
    caption: '',
    alt: 'Student touching apple',
  },
  {
    id: '4',
    publicId: 'Speech Avenues School/Gallery/childot1',
    caption: 'Mrs. Gail working with student',
    alt: 'Mrs. Gail working with student',
  },
  {
    id: '5',
    publicId: 'Speech Avenues School/Gallery/class2',
    caption: '',
    alt: 'Sensory Class',
  },
  {
    id: '6',
    publicId: 'Speech Avenues School/Gallery/class1',
    caption: 'Students working in the classroom',
    alt: 'Students working in the classroom',
  },
  {
    id: '7',
    publicId: 'Speech Avenues School/Gallery/childot2_rl6clq',
    caption: '',
    alt: 'Teacher working with student in gym',
  },
  {
    id: 8,
    publicId:
      'Speech Avenues School/Gallery/Miss_Erica_doing_speech_therapy_in_the_gym_ernngg',
    caption: 'Miss Erica doing speech therapy in the gym',
    alt: 'therapy',
  },
  {
    id: '9',
    publicId: 'Speech Avenues School/Gallery/class3_yuynwv',
    caption: '',
    alt: 'Student doing therapy',
  },
  {
    id: '10',
    publicId:
      'Speech Avenues School/Gallery/Miss_Kailey_and_one_of_our_wonderful_moms_helping_at_our_school_fund_raiser_vwqxb4',
    caption:
      'Miss Kailey and one of our wonderful moms helping at our school fund raiser',
    alt: 'helping at our school fund raiser',
  },
  {
    id: '11',
    publicId:
      'Speech Avenues School/Gallery/Miss._Erica_and_Miss._Ashley_hanging_out_in_the_sensory_room_with_our_students_for_a_brain_break_odw1al',
    caption:
      'Miss Erica and Miss Ashley hanging out in the sensory room with our students',
    alt: 'Miss Erica and Miss Ashley hanging out in the sensory room with our students',
  },
  {
    id: '12',
    publicId: 'Speech Avenues School/Gallery/Miss._Gail_and_Mr._Chris_qlbmgr',
    caption: 'Mrs Gail and Mr Chris',
    alt: 'Mrs. Gail and Mr. Chris',
  },
  {
    id: '13',
    publicId:
      'Speech Avenues School/Gallery/Mr._Bryan_helping_outside_to_regulate_our_students_hwrtxi',
    caption: 'Mr Bryan helping outside to regulate our students',
    alt: 'Mr Bryan helping outside to regulate our students',
  },
  {
    id: '14',
    publicId:
      'Speech Avenues School/Gallery/Speech_and_OT_making_the_dream_team._Miss_Lucille_and_Miss_Kailey_rnj6bo',
    caption:
      'Speech and OT making the dream team! Miss Lucille and Miss Kailey',
    alt: 'Speech and OT making the dream team. Miss Lucille and Miss Kailey',
  },
  {
    id: '15',
    publicId:
      'Speech Avenues School/Gallery/Miss_Kailey_with_our_student_in_the_gym_lnkvqh',
    caption: 'Miss Kailey with our student in the gym',
    alt: 'Miss Kailey with our student in the gym',
  },
  {
    id: '16',
    publicId:
      'Speech Avenues School/Gallery/Our_students_and_parents_came_out_to_support_us_during_our_school_fundraiser_fall_festival_zde2w3',
    caption: 'Students and Parents coming to support our school fundraiser!',
    alt: 'Students and Parents coming to support our school fundraiser!',
  },
];
