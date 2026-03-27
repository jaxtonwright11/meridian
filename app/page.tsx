'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { ProofBar } from '@/components/ProofBar';
import { Mission } from '@/components/Mission';
import { History2024 } from '@/components/History2024';
import { Recap } from '@/components/Recap';
import { WhatsNext } from '@/components/WhatsNext';
import { Sponsors } from '@/components/Sponsors';
import { Founder } from '@/components/Founder';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
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
        <ProofBar />
        <Mission />
        <Recap />
        <History2024 />
        <WhatsNext />
        <Founder />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
