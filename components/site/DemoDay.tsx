'use client';

import { useEffect, useRef, useState } from 'react';
import { STARTUPS_LIST, type Startup } from '@/data/recap';

const TOTAL = STARTUPS_LIST.length;

function Card({ s, n, onOpen }: { s: Startup; n: number; onOpen: (s: Startup) => void }) {
  const cover = s.photos[0];
  return (
    <article className="v-demo-card" aria-label={`${n} of ${TOTAL}: ${s.name}`}>
      {cover ? (
        s.photos.length > 1 ? (
          <button type="button" className="v-demo-photo" onClick={() => onOpen(s)} aria-label={`More photos of ${s.name}`}>
            <img src={cover.src} alt={cover.alt} width={1200} height={800} loading={n <= 3 ? 'eager' : 'lazy'} draggable={false} />
            <span className="v-demo-more" aria-hidden="true">{s.photos.length} photos</span>
          </button>
        ) : (
          <div className="v-demo-photo"><img src={cover.src} alt={cover.alt} width={1200} height={800} loading="lazy" draggable={false} /></div>
        )
      ) : (
        <div className="v-demo-photo v-demo-blank" aria-hidden="true"><span>Meridian<i>.</i></span></div>
      )}
      <div className="v-demo-text">
        <p className="v-demo-n">{n} / {TOTAL}</p>
        <h3 className="v-demo-name">{s.name}</h3>
        {s.founders && <p className="v-demo-founders">{s.founders}</p>}
        <p className="v-demo-line">
          {s.line}
          {s.link && <> <a href={s.link.url} target="_blank" rel="noopener noreferrer">{s.link.label}</a></>}
        </p>
      </div>
    </article>
  );
}

/** One startup's photos, in a dialog. Left and right keys move, Escape closes. */
function Lightbox({ s, onClose }: { s: Startup | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [i, setI] = useState(0);
  useEffect(() => {
    const dlg = ref.current;
    if (!dlg) return;
    if (s && !dlg.open) { setI(0); dlg.showModal(); }
    if (!s && dlg.open) dlg.close();
  }, [s]);
  const count = s?.photos.length ?? 0;
  const go = (step: number) => setI((v) => (v + step + count) % count);
  const p = s?.photos[i];
  return (
    <dialog
      ref={ref}
      className="v-lightbox"
      aria-label={s ? `Photos of ${s.name}` : 'Photos'}
      onClose={onClose}
      onClick={(e) => { if (e.target === ref.current) onClose(); }}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') { e.preventDefault(); e.stopPropagation(); go(1); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); e.stopPropagation(); go(-1); }
      }}
    >
      {s && p && (
        <div className="v-lightbox-in">
          <img src={p.src} alt={p.alt} width={1200} height={800} />
          <div className="v-lightbox-bar">
            <button type="button" onClick={() => go(-1)} aria-label="Previous photo">&larr;</button>
            <span aria-live="polite">{s.name} &middot; {i + 1} / {count}</span>
            <button type="button" onClick={() => go(1)} aria-label="Next photo">&rarr;</button>
            <button type="button" className="v-lightbox-close" onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </dialog>
  );
}

/**
 * Demo Day cards, in pitch order. `carousel`: one row, swipe on phones, arrows and keys on
 * desktop, with a counter. Otherwise: every card in a grid. Never autoplays.
 */
export function DemoDay({ carousel = false }: { carousel?: boolean }) {
  const [open, setOpen] = useState<Startup | null>(null);
  const track = useRef<HTMLDivElement>(null);
  const [at, setAt] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el || !carousel) return;
    const onScroll = () => {
      // The current card is the one at the left edge of the row.
      const cards = Array.from(el.children) as HTMLElement[];
      const first = cards[0]?.offsetLeft ?? 0;
      let best = 0, dist = Infinity;
      cards.forEach((c, idx) => {
        const dd = Math.abs(c.offsetLeft - first - el.scrollLeft);
        if (dd < dist) { dist = dd; best = idx; }
      });
      // On wide screens the row ends before the last card reaches the left edge.
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) best = cards.length - 1;
      setAt(best);
    };
    onScroll();
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [carousel]);

  const move = (step: number) => {
    const el = track.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    const first = cards[0]?.offsetLeft ?? 0;
    // Step from the card at the left edge, not from the counter (which reads 12 at the end of the row).
    let cur = 0, dist = Infinity;
    cards.forEach((c, idx) => {
      const dd = Math.abs(c.offsetLeft - first - el.scrollLeft);
      if (dd < dist) { dist = dd; cur = idx; }
    });
    const next = Math.max(0, Math.min(cards.length - 1, cur + step));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollTo({ left: cards[next].offsetLeft - first, behavior: reduce ? 'auto' : 'smooth' });
  };

  if (!carousel) {
    return (
      <>
        <div className="v-demo-grid">
          {STARTUPS_LIST.map((s, idx) => (<Card s={s} n={idx + 1} key={s.slug} onOpen={setOpen} />))}
        </div>
        <Lightbox s={open} onClose={() => setOpen(null)} />
      </>
    );
  }

  return (
    <div className="v-demo" role="group" aria-roledescription="carousel" aria-label={`${TOTAL} student startups`}>
      <div
        className="v-demo-track"
        ref={track}
        tabIndex={0}
        aria-label="Startups. Use the left and right arrow keys to move."
        onKeyDown={(e) => {
          if (e.target !== e.currentTarget) return;
          if (e.key === 'ArrowRight') { e.preventDefault(); move(1); }
          if (e.key === 'ArrowLeft') { e.preventDefault(); move(-1); }
        }}
      >
        {STARTUPS_LIST.map((s, idx) => (<Card s={s} n={idx + 1} key={s.slug} onOpen={setOpen} />))}
      </div>
      <div className="v-demo-bar">
        <button type="button" onClick={() => move(-1)} disabled={at === 0} aria-label="Previous startup">&larr;</button>
        <span className="v-demo-count" aria-live="polite">{at + 1} / {TOTAL}</span>
        <button type="button" onClick={() => move(1)} disabled={at === TOTAL - 1} aria-label="Next startup">&rarr;</button>
      </div>
      <Lightbox s={open} onClose={() => setOpen(null)} />
    </div>
  );
}
