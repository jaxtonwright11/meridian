'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './PersonCarousel.module.css';

export interface PersonSlide {
  src: string;
  mobileSrc?: string;
  name: string;
  title?: string;
  caption: string;
}

interface PersonCarouselProps {
  slides: PersonSlide[];
}

export function PersonCarousel({ slides }: PersonCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  }, [slides.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
  }, [slides.length]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !inView) return;
    const interval = setInterval(() => {
      setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [paused, inView, slides.length]);

  const slide = slides[current];

  return (
    <div
      ref={ref}
      className={styles.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.card}>
        <div className={styles.imageWrap}>
          <img
            src={slide.src}
            srcSet={slide.mobileSrc ? `${slide.mobileSrc} 600w, ${slide.src} 1200w` : undefined}
            sizes={slide.mobileSrc ? '(max-width: 768px) 600px, 1200px' : undefined}
            alt={slide.name}
            decoding="async"
            className={styles.image}
          />
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>{slide.name}</h3>
          {slide.title && <p className={styles.title}>{slide.title}</p>}
          <p className={styles.caption}>{slide.caption}</p>
        </div>
      </div>

      <div className={styles.controls}>
        <button className={styles.arrow} onClick={prev} aria-label="Previous">
          &#8249;
        </button>
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button className={styles.arrow} onClick={next} aria-label="Next">
          &#8250;
        </button>
      </div>
    </div>
  );
}
