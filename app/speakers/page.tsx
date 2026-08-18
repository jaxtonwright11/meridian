import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { EVENT_DATE, EVENT_VENUE, CONTACT_EMAIL } from '@/config';
import styles from './speakers.module.css';

export const metadata: Metadata = {
  title: 'For Speakers | Meridian Conference',
  description:
    'What Meridian asks of the leaders in the room: nothing to prepare, nothing to carry afterward, and a scope you set yourself. Saturday, November 14, 2026 at UCLA.',
};

// Source: the canonical executive-facing description of Meridian. Sectioned,
// not softened. The three ideas that make senior people say yes: nothing to
// prepare, nothing to carry afterward, guests set their own scope.
export default function SpeakersPage() {
  return (
    <>
      <Nav home={false} />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className="container">
            <div className="chunk">
              <p className="eyebrow">For speakers and leaders</p>
              <h1 className={styles.headline}>One day in the room.</h1>
              <p className={styles.lead}>
                Meridian Conference is a free, student run 501(c)(3) conference on{' '}
                {EVENT_DATE} at {EVENT_VENUE}, built for 400 university students across
                Los Angeles and Ventura Counties. Many are first generation. A number
                are already building companies.
              </p>

              <div className={styles.blocks}>
                <div className={styles.block}>
                  <h2 className={styles.blockTitle}>The format</h2>
                  <p>
                    The format is inverted. Leaders don&apos;t speak from a stage and
                    leave. They circulate, sit with students, and each one names a
                    single concrete thing they can do for someone in the room. They set
                    the scope themselves.
                  </p>
                </div>

                <div className={styles.block}>
                  <h2 className={styles.blockTitle}>The room</h2>
                  <p>
                    The room being assembled includes bank executives, founders who have
                    built and sold companies, a public company chief executive, former
                    university presidents, deans, and civic leaders.
                  </p>
                </div>

                <div className={styles.block}>
                  <h2 className={styles.blockTitle}>From the stage, if you want it</h2>
                  <p>
                    Part of the day is given to short remarks from the stage. A few
                    minutes, no deck: who you are, what you built, and one thing a
                    student can use on Monday. Guests who would rather spend the whole
                    day in conversation do that instead.
                  </p>
                </div>

                <div className={styles.block}>
                  <h2 className={styles.blockTitle}>Nothing to prepare, nothing to carry</h2>
                  <p>
                    Nothing needs preparing, and nothing needs carrying afterward. Every
                    commitment made that day is tracked and closed out by Meridian
                    within two weeks, so students never get handed your inbox.
                  </p>
                </div>
              </div>

              <p className={styles.founder}>
                Founded and run by Jaxton Wright, UC Berkeley &apos;28.
              </p>

              <div className={styles.cta}>
                <p className={styles.ctaLabel}>Speaker and partner inquiries</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Speaker%20or%20partner%20inquiry`}
                  className="btn btn-ink"
                >
                  {CONTACT_EMAIL}
                </a>
                <p className={styles.ctaAlt}>
                  Or book a call directly:{' '}
                  <a
                    href="https://calendly.com/jaxtonwright"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    calendly.com/jaxtonwright
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
