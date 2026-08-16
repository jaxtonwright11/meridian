import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { EVENT_DATE, EVENT_VENUE, CONTACT_EMAIL } from '@/config';
import styles from './terms.module.css';

export const metadata: Metadata = {
  title: 'Event Terms | Meridian Conference',
  description:
    'Meridian Conference event terms and code of conduct: registration, photo and video, sharing your ask, communications, attendees under 18, accessibility, and safety.',
};

// The registration form links here ("I agree to the Meridian event terms and
// code of conduct"). Each numbered section matches a consent checkbox on the
// form, so what people agree to is written out in one place, in plain language.
export default function TermsPage() {
  return (
    <>
      <Nav home={false} />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className="container">
            <div className={`chunk ${styles.doc}`}>
              <p className="eyebrow">Meridian Conference</p>
              <h1 className={styles.headline}>Event terms and code of conduct</h1>
              <p className={styles.meta}>
                Applies to Meridian Conference on {EVENT_DATE} at {EVENT_VENUE}, Los
                Angeles, in person and on Zoom. Last updated August 16, 2026.
              </p>

              <div className={styles.body}>
                <h2>1. The event</h2>
                <p>
                  Meridian Conference is run by Meridian Conference, a California
                  501(c)(3) nonprofit organization. The event is free. There is no
                  ticket, no fee, and nothing sold. Attending, whether in person or on
                  Zoom, means you agree to these terms.
                </p>

                <h2>2. Registration and seats</h2>
                <p>
                  Seats are capped at 400 and given first come, first served. Each
                  attendee needs their own registration. Registration is confirmed by
                  email. If plans change, tell us so your seat can go to someone else.
                  We may decline or cancel a registration to keep the event safe and
                  within capacity.
                </p>

                <h2>3. Code of conduct</h2>
                <p>
                  Everyone in the room, students, leaders, volunteers, and guests, is
                  expected to treat everyone else with respect. No harassment,
                  discrimination, or intimidation of any kind. No soliciting or selling
                  to attendees. Follow the directions of Meridian staff and venue
                  staff. We may ask anyone who does not meet this standard to leave,
                  and that decision is final.
                </p>

                <h2>4. Photography and filming</h2>
                <p>
                  Meridian photographs and films the event. By attending, you agree
                  that your image and voice may appear in the Meridian recap film, on
                  the Meridian website, and on Meridian social media. You agreed to
                  this on the registration form. If a specific photo or clip of you is
                  a problem, email us and we will work with you.
                </p>

                <h2>5. Sharing your ask</h2>
                <p>
                  The registration form asks what you are looking for. With your
                  consent on the form, Meridian shares that with attending leaders and
                  partner organizations so they can act on it. That is the mechanism of
                  the day. We do not sell attendee information.
                </p>

                <h2>6. Staying in touch</h2>
                <p>
                  With your consent on the form, Meridian sends event updates and
                  reminders before the day, and contacts you afterward about
                  follow-ups, introductions, and future Meridian events. Every email
                  includes a way to opt out.
                </p>

                <h2>7. Attendee directory</h2>
                <p>
                  The attendee directory is optional and opt-in only. If you opted in,
                  your name and what you are looking for may be visible to executives
                  and other leaders connected to Meridian. You can ask to be removed at
                  any time by emailing us.
                </p>

                <h2>8. Attendees under 18</h2>
                <p>
                  Attendees who will be under 18 on the event date need a parent or
                  guardian&apos;s consent to attend and to be photographed and filmed,
                  collected on the registration form. A parent or guardian signature is
                  also collected at check-in, and the parent or guardian listed serves
                  as the attendee&apos;s emergency contact for the day.
                </p>

                <h2>9. Accessibility</h2>
                <p>
                  We want the day to work for you. For accommodations of any kind,
                  mobility, hearing, vision, learning, dietary, or anything else, note
                  it on the registration form or email{' '}
                  <a href={`mailto:${CONTACT_EMAIL}?subject=Accessibility`}>{CONTACT_EMAIL}</a>{' '}
                  and we will make it work.
                </p>

                <h2>10. Assumption of risk</h2>
                <p>
                  You attend at your own risk. To the fullest extent permitted by law,
                  Meridian Conference, its organizers, volunteers, partners, and the
                  venue are not liable for personal injury, or for loss or damage to
                  personal property, arising from your attendance, except where caused
                  by their own negligence or misconduct.
                </p>

                <h2>11. Changes and cancellation</h2>
                <p>
                  The schedule, speakers, and venue details may change. If the event is
                  postponed or canceled, everyone registered is notified by email as
                  early as possible. Because the event is free, there are no refunds to
                  process.
                </p>

                <h2>12. Zoom attendance</h2>
                <p>
                  Zoom attendees follow the same code of conduct. Sessions may be
                  recorded, and recordings are covered by section 4. Do not record,
                  screenshot, or redistribute other attendees without their consent.
                </p>

                <h2>13. Contact</h2>
                <p>
                  Questions about these terms, or a request under any section:{' '}
                  <a href={`mailto:${CONTACT_EMAIL}?subject=Event%20terms`}>{CONTACT_EMAIL}</a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
