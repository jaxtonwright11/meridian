import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { PersonContact } from '@/components/PersonContact';
import { Explore, PressLinks } from '@/components/site/parts';
import { FirstMeridian } from '@/components/FirstMeridian';
import { confirmedLeaders, title } from '@/data/leaders';
import { livePartners } from '@/data/partners';
import { press } from '@/data/press';
import { MEETUPS, PARTNER_NAMED_BY } from '@/config';

export const metadata: Metadata = {
  title: 'Partners',
  description:
    'Meridian is scaling from one conference into a company that hosts in-person meetups by field. Companies, campus offices, and nonprofit partners work with us from the November 14 conference onward.',
};

// Brief v2 6.6 with v3 19.2 order. The universities block is left off until a
// university confirms (v2 6.6).
export default function PartnersPage() {
  const first = confirmedLeaders.slice(0, 5);
  return (
    <div className="m-page">
      <Nav />
      <main id="main">
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

        {/* 4. What is in it for you (brief v2 6.6) */}
        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">What is in it for you</span>
            <div className="m-three" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div><h3>Your name, in the room</h3><p>Partners run tables at the conference and are named in the room and in what we publish.</p></div>
              <div><h3>Meetups by field, under your name</h3><p>After the conference, we host in-person meetups by field, like engineering, pre-med, or business, under a partner&apos;s name, tent, and gear. Students form teams and build something from the same prompt, and the winning team takes home a prize from the partner or a cash prize.</p></div>
              <div><h3>Executives from your field</h3><p>Each meetup has one or two executives from that field. Your people meet them too.</p></div>
              <div><h3>Students and press, through who you are</h3><p>Students and press get to know a partner through its people and what it cares about, not a logo on a banner.</p></div>
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
          </div>
        </section>

        {/* Who we work with. The universities block stays off until a university says yes. */}
        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">Who we work with</span>
            <div className="m-three" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              <div><h3>Companies and brands</h3><p>Brands working with us on meetups, tables, and the day itself.</p><p style={{ marginTop: 10 }}><a className="m-link" href="/partners/directory/#companies-and-brands">See the group</a></p></div>
              <div><h3>Campus offices and departments</h3><p>UCLA and USC departments and student organizations reaching their students.</p><p style={{ marginTop: 10 }}><a className="m-link" href="/partners/directory/#ucla">See the group</a></p></div>
              <div><h3>Nonprofits and community organizations</h3><p>Programs that bring their students and alumni to the day.</p><p style={{ marginTop: 10 }}><a className="m-link" href="/partners/directory/#community-and-nonprofit">See the group</a></p></div>
            </div>
          </div>
        </section>

        {/* 6. How it works */}
        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">How it works</span>
            <div className="m-three">
              <div><h3>1. Tell us</h3><p>Tell us who you are and what you would like to do.</p></div>
              <div><h3>2. We talk</h3><p>We talk and find the right fit.</p></div>
              <div><h3>3. We build it together</h3><p>We build it together, starting with November 14 and continuing after.</p></div>
            </div>
          </div>
        </section>

        <FirstMeridian detail />

        {/* 7. Form and contact */}
        <section className="m-section" id="inquiries">
          <div className="m-wrap">
            <span className="m-eyebrow">Write to us</span>
            <h2 className="m-display m-h2">What would you like to do with Meridian?</h2>
            <ContactForm />
            <div style={{ marginTop: 48 }}><PersonContact /></div>
            <p className="m-small" style={{ marginTop: 28 }}>The General Atomics Sciences Education Foundation funds Meridian and the aerospace design lab.</p>
          </div>
        </section>
      </main>
      <Explore links={[['Partner directory', '/partners/directory/'], ['Conference', '/conference/'], ['About', '/about/']]} />
      <Footer />
    </div>
  );
}
