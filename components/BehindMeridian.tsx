'use client';

import { AnimateIn, StaggerContainer, StaggerItem } from './AnimateIn';
import styles from './BehindMeridian.module.css';

// Confirmed partners only. Nothing goes on this list until the organization
// has said yes in writing.
const partners: { name: string; role: string }[] = [
  { name: 'USC NAI', role: 'Bringing students' },
  { name: 'LA Promise Fund', role: 'Bringing students' },
  { name: 'I Have A Dream Foundation LA', role: 'Bringing students' },
  { name: 'MANA de San Diego', role: 'Bringing students' },
  { name: 'San Diego Diplomacy Council', role: 'Bringing students' },
  { name: 'EnCorps', role: 'Running the aerospace design lab' },
  { name: 'Las Fotos Project', role: 'Student photographers on the day' },
  { name: 'Campaign Zero', role: 'Keynote' },
  { name: 'LA Clippers', role: 'Raffle items and merch' },
  { name: 'UCLA SOLE', role: 'Campus ally, spreading the word at UCLA' },
  { name: '826LA', role: 'Spreading the word' },
];

export function BehindMeridian() {
  return (
    <section id="partners" className={styles.section}>
      <div className="container">
        <div className="chunk">
          <AnimateIn>
            <p className="eyebrow">Behind Meridian</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2>Who is behind it</h2>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div className={styles.lead}>
              <h3 className={styles.funder}>General Atomics</h3>
              <p>
                The General Atomics Sciences Education Foundation funded Meridian and
                is bringing a hands-on aerospace engineering lab to the day. Students
                build something real instead of sitting through a talk.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className={styles.listLabel}>Working with us</p>
          </AnimateIn>

          <StaggerContainer className={styles.roster} staggerDelay={0.04}>
            {partners.map((p) => (
              <StaggerItem key={p.name} className={styles.row}>
                <span className={styles.name}>{p.name}</span>
                <span className={styles.role}>{p.role}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateIn delay={0.25}>
            <p className={styles.note}>
              More partners will be named here as they are confirmed.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
