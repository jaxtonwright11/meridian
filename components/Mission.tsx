'use client';

import { AnimateIn } from './AnimateIn';
import { EVENT_DATE, EVENT_VENUE } from '@/config';
import styles from './Mission.module.css';

export function Mission() {
  return (
    <section id="mission" className={styles.mission}>
      <div className="container">
       <div className="chunk">
        <AnimateIn>
          <p className="eyebrow">The mission</p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h2 className={styles.headline}>Reverse gatekeeping</h2>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <p className={styles.dateline}>
            {EVENT_DATE} &middot; {EVENT_VENUE} &middot; Free for every student
          </p>
        </AnimateIn>

        <div className={styles.text}>
          <AnimateIn delay={0.2}>
            <p className={styles.lead}>
              The rooms that change a person&apos;s path should not require a last name
              or a zip code to enter. Meridian brings students face to face with the
              founders, executives, and leaders who usually sit on the other side of
              that door.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.25}>
            <p>
              It is built for university students from across Los Angeles, with high
              school students from Ventura County invited. It is free for every student
              who attends. No gatekeepers and no one in the room you could not walk up to.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <hr className="rule" style={{ margin: '32px 0', maxWidth: '120px' }} />
          </AnimateIn>

          <AnimateIn delay={0.35}>
            <p className={styles.closing}>
              A meridian is the highest point in the arc, and the line that connects
              where you are to where you are going. For a student who never thought
              they could sit in a room with leaders from Netflix or OpenAI, Meridian
              is that line.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            <figure className={styles.quote}>
              <blockquote className={styles.pullQuote}>
                Every young person here deserves access to rooms that can change
                their path.
              </blockquote>
              <figcaption className={styles.attribution}>
                Shaun Tolson, Ventura College, Class of 2028
              </figcaption>
            </figure>
          </AnimateIn>
        </div>
       </div>
      </div>
    </section>
  );
}
