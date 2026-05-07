'use client';

import { AnimateIn, StaggerContainer, StaggerItem } from './AnimateIn';
import styles from './WhatsNext.module.css';

const timeline = [
  {
    icon: '01',
    title: 'The 30-Second Favors',
    desc: 'Speakers offer real help on stage: internship intros, mentorship, career guidance with follow-through.',
    featured: true,
  },
  {
    icon: '02',
    title: 'Arrival & Welcome',
    desc: 'Students check in, receive materials, and enter the space. The energy builds.',
    featured: false,
  },
  {
    icon: '03',
    title: 'Keynote Conversations',
    desc: 'Industry leaders share their path, then open the floor. No scripts. Direct access.',
    featured: false,
  },
  {
    icon: '04',
    title: 'Direct Access Sessions',
    desc: 'Small-group conversations between students and leaders. The rooms where trajectories change.',
    featured: false,
  },
  {
    icon: '05',
    title: 'Mentorship Matching',
    desc: 'Students are paired with mentors based on goals and industry. Relationships that continue beyond the event.',
    featured: false,
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
            400 students from Los Angeles and Ventura Counties. Hosted in Los Angeles County.
            A half-day conference built around direct access, real mentorship, and conversations
            that continue long after the event ends.
          </p>
        </AnimateIn>

        <StaggerContainer className={styles.timeline} staggerDelay={0.1}>
          {timeline.map((item) => (
            <StaggerItem key={item.icon} className={`${styles.card} ${item.featured ? styles.cardFeatured : ''}`}>
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
