'use client';

import { useState, type KeyboardEvent } from 'react';

export interface Spot { slug: string; name: string; roles: string[]; bio: string; photo: string; virtual?: boolean }

/**
 * Featured viewer for /leaders: one leader at a time, in roster order.
 * Previous and next, left and right arrow keys, and a row of names to jump to.
 * No autoplay. Only leaders with an approved photo and an approved bio.
 */
export function LeaderSpotlight({ spots }: { spots: Spot[] }) {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState<'next' | 'prev'>('next');
  const go = (n: number) => {
    const j = Math.min(spots.length - 1, Math.max(0, n));
    setDir(j >= i ? 'next' : 'prev');
    setI(j);
  };
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') go(i + 1);
    if (e.key === 'ArrowLeft') go(i - 1);
  };
  const s = spots[i];
  return (
    <div className="m-spot" role="region" aria-label="Featured executives" onKeyDown={onKey}>
      <div className={`m-spot-card m-slide-${dir}`} key={s.slug}>
        <img src={s.photo} alt={s.name} width={600} height={600} />
        <div>
          <h2 className="m-title" style={{ marginBottom: 10 }}>{s.name}</h2>
          {s.roles.map((r) => (<p className="m-role" key={r} style={{ fontSize: 17 }}>{r}</p>))}
          {s.virtual && <p className="m-role" style={{ fontSize: 17 }}>Joining by video</p>}
          {s.bio.split('\n\n').map((p) => (<p key={p} style={{ marginTop: 14, fontSize: 18 }}>{p}</p>))}
        </div>
      </div>
      <div className="m-spot-bar">
        <button className="btn btn-tan" onClick={() => go(i - 1)} disabled={i === 0}>Previous</button>
        <span className="m-small" aria-live="polite">{i + 1} of {spots.length}</span>
        <button className="btn btn-tan" onClick={() => go(i + 1)} disabled={i === spots.length - 1}>Next</button>
      </div>
      <div className="m-spot-names" role="group" aria-label="Jump to an executive">
        {spots.map((x, n) => (
          <button key={x.slug} type="button" className={n === i ? 'on' : ''} aria-pressed={n === i} onClick={() => go(n)}>
            {x.name}
          </button>
        ))}
      </div>
    </div>
  );
}
