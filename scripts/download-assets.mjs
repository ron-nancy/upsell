// Download all known assets from hellonancy.com CDN into /public.
// Run: node scripts/download-assets.mjs

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.resolve(__dirname, '..', 'public');

const CDN = 'https://hellonancy.com/cdn/shop/files/';
const PROD_CDN = 'https://hellonancy.com/cdn/shop/products/';

const IMAGES = [
  // global / icons / svgs
  'truck.png',
  'anonymous.png',
  'shield.png',
  'Nancy_Logo_Pink.png',
  'Nancy_Round_Logo.svg',
  'Logo.png',
  'stars.svg',
  'no-sound.svg',
  'box.svg',
  'money.svg',
  'airplane.svg',
  'fi_14243738.svg',
  'security_2.svg',
  'smiley_1.svg',
  'Cross_Icon_b61c3e14-f468-42c0-851f-3473151b2389.svg',
  'Checkmark_Icon_7044c2d7-d539-41bf-9803-2be30480eac5.svg',

  // press logos
  'The_Guardian_2018_svg.png',
  'vice-logo_6cc50991-ceed-4fc6-8e84-7bf8b7252af9.svg',
  'tatler-logo.png',
  'nbc-logo.svg',
  'cbs-logo.svg',

  // hero gallery
  'WhatsAppImage2023-11-18at14.19.19_2acc31e8.webp',
  'Untitled_Capture0776_2_4a5f299c-2c95-4dba-9f28-ab76844a5f11.webp',
  'BerriTappingClitoralMassager1.png',
  'Product.webp',
  'Untitled_Capture0007.jpg',
  'LOL1_eb49dfb5-0b1b-438d-b41e-dd27c75f2120.png',
  'Untitled_Capture0203.jpg',
  'LOL_2.png',
  'OH1.png',
  'OH_2.png',
  'IMG_3322.jpg',
  'IMG_3323.jpg',
  'IMG_3324.jpg',
  'IMG_3325.jpg',
  'IMG_3326.jpg',
  'Status.png',
  'Banner.webp',

  // doctor / experts
  'Dr._Angela_Wright.png',
  'Image_Dr._Angela_Wright.png',
  'rythm-diagram-1.svg',
  'nancy_graphic_intensity_7ef01583-8685-48a9-b6de-fb7509a4e1e2.svg',
  'noun-drop-1797148_3fb47920-9fbb-4cd1-aae6-60de946188a8.svg',
  'Nancy_Graphic_icons-12.svg',
  'Asset_1_4x_c2356914-4e35-4567-91d8-8046d5faac52.png',
];

const PRODUCT_FILES = [
  'Pouch_image_27feba3e-dba5-4072-96d3-f17ff2a471f9.png',
];

const VIDEO_THUMBS = [
  '6cd173a0016e45f4bf6645fd64a5ded9.thumbnail.0000000000.jpg',
  'b8df15e3934740d5b8fdc822673792c7.thumbnail.0000000000.jpg',
  '898e92513a664b10a191cac737e4e6de.thumbnail.0000000000.jpg',
  'c6131e25558f4852ba469c24dc5d32b2.thumbnail.0000000000.jpg',
  '564895d0b5124b13bd102bdc6eacb42d.thumbnail.0000000000.jpg',
  '463d9179e9d442c6ac9a64bf004a7b67.thumbnail.0000000000.jpg',
  'c54f3800476c4d42b55c32f137864a19.thumbnail.0000000000.jpg',
  '888c0d2ff265477baf43c26f138dbd34.thumbnail.0000000000.jpg',
  'ce22d728328e45f58b1ca081563c26aa.thumbnail.0000000000.jpg',
  '611caed516ed4446858e94354e8f2692.thumbnail.0000000000.jpg',
];

const VIDEOS = [
  ['c6131e25558f4852ba469c24dc5d32b2/c6131e25558f4852ba469c24dc5d32b2.HD-1080p-2.5Mbps-25762174.mp4', 'ugc-1.mp4'],
  ['564895d0b5124b13bd102bdc6eacb42d/564895d0b5124b13bd102bdc6eacb42d.HD-1080p-2.5Mbps-63019819.mp4', 'ugc-2.mp4'],
  ['463d9179e9d442c6ac9a64bf004a7b67/463d9179e9d442c6ac9a64bf004a7b67.HD-720p-1.6Mbps-25762175.mp4', 'ugc-3.mp4'],
  ['c54f3800476c4d42b55c32f137864a19/c54f3800476c4d42b55c32f137864a19.HD-1080p-3.3Mbps-64862441.mp4', 'ugc-4.mp4'],
  ['888c0d2ff265477baf43c26f138dbd34/888c0d2ff265477baf43c26f138dbd34.SD-480p-0.9Mbps-63019932.mp4', 'ugc-5.mp4'],
  ['ce22d728328e45f58b1ca081563c26aa/ce22d728328e45f58b1ca081563c26aa.HD-1080p-4.8Mbps-37820708.mp4', 'ugc-6.mp4'],
  ['611caed516ed4446858e94354e8f2692/611caed516ed4446858e94354e8f2692.HD-1080p-3.3Mbps-64862539.mp4', 'ugc-7.mp4'],
];

const FONTS = [
  'Fraunces-Regular.woff',
  'Fraunces-Bold.woff',
  'ESRebondGrotesque-Light.otf',
  'ESRebondGrotesque-Regular.woff',
  'ESRebondGrotesque-Semibold.woff',
  'ESRebondGrotesque-Bold.woff',
];

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function download(url, outPath) {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (clone-script)' },
    });
    if (!res.ok) {
      console.error(`✗ ${res.status} ${url}`);
      return false;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await ensureDir(path.dirname(outPath));
    await fs.writeFile(outPath, buf);
    const kb = (buf.length / 1024).toFixed(1);
    console.log(`✓ ${path.relative(PUBLIC, outPath)} (${kb}KB)`);
    return true;
  } catch (e) {
    console.error(`✗ ${url} → ${e.message}`);
    return false;
  }
}

async function batchedRun(tasks, batchSize = 4) {
  for (let i = 0; i < tasks.length; i += batchSize) {
    await Promise.all(tasks.slice(i, i + batchSize).map((t) => t()));
  }
}

async function main() {
  const tasks = [];

  for (const f of IMAGES) {
    tasks.push(() => download(`${CDN}${f}`, path.join(PUBLIC, 'images', f)));
  }
  for (const f of PRODUCT_FILES) {
    tasks.push(() => download(`${PROD_CDN}${f}`, path.join(PUBLIC, 'images', f)));
  }
  for (const f of VIDEO_THUMBS) {
    tasks.push(() => download(`${CDN}preview_images/${f}`, path.join(PUBLIC, 'images/thumbs', f)));
  }
  for (const [urlPart, localName] of VIDEOS) {
    tasks.push(() => download(`https://hellonancy.com/cdn/shop/videos/c/vp/${urlPart}`, path.join(PUBLIC, 'videos', localName)));
  }
  for (const f of FONTS) {
    tasks.push(() => download(`${CDN}${f}`, path.join(PUBLIC, 'fonts', f)));
  }

  console.log(`Downloading ${tasks.length} assets…`);
  await batchedRun(tasks, 4);
  console.log('Done.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
