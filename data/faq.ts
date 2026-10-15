// One source for /faq, the /students excerpt and the FAQPage structured data.
// Answers keep the brief's wording (v2 6.11, v3 section 18).
import { EVENTS_SENTENCE } from '@/lib/copy';

export type FaqAudience = 'The day' | 'Students' | 'Executives' | 'Partners' | 'Demo day';
export interface Faq { audience: FaqAudience; question: string; answer: string }

export const FAQ_GROUPS: FaqAudience[] = ['The day', 'Students', 'Executives', 'Partners', 'Demo day'];

export const faqs: Faq[] = [
  { audience: 'The day', question: 'What is Meridian?', answer: 'Meridian is a company that brings students and executives together in person, by field. The conference on November 14 is where it starts.' },
  { audience: 'The day', question: 'Is it free?', answer: 'Yes. The conference is free for every student, to register and to attend.' },
  { audience: 'The day', question: 'Can I join online?', answer: 'Yes. There is a Zoom option when you register. In-person space is 400.' },
  { audience: 'The day', question: 'When does registration close?', answer: 'Registration closes November 7.' },
  { audience: 'The day', question: 'How do I get there?', answer: 'The day is at UCLA in Westwood. Parking and arrival details go to everyone registered and to @meridianconference on Instagram before the day.' },
  { audience: 'The day', question: 'What happens after November 14?', answer: EVENTS_SENTENCE },
  { audience: 'The day', question: 'Will I be photographed?', answer: 'Yes. Meridian photographs and films the day, and your image may appear in our recap film, on the website, and on social media. You agree to that when you register.' },

  // TODO(jax): the old answer said anyone could come, including high school students.
  // This follows the /students wording. Confirm the eligibility decision.
  { audience: 'Students', question: 'Who can come?', answer: 'University students from across Los Angeles and Ventura Counties. UCLA, USC, and UC Berkeley students are all welcome.' },
  { audience: 'Students', question: 'Can I bring a friend?', answer: 'Yes, but they need their own registration. Seats are capped at 400.' },
  { audience: 'Students', question: 'What should I wear?', answer: 'Business casual is ideal. If that is not something you have, wear whatever you would wear to meet people you respect. Nobody is checking.' },
  { audience: 'Students', question: 'Do I have to stay the whole time?', answer: 'Stay the whole time. The best conversations happen late in the day, after people have loosened up and the room knows who you are. The students who arrive first and leave last get the most out of it.' },
  { audience: 'Students', question: 'What if I have never done anything like this?', answer: 'Many people there have not. You introduce yourself, they introduce themselves, and it goes from there. Hosts work the floor all day and will make the introduction.' },
  // TODO(jax): see the registration-eligibility decision.
  { audience: 'Students', question: 'I am under 18. Can I come?', answer: 'Students under 18 register with a parent or guardian’s contact information, and a parent or guardian signs them in at check-in.' },

  { audience: 'Executives', question: 'I am an executive. What does the day ask of me?', answer: 'Nothing to prepare and nothing to carry. You get to know students and meet the other leaders in the room.' },
  { audience: 'Partners', question: 'I lead an organization. How do we work with Meridian?', answer: 'Start at the partners page. Write to us or book a call.' },
  { audience: 'Demo day', question: 'How do I apply to present at demo day?', answer: 'Register, then answer the demo day question on the form. We follow up with the people we pick.' },
];
