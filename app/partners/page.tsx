import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { PersonContact } from '@/components/PersonContact';
import { Explore, PressLinks, StatRow } from '@/components/site/parts';
import { FirstMeridian } from '@/components/FirstMeridian';
import { confirmedLeaders, title } from '@/data/leaders';
import { livePartners } from '@/data/partners';
import { press } from '@/data/press';
import { PARTNER_NAMED_BY } from '@/config';

export const metadata: Metadata = pageMeta(
  'Partners',
  'Meridian starts with a conference and creates hackathon-style events by field. Companies, campus offices, and community partners work with us from the November 14 conference onward.',
  '/partners/',
);

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
            <h1>Partner with Meridian.</h1>
            <p className="m-lead" style={{ marginTop: 20 }}>
              Meridian starts with a conference and creates hackathon-style events
              by field. Companies, campus offices, and community partners work with us from the
              November 14 conference onward.
            </p>
          </div>
        </section>

        <StatRow />

        {/* 2. What an event looks like. No partner has hosted one yet, so nothing here says one has. */}
        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">What an Event Looks Like</span>
            <p className="m-idea">
              An event is one field, in one room, run as a hackathon. Take pre-med: physicians and
              healthcare executives join, and students from UCLA, USC, UC Berkeley, and other Los
              Angeles campuses are placed on teams with people from schools they would not normally
              meet. Each team gets one real problem from the field and a day to work on it, then
              presents to the executives in the room. The winning team takes home a prize. The format
              fits the field: in art, teams make a film together before they present and compete.
            </p>
            {PARTNER_NAMED_BY && (
              <p className="m-small" style={{ marginTop: 10 }}>
                Partners confirmed by {PARTNER_NAMED_BY} are named in the room on November 14.
              </p>
            )}
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <h2 className="m-title">Who We Are</h2>
            <div className="m-three m-two" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div><h3>Cross-Campus by Design</h3><p>Teams mix students from different campuses on purpose, so students work with people from schools they would otherwise never meet.</p></div>
              <div><h3>Built From the Inside</h3><p>Meridian is run by students at UCLA, USC, and UC Berkeley, with ties to each campus&apos;s administration and student body.</p></div>
              <div><h3>From Los Angeles</h3><p>Founded by Jaxton Wright, from Oxnard, and built for students across Los Angeles and Ventura Counties.</p></div>
              <div><h3>Executives in the Room</h3><p>Executives from the field are at every event, there to get to know students and open doors for them.</p></div>
            </div>
          </div>
        </section>

        {/* 4. What is in it for you. Reasons companies partner with student groups: talent access, repeat presence, next-generation insight, a real problem in front of student teams. */}
        <section className="m-section m-alt">
          <div className="m-wrap">
            <h2 className="m-title">What Is in It for You</h2>
            <div className="m-three m-two" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div><h3>Students in Your Field, Early</h3><p>Meet students in your field in a working setting, not across a career-fair table, before other employers do.</p></div>
              <div><h3>Set the Challenge</h3><p>Bring a real problem from your field. Student teams work on it, you see how they think, and you hear how the next generation approaches it.</p></div>
              <div><h3>Be Remembered</h3><p>After the conference, Meridian creates events by field, so students meet your team more than once. A partner is known by its people, not by a logo on a banner.</p></div>
              <div><h3>Campus Access</h3><p>Meridian has ties to the administrations and student bodies of UCLA, USC, and UC Berkeley. Work with us to reach those campuses.</p></div>
              <div><h3>Executives From Your Field</h3><p>Each event has executives from that field in the room, and your people meet them too.</p></div>
              <div><h3>A Network That Lasts</h3><p>Everyone who attends joins the Meridian network. We are building software that matches students with opportunities that fit them, including yours.</p></div>
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
              {confirmedLeaders.length} executives confirmed for November 14.{' '}
              {livePartners.length} partners are working with us.{' '}
              <a className="m-link" href="/partners/directory/">See the partner directory</a>
            </p>
            <p className="m-lead" style={{ marginTop: 12 }}>Backed by George Leis, Chairman, YMCA of the USA, and President, CalPrivate Bank.</p>
            {press.length > 0 && <div style={{ marginTop: 12 }}><PressLinks showPage={false} /></div>}
          </div>
        </section>

        {/* Who we work with. The universities block stays off until a university says yes. */}
        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">Who We Work With</span>
            <div className="m-three" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              <div><h3>Companies</h3><p>Companies working with us on tables and the day itself.</p><p style={{ marginTop: 10 }}><a className="m-link" href="/partners/directory/#companies">See the group</a></p></div>
              <div><h3>Campus Offices and Departments</h3><p>UCLA and USC departments and student organizations reaching their students.</p><p style={{ marginTop: 10 }}><a className="m-link" href="/partners/directory/#ucla">See the group</a></p></div>
              <div><h3>Community Organizations</h3><p>Programs that bring their students and alumni to the day.</p><p style={{ marginTop: 10 }}><a className="m-link" href="/partners/directory/#community-organizations">See the group</a></p></div>
            </div>
          </div>
        </section>

        {/* 6. How it works */}
        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">How It Works</span>
            <div className="m-three">
              <div><h3>1. Tell Us</h3><p>Tell us who you are and what you would like to do.</p></div>
              <div><h3>2. We Talk</h3><p>We talk and find the right fit.</p></div>
              <div><h3>3. We Make It Happen</h3><p>We build it into November 14 or a field event, whichever fits what you want to do.</p></div>
            </div>
          </div>
        </section>

        <FirstMeridian detail />

        {/* 7. Form and contact */}
        <section className="m-section" id="inquiries">
          <div className="m-wrap">
            <span className="m-eyebrow">Write to Us</span>
            <h2 className="m-display m-h2">What Would You Like to Do With Meridian?</h2>
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
