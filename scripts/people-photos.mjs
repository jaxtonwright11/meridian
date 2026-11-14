#!/usr/bin/env node
/**
 * Converts supplied headshots to /public/opt/people/{first}-{last}.webp.
 * Square crop, 800px. Originals are never renamed or committed.
 *
 * Usage: node scripts/people-photos.mjs <source-dir>
 */
import sharp from 'sharp';
import { mkdir } from 'fs/promises';
import { join } from 'path';

const SRC = process.argv[2];
if (!SRC) {
  console.error('usage: node scripts/people-photos.mjs <source-dir>');
  process.exit(1);
}
const OUT = new URL('../public/opt/people/', import.meta.url).pathname;

// Source file -> output slug. Matched by lowercase name with the trailing
// "headshot" text dropped; listed explicitly so odd spellings are visible.
const FILES = {
  'aaronheadshot_lastslide.png': 'aaron-colgan',
  'alexmcdowellheadshot.jpeg': 'alex-mcdowell',
  'anahiheadshot.png': 'anahi-ceja',
  'bobdodgeheadshot.jpeg': 'bob-dodge',
  'carisaheadshot_secondslide.jpeg': 'carisa-gonzales',
  'carlosgonzalesheadshot.jpeg': 'carlos-gonzales',
  'cherylheadshot_thirdslide.jpeg': 'cheryl-zhang',
  'chrisswainheadshot.jpeg': 'chris-swain',
  'davidlashheadshot.jpeg': 'david-lash',
  'derayheadshot.jpeg': 'deray-mckesson',
  'ellenjunnheadshot.jpeg': 'ellen-junn',
  'elijahheadshot.png': 'elijah-carraby',
  'epmcknightheadshot.jpeg': 'ep-mcknight',
  'georgeleisheadshot.jpeg': 'george-leis',
  'jaxtonwrightheadshot.jpeg': 'jaxton-wright',
  'jimmyellisheadshot.jpeg': 'jimmy-ellis',
  'jodystigerheadshot.jpeg': 'jody-stiger',
  'joekillingerheadshot.jpeg': 'joe-killinger',
  'laurabarryheadshot.jpeg': 'laura-barry',
  'maneheadshot.png': 'mane-patatanian',
  'michaelkangheadshot.jpeg': 'michael-kang',
  'neveenvetchaheadshot.jpeg': 'naveen-vetcha',
  'paulpereiraheadshot.jpeg': 'paul-pereira',
  'paulrusnakheadhsot.webp': 'paul-rusnak',
  'rosalylopesheadshot.jpg': 'rosaly-lopes',
  'tamahassonheadshot.jpg': 'tama-hasson',
  'tonyshrillerheadshot.jpeg': 'tony-shriller',
  'troypalmquisheadshot.jpeg': 'troy-palmquist',
  'yansearcyheadshot.jpg': 'yan-searcy',
};

// Wide source photos where the face sits off-center need an explicit anchor.
const POSITION = { 'cheryl-zhang': 'northeast', 'anahi-ceja': 'north', 'aaron-colgan': 'north' };

await mkdir(OUT, { recursive: true });
for (const [file, slug] of Object.entries(FILES)) {
  const info = await sharp(join(SRC, file))
    .rotate()
    .resize(800, 800, { fit: 'cover', position: POSITION[slug] ?? 'attention', withoutEnlargement: false })
    .webp({ quality: 82 })
    .toFile(join(OUT, `${slug}.webp`));
  console.log(slug.padEnd(18), info.size);
}
