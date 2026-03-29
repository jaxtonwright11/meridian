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
                <strong>In mapping, a meridian is the highest point in the arc</strong> and the line that
                connects where you are to your destination. For young people
                who never thought they would have an opportunity to
                sit in a room with executives, Meridian is that line. The line that
                offers a face to face connection with success and opportunity.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <p>
                The opportunities available at elite institutions belong to every
                young person. Not just the ones who already know someone.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.4}>
              <p>
                Meridian Conference exists to close that gap. We bring Fortune 500
                leaders, founders, and executives into direct conversation with
                people who have the talent and ambition but not access. No
                gatekeepers or lectures.
              </p>
            </AnimateIn>
          </div>

          <div className={styles.quote}>
            <AnimateIn delay={0.3} direction="right">
              <blockquote className={styles.pullQuote}>
                <span className={styles.quoteMark}>&ldquo;</span>
                Every young person in Ventura County deserves access to rooms
                that can change that path.
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
