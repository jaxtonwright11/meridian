import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { FaqList } from '@/components/FaqList';
import { Explore, RegisterButton, EVENTS_SENTENCE } from '@/components/site/parts';
import { photoLeaders, title } from '@/data/leaders';
import { faqs } from '@/data/faq';
import { REGISTRATION_CLOSES_LABEL, EVENT_OVER } from '@/config';
import { schedule, clock } from '@/data/schedule';
import { livePartners } from '@/data/partners';

const runOfShow = schedule.items.filter((i) => i.status === 'live' && i.title !== 'Close');

export const metadata: Metadata = pageMeta(
  'For Students',
  'A day at UCLA where executives from every field come to you. Saturday, November 14, 2026.',
  '/students/',
);

// Brief v2 6.3 with v3 wording.
export default function StudentsPage() {
  const twelve = photoLeaders.slice(0, 12);
  const studentFaqs = faqs.filter((f) => f.audience === 'Students').slice(0, 6);
  return (
    <div className="m-page">
      <Nav />
      <main id="main">
        <section className="m-hero" style={{ paddingBottom: 48 }}>
          <div className="m-wrap">
            <span className="m-eyebrow">For Students</span>
            <h1>A Day Where Executives Come to You.</h1>
            <p className="m-lead" style={{ marginTop: 20 }}>
              Meridian brings executives and students together in person, by field. The conference
              is a day at UCLA where executives from every field come to you.
            </p>
            <div className="m-actions">
              <RegisterButton />
              {!EVENT_OVER && <span className="m-small">Registration closes {REGISTRATION_CLOSES_LABEL}.</span>}
            </div>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <h2 className="m-title">How the Day Goes</h2>
            <div className="m-run">
              {runOfShow.map((i) => (
                <div className="m-run-row" key={i.time}>
                  <span className="m-run-time">{clock(i.time)}</span>
                  <div>
                    <h3>{i.title}</h3>
                    {i.body && <p>{i.body}</p>}
                    {i.tracks && (
                      <ul>
                        {i.tracks.map((k) => (<li key={k.name}><strong>{k.name}.</strong> {k.line}</li>))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="m-section m-alt">
          <div className="m-wrap">
            <h2 className="m-title">What You Can Do</h2>
            <div className="m-three m-two" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div><h3>Aerospace Design Lab</h3><p>A hands-on build led by NASA engineers, with two sessions during the day.</p></div>
              <div><h3>Demo Day</h3><p>Student founders and researchers pitch to executives, investors, and press. <a className="m-link" href="/demo-day/">See how it works.</a></p></div>
              <div><h3>Roundtables</h3><p>Small groups by field and goal, each with an executive or host. Crossover roundtables mix fields on purpose, so you meet people whose work you are curious about.</p></div>
              <div><h3>Workshops</h3><p>Short sessions led by executives.</p></div>
              <div><h3>Professional Headshots</h3><p>Photographers from Las Fotos Project shoot a headshot for every student.</p></div>
              <div><h3>Partner Tables</h3><p>Companies, campus offices, and organizations, {livePartners.length} so far. <a className="m-link" href="/partners/directory/">See who is working with us.</a></p></div>
              <div><h3>Lunch With Executives</h3><p>Tables mix field, school, and year, with an executive or host at most of them.</p></div>
              <div><h3>Petersen Automotive Museum</h3><p>A 1955 Pontiac and a 1955 Bel Air on the floor, with museum staff.</p></div>
            </div>
          </div>
        </section>

        <section className="m-section m-alt">
          <div className="m-wrap">
            <span className="m-eyebrow">Who Will Be There</span>
            <h2 className="m-title">Executives Joining You</h2>
            <div className="m-people m-twelve">
              {twelve.map((l) => (
                <div className="m-person" key={l.slug}>
                  <img src={l.photo} alt={l.name} width={300} height={300} loading="lazy" />
                  <h3>{l.name}</h3>
                  {title(l) && <p className="m-role">{title(l)}</p>}
                </div>
              ))}
            </div>
            <p className="m-actions"><a className="btn btn-tan" href="/leaders/">See everyone joining</a></p>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <div className="m-three m-two" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div>
                <h3>Who Can Come</h3>
                {/* Jax, Oct 16: keep UCLA, USC, and UC Berkeley. */}
                <p>University students from across Los Angeles and Ventura Counties. UCLA, USC, and UC Berkeley students are all welcome.</p>
              </div>
              <div>
                <h3>Joining Online</h3>
                <p>There is a Zoom option when you register. In-person space is 400.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">After November 14</span>
            <p className="m-lead">{EVENTS_SENTENCE} You will hear about them once you have registered.</p>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">Questions</span>
            <h2 className="m-title">Student Questions</h2>
            <FaqList items={studentFaqs} />
            <p style={{ marginTop: 20 }}><a className="m-link" href="/faq/">All questions</a></p>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <div className="m-closing">
              <h2 className="m-title" style={{ marginBottom: 8 }}>{EVENT_OVER ? 'See What Comes Next' : 'Register for November 14'}</h2>
              <p className="m-lead">{EVENT_OVER ? 'Follow Meridian on Instagram for the next event.' : `Registration closes ${REGISTRATION_CLOSES_LABEL}.`}</p>
              <div className="m-actions"><RegisterButton /></div>
            </div>
          </div>
        </section>
      </main>
      <Explore links={[['Conference', '/conference/'], ['Demo Day', '/demo-day/'], ['FAQ', '/faq/']]} />
      <Footer />
    </div>
  );
}
