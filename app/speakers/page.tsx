import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { ExecsInRoom } from '@/components/site/recap';
import { STUDENTS, EXECUTIVES, EMAIL, EXECUTIVE_MAILTO, LINKEDIN } from '@/data/recap';

export const metadata: Metadata = pageMeta(
  'For Executives',
  `Meridian connects executives with the next generation of talent. At our first conference, ${EXECUTIVES} executives met ${STUDENTS} students at UCLA, in collaboration with USC.`,
  '/speakers/',
);

export default function ExecutivesPage() {
  return (
    <div className="m-page">
      <Nav />
      <main id="main">
        <section className="m-hero" style={{ paddingBottom: 48 }}>
          <div className="m-wrap">
            <span className="m-eyebrow">For Executives</span>
            <h1>Meet the Next Generation of Talent.</h1>
            <p className="m-lead" style={{ marginTop: 20 }}>
              Meridian connects executives with the next generation of talent, in person and by field.
              At our first conference, {EXECUTIVES} executives met {STUDENTS} students at UCLA, in
              collaboration with USC.
            </p>
            <div className="m-actions">
              <a className="btn btn-ink" href={EXECUTIVE_MAILTO}>Get in touch</a>
            </div>
          </div>
        </section>

        <section className="m-section m-alt" aria-labelledby="why-h">
          <div className="m-wrap">
            <h2 id="why-h" className="m-title">What Executives Got</h2>
            <div className="m-three m-cards3">
              <div>
                <h3>Students in Your Field</h3>
                <p>Executives met students by field, so each conversation opened on work they know.</p>
              </div>
              <div>
                <h3>People, Not Resumes</h3>
                <p>Executives got to know students for who they are, before a resume came into it.</p>
              </div>
              <div>
                <h3>You Work the Room</h3>
                <p>We reversed the conference. The executives worked the room, not the students.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="m-section" aria-labelledby="format-h">
          <div className="m-wrap">
            <h2 id="format-h" className="m-title">One Format, Any Field</h2>
            <p className="m-lead">
              Executives and students in one room, by field, face to face. The same format works in any
              field and on any campus. Meridian is growing from here.
            </p>
          </div>
        </section>

        <section className="m-section m-alt" aria-labelledby="execs-h">
          <div className="m-wrap">
            <h2 id="execs-h" className="m-title">Executives in the Room</h2>
            <ExecsInRoom />
          </div>
        </section>

        <section className="m-section" aria-labelledby="next-h">
          <div className="m-wrap">
            <h2 id="next-h" className="m-title">Get in Touch</h2>
            <p className="m-lead">Write to Jaxton Wright, founder of Meridian.</p>
            <div className="m-actions">
              <a className="btn btn-ink" href={EXECUTIVE_MAILTO}>Get in touch</a>
              <a className="m-link" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a className="m-link" href={LINKEDIN.url} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
