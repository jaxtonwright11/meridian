'use client';

import { useEffect, useState } from 'react';
import type { Tile } from './LeadersViewer';

const EVERY_MS = 2000;

/**
 * One executive at a time, in the same card as the grid further down the page,
 * changing every two seconds. Holds still while hovered or focused, and for
 * anyone who asks for reduced motion. Without JavaScript it shows the first one.
 */
export function ExecRotator({ tiles }: { tiles: Tile[] }) {
  const [i, setI] = useState(0);
  const [held, setHeld] = useState(false);
  const [still, setStill] = useState(false);

  useEffect(() => {
    const q = window.matchMedia('(prefers-reduced-motion: reduce)');
    setStill(q.matches);
    const on = () => setStill(q.matches);
    q.addEventListener('change', on);
    return () => q.removeEventListener('change', on);
  }, []);

  useEffect(() => {
    if (held || still || tiles.length < 2) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % tiles.length), EVERY_MS);
    return () => window.clearInterval(id);
  }, [held, still, tiles.length]);

  const t = tiles[i];
  if (!t) return null;

  return (
    <figure className="m-rot">
      <a
        className="m-rot-card"
        href="/leaders/"
        key={t.slug}
        onMouseEnter={() => setHeld(true)}
        onMouseLeave={() => setHeld(false)}
        onFocus={() => setHeld(true)}
        onBlur={() => setHeld(false)}
      >
        <img src={t.photo} alt="" width={400} height={400} />
        <h3>{t.name}</h3>
        {t.title && <p className="m-role">{t.title}</p>}
      </a>
      <figcaption className="m-rot-cap">Executives</figcaption>
    </figure>
  );
}
