'use client';

import { AnimateIn } from './AnimateIn';
import { PersonCarousel } from './PersonCarousel';
import type { PersonSlide } from './PersonCarousel';
import styles from './WhoBuiltThis.module.css';

const mentors: PersonSlide[] = [
  {
    src: '/Georgeleisandjaxtonpicture.jpeg',
    name: 'George Leis',
    title: 'Chairman, YMCA of the USA / Executive Vice President, CalPrivate Bank',
    caption:
      'George Leis was among the first to believe in this conference and in the person building it. He personally donated $1,000 to make the first event possible. Every time Jaxton is in town, they meet, without exception. He was present at Jaxton\'s high school graduation. His investment in Meridian Conference is a direct extension of his investment in what young people from this community are capable of.',
  },
  {
    src: '/TedLawrenceOHSprincipal.WEBP',
    name: 'Dr. Ted Lawrence',
    title: 'Principal, Oxnard High School',
    caption:
      'Dr. Ted Lawrence has been Jaxton\'s mentor since he sent a cold email two weeks before arriving at Oxnard High School about his vision to improve the school. When Meridian Conference came together, he forwarded it to his entire student body without hesitation. His leadership is rooted in radical accessibility, the belief that the right student meeting the right opportunity can change everything.',
  },
  {
    src: '/MarianneRamosCIHSprincipal.JPG',
    name: 'Ms. Marianne Ramos',
    title: 'Principal, Channel Islands High School',
    caption:
      'Ms. Marianne Ramos first crossed paths with Jaxton at a coat drive and a district board meeting. When Meridian Conference came across her desk, she shared it with her entire student body without hesitation, opening the door for her students to be part of something larger than their campus.',
  },
  {
    src: '/GarypetersonRMHSprincipal.WEBP',
    name: 'Mr. Gary Peterson',
    title: 'Principal, Rio Mesa High School',
    caption:
      'Mr. Gary Peterson and Jaxton first connected when he was an assistant principal at Oxnard High School, crossing paths regularly in the halls. He has always been someone who believed in doing what was right, and believed in Jaxton as someone who was trying to do the same. Now at Rio Mesa, he carries that same support forward.',
  },
  {
    src: '/BryanMartinRCHSprincipal.JPG',
    name: 'Mr. Bryan Martin',
    title: 'Principal, RCHS',
    caption:
      'Mr. Bryan Martin and Jaxton first crossed paths during the district-wide coat drive organized at Oxnard High School in the fall of 2024. His decision to support the conference is a reflection of the kind of leader he is.',
  },
  {
    src: '/ChrisRamosPHSPrincipal.WEBP',
    name: 'Mr. Chris Ramos',
    title: 'Principal, Pacifica High School',
    caption:
      'Mr. Chris Ramos and Jaxton connected through the coat drive and district board meeting. He has expressed genuine belief in what Jaxton is building and has been a champion of both the conference and the person behind it.',
  },
  {
    src: '/BrendaBravoHHSprincipal.JPG',
    name: 'Ms. Brenda Bravo',
    title: 'Principal, Hueneme High School',
    caption:
      'Ms. Brenda Bravo chose to open her school to this conference and to the students it serves. That choice defines her role here.',
  },
];

export function WhoBuiltThis() {
  return (
    <section id="who-built-this" className={styles.section}>
      <div className="container">
        <AnimateIn>
          <h2>Who Helped Build This</h2>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <PersonCarousel slides={mentors} />
        </AnimateIn>
      </div>
    </section>
  );
}
