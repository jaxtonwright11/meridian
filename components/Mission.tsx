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
          <h2 className={styles.headline}>Reverse the Gatekeeping.</h2>
        </AnimateIn>

        <div className={styles.grid}>
          <div className={styles.text}>
            <AnimateIn delay={0.2}>
              <p>
                The opportunities available at elite institutions belong to every
                young person in Ventura County. Not just the ones who already know
                someone. Not just the ones whose parents went to college. Every
                young person.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <p>
                Meridian Conference exists to close that gap. We bring Fortune 500
                leaders, founders, and executives into direct conversation with
                young people who have the talent and ambition but not the access.
                Free admission. No gatekeepers. No lectures.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.4}>
              <p>
                A meridian is the highest point in the arc and the line that
                connects where you are to where you&apos;re going. For young people from
                Oxnard who never thought they could sit in a room with Netflix
                and OpenAI executives, Meridian is that line.
              </p>
            </AnimateIn>
          </div>

          <div className={styles.quote}>
            <AnimateIn delay={0.3} direction="right">
              <blockquote className={styles.pullQuote}>
                <span className={styles.quoteMark}>&ldquo;</span>
                Every young person in Ventura County deserves access to the rooms
                that change their path. That is what Meridian is building.
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
