import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Carousel } from '@/components/Carousel';
import { FirstMeridian } from '@/components/FirstMeridian';
import { Explore, RegisterButton } from '@/components/site/parts';
import { principals, PRINCIPAL_LINE } from '@/data/principals';

export const metadata: Metadata = {
  title: 'Past events',
  description: 'The first Meridian, December 2025.',
};

const slides = [
  { src: '/opt/img_9543.webp', mobileSrc: '/opt/img_9543-mobile.webp', alt: 'A panel of six at the December 2025 event, with the founder moderating' },
  { src: '/opt/img_1728.webp', mobileSrc: '/opt/img_1728-mobile.webp', alt: 'A woman with a microphone speaking to the room at the December 2025 event' },
  { src: '/opt/img_1809.webp', mobileSrc: '/opt/img_1809-mobile.webp', alt: 'Two students in conversation at the event' },
  { src: '/opt/img_9545.webp', mobileSrc: '/opt/img_9545-mobile.webp', alt: 'A group holding recognition plaques' },
  { src: '/opt/img_9544.webp', mobileSrc: '/opt/img_9544-mobile.webp', alt: 'Four people in a group photo after the event' },
];

export default function PastPage() {
  return (
    <div className="m-page">
      <Nav trail={[{ label: 'About', href: '/about/' }, { label: 'Past events' }]} />
      <main>
        <FirstMeridian />
        <section className="m-section">
          <div className="m-wrap"><Carousel slides={slides} /></div>
        </section>

        <section className="m-section" id="principals">
          <div className="m-wrap">
            <span className="m-eyebrow">December 2025</span>
            <h2 className="m-display m-h2">Who shared the first Meridian</h2>
            <p className="m-lead" style={{ marginBottom: 20 }}>
              Schools and educators who shared the first Meridian with their students in December 2025.
            </p>
            <div className="m-list">
              {principals.map((p) => (
                <div className="m-row" key={p.name}>
                  <span className="n">{p.name}</span>
                  <span className="r">{p.title}, {p.org}. {PRINCIPAL_LINE}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="m-section">
          <div className="m-wrap"><div className="m-actions" style={{ marginTop: 0 }}><RegisterButton /></div></div>
        </section>
      </main>
      <Explore links={[['About', '/about/'], ['Conference', '/conference/']]} />
      <Footer />
    </div>
  );
}
