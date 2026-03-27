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
                  Meridian started because of what Jaxton Wright kept watching happen
                  in Ventura County: talented people getting shut out of rooms
                  they actually belonged in.
                </p>
                <p>
                  I am 19, from Oxnard, CA, studying Honors Economics and Political Science
                  at UC Berkeley. I run four things at once: PRISM (a geographic community
                  perspective platform I founded with seed funding), Meridian Conference
                  (a free youth leadership conference I started in Ventura County, ~150 young
                  people, speakers from Netflix, OpenAI, and Chase Bank, December 2025),
                  an AI consulting practice ($317K+ in documented revenue recovered for
                  SoCal businesses), and DreamDealer (a real estate wholesaling pipeline
                  in Southern California). Before all of that, I worked on AI policy with
                  both sides of Congress, interned with Senator Schiff and Representative
                  Mace in the same year, and was invited to speak on AI and youth opportunity
                  at Harvard Kennedy School.
                </p>
                <p>
                  I grew up in Southern California watching talented people get shut out
                  of rooms they actually belonged in. Everything I build is some version
                  of opening that door and scaling it.
                </p>
                <p>
                  If any of this connects with you:{' '}
                  <a
                    href="https://calendly.com/jaxtonwright"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    calendly.com/jaxtonwright
                  </a>
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
