import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { PartnerList, Explore } from '@/components/site/parts';

export const metadata: Metadata = {
  title: 'Partner directory',
  description: 'The organizations working with Meridian.',
};

export default function DirectoryPage() {
  return (
    <div className="m-page">
      <Nav trail={[{ label: 'Partners', href: '/partners/' }, { label: 'Directory' }]} />
      <main>
        <section className="m-hero" style={{ paddingBottom: 32 }}>
          <div className="m-wrap">
            <h1>Partner directory</h1>
            <p className="m-lead" style={{ marginTop: 16 }}>Organizations working with Meridian. A partner is listed once it has confirmed in writing.</p>
          </div>
        </section>
        <section className="m-section">
          <div className="m-wrap"><PartnerList heading={false} /></div>
        </section>
        <section className="m-section">
          <div className="m-wrap">
            <a className="btn btn-ink" href="/partners/#inquiries">Partner with Meridian</a>
          </div>
        </section>
      </main>
      <Explore links={[['Partners', '/partners/'], ['Conference', '/conference/']]} />
      <Footer />
    </div>
  );
}
