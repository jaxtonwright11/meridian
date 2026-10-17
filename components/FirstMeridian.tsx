/** The first Meridian, December 2025. Past facts, two photos, one quote, no commentary. */
export function FirstMeridian({ detail = false, page = false }: { detail?: boolean; page?: boolean }) {
  return (
    <section className="m-section" id="first-meridian">
      <div className="m-wrap">
        <span className="m-eyebrow">December 2025</span>
        {page ? <h1 className="m-title">The First Meridian</h1> : <h2 className="m-title">The First Meridian</h2>}
        <p className="m-lead">
          150 students met executives from Netflix, OpenAI, and Chase Bank. Not for a lecture.
          For conversations that turned into mentorships, internship introductions, and career
          pivots. November 14 is bigger.
        </p>
        <p className="m-lead" style={{ marginTop: 12 }}>
          23 executives attended, and nine students left with internships.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, margin: '28px 0' }}>
          <img src="/opt/img_9543.webp" alt="Wide shot of full December 2025 panel, Jaxton moderating with five panelists" width={1200} height={800} loading="lazy" style={{ width: '100%', height: 'auto' }} />
          <img src="/opt/img_1728.webp" alt="Woman standing with microphone speaking to crowd at December 2025" width={1200} height={800} loading="lazy" style={{ width: '100%', height: 'auto' }} />
        </div>
        <blockquote style={{ margin: '0', maxWidth: '62ch' }}>
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
        {!detail && <p style={{ marginTop: 20 }}><a className="m-link" href="/past/">More from December 2025</a></p>}
      </div>
    </section>
  );
}
