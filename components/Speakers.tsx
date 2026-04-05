'use client';

import { AnimateIn } from './AnimateIn';
import { PersonCarousel } from './PersonCarousel';
import type { PersonSlide } from './PersonCarousel';
import styles from './Speakers.module.css';

const speakers: PersonSlide[] = [
  {
    src: '/opt/meridian2025speakercamdencoley.webp',
    mobileSrc: '/opt/meridian2025speakercamdencoley-mobile.webp',
    name: 'Camden Coley',
    caption:
      'Camden Coley is a Netflix and ABC actor with two NAACP Image Award nominations. At Meridian Conference, he spoke on breaking into the entertainment industry and building a career on his own terms.',
  },
  {
    src: '/opt/meridian2025speakeradrielmiramontes.webp',
    mobileSrc: '/opt/meridian2025speakeradrielmiramontes-mobile.webp',
    name: 'Adriel Miramontes',
    caption:
      'Adriel Miramontes is the founder of The Adriel Show and a featured journalist with KEYT. At Meridian Conference, he spoke on media entrepreneurship and what it means to own your story and your platform.',
  },
  {
    src: '/opt/meridian2025speakersimeon.webp',
    mobileSrc: '/opt/meridian2025speakersimeon-mobile.webp',
    name: 'Simeon Johnson',
    caption:
      'Simeon Johnson is the CEO of Young Millionaires Club and a creative director working at the intersection of business, culture, and entrepreneurship. At Meridian Conference, he spoke on building real wealth and influence as a young leader.',
  },
  {
    src: '/opt/meridian2025leadmarketerdanae.webp',
    mobileSrc: '/opt/meridian2025leadmarketerdanae-mobile.webp',
    name: 'Danae Venters',
    caption:
      'Danae Venters is a CASL State Board Finalist and 2026 ASB President at Oxnard High School. She served as Lead Marketer for Meridian Conference.',
  },
];

export function Speakers() {
  return (
    <section id="speakers" className={styles.speakers}>
      <div className="container">
        <AnimateIn>
          <p className="caption">December 2025</p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2>Past Speakers</h2>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <PersonCarousel slides={speakers} />
        </AnimateIn>
      </div>
    </section>
  );
}
