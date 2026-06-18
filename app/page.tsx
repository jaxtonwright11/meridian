'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Mission } from '@/components/Mission';
import { Recap } from '@/components/Recap';
import { Speakers } from '@/components/Speakers';
import { Future } from '@/components/Future';
import { Partners } from '@/components/Partners';
import { Founder } from '@/components/Founder';
import { WhoBuiltThis } from '@/components/WhoBuiltThis';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.3,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Mission />
        <Recap />
        <Speakers />
        <Future />
        <Partners />
        <Founder />
        <WhoBuiltThis />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
