import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/site/recap';
import { COMPANY_LINE, STUDENTS, EXECUTIVES, STARTUPS_WORD, NETWORK_FORM_URL } from '@/data/recap';

export const metadata: Metadata = pageMeta(
  'For Students',
  `At Meridian's first conference, ${STUDENTS} students met ${EXECUTIVES} executives at UCLA, in collaboration with USC. Join the Meridian Network.`,
  '/students/',
);

export default function StudentsPage() {
  return (
    <div className="m-page">
      <Nav />
      <main id="main">
        <section className="m-hero" style={{ paddingBottom: 48 }}>
          <div className="m-wrap">
            <span className="m-eyebrow">For Students</span>
            <h1>The Executives Came to the Students.</h1>
            <p className="m-lead" style={{ marginTop: 20 }}>
              {COMPANY_LINE} At our first conference, {STUDENTS} students met {EXECUTIVES} executives
              at UCLA, in collaboration with USC.
            </p>
            <div className="m-actions">
              <a className="btn btn-ink" href={NETWORK_FORM_URL} target="_blank" rel="noopener noreferrer">Join the Meridian Network</a>
            </div>
          </div>
        </section>

        <section className="m-section m-alt" aria-labelledby="day-h">
          <div className="m-wrap">
            <h2 id="day-h" className="m-title">How the Day Worked</h2>
            <div className="m-three m-cards3">
              <div>
                <h3>By Field</h3>
                <p>Executives got to know students by field.</p>
              </div>
              <div>
                <h3>Who You Are</h3>
                <p>Executives got to know students for who they are, not their resumes.</p>
              </div>
              <div>
                <h3>The Room, Reversed</h3>
                <p>The executives worked the room, not the students. {STARTUPS_WORD} student startups pitched at Demo Day.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="m-section" aria-labelledby="photos-h">
          <div className="m-wrap">
            <h2 id="photos-h" className="m-title">November 14 at UCLA</h2>
            <Gallery limit={4} />
            <p className="m-names"><a className="m-link" href="/conference/">More from the conference</a></p>
          </div>
        </section>

        <section className="m-section m-alt" aria-labelledby="next-h">
          <div className="m-wrap">
            <h2 id="next-h" className="m-title">Your Next Step</h2>
            <p className="m-lead">Join the Meridian Network to hear from Meridian as it grows.</p>
            <div className="m-actions">
              <a className="btn btn-ink" href={NETWORK_FORM_URL} target="_blank" rel="noopener noreferrer">Join the Meridian Network</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
