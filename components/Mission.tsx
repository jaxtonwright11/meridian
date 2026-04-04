'use client';

import { AnimateIn } from './AnimateIn';
import styles from './Mission.module.css';

export function Mission() {
  return (
    <section id="mission" className={styles.mission}>
      <div className="container">
        <AnimateIn>
          <p className="caption">Our Mission</p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h2 className={styles.headline}>Reverse Gatekeeping.</h2>
        </AnimateIn>

        <div className={styles.grid}>
          <div className={styles.text}>
            <AnimateIn delay={0.2}>
              <p>
                Meridian Conference brings Fortune 500 executives,
                founders, and leaders into the same room as young people
                who have the talent and ambition, yet lack the access.
                The space is designed to create those connections, not as
                a lecture, but as a introductory meeting.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <p>
                The opportunities available at elite institutions should belong
                to every young person, not just those who already know
                someone. Meridian Conference exists for that.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.4}>
              <hr className={styles.sectionRule} />
            </AnimateIn>

            <AnimateIn delay={0.5}>
              <p className={styles.closingStatement}>
                A meridian is the highest point on an arc and the line
                connecting where you are to your destination. That is
                what we are building.
              </p>
            </AnimateIn>
          </div>

          <div className={styles.quote}>
            <AnimateIn delay={0.3} direction="right">
              <blockquote className={styles.pullQuote}>
                <span className={styles.quoteMark}>&ldquo;</span>
                I walked into a room where people from Netflix and OpenAI were
                talking to students like me. Not at us. To us. I left with a
                mentor and a plan.
                <span className={styles.quoteMark}>&rdquo;</span>
              </blockquote>
              <p className={styles.attribution}>
                Shaun Tolson, Ventura College, Class of 2028
              </p>
            </AnimateIn>

          </div>
        </div>
      </div>
    </section>
  );
}
