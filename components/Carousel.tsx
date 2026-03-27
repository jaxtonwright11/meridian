'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import styles from './Carousel.module.css';

interface Slide {
  src: string;
  alt: string;
}

interface CarouselProps {
  slides: Slide[];
  desktopHeight?: number;
  mobileHeight?: number;
}

export function Carousel({ slides, desktopHeight = 500, mobileHeight = 350 }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  }, [slides.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prev, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    setTouchStart(null);
  };

  return (
    <div className={styles.carousel}>
      <div
        className={styles.viewport}
        style={{
          '--desktop-height': `${desktopHeight}px`,
          '--mobile-height': `${mobileHeight}px`,
        } as React.CSSProperties}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={trackRef}
          className={styles.track}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => {
            const shouldLoad = i <= 1 || i === current + 1 || i === current;
            return (
              <div key={i} className={styles.slide}>
                <div className={styles.slideInner}>
                  {shouldLoad ? (
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      loading={i <= 1 ? 'eager' : 'lazy'}
                      className={styles.image}
                    />
                  ) : (
                    <div className={styles.placeholder} />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={prev}
          aria-label="Previous slide"
        >
          &#8249;
        </button>
        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={next}
          aria-label="Next slide"
        >
          &#8250;
        </button>
      </div>

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
    </div>
  );
}
