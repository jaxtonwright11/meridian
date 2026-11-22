import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { principals } from '@/data/principals';

export const metadata: Metadata = pageMeta(
  'Before Meridian',
  'A December 2025 event Jaxton Wright organized before founding Meridian.',
  '/past/',
);

// Linked from About and the footer only. Never name the December 2025 event or the
// organizations tied to it (Jax, Nov 21). The numbers are the ones already on the site.
export default function BeforeMeridianPage() {
  return (
    <div className="m-page v-page">
      <Nav />
      <main id="main">
        <section className="v-section v-top">
          <div className="v-wrap">
            <p className="v-eyebrow">December 2025</p>
            <h1 className="v-h1">Before Meridian.</h1>
            <p className="v-lead">
              A December 2025 event Jaxton organized before founding Meridian, where 150 students met
              executives from Netflix, OpenAI and Chase Bank.
            </p>
            <div className="v-pair">
              <img src="/opt/before-panel.webp" alt="A panel of five speakers with Jaxton Wright moderating, December 2025" width={1200} height={547} loading="lazy" />
              <img src="/opt/img_1728.webp" alt="A speaker with a microphone addressing the room, December 2025" width={1178} height={720} loading="lazy" />
            </div>
            <blockquote className="v-quote">
              <p>
                &ldquo;I had an amazing time speaking on my experience and being able to hear the experiences
                of so many other talented individuals.&rdquo;
              </p>
              <footer><strong>Adriel Miramontes</strong>, Journalist and Host, The Adriel Show</footer>
            </blockquote>
          </div>
        </section>

        <section className="v-section v-tint" aria-labelledby="principals-h">
          <div className="v-wrap">
            <h2 id="principals-h" className="v-h2">Schools that shared it</h2>
            <ul className="v-names v-names-2">
              {principals.map((p) => (
                <li key={p.name}><strong>{p.name}</strong><span>{p.title}{p.org ? `, ${p.org}` : ''}</span></li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
