'use client';

import { AnimateIn } from './AnimateIn';
import styles from './Proof.module.css';

/**
 * The evidence beat on the student page: one photo of the first event's room
 * and one student voice. Answers "is this real, do people like me go" in the
 * half second the text cannot. Full recap lives on /partners.
 */
export function Proof() {
  return (
    <section id="proof" className={styles.section}>
      <div className="container">
        <div className="chunk">
          <AnimateIn>
            <figure className={styles.figure}>
              <img
                src="/opt/img_9547.webp"
                srcSet="/opt/img_9547-mobile.webp 600w, /opt/img_9547.webp 1200w"
                sizes="(max-width: 768px) 600px, 940px"
                alt="The full room of about 150 students and leaders at the first Meridian Conference"
                width={1200}
                height={639}
                loading="lazy"
                decoding="async"
                className={styles.photo}
              />
              <figcaption className={styles.caption}>
                December 2025. The first Meridian, about 150 students in the room.
              </figcaption>
            </figure>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <figure className={styles.quote}>
              <blockquote className={styles.blockquote}>
                &ldquo;It was refreshing to hear directly from young people already
                making waves. I walked out feeling inspired and empowered to do the
                same.&rdquo;
              </blockquote>
              <figcaption className={styles.attribution}>
                Jade Tran, UCLA, Class of 2025
              </figcaption>
            </figure>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
