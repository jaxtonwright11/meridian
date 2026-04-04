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
];

export function WhatsNext() {
  return (
    <section id="next" className={styles.whatsNext}>
      <div className="container">
        <AnimateIn>
          <p className="caption">What&apos;s Next</p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2>What the Day Looks Like</h2>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className={styles.subtitle}>
            Students who lack access to preparation are the most at risk as
            industries shift. AI is replacing roles faster than most schools
            are teaching people to adapt, and historically underserved
            communities face the steepest gap.
          </p>
        </AnimateIn>
        <AnimateIn delay={0.3}>
          <p className={styles.subtitle}>
            Meridian exists to close that gap in Ventura County by giving
            students real access to the people, knowledge, and rooms that
            change what is possible for them.
          </p>
        </AnimateIn>
        <AnimateIn delay={0.4}>
          <p className={styles.subtitle}>
            December 2026 is the next conference. University chapter expansion
            is in development. If you want to be part of what comes next,
            this is where it starts.
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
