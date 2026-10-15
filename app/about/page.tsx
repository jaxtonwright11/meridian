import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Explore, RegisterButton } from '@/components/site/parts';
import { leaders } from '@/data/leaders';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meridian is a company that brings students and executives together in person, by field. It starts with a conference at UCLA on November 14 and scales into 25 in-person meetups across six fields.',
};

// Founder bio: brief section 15. TODO(jax): approve the wording.
// Harvard appears here and nowhere else on the site (brief 10.1).
const FOUNDER_BIO =
  'Jaxton Wright is from Oxnard, California, and studies Honors Economics and Political Science at UC Berkeley. In July 2025, he gave a speech at Harvard, and afterward he created Meridian, a company that brings students and executives together in person, by field. Meridian starts with a free conference on November 14, where leaders get to know students and each one is looking to help with opportunities they manage. The day includes a demo day for student founders and researchers and a design lab led by NASA engineers. Starting November 14, Meridian scales from one conference into a company that hosts 25 in-person meetups across six fields over the following year, roughly two a month, beginning with engineering, pre-med, and business. Each brings executives from that field together with students from across Los Angeles campuses, with student teams working the same challenge side by side, and everyone who attends joins the Meridian network.';

export default function AboutPage() {
  const george = leaders.find((l) => l.slug === 'george-leis')!;
  return (
    <div className="m-page">
      <Nav />
      <main>
        <section className="m-hero" style={{ paddingBottom: 40 }}>
          <div className="m-wrap">
            <span className="m-eyebrow">About</span>
            <h1>Meridian is a company that brings students and executives together, in person, by field.</h1>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">The idea</span>
            <p className="m-display">
              College and networking were supposed to open doors, and instead the goalposts keep
              moving further out. Meridian exists to <strong>reverse gatekeeping</strong>. We bring
              students into the same room as the people in their field, in person, and make that an
              ongoing part of what we do.
            </p>
          </div>
        </section>

        <section className="m-section" id="founder">
          <div className="m-wrap">
            <span className="m-eyebrow">The founder</span>
            <div className="m-person-block" style={{ gridTemplateColumns: 'minmax(0, 260px) 1fr', gap: 40 }}>
              <img src="/opt/unnamed__3_.webp" alt="Jaxton Wright, founder of Meridian" width={520} height={650}
                   style={{ width: '100%', height: 'auto', aspectRatio: '4 / 5', objectFit: 'cover', borderRadius: 0 }} />
              <div>
                <h2 className="m-h2" style={{ marginBottom: 6 }}>Jaxton Wright</h2>
                <p className="m-small" style={{ marginBottom: 18 }}>Founder. Junior, Honors Economics, UC Berkeley.</p>
                <p className="m-lead">{FOUNDER_BIO}</p>
                <p style={{ marginTop: 16 }}><a className="m-link" href="/team/">Meet the team</a></p>
              </div>
            </div>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">Who backs this</span>
            <div className="m-person-block" style={{ gridTemplateColumns: 'minmax(0, 160px) 1fr', gap: 32 }}>
              <img src={george.photo} alt={george.name} width={320} height={320} loading="lazy" style={{ width: '100%', height: 'auto', aspectRatio: '1', borderRadius: 0 }} />
              <div>
                <h3 style={{ fontSize: 26, marginBottom: 4 }}>{george.name}</h3>
                <p className="m-small" style={{ marginBottom: 14 }}>{george.roles.join('. ')}</p>
                {george.bioApproved && george.bio?.split('\n\n').map((para) => (<p key={para} style={{ marginBottom: 12 }}>{para}</p>))}
              </div>
            </div>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <div className="m-actions" style={{ marginTop: 0 }}><RegisterButton /></div>
          </div>
        </section>
      </main>
      <Explore links={[['Team', '/team/'], ['Past events', '/past/'], ['Partners', '/partners/'], ['Press', '/press/']]} />
      <Footer />
    </div>
  );
}
