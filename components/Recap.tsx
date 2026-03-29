'use client';

import { AnimateIn } from './AnimateIn';
import { Carousel } from './Carousel';
import styles from './Recap.module.css';

const slides2025 = [
  {
    src: '/IMG_9547.jpeg',
    alt: 'Full group of approximately 150 people at December 2025 Meridian Conference',
  },
  {
    src: '/IMG_9354.jpeg',
    alt: 'Empty December 2025 venue pre-event, purple/gray seats, full stage, three screens with branding',
  },
  {
    src: '/IMG_1727.jpeg',
    alt: 'Jaxton Wright at the event podium holding a mic with panelists seated beside him',
  },
  {
    src: '/IMG_9543.jpeg',
    alt: 'Wide shot of full December 2025 panel, Jaxton moderating with five panelists',
  },
  {
    src: '/IMG_9545.jpeg',
    alt: 'Awards ceremony with group on stage holding recognition plaques',
  },
  {
    src: '/IMG_1728.jpeg',
    alt: 'Woman standing with microphone speaking to crowd at December 2025',
  },
  {
    src: '/IMG_1809.jpeg',
    alt: 'Two students in candid conversation at the event',
  },
  {
    src: '/IMG_9544.jpeg',
    alt: 'Four people in a casual post-event group moment backstage',
  },
  {
    src: '/selfieofmygirlfriendmeandbestfriendaftertheevent.jpeg',
    alt: 'Jaxton Wright with friends after the December 2025 conference',
  },
];

export function Recap() {
  return (
    <section id="recap" className={styles.recap}>
      <div className="container">
        <AnimateIn>
          <p className="caption">December 2025</p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2>December 2025: The First Chapter</h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className={styles.intro}>
            Roughly 150 young people walked into a room with
            representatives from Netflix, OpenAI, and Chase Bank. Not for a
            lecture. For direct, face-to-face conversations with people who
            could change their trajectory. December 2025 was the last event
            under the Young &amp; Gifted name and the first chapter of what
            became Meridian.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <Carousel slides={slides2025} />
        </AnimateIn>

        {/* Testimonials */}
        <div className={styles.testimonials}>
          <AnimateIn delay={0.2}>
            <div className={styles.testimonial}>
              <blockquote>
                &ldquo;The young people in that room came prepared. They asked real questions
                and stayed after to keep the conversation going. I was grateful
                to be invited to speak.&rdquo;
              </blockquote>
              <cite>
                <a
                  href="https://www.instagram.com/theadrielshow/reels/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adriel Miramontes
                </a>
                , Journalist and Host, The Adriel Show
                <br />
                <a
                  href="https://www.instagram.com/theadrielshow/reels/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  @theadrielshow on Instagram
                </a>
              </cite>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className={styles.testimonial}>
              <blockquote>
                &ldquo;It was refreshing to hear directly from young people already making
                waves. I walked out feeling inspired and empowered to do the same.&rdquo;
              </blockquote>
              <cite>
                <a
                  href="https://www.linkedin.com/in/jade-tran-449138254/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jade Tran
                </a>
                , UCLA, Class of 2025
                <br />
                <a
                  href="https://www.linkedin.com/in/jade-tran-449138254/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  Jade Tran on LinkedIn
                </a>
              </cite>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
