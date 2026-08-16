'use client';

import { AnimateIn, StaggerContainer, StaggerItem } from './AnimateIn';
import styles from './Speakers.module.css';

export interface Speaker {
  name: string;
  title: string;
  org: string;
  photo?: string;
}

// Add a speaker by adding an entry here. No markup changes needed.
// `photo` is optional; cards render fine without one.
const speakers: Speaker[] = [
  { name: 'George Leis', title: 'Chairman', org: 'YMCA of the USA' },
  { name: 'Deontay Wilder', title: 'Former WBC Heavyweight Champion', org: 'Boxing' },
  { name: 'Ellen Junn', title: 'Former President', org: 'California State University Stanislaus' },
  { name: 'Yan Searcy', title: 'Dean', org: 'CSU Northridge' },
  { name: 'Rich Block', title: 'Former President', org: 'Santa Barbara Zoo' },
  { name: 'Joe Killinger', title: 'CEO', org: 'Commercial Brokerage' },
];

export function Speakers() {
  return (
    <section id="speakers" className={styles.section}>
      <div className="container">
        <div className="chunk">
          <AnimateIn>
            <p className="eyebrow">The room</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2>Who&apos;s in the room</h2>
          </AnimateIn>

          <StaggerContainer className={styles.grid} staggerDelay={0.06}>
            {speakers.map((s) => (
              <StaggerItem key={s.name} className={styles.card}>
                {s.photo && (
                  <img
                    src={s.photo}
                    alt={s.name}
                    width={400}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className={styles.photo}
                  />
                )}
                <h3 className={styles.name}>{s.name}</h3>
                <p className={styles.role}>{s.title}</p>
                <p className={styles.org}>{s.org}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateIn delay={0.15}>
            <p className={styles.more}>
              Twenty-four executives and founders in all. NASA engineers, venture
              capitalists, MIT and Harvard faculty, and more.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
