import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { FaqList } from '@/components/FaqList';
import { Explore, RegisterButton, EVENTS_SENTENCE } from '@/components/site/parts';
import { photoLeaders, title } from '@/data/leaders';
import { faqs } from '@/data/faq';
import { REGISTRATION_CLOSES_LABEL } from '@/config';

export const metadata: Metadata = pageMeta(
  'For students',
  'A free day at UCLA where leaders from every field come to you. Nothing to prepare, nothing to bring. Saturday, November 14, 2026.',
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
            <span className="m-eyebrow">For students</span>
            <h1>A free day where leaders come to you.</h1>
            <p className="m-lead" style={{ marginTop: 20 }}>
              Meridian brings students and executives together in person, by field. The conference
              is a free day at UCLA where leaders from every field come to you. Nothing to prepare.
              Nothing to bring.
            </p>
            <div className="m-actions">
              <RegisterButton />
              <span className="m-small">Registration closes {REGISTRATION_CLOSES_LABEL}.</span>
            </div>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">What happens</span>
            <p className="m-idea">
              You walk in, get a name tag, and the room is open. Leaders get to know students, each
              looking to help with opportunities they manage. Talk to anyone. If that feels like a
              lot, find a host and they will make the introduction.
            </p>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">Besides talking</span>
            <h2 className="m-title">What you can do</h2>
            <div className="m-list" style={{ maxWidth: 760 }}>
              <div className="m-row" style={{ gridTemplateColumns: '1fr' }}><span className="n">Join the aerospace design lab, led by NASA engineers.</span></div>
              <div className="m-row" style={{ gridTemplateColumns: '1fr' }}><span className="n">Present at <a className="m-link" href="/demo-day/">demo day</a>.</span></div>
              <div className="m-row" style={{ gridTemplateColumns: '1fr' }}><span className="n">Get a free professional headshot.</span></div>
              <div className="m-row" style={{ gridTemplateColumns: '1fr' }}><span className="n">Visit the partner tables.</span></div>
            </div>
          </div>
        </section>

        <section className="m-section m-alt">
          <div className="m-wrap">
            <span className="m-eyebrow">Who will be there</span>
            <h2 className="m-title">Leaders joining you</h2>
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
            <div className="m-three">
              <div>
                <h3>Who can come</h3>
                {/* Jax, Oct 16: keep UCLA, USC, and UC Berkeley. */}
                <p>University students from across Los Angeles and Ventura Counties. UCLA, USC, and UC Berkeley students are all welcome.</p>
              </div>
              <div>
                <h3>Nothing to pay</h3>
                <p>Nothing to pay at registration or at the door.</p>
              </div>
              <div>
                <h3>Joining online</h3>
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
            <h2 className="m-title">Student questions</h2>
            <FaqList items={studentFaqs} />
            <p style={{ marginTop: 20 }}><a className="m-link" href="/faq/">All questions</a></p>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <div className="m-closing">
              <h2 className="m-title" style={{ marginBottom: 8 }}>Register for November 14</h2>
              <p className="m-lead">Registration closes {REGISTRATION_CLOSES_LABEL}.</p>
              <div className="m-actions"><RegisterButton /></div>
            </div>
          </div>
        </section>
      </main>
      <Explore links={[['Conference', '/conference/'], ['Demo day', '/demo-day/'], ['FAQ', '/faq/']]} />
      <Footer />
    </div>
  );
}
