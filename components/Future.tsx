'use client';

import { AnimateIn } from './AnimateIn';
import styles from './Future.module.css';

export function Future() {
  return (
    <section id="future" className={styles.future}>
      <div className="container">
        <AnimateIn>
          <p className="caption">What Comes Next</p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className={styles.headline}>December 2026</h2>
        </AnimateIn>

        <div className={styles.grid}>
          <AnimateIn delay={0.2}>
            <div className={styles.card}>
              <span className={styles.cardLabel}>Event</span>
              <span className={styles.cardValue}>December 2026</span>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div className={styles.card}>
              <span className={styles.cardLabel}>Location</span>
              <span className={styles.cardValue}>Ventura County</span>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <div className={styles.card}>
              <span className={styles.cardLabel}>Target</span>
              <span className={styles.cardValue}>400 Students</span>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.5}>
          <p className={styles.body}>
            Meridian Conference returns in December 2026, bringing 400 students
            from Ventura County face to face with executives, founders, and leaders.
          </p>
        </AnimateIn>
        <AnimateIn delay={0.6}>
          <p className={styles.body}>
            The day includes panels, workshops, and direct access sessions.
            Structured conversations between students and the people building
            things, designed for real exchange, not performance.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.7}>
          <div className={styles.ctaWrap}>
            <a href="#apply" className="btn btn-gold">
              Express Interest
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
