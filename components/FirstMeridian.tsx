import { EVENT_DATE_SHORT } from '@/config';

/** Short proof block: December 2025. Facts as past facts, one quote, no commentary. */
export function FirstMeridian() {
  return (
    <section className="m-section" id="first-meridian">
      <div className="m-wrap">
        <span className="m-eyebrow">December 2025</span>
        <h2 className="m-display m-h2">The first Meridian</h2>
        <p className="m-lead">
          About 150 students met leaders from Netflix, OpenAI, and Chase Bank in direct,
          face-to-face conversations. 23 executives attended, and nine students left with
          internships. {EVENT_DATE_SHORT} is built on that event.
        </p>
        <blockquote style={{ margin: '28px 0 0', maxWidth: '62ch' }}>
          <p style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 22, color: 'var(--heading)' }}>
            &ldquo;I had an amazing time speaking on my experience and being able to hear the
            experiences of so many other talented individuals.&rdquo;
          </p>
          <footer className="m-small" style={{ marginTop: 10 }}>
            <a href="https://www.instagram.com/theadrielshow/reels/" target="_blank" rel="noopener noreferrer"
               style={{ fontWeight: 700, color: 'var(--ink)' }}>
              Adriel Miramontes
            </a>
            , Journalist and Host, The Adriel Show
          </footer>
        </blockquote>
        <p style={{ marginTop: 20 }}><a className="m-link" href="/past/">The first Meridian in photos</a></p>
      </div>
    </section>
  );
}
