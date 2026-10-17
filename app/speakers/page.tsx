import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { FaqList } from '@/components/FaqList';
import { faqs } from '@/data/faq';
import { TeamContact } from '@/components/TeamContact';
import { Explore, EVENTS_SENTENCE, StatRow } from '@/components/site/parts';
import { confirmedLeaders, photoLeaders, title } from '@/data/leaders';

export const metadata: Metadata = pageMeta(
  'For Executives',
  'What the day involves for executives: getting to know students and meeting the other executives in the room. Saturday, November 14, 2026 at UCLA.',
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
            <h1>Meet Students Before Anyone Else Does.</h1>
            <p className="m-lead" style={{ marginTop: 20 }}>
              Meridian brings executives and students together in person, by field. Our conference
              on Saturday, November 14 at UCLA is where it starts: 400 university students from
              across Los Angeles and Ventura Counties, a number of them already building companies.
            </p>
          </div>
        </section>

        <StatRow />

        <section className="m-section">
          <div className="m-wrap">
            <h2 className="m-title">On the Day and After</h2>
            <div className="m-three m-two" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div><h3>A Room Built for Conversation</h3><p>Get to know university students from UCLA, USC, UC Berkeley, and campuses across Los Angeles, in a room built for conversation, years before they enter the job market.</p></div>
              <div><h3>How the Next Generation Thinks</h3><p>Hear directly from the students you hire, serve, and sell to: what they are building, what they care about, and what they are looking for.</p></div>
              <div><h3>A Way to Open Doors</h3><p>Offer the opportunities you manage, whether internships, mentorship, or introductions, to students in your field who would otherwise never know they exist.</p></div>
              <div><h3>A Place in What Comes Next</h3><p>After November 14, Meridian creates hackathon-style events by field, with executives from that field taking part. Everyone who attends joins the Meridian network.</p></div>
              <div><h3>Software That Matches</h3><p>We are building software that matches students with opportunities that fit them. The opportunities you open are the ones it is built to find students for.</p></div>
              <div><h3>The Campuses, in One Room</h3><p>Meridian is built by students at UCLA, USC, and UC Berkeley, with ties to each campus&apos;s administration and student body, so students, administrators, and executives end up in the same room.</p></div>
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
              <div><h3>The Engineering Design Lab</h3><p>A hands-on build led by NASA engineers, a natural home for technical executives who want time with students at a table.</p></div>
              <div><h3>Demo Day</h3><p>Student teams present what they are building. A natural stop for investors, founders, and anyone who wants to see student work up close.</p></div>
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
