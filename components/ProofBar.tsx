'use client';

import { AnimateIn, StaggerContainer, StaggerItem } from './AnimateIn';
import styles from './ProofBar.module.css';

const stats = [
  { number: 'roughly 150', label: 'Young People Attended' },
  { number: '3', label: 'Industry-Leading Organizations' },
  { number: 'Free', label: 'Admission, Always' },
];

const orgs = ['Netflix', 'OpenAI', 'Chase Bank'];

export function ProofBar() {
  return (
    <section className={styles.proofBar}>
      <div className="container">
        <StaggerContainer className={styles.stats}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className={styles.stat}>
              <span className={styles.number}>{stat.number}</span>
              <span className={styles.label}>{stat.label}</span>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateIn delay={0.3}>
          <div className={styles.orgs}>
            <span className={styles.orgLabel}>December 2025 speakers from</span>
            <div className={styles.orgLogos}>
              {/* CONTENT NEEDED FROM JAX:
                  - What: Official SVG logos for Netflix, OpenAI, Chase Bank
                  - Format: SVG files, white/light versions for dark background
                  - Replace: The text names below with <img> tags
                  - Notes: Need official logos or permission to use. Text fallback is acceptable for launch.
              */}
              {orgs.map((org) => (
                <span key={org} className={styles.orgName}>{org}</span>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
