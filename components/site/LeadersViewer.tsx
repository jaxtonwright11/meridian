'use client';

import { useState, type KeyboardEvent } from 'react';

export interface Tile {
  slug: string;
  name: string;
  title?: string;
  photo: string;
  bio?: string;
  virtual?: boolean;
}

const PER = 6;

/**
 * Pages through every leader with an approved photo, PER at a time. Click a
 * tile for the bio. No autoplay, no auto-advance. Arrow keys work inside the
 * region. Without JavaScript, the first page and the full name list render.
 */
export function LeadersViewer({ tiles }: { tiles: Tile[] }) {
  const [start, setStart] = useState(0);
  const [open, setOpen] = useState<string | null>(null);
  const last = Math.max(0, tiles.length - PER);
  const page = tiles.slice(start, start + PER);
  const sel = tiles.find((t) => t.slug === open);

  const go = (delta: number) => setStart((s) => Math.min(last, Math.max(0, s + delta * PER)));
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
  };

  return (
    <div role="region" aria-label="Leaders joining on November 14" onKeyDown={onKey}>
      <div className="m-vbar">
        <span className="m-small" aria-live="polite">
          {start + 1} to {Math.min(start + PER, tiles.length)} of {tiles.length}
        </span>
        <div className="m-vbtns">
          <button className="btn btn-tan" onClick={() => go(-1)} disabled={start === 0} aria-label="Previous leaders">Previous</button>
          <button className="btn btn-tan" onClick={() => go(1)} disabled={start >= last} aria-label="Next leaders">Next</button>
        </div>
      </div>
      <div className="m-people">
        {page.map((t) => (
          <button
            type="button"
            className={`m-person m-tile ${open === t.slug ? 'on' : ''}`}
            key={t.slug}
            aria-pressed={open === t.slug}
            onClick={() => setOpen(open === t.slug ? null : t.slug)}
          >
            <img src={t.photo} alt={t.name} width={400} height={400} loading="lazy" />
            <h3>{t.name}</h3>
            {t.title && <p>{t.title}{t.virtual ? '. Joining by video' : ''}</p>}
          </button>
        ))}
      </div>
      {sel && (
        <div className="m-vpanel">
          <img src={sel.photo} alt="" width={200} height={200} />
          <div>
            <h3>{sel.name}</h3>
            {sel.title && <p className="m-small">{sel.title}</p>}
            {sel.bio
              ? sel.bio.split('\n\n').map((p) => <p key={p} style={{ marginTop: 10 }}>{p}</p>)
              : null}
            <button className="m-link" style={{ background: 'none', border: 0, marginTop: 12, cursor: 'pointer', font: 'inherit' }} onClick={() => setOpen(null)}>
              Close
            </button>
          </div>
        </div>
      )}
      <noscript>
        <p className="m-names">{tiles.map((t) => t.name).join(', ')}</p>
      </noscript>
    </div>
  );
}
