'use client';

import { AnimateIn } from './AnimateIn';
import { OptImg } from './OptImg';
import styles from './EventPhotos.module.css';

const photos = [
  { desktop: '/opt/meridian2025speakeradrielmiramontes.webp', mobile: '/opt/meridian2025speakeradrielmiramontes-mobile.webp', alt: 'Adriel Miramontes speaking at Meridian Conference' },
  { desktop: '/opt/meridian2025speakercamdencoley.webp', mobile: '/opt/meridian2025speakercamdencoley-mobile.webp', alt: 'Camden Coley at Meridian Conference' },
  { desktop: '/opt/meridian2025speakersimeon.webp', mobile: '/opt/meridian2025speakersimeon-mobile.webp', alt: 'Simeon Johnson at Meridian Conference' },
  { desktop: '/opt/meridian2025leadmarketerdanae.webp', mobile: '/opt/meridian2025leadmarketerdanae-mobile.webp', alt: 'Danae Venters, Lead Marketer at Meridian Conference' },
  { desktop: '/opt/georgeleisandjaxtonpicture.webp', mobile: '/opt/georgeleisandjaxtonpicture-mobile.webp', alt: 'George Leis and Jaxton Wright' },
];

export function EventPhotos() {
  return (
    <section className={styles.photos}>
      <AnimateIn>
        <div className={styles.scroll}>
          {photos.map((photo, i) => (
            <div key={i} className={styles.imageWrap}>
              <OptImg
                desktop={photo.desktop}
                mobile={photo.mobile}
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
