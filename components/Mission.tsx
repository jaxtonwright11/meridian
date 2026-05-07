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
                The opportunities available at elite institutions belong to every student
                across Los Angeles and Ventura Counties. Not just the ones who already know
                someone. Not just the ones whose parents went to college. Every student.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <p>
                Meridian Conference exists to close that gap. We bring founders, executives,
                and industry leaders into direct conversation with students who have the
                talent and ambition but not the access.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.35}>
              <p>
                Free admission. No gatekeepers. No lectures.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.4}>
              <hr className={styles.sectionRule} />
            </AnimateIn>

            <AnimateIn delay={0.5}>
              <p className={styles.closingStatement}>
                A meridian is the highest point in the arc and the line that connects
                where you are to where you are going. For students from across Southern
                California who never thought they could sit in a room with executives from
                Netflix and OpenAI, Meridian is that line.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.6}>
              <div className={styles.quote}>
                <p className={styles.pullQuote}>
                  <span className={styles.quoteMark}>&ldquo;</span>
                  Every young person in Los Angeles and Ventura Counties deserves access
                  to rooms that can change their path.
                </p>
                <p className={styles.attribution}>
                  Shaun Tolson, Ventura College, Class of 2028
                </p>
              </div>
            </AnimateIn>
          </div>

        </div>
      </div>
    </section>
  );
}
