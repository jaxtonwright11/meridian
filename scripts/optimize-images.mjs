#!/usr/bin/env node
/**
 * Build-time image optimizer.
 * Reads source images from public/, writes WebP versions to public/opt/
 * at desktop (1200px) and mobile (600px) widths.
 *
 * Usage: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const PUBLIC = new URL('../public/', import.meta.url).pathname;
const OUT = join(PUBLIC, 'opt');
const DESKTOP_W = 1200;
const MOBILE_W = 600;
const QUALITY = 83; // visually lossless for photos

// Only process images actually used by the site
const USED_IMAGES = [
  // EventPhotos
  'Meridian2025speakeradrielmiramontes.jpeg',
  'Meridian2025speakercamdencoley.jpeg',
  'Meridian2025speakersimeon.jpeg',
  'Meridian2025leadmarketerdanae.jpeg',
  'Georgeleisandjaxtonpicture.jpeg',
  // Recap carousel
  'IMG_9547.jpeg',
  'IMG_9543.jpeg',
  'IMG_1728.jpeg',
  'IMG_1809.jpeg',
  'IMG_9545.jpeg',
  'IMG_9544.jpeg',
  'selfieofmygirlfriendmeandbestfriendaftertheevent.jpeg',
  // Founder
  'unnamed__3_.jpg',
  // WhoBuiltThis
  'TedLawrenceOHSprincipal.WEBP',
  'MarianneRamosCIHSprincipal.JPG',
  'GarypetersonRMHSprincipal.WEBP',
  'BryanMartinRCHSprincipal.JPG',
  'ChrisRamosPHSPrincipal.WEBP',
  'BrendaBravoHHSprincipal.JPG',
  // Sig logos (PNG — convert too)
  'sig/berkeley-seal.png',
  'sig/meridian-m.png',
];

function webpName(file) {
  return basename(file, extname(file)).toLowerCase().replace(/[\s()]/g, '-') + '.webp';
}

async function processImage(relPath) {
  const src = join(PUBLIC, relPath);
  const name = webpName(relPath);

  try {
    await stat(src);
  } catch {
    console.warn(`  SKIP (not found): ${relPath}`);
    return null;
  }

  const img = sharp(src);
  const meta = await img.metadata();
  const w = meta.width || DESKTOP_W;

  // Desktop
  const desktopName = name;
  await sharp(src)
    .resize({ width: Math.min(w, DESKTOP_W), withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(join(OUT, desktopName));

  // Mobile
  const mobileName = name.replace('.webp', '-mobile.webp');
  await sharp(src)
    .resize({ width: Math.min(w, MOBILE_W), withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(join(OUT, mobileName));

  const srcStat = await stat(src);
  const optStat = await stat(join(OUT, desktopName));
  const saved = ((1 - optStat.size / srcStat.size) * 100).toFixed(0);
  console.log(`  ✓ ${relPath} → ${desktopName} (${saved}% smaller)`);

  return { original: relPath, desktop: `/opt/${desktopName}`, mobile: `/opt/${mobileName}` };
}

async function main() {
  console.log('Optimizing images...\n');
  await mkdir(OUT, { recursive: true });

  const results = [];
  for (const file of USED_IMAGES) {
    const result = await processImage(file);
    if (result) results.push(result);
  }

  console.log(`\nDone: ${results.length} images optimized into /public/opt/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
