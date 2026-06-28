'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Mission } from '@/components/Mission';
import { Recap } from '@/components/Recap';
import { Future } from '@/components/Future';
import { Partners } from '@/components/Partners';
import { Founder } from '@/components/Founder';
import { WhoBuiltThis } from '@/components/WhoBuiltThis';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { RegisterModal } from '@/components/RegisterModal';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.3,
    });

    // Expose the instance so the nav can drive smooth jump-scrolling with a
    // fixed-header offset (see Nav.tsx).
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      delete (window as unknown as { lenis?: Lenis }).lenis;
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Recap />
        <Mission />
        <Future />
        <Partners />
        <Founder />
        <WhoBuiltThis />
        <Contact />
      </main>
      <Footer />
      <RegisterModal />
    </>
  );
}
