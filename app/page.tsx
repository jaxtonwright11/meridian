import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { MovedAnchors } from '@/components/MovedAnchors';
import {
  MeridianLine, StatRow, Doors, LeadersBand, TeamStrip, PartnerList,
  RegisterButton,
} from '@/components/site/parts';
import { FirstMeridian } from '@/components/FirstMeridian';
import { CONTACT_EMAIL_PUBLIC, EVENT_DATE_SHORT } from '@/config';

export default function Home() {
  return (
    <div className="m-page">
      <MovedAnchors />
      <Nav />
      <main id="main">
        {/* 1. Hero */}
        <section className="m-hero m-hero-home">
          <MeridianLine />
          <div className="m-wrap">
            <h1>Students meet the leaders in their field.</h1>
            <p className="m-sub">
              Meridian brings students, ideas, and executives together. We start with
              a conference in Los Angeles on November 14, free for every student.
            </p>
            <div className="m-actions">
              <RegisterButton>Register for {EVENT_DATE_SHORT}</RegisterButton>
              <a className="btn btn-tan" href="/leaders/">See who is joining</a>
              <a className="btn btn-tan" href="/partners/">Partner with Meridian</a>
            </div>
          </div>
        </section>

        {/* What is Meridian: a short answer, early, with the unique parts called out. */}
        <section className="m-section m-band-tan" aria-labelledby="what-h">
          <div className="m-wrap">
            <h2 id="what-h" className="m-title">What is Meridian?</h2>
            <p className="m-lead" style={{ maxWidth: '62ch' }}>
              Meridian is a company, and the conference is where it starts. Leaders from every field
              come to you, each one looking to help with opportunities they manage. Student founders
              and researchers present at demo day, and NASA engineers run a hands-on design lab.
              After November 14, Meridian hosts in-person events by field, and everyone who attends
              joins the Meridian network.
            </p>
            <p className="m-lead" style={{ maxWidth: '62ch' }}>
              College and networking were supposed to open doors, and instead the goalposts keep
              moving further out. Meridian exists to <strong>reverse gatekeeping</strong>: we bring
              students into the same room as the people in their field, in person.
            </p>
            <div className="m-chips">
              <span>Leaders come to you</span>
              <span>Demo day for student founders</span>
              <span>Design lab led by NASA engineers</span>
              <span>A network by field</span>
            </div>
          </div>
        </section>

        <StatRow />

        {/* 2. Leaders proof band */}
        <LeadersBand />

        <TeamStrip />

        {/* 3. Three doors */}
        <section className="m-section"><Doors /></section>

        {/* 8. Who is working with us */}
        <section className="m-section">
          <div className="m-wrap">
            <PartnerList home />
            <p className="m-actions"><a className="btn btn-tan" href="/partners/directory/">See all partners</a></p>
          </div>
        </section>

        {/* 10. The first Meridian */}
        <FirstMeridian />

        {/* 12. Closing band */}
        <section className="m-section">
          <div className="m-wrap">
            <div className="m-closing m-closing-dark">
              <h2 className="m-title" style={{ marginBottom: 8 }}>Questions?</h2>
              <p className="m-lead">We reply personally.</p>
              <div className="m-actions">
                <a className="btn btn-ink" href={`mailto:${CONTACT_EMAIL_PUBLIC}`}>Write to us</a>
                <a className="btn btn-tan" href="/faq/">Read the FAQ</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
