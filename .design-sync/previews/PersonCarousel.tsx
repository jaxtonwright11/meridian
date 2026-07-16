import { PersonCarousel } from 'meridian-landing';

// People carousel (photo + name + title + caption) used in the "Who helped
// build this" section. Composed with the real supporters it ships with.
const slides = [
  {
    src: '/opt/georgeleisandjaxtonpicture.webp',
    mobileSrc: '/opt/georgeleisandjaxtonpicture-mobile.webp',
    name: 'George Leis',
    title: 'Chairman, YMCA of the USA / EVP, CalPrivate Bank',
    caption:
      'Among the first to believe in the conference. His early support and belief in access for young people helped make Meridian possible.',
  },
  {
    src: '/opt/tedlawrenceohsprincipal.webp',
    mobileSrc: '/opt/tedlawrenceohsprincipal-mobile.webp',
    name: 'Dr. Ted Lawrence',
    title: 'Principal, Oxnard High School',
    caption: 'Opened the door for students from his campus to attend and take part.',
  },
  {
    src: '/opt/marianneramoscihsprincipal.webp',
    mobileSrc: '/opt/marianneramoscihsprincipal-mobile.webp',
    name: 'Marianne Ramos',
    title: 'Principal, Channel Islands High School',
    caption: 'Championed the event so her students could meet leaders face to face.',
  },
  {
    src: '/opt/garypetersonrmhsprincipal.webp',
    mobileSrc: '/opt/garypetersonrmhsprincipal-mobile.webp',
    name: 'Gary Peterson',
    title: 'Principal, Rio Mesa High School',
    caption: 'Backed the mission of bringing access directly to students.',
  },
];

export const Default = () => <PersonCarousel slides={slides} />;
