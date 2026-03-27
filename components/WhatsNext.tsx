'use client';

import { AnimateIn, StaggerContainer, StaggerItem } from './AnimateIn';
import styles from './WhatsNext.module.css';

const timeline = [
  {
    icon: '01',
    title: 'Arrival & Welcome',
    desc: 'Students check in, receive materials, and enter the space. The energy builds.',
  },
  {
    icon: '02',
    title: 'Keynote Conversations',
    desc: 'Industry leaders share their path, then open the floor. No scripts. Direct access.',
  },
  {
    icon: '03',
    title: 'The 30-Second Favors',
    desc: 'Speakers offer real help on stage: internship intros, mentorship, career guidance with follow-through.',
  },
  {
    icon: '04',
    title: 'Direct Access Sessions',
    desc: 'Small-group conversations between students and leaders. The rooms where trajectories change.',
  },
  {
    icon: '05',
    title: 'Mentorship Matching',
    desc: 'Structured connections that continue after the event. Not a one-day thing.',
  },
];

export function WhatsNext() {
  return (
    <section id="next" className={styles.whatsNext}>
      <div className="container">
        <AnimateIn>
          <p className="caption">What&apos;s Next</p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2>Winter 2026</h2>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className={styles.subtitle}>
            The job market is shifting faster than most people expected.
            AI is changing what skills matter and who gets hired. Meridian exists
            because young people in Ventura County deserve to be in those conversations,
            not reading about them later. The next conference is coming Winter 2026.
            University chapter expansion is in development. If you want to be part
            of what comes next, this is where that starts.
          </p>
        </AnimateIn>

        <StaggerContainer className={styles.timeline} staggerDelay={0.1}>
          {timeline.map((item) => (
            <StaggerItem key={item.icon} className={styles.card}>
              <span className={styles.cardIcon}>{item.icon}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
