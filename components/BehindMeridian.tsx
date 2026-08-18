'use client';

import { AnimateIn } from './AnimateIn';
import styles from './BehindMeridian.module.css';

/**
 * The merged "who is behind this" section: the General Atomics Sciences
 * Education Foundation and George Leis, one place, one answer.
 */
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

          <div className={styles.grid}>
            <AnimateIn delay={0.15}>
              <div className={styles.block}>
                <h3 className={styles.blockTitle}>
                  General Atomics Sciences Education Foundation
                </h3>
                <p>
                  The foundation is funding Meridian and bringing a hands-on aerospace
                  engineering lab to the day. Students build something real, not sit
                  through a talk.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className={styles.block}>
                <div className={styles.person}>
                  <img
                    src="/opt/georgeleisandjaxtonpicture.webp"
                    srcSet="/opt/georgeleisandjaxtonpicture-mobile.webp 600w, /opt/georgeleisandjaxtonpicture.webp 1200w"
                    sizes="(max-width: 768px) 600px, 400px"
                    alt="George Leis with Jaxton Wright"
                    width={600}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    className={styles.photo}
                  />
                  <div>
                    <h3 className={styles.blockTitle}>George Leis</h3>
                    <p className={styles.personRole}>
                      Chairman, YMCA of the USA &middot; Executive Vice President, CalPrivate Bank
                    </p>
                  </div>
                </div>
                <p>
                  George Leis was among the first to believe in this conference and in
                  the person building it. He personally donated $1,000 to make the first
                  event possible, was present at Jaxton&apos;s high school graduation,
                  and they meet every time Jaxton is in town, without exception. His
                  investment in Meridian is a direct extension of his investment in what
                  young people from this community are capable of.
                </p>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.25}>
            <p className={styles.note}>
              More partners and the leaders joining them will be named here as they are
              confirmed.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
