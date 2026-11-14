'use client';

import { useEffect, useState } from 'react';
import type { Tile } from './LeadersViewer';

const EVERY_MS = 4000;

/**
 * One executive at a time, in the same card as the grid further down the page,
 * changing every four seconds. Holds still while hovered or focused, and for
 * anyone who asks for reduced motion. Starts on a random card once the page
 * loads; without JavaScript it shows the first one.
 */
export function ExecRotator({ tiles }: { tiles: Tile[] }) {
  const [i, setI] = useState(0);
  const [held, setHeld] = useState(false);
  const [still, setStill] = useState(false);

  useEffect(() => {
    setI(Math.floor(Math.random() * tiles.length));
    const q = window.matchMedia('(prefers-reduced-motion: reduce)');
    setStill(q.matches);
    const on = () => setStill(q.matches);
    q.addEventListener('change', on);
    return () => q.removeEventListener('change', on);
  }, [tiles.length]);

  // Load the next photo ahead of time so the swap never shows an empty frame.
  useEffect(() => {
    const next = tiles[(i + 1) % tiles.length];
    if (next) new Image().src = next.photo;
  }, [i, tiles]);

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
      <figcaption className="m-rot-cap">
        Executives <span aria-hidden="true">·</span> <a href="/leaders/">See all</a>
      </figcaption>
    </figure>
  );
}
