'use client';

import { StaggerContainer, StaggerItem } from './AnimateIn';
import styles from './StatBar.module.css';

const stats = [
  { number: '150', label: 'Students' },
  { number: '3', label: 'Industry Speakers' },
  { number: '1', label: 'County' },
];

export function StatBar() {
  return (
    <section className={styles.statBar}>
      <StaggerContainer className={styles.stats}>
        {stats.map((stat) => (
          <StaggerItem key={stat.label} className={styles.stat}>
            <span className={styles.number}>{stat.number}</span>
            <span className={styles.label}>{stat.label}</span>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
