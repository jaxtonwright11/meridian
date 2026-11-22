import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Explore } from '@/components/site/parts';
import { EMAIL as CONTACT_EMAIL_PUBLIC } from '@/data/recap';

export const metadata: Metadata = pageMeta(
  'Privacy',
  'What Meridian collects, how it uses information to connect people in the Meridian network, and how to have it removed.',
  '/privacy/',
);

const blocks = [
  { h: "What We Collect", p: "Only what you send. The contact form on this site collects your name, email, company or school, and your message. Meridian\u2019s registration and network forms, which run in Google Forms, collect what those forms ask for, such as your school or company, your field, and what you are looking for. This site has no accounts." },
  { h: "How We Use It", p: "To reply to you and to connect people in the Meridian network. Meridian uses your information to make introductions between students, executives, companies, and organizations, and shares it with another member only to make an introduction or a connection you would reasonably expect. Meridian does not sell or rent your information." },
  { h: "Who Handles It", p: "Form messages are delivered to Meridian by Formspree. Form responses are stored by Google in spreadsheets Meridian controls. The hosting provider may keep standard server logs, such as IP addresses and the pages requested. Each of these providers has its own privacy policy." },
  { h: "Photos and Video", p: "Meridian photographs and films its events. Your image may appear in Meridian videos, on this website, and on social media, as described in the terms." },
  { h: "Cookies and Tracking", p: "This site does not use advertising trackers, and Meridian does not sell data to ad networks." },
  { h: "Members Under 18", p: "Students under 18 join with a parent or guardian\u2019s consent and contact information. Meridian does not publish the names of student founders under 18." },
  { h: "Questions, Access, and Removal", p: "Write to Meridian to ask what it holds about you, to correct it, to leave the network, or to have your information removed." },
];

export default function PrivacyPage() {
  return (
    <div className="m-page">
      <Nav trail={[{ label: 'Meridian', href: '/' }, { label: 'Privacy' }]} />
      <main id="main">
        <section className="m-hero" style={{ paddingBottom: 32 }}>
          <div className="m-wrap">
            <h1>Privacy</h1>
            <p className="m-lead" style={{ marginTop: 16 }}>How Meridian handles the information you send.</p>
          </div>
        </section>
        <section className="m-section">
          <div className="m-wrap m-narrow">
            {blocks.map((b) => (
              <div key={b.h} style={{ marginBottom: 32 }}>
                <h2 className="m-h2" style={{ fontSize: 28, marginBottom: 10 }}>{b.h}</h2>
                <p style={{ fontSize: 18, lineHeight: 1.65, maxWidth: '66ch', color: 'var(--ink)' }}>{b.p}</p>
              </div>
            ))}
            <p style={{ fontSize: 18 }}>
              <a className="m-link" href={`mailto:${CONTACT_EMAIL_PUBLIC}?subject=Privacy`}>{CONTACT_EMAIL_PUBLIC}</a>
            </p>
            <p className="m-small" style={{ marginTop: 20 }}>Last updated November 22, 2026. See also the <a className="m-link" href="/terms/">terms</a>.</p>
          </div>
        </section>
      </main>
      <Explore links={[['Terms', '/terms/'], ['Accessibility', '/accessibility/'], ['Contact', '/contact/']]} />
      <Footer />
    </div>
  );
}
