'use client';

import { AnimateIn } from './AnimateIn';
import styles from './Partners.module.css';

export function Partners() {
  return (
    <section id="partners" className={styles.partners}>
      <div className="container">
       <div className="chunk">
        <AnimateIn>
          <p className="eyebrow">Partners</p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className={styles.headline}>Who is behind it</h2>
        </AnimateIn>

        <div className={styles.lead}>
          <AnimateIn delay={0.15}>
            <p>
              The General Atomics Sciences Education Foundation is funding Meridian, and
              bringing a hands-on aerospace engineering lab to the day. Students build
              something real, not sit through a talk.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className={styles.note}>
              More partners and the leaders joining them will be named here as they are
              confirmed.
            </p>
          </AnimateIn>
        </div>
       </div>
      </div>
    </section>
  );
}
