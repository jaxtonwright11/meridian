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
                  src="/unnamed__3_.jpg"
                  alt="Jaxton Wright, Founder of Meridian Conference"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                />
                <p className={styles.photoCaption}>Jaxton Wright, Founder</p>
              </div>
              <div className={styles.secondaryPhoto}>
                <img
                  src="/IMG_7433.jpeg"
                  alt="Jaxton Wright speaking at a United States government podium"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                />
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
                  Jaxton Wright is 19 years old, from Oxnard, CA, studying Honors Economics and
                  Political Science at UC Berkeley. The first Meridian event brought roughly 150
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
                  That gap is what Meridian is closing.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
