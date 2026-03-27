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
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  }, [slides.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
  }, [slides.length]);

  // Keyboard nav
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prev, next]);

  // Intersection Observer: start auto-advance only when in viewport
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-advance every 3 seconds, only when in view and not paused
  useEffect(() => {
    if (paused || !inView) return;
    const interval = setInterval(() => {
      setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [paused, inView, slides.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setPaused(true);
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
    // Resume after 10s
    setTimeout(() => setPaused(false), 10000);
  };

  return (
    <div
      ref={carouselRef}
      className={styles.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
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
      </div>

      <div className={styles.controls}>
        <button
          className={styles.arrow}
          onClick={prev}
          aria-label="Previous slide"
        >
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
        <button
          className={styles.arrow}
          onClick={next}
          aria-label="Next slide"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}
