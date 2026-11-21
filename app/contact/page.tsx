import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { JoinTeam, PartnerLine } from '@/components/site/recap';
import { EMAIL, INSTAGRAM, LINKEDIN } from '@/data/recap';

export const metadata: Metadata = pageMeta(
  'Contact',
  'How to reach Meridian.',
  '/contact/',
);

export default function ContactPage() {
  return (
    <div className="m-page v-page">
      <Nav />
      <main id="main">
        <section className="v-section v-top">
          <div className="v-wrap">
            <p className="v-eyebrow">Contact</p>
            <h1 className="v-h1">Write to us.</h1>
            <p className="v-lead"><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            <p className="v-links">
              <a href={INSTAGRAM.url} target="_blank" rel="noopener noreferrer">Instagram {INSTAGRAM.handle}</a>
              <a href={LINKEDIN.url} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </div>
        </section>
        <section className="v-section v-tint" aria-labelledby="join-h">
          <div className="v-wrap"><JoinTeam photo={false} /></div>
        </section>
        <section className="v-section v-section-quiet" aria-label="For companies and organizations">
          <div className="v-wrap"><PartnerLine /></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
