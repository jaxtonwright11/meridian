import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { PersonContact } from '@/components/PersonContact';
import { Explore, PressLinks, NETWORK_SENTENCE } from '@/components/site/parts';
import { confirmedLeaders, title } from '@/data/leaders';
import { livePartners } from '@/data/partners';
import { press } from '@/data/press';
import { MEETUPS, PARTNER_NAMED_BY } from '@/config';

export const metadata: Metadata = {
  title: 'Partners',
  description:
    'Meridian is scaling from one conference into a company that hosts in-person meetups by field. Companies, campus offices, and nonprofit partners work with us from the November 14 conference onward.',
};

// TODO(jax): the four "what is in it for you" blocks and the how-it-works steps
// live in the v2 brief, which did not arrive. The blocks below use only
// statements that appear in the v3 brief; how-it-works is not rendered.
export default function PartnersPage() {
  const first = confirmedLeaders.slice(0, 5);
  return (
    <div className="m-page">
      <Nav />
      <main>
        {/* 1. Lead */}
        <section className="m-hero" style={{ paddingBottom: 48 }}>
          <div className="m-wrap">
            <span className="m-eyebrow">Partners</span>
            <h1>Partner with Meridian.</h1>
            <p className="m-lead" style={{ marginTop: 20 }}>
              Meridian is scaling from one conference into a company that hosts in-person meetups
              by field. Companies, campus offices, and nonprofit partners work with us from the
              November 14 conference onward.
            </p>
          </div>
        </section>

        {/* 2. What a meetup looks like. TODO(jax): confirm the winning team prize wording. */}
        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">What a meetup looks like</span>
            <p className="m-display" style={{ maxWidth: '34ch', fontSize: 'clamp(24px, 3vw, 36px)' }}>
              A meetup is one field, in person. Take engineering: executives from engineering
              companies join, students from across Los Angeles campuses arrive, and student teams
              work the same challenge side by side. The winning team takes home a prize from the
              partner that hosts it, and the partner&apos;s name, people, and gear are on site.
            </p>
            {/* 3. The numbers, from config */}
            <p className="m-lead" style={{ marginTop: 24 }}>
              {MEETUPS.count} meetups across six fields, {MEETUPS.cadence}.
            </p>
            {PARTNER_NAMED_BY && (
              <p className="m-small" style={{ marginTop: 10 }}>
                Partners confirmed by {PARTNER_NAMED_BY} are named in the room on November 14.
              </p>
            )}
          </div>
        </section>

        {/* 4. What is in it for you */}
        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">What is in it for you</span>
            <div className="m-three" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div><h3>Students</h3><p>Students from across Los Angeles campuses, in person, working next to your team.</p></div>
              <div><h3>Executives</h3><p>Executives from your field in the same room.</p></div>
              <div><h3>Presence</h3><p>Your name, your people, and your gear are on site at the meetup you host.</p></div>
              <div><h3>The network</h3><p>{NETWORK_SENTENCE}</p></div>
            </div>
          </div>
        </section>

        {/* 5. Proof strip */}
        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">Proof</span>
            <p className="m-lead">
              {first.map((l) => `${l.name}${title(l) ? `, ${title(l)}` : ''}`).join('. ')}.
            </p>
            <p className="m-lead" style={{ marginTop: 12 }}>
              {confirmedLeaders.length} leaders confirmed for November 14.{' '}
              {livePartners.length} partners are working with us.{' '}
              <a className="m-link" href="/partners/directory/">See the partner directory</a>
            </p>
            <p className="m-lead" style={{ marginTop: 12 }}>Backed by George Leis, Chairman, YMCA of the USA.</p>
            {press.length > 0 && <div style={{ marginTop: 12 }}><PressLinks showPage={false} /></div>}
            <blockquote style={{ margin: '28px 0 0', maxWidth: '62ch' }}>
              <p style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 22, color: 'var(--heading)' }}>
                &ldquo;I had an amazing time speaking on my experience and being able to hear the
                experiences of so many other talented individuals.&rdquo;
              </p>
              <footer className="m-small" style={{ marginTop: 10 }}>
                <a href="https://www.instagram.com/theadrielshow/reels/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700, color: 'var(--ink)' }}>Adriel Miramontes</a>
                , Journalist and Host, The Adriel Show
              </footer>
            </blockquote>
          </div>
        </section>

        {/* 7. Form and contact */}
        <section className="m-section" id="inquiries">
          <div className="m-wrap">
            <span className="m-eyebrow">Write to us</span>
            <h2 className="m-display m-h2">What would you like to do with Meridian?</h2>
            <ContactForm />
            <div style={{ marginTop: 48 }}><PersonContact /></div>
          </div>
        </section>
      </main>
      <Explore links={[['Partner directory', '/partners/directory/'], ['Conference', '/conference/'], ['About', '/about/']]} />
      <Footer />
    </div>
  );
}
