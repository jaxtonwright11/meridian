import { Carousel } from 'meridian-landing';

// Touch/keyboard image carousel with auto-advance. Composed here with the real
// December 2025 event photography it ships with in the Recap section.
const slides = [
  { src: '/opt/img_9547.webp', mobileSrc: '/opt/img_9547-mobile.webp', alt: 'Full group of ~150 people at the December 2025 Meridian Conference' },
  { src: '/opt/img_9543.webp', mobileSrc: '/opt/img_9543-mobile.webp', alt: 'Wide shot of the panel, Jaxton moderating with five panelists' },
  { src: '/opt/img_1728.webp', mobileSrc: '/opt/img_1728-mobile.webp', alt: 'Speaker at the microphone addressing the crowd' },
  { src: '/opt/img_9545.webp', mobileSrc: '/opt/img_9545-mobile.webp', alt: 'Awards ceremony on stage with recognition plaques' },
];

export const Default = () => <Carousel slides={slides} />;
