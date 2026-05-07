'use client';

import { AnimateIn } from './AnimateIn';
import styles from './Founder.module.css';

export function Founder() {
  return (
    <section id="founder" className={styles.founder}>
      <div className="container">
        <div className={styles.layout}>
          <AnimateIn direction="left">
            <div className={styles.photos}>
              <div className={styles.primaryPhoto}>
                <img
                  src="/opt/unnamed__3_.webp"
                  srcSet="/opt/unnamed__3_-mobile.webp 600w, /opt/unnamed__3_.webp 1200w"
                  sizes="(max-width: 768px) 600px, 1200px"
                  alt="Jaxton Bruce Wright, Founder of Meridian Conference"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                />
                <p className={styles.photoCaption}>Jaxton Bruce Wright, Founder</p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn direction="right" delay={0.15}>
            <div className={styles.content}>
              <p className="caption">The Founder</p>
              <h2 className={styles.name}>Jaxton Bruce Wright</h2>
              <p className={styles.role}>Founder, Meridian Conference</p>
              <div className={styles.bio}>
                <p>
                  Jaxton Wright built Meridian because the rooms that change trajectories
                  should not require a last name or a zip code to enter.
                </p>
                <p>
                  The first Meridian event brought 150 young people face-to-face with leaders
                  from Netflix, OpenAI, and Chase Bank. Not for a lecture. For direct
                  conversations that led to real mentorships, internship introductions, and
                  career pivots.
                </p>
                <p>
                  The next conference is coming to Los Angeles County in late November 2026,
                  serving 400 students from across Los Angeles and Ventura Counties. Free for
                  every student who attends.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
