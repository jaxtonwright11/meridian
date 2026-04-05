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
                  alt="Jaxton Wright, Founder of Meridian Conference"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                />
                <p className={styles.photoCaption}>Jaxton Wright, Founder</p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn direction="right" delay={0.15}>
            <div className={styles.content}>
              <p className="caption">The Founder</p>
              <h2 className={styles.name}>Jaxton Wright</h2>
              <p className={styles.role}>Founder, Meridian Conference</p>
              <div className={styles.bio}>
                <p>
                  Jaxton Wright is 19 years old, from Southern California, studying Honors Economics and
                  Political Science at UC Berkeley. The first Meridian event brought ~150
                  young people into the same room as leaders from Netflix, OpenAI, and
                  Chase Bank. The conversations were real, and the outcomes were the following:
                  mentorships, internship introductions, career pivots.
                </p>
                <p>
                  Jaxton has worked on AI policy with both sides of Congress, interning with
                  Senator Schiff and Representative Mace in the same year, and was invited
                  to speak on AI and youth opportunity at Harvard Kennedy School. Outside
                  of Meridian, he founded PRISM, a seed-funded geographic community
                  platform, and runs an AI consulting practice with $317K+ in documented
                  revenue recovered for Southern California businesses.
                </p>
                <p>
                  Meridian exists because access to rooms, people, and opportunities are not
                  distributed equally. That is the gap this conference is focused on closing.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
