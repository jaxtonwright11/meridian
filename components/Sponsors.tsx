'use client';

import { AnimateIn, StaggerContainer, StaggerItem } from './AnimateIn';
import styles from './Sponsors.module.css';

const tiers = [
  {
    name: 'Presenting Sponsor',
    price: '$5,000+',
    accent: 'gold',
    featured: true,
    benefits: [
      'Named presenting sponsor across all materials and communications',
      '5-minute stage address or panel seat',
      'Logo on event signage, digital materials, social media, and press',
      'Dedicated recruitment table with pre-conference planning and optimization',
    ],
  },
  {
    name: 'Gold Sponsor',
    price: '$2,500',
    accent: 'gold',
    featured: false,
    benefits: [
      'Logo on all event signage and digital materials',
      'Recruitment table with direct access to young people',
      'Social media recognition across all Meridian channels',
    ],
  },
  {
    name: 'Community Partner',
    price: '$750',
    accent: 'default',
    featured: false,
    benefits: [
      'Name listed on partner wall and event program',
      'Social media mention',
      'Inclusion in post-event recap',
    ],
  },
];

export function Sponsors() {
  return (
    <section id="sponsors" className={styles.sponsors}>
      <div className="container">
        <AnimateIn>
          <p className="caption">Partner With Us</p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className={styles.headline}>Invest in What&apos;s Next.</h2>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className={styles.subtitle}>
            This is not logo placement on a banner. It is direct access to motivated
            young people, CSR content that reflects genuine impact, and brand
            association with a conference built on access.
          </p>
        </AnimateIn>

        <StaggerContainer className={styles.tierGrid} staggerDelay={0.15}>
          {tiers.map((tier) => (
            <StaggerItem
              key={tier.name}
              className={`${styles.tierCard} ${tier.featured ? styles.featured : ''} ${styles[tier.accent]}`}
            >
              <h3 className={styles.tierName}>{tier.name}</h3>
              <span className={styles.tierPrice}>{tier.price}</span>
              <div className={styles.divider} />
              <ul className={styles.benefits}>
                {tier.benefits.map((b, i) => (
                  <li key={i}>
                    <span className={styles.check}>&#10003;</span>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/jaxtonwright"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${tier.featured ? 'btn-gold' : 'btn-ghost'} ${styles.tierCta}`}
              >
                Request Info
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateIn delay={0.4}>
          <p className={styles.inkind}>
            In-kind sponsorships (venue, catering, technology, printing) are
            welcomed and recognized at equivalent tier levels.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
