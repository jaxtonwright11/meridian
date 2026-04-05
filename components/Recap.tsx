'use client';

import { AnimateIn } from './AnimateIn';
import { Carousel } from './Carousel';
import styles from './Recap.module.css';

const slides2025 = [
  {
    src: '/opt/img_9547.webp',
    mobileSrc: '/opt/img_9547-mobile.webp',
    alt: 'Full group of approximately 150 people at December 2025 Meridian Conference',
  },
  {
    src: '/opt/img_9543.webp',
    mobileSrc: '/opt/img_9543-mobile.webp',
    alt: 'Wide shot of full December 2025 panel, Jaxton moderating with five panelists',
  },
  {
    src: '/opt/img_1728.webp',
    mobileSrc: '/opt/img_1728-mobile.webp',
    alt: 'Woman standing with microphone speaking to crowd at December 2025',
  },
  {
    src: '/opt/img_1809.webp',
    mobileSrc: '/opt/img_1809-mobile.webp',
    alt: 'Two students in candid conversation at the event',
  },
  {
    src: '/opt/img_9545.webp',
    mobileSrc: '/opt/img_9545-mobile.webp',
    alt: 'Awards ceremony with group on stage holding recognition plaques',
  },
  {
    src: '/opt/img_9544.webp',
    mobileSrc: '/opt/img_9544-mobile.webp',
    alt: 'Four people in a casual post-event group moment backstage',
  },
  {
    src: '/opt/selfieofmygirlfriendmeandbestfriendaftertheevent.webp',
    mobileSrc: '/opt/selfieofmygirlfriendmeandbestfriendaftertheevent-mobile.webp',
    alt: 'Jaxton Wright with friends after the December 2025 conference',
  },
];

export function Recap() {
  return (
    <section id="recap" className={styles.recap}>
      <div className="container">
        <AnimateIn>
          <p className="caption">Past Events</p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2>December 2025: The First Chapter</h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className={styles.intro}>
            ~150 young people walked into a room with
            representatives from Netflix, OpenAI, and Chase Bank. Not for a
            lecture. For direct, face-to-face conversations with people who
            could change their trajectory. December 2025 was the first chapter
            of what became Meridian Conference.
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
                &ldquo;I had an amazing time speaking on my experience and being able to hear the experiences of so many other talented individuals.&rdquo;
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
