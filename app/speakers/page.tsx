import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { FaqList } from '@/components/FaqList';
import { faqs } from '@/data/faq';
import { TeamContact } from '@/components/TeamContact';
import { Explore, EVENTS_SENTENCE, StatRow } from '@/components/site/parts';
import { CONTACT_EMAIL_PUBLIC, CALENDLY_URL } from '@/config';
import { confirmedLeaders, photoLeaders, title } from '@/data/leaders';

export const metadata: Metadata = pageMeta(
  'For Executives',
  'Get back to campus on Saturday, November 14, 2026 at UCLA. Meet students from across Los Angeles in small groups, by field. Nothing to prepare.',
  '/speakers/',
);

// Brief v2 section 6.5, with v3 wording. No schedule on this page, no ask for a time window.
const execFaqs = faqs.filter((f) => f.audience === 'Executives');

export default function SpeakersPage() {
  const first = photoLeaders.length ? confirmedLeaders.slice(0, 12) : [];
  return (
    <div className="m-page">
      <Nav />
      <main id="main">
        <section className="m-hero" style={{ paddingBottom: 48 }}>
          <div className="m-wrap">
            <span className="m-eyebrow">For Executives</span>
            <h1>Get Back to Campus.</h1>
            <p className="m-lead" style={{ marginTop: 20 }}>
              Meridian brings executives and students together in person, by field. Our conference
              on Saturday, November 14 at UCLA is where it starts: room for 400 university
              students from across Los Angeles and Ventura Counties, a number of them already building companies,
              and the executives who work in the fields they are headed into.
            </p>
            <div className="m-actions">
              <a className="btn btn-ink" href={`mailto:${CONTACT_EMAIL_PUBLIC}`}>Write to Us</a>
              <a className="m-link" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a Call</a>
            </div>
          </div>
        </section>

        <StatRow />

        <section className="m-section">
          <div className="m-wrap">
            <h2 className="m-title">Why Executives Come</h2>
            <div className="m-three m-two" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div><h3>Be There in Person</h3><p>Most consumers say they try to tune out ads. A day on campus is not one. You spend it in small groups, at roundtables and at lunch, getting to know students from UCLA, USC, UC Berkeley, and campuses across Los Angeles, and letting them get to know you.</p></div>
              <div><h3>Put a Real Problem to Student Teams</h3><p>After November 14, Meridian creates hackathon-style events by field. Each team works a real challenge from the field and presents to the executives in the room.</p></div>
              <div><h3>Meet the People Who Organize Campus Life</h3><p>Student organizations and campus groups bring their members and run tables of their own, so you meet the people who organize campus life in one day.</p></div>
              <div><h3>Stay Known After the Day</h3><p>Everyone who attends joins the Meridian network, and the software we are building matches students with the opportunities you open.</p></div>
            </div>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">Who Else Is in the Room</span>
            <p className="m-lead" style={{ marginBottom: 18 }}>
              {confirmedLeaders.length} executives so far, including founders, physicians, engineers,
              and university and civic figures.
            </p>
            <div className="m-list">
              {first.map((l) => (
                <div className="m-row" key={l.slug}>
                  <span className="n">{l.name}</span>
                  <span className="r">{title(l)}{l.format === 'virtual' ? '. Joining by video' : ''}</span>
                </div>
              ))}
            </div>
            <p className="m-names"><a className="m-link" href="/leaders/">See everyone</a></p>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">What You Do</span>
            <div className="m-three m-two" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div><h3>Work the Room</h3><p>Get to know students in small groups.</p></div>
              <div><h3>Introductions</h3><p>Short introductions, if you would like them. Under a minute each, no deck: who you are, what you built, and one thing a student can use on Monday. Guests who would rather spend the day in conversation do that instead.</p></div>
              <div><h3>The Aerospace Design Lab</h3><p>A hands-on build led by NASA engineers, a natural home for technical executives who want time with students at a table.</p></div>
              <div><h3>Demo Day</h3><p>Student founders and researchers pitch for three minutes to executives, investors, and press, and others show their work at expo tables. A natural stop for anyone who wants to see what students are building.</p></div>
            </div>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">After November 14</span>
            <p className="m-lead">{EVENTS_SENTENCE}</p>
            <p className="m-lead" style={{ marginTop: 12 }}>If you would like to be involved beyond the day, tell us which field.</p>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <h2 className="m-title">Questions Executives Ask</h2>
            <FaqList items={execFaqs} />
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap">
            <span className="m-eyebrow">Say Yes</span>
            <TeamContact primary />
            <p className="m-lead" style={{ marginTop: 28 }}>
              If you know someone who would get a lot from connecting with other executives and
              student founders, please recommend them.
            </p>
            <p className="m-small" style={{ marginTop: 14 }}>Founded by Jaxton Wright.</p>
          </div>
        </section>
      </main>
      <Explore links={[['Conference', '/conference/'], ['Who Is Joining', '/leaders/'], ['Contact', '/contact/']]} />
      <Footer />
    </div>
  );
}
