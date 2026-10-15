import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { FaqList } from '@/components/FaqList';
import { Explore } from '@/components/site/parts';
import { faqs, FAQ_GROUPS } from '@/data/faq';
import { CONTACT_EMAIL_PUBLIC } from '@/config';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers about Meridian, the November 14, 2026 conference, demo day, and working with us.',
};

const JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
};

export default function FaqPage() {
  return (
    <div className="m-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} />
      <Nav trail={[{ label: 'Meridian', href: '/' }, { label: 'FAQ' }]} />
      <main id="main">
        <section className="m-hero" style={{ paddingBottom: 32 }}>
          <div className="m-wrap">
            <h1>Frequently asked questions</h1>
          </div>
        </section>
        {FAQ_GROUPS.map((g) => (
          <section className="m-section" key={g} id={g.toLowerCase().replace(/\s+/g, '-')}>
            <div className="m-wrap">
              <h2 className="m-title">{g}</h2>
              <FaqList items={faqs.filter((f) => f.audience === g)} />
            </div>
          </section>
        ))}
        <section className="m-section">
          <div className="m-wrap">
            <p className="m-lead">Something else?</p>
            <div className="m-actions"><a className="btn btn-ink" href={`mailto:${CONTACT_EMAIL_PUBLIC}?subject=Question`}>Write to us</a></div>
          </div>
        </section>
      </main>
      <Explore links={[['Conference', '/conference/'], ['Students', '/students/'], ['Executives', '/speakers/'], ['Partners', '/partners/'], ['About', '/about/']]} />
      <Footer />
    </div>
  );
}
