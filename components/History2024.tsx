'use client';

import { AnimateIn } from './AnimateIn';
import { Carousel } from './Carousel';
import styles from './History2024.module.css';

const slides2024 = [
  {
    src: '/IMG_1800.jpeg',
    alt: 'Networking group with person in emerald green outfit at 2024 event',
  },
  {
    src: '/IMG_1802.jpeg',
    alt: 'Empty 2024 hotel ballroom before the event, stage with four chairs and Young & Gifted branding',
  },
  {
    src: '/IMG_1805.jpeg',
    alt: '2024 panel on stage with speakers in hotel venue',
  },
  {
    src: '/IMG_1803.jpeg',
    alt: 'Close 1-on-1 moment between speaker and student at 2024 event',
  },
  {
    src: '/IMG_1806.jpeg',
    alt: 'Wider angle of 2024 panel with students approaching panelists',
  },
];

export function History2024() {
  return (
    <section id="history" className={styles.history}>
      <div className="container">
        <AnimateIn>
          <p className="caption">Where It Started</p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2>2024</h2>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className={styles.intro}>
            This began in 2024 under the Young &amp; Gifted name, in partnership with
            a local organization. About 30 people. Same mission, first execution.
            It was a learning experience that made December 2025 possible.
          </p>
        </AnimateIn>
        <AnimateIn delay={0.3}>
          <Carousel slides={slides2024} />
        </AnimateIn>
      </div>
    </section>
  );
}
