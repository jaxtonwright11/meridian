import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { EMAIL as CONTACT_EMAIL } from '@/data/recap';
import styles from './terms.module.css';

export const metadata: Metadata = pageMeta(
  'Terms',
  'Meridian terms: the Meridian network, how member information is used to make introductions, conduct, photos, members under 18, and the November 14, 2026 conference.',
  '/terms/',
);

// Terms for Meridian as a company and a network. The November 14 registration form
// linked here, so section 10 keeps what attendees agreed to as a record.
export default function TermsPage() {
  return (
    <>
      <Nav trail={[{ label: 'Meridian', href: '/' }, { label: 'Terms' }]} />
      <main id="main" className={styles.main}>
        <section className={styles.section}>
          <div className="container">
            <div className={`chunk ${styles.doc}`}>
              <p className="eyebrow">Terms</p>
              <h1 className={styles.headline}>Terms of Use</h1>
              <p className={styles.meta}>Last updated November 22, 2026.</p>

              <div className={styles.body}>
                <h2>1. About Meridian</h2>
                <p>
                  Meridian is a company that connects executives with top student talent. These terms cover meridianventura.com, the Meridian network, and the conference Meridian launched with on November 14, 2026. Using this site, joining the network, or attending a Meridian event means you agree to them.
                </p>

                <h2>2. The Meridian Network</h2>
                <p>
                  The Meridian network is the students, executives, companies, and organizations Meridian works with. You join it when you send Meridian your information through this site, a registration form, a network form, or by email. Meridian decides who it connects, and may decline or end anyone&apos;s place in the network.
                </p>

                <h2>3. How Meridian Uses Your Information</h2>
                <p>
                  Meridian uses what you share, such as your name, email, school or company, field, and what you are looking for, to connect people in the network. That includes making introductions between students and executives, between executives, and with companies and organizations. Meridian shares your information with another member only to make an introduction or a connection you would reasonably expect, and makes introductions both sides want. Meridian does not sell or rent your information. The Privacy page explains this in more detail.
                </p>

                <h2>4. Staying in Touch</h2>
                <p>
                  Meridian may contact you about introductions, follow-ups, and what Meridian is doing. Every email includes a way to opt out, and you can ask at any time to leave the network or to have your information removed.
                </p>

                <h2>5. Conduct</h2>
                <p>
                  Everyone in the network and at Meridian events is expected to treat everyone else with respect. No harassment, discrimination, or intimidation of any kind. Do not use an introduction or a contact from Meridian to spam, sell to, or solicit other members. Meridian may remove anyone who does not meet this standard, and that decision is final.
                </p>

                <h2>6. No Guarantees</h2>
                <p>
                  Meridian works to make useful connections, but it does not guarantee any outcome, including an introduction, a meeting, a job, an internship, or an investment. Members are responsible for their own conversations, agreements, and decisions with each other. Meridian is not a party to any arrangement between members.
                </p>

                <h2>7. Photos and Video</h2>
                <p>
                  Meridian photographs and films its events. Your image and voice may appear in Meridian videos, on this website, and on Meridian social media. If a specific photo or clip of you is a problem, email Meridian and it will work with you.
                </p>

                <h2>8. Members Under 18</h2>
                <p>
                  Students under 18 need a parent or guardian&apos;s consent to join the network, to attend a Meridian event, and to be photographed or filmed. Meridian does not publish the names of student founders under 18.
                </p>

                <h2>9. This Website</h2>
                <p>
                  The Meridian name, logo, writing, and photos on this site belong to Meridian or are used with permission. Partner names and logos belong to their owners and appear to show who took part with Meridian. Do not copy or reuse them without permission.
                </p>

                <h2>10. The November 14, 2026 Conference</h2>
                <p>
                  The conference was free, with no ticket, fee, or anything sold. Seats were capped at 400, and each attendee registered individually. Attendees agreed on the registration form to the code of conduct, photography and filming, sharing what they were looking for with attending executives and partners, an optional and opt-in attendee directory, and parent or guardian consent for attendees under 18. Zoom attendees followed the same code of conduct and agreed not to record or redistribute other attendees without consent. These points are kept here as a record.
                </p>

                <h2>11. Assumption of Risk and Liability</h2>
                <p>
                  You attend Meridian events and use this site at your own risk. To the fullest extent permitted by law, Meridian, its team, volunteers, and partners are not liable for personal injury, for loss or damage to property, or for anything arising from dealings between members, except where caused by their own negligence or misconduct.
                </p>

                <h2>12. Changes to These Terms</h2>
                <p>
                  Meridian may update these terms. The date at the top shows when they last changed. Continuing to use the site or the network after a change means you accept the updated terms. These terms are governed by the laws of California.
                </p>

                <h2>13. Contact</h2>
                <p>
                  Questions about these terms, or a request under any section:{' '}
                  <a href={`mailto:${CONTACT_EMAIL}?subject=Terms`}>{CONTACT_EMAIL}</a>.
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
