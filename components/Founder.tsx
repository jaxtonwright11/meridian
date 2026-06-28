'use client';

import { AnimateIn } from './AnimateIn';
import { EVENT_DATE_SHORT, EVENT_VENUE } from '@/config';
import styles from './Founder.module.css';

export function Founder() {
  return (
    <section id="founder" className={styles.founder}>
      <div className="container">
       <div className="chunk" style={{ maxWidth: '1000px' }}>
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
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '2px' }}
                />
                <p className={styles.photoCaption}>Jaxton Bruce Wright, founder</p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn direction="right" delay={0.15}>
            <div className={styles.content}>
              <p className="eyebrow">The founder</p>
              <h2 className={styles.name}>Jaxton Bruce Wright</h2>
              <p className={styles.role}>Founder, Meridian Conference</p>
              <div className={styles.bio}>
                <p>
                  Jaxton Bruce Wright is a UC Berkeley undergraduate from Oxnard. He built
                  Meridian because the rooms that change a person&apos;s path should not
                  require a last name or a zip code to enter.
                </p>
                <p>
                  The first event, in December 2025, brought about 150 students face to face
                  with leaders from Netflix, OpenAI, and Chase Bank. Not for a lecture. For
                  direct conversations, and the introductions and referrals that followed.
                </p>
                <p>
                  On {EVENT_DATE_SHORT}, Meridian returns to {EVENT_VENUE}, built for 400
                  students from across Los Angeles, with high school students from Ventura
                  County invited. Free for every student who attends.
                </p>
                <p className={styles.contactLine}>
                  <a href="mailto:jaxtonwright11@berkeley.edu">jaxtonwright11@berkeley.edu</a>
                  <span className={styles.sep}>/</span>
                  <a href="https://calendly.com/jaxtonwright" target="_blank" rel="noopener noreferrer">
                    calendly.com/jaxtonwright
                  </a>
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
       </div>
      </div>
    </section>
  );
}
