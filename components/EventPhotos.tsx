'use client';

import { AnimateIn } from './AnimateIn';
import styles from './EventPhotos.module.css';

const photos = [
  { src: '/Meridian2025speakeradrielmiramontes.jpeg', alt: 'Adriel Miramontes speaking at Meridian Conference' },
  { src: '/Meridian2025speakercamdencoley.jpeg', alt: 'Camden Coley at Meridian Conference' },
  { src: '/Meridian2025speakersimeon.jpeg', alt: 'Simeon Johnson at Meridian Conference' },
  { src: '/Meridian2025leadmarketerdanae.jpeg', alt: 'Danae Venters, Lead Marketer at Meridian Conference' },
  { src: '/Georgeleisandjaxtonpicture.jpeg', alt: 'George Leis and Jaxton Wright' },
];

export function EventPhotos() {
  return (
    <section className={styles.photos}>
      <AnimateIn>
        <div className={styles.scroll}>
          {photos.map((photo, i) => (
            <div key={i} className={styles.imageWrap}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading={i <= 2 ? 'eager' : 'lazy'}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </AnimateIn>
    </section>
  );
}
