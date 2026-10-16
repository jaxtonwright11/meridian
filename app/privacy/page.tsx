import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Explore } from '@/components/site/parts';
import { CONTACT_EMAIL_PUBLIC } from '@/config';

export const metadata: Metadata = pageMeta(
  'Privacy',
  'What Meridian collects through this site and the registration form, and what we do with it.',
  '/privacy/',
);

// TODO(jax): counsel review before this goes live. Plain-language draft; no legal
// claims beyond what the site actually does today.
const blocks = [
  { h: 'What We Collect', p: 'Two things, and only when you send them. The contact and partnership form on this site collects your name, organization, role, email, and your message. Registration for November 14 happens in a Google Form, which collects what that form asks for. This site has no accounts, no newsletter signup, and no directory.' },
  { h: 'How We Use It', p: 'To reply to you, to run the conference, and to follow up with the people we pick for demo day. We write to people personally and we do not sell or rent your information.' },
  { h: 'Who Handles It', p: 'Your form message is delivered to us by Formspree. Registration responses are stored by Google in a spreadsheet we control. Our hosting provider may keep standard server logs, such as IP addresses and the pages requested. Each of these providers has its own privacy policy.' },
  { h: 'Photos and Video', p: 'Meridian photographs and films the day. Your image may appear in our recap film, on this website, and on social media. You agree to that when you register, as described in the event terms.' },
  { h: 'Cookies and Tracking', p: 'This site does not use advertising trackers. We do not run ad networks or sell data to them.' },
  { h: 'Students Under 18', p: 'Students under 18 register with a parent or guardian’s contact information, and a parent or guardian signs them in at check-in.' },
  { h: 'Questions, Access, and Removal', p: `Write to us to ask what we hold about you, to correct it, or to have it removed.` },
];

export default function PrivacyPage() {
  return (
    <div className="m-page">
      <Nav trail={[{ label: 'Meridian', href: '/' }, { label: 'Privacy' }]} />
      <main id="main">
        <section className="m-hero" style={{ paddingBottom: 32 }}>
          <div className="m-wrap">
            <h1>Privacy</h1>
            <p className="m-lead" style={{ marginTop: 16 }}>What this site collects, in plain words.</p>
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
            <p className="m-small" style={{ marginTop: 20 }}>Last updated October 16, 2026. The <a className="m-link" href="/terms/">event terms</a> cover the conference itself.</p>
          </div>
        </section>
      </main>
      <Explore links={[['Terms', '/terms/'], ['Accessibility', '/accessibility/'], ['Contact', '/contact/']]} />
      <Footer />
    </div>
  );
}
