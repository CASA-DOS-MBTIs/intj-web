/**
 * Turns the community's badge into something that can sit on a dark page.
 *
 * The supplied PNG is 2000×2000 and 973 kB, and although it carries an alpha
 * channel every corner pixel is opaque white — it is a circular badge painted
 * onto a white square. Dropped onto this site's background that reads as a
 * white box with a logo inside it.
 *
 * The badge is a true circle, so a circular alpha mask is exact rather than a
 * guess: the radius is measured from the artwork itself instead of assumed.
 *
 * Run: node scripts/make-community-logo.mjs
 */
import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

// The 2000×2000 original lives outside public/ on purpose: everything under
// public/ is deployed, and shipping a 951 kB PNG that nothing loads would undo
// the point of converting it.
const SOURCE = 'design/source-art/casa-dos-mbtis-logo.png';
const TARGET = 'public/assets/logos/casa-dos-mbtis/logo.webp';

/** Displayed at most at 128 CSS px; twice that covers a 2× screen. */
const SIZE = 256;

const image = sharp(SOURCE);
const { width, height } = await image.metadata();

/* -- Measure the badge ------------------------------------------------------ */

const { data } = await sharp(SOURCE).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

/** Near-white and opaque: the plate, not the artwork. */
function isPlate(x, y) {
  const i = (y * width + x) * 4;
  return data[i] > 244 && data[i + 1] > 244 && data[i + 2] > 244 && data[i + 3] > 8;
}

// Walk in from the middle of each edge until the artwork starts. On a centred
// circle these four give the same inset; taking the largest is the safe choice,
// because a mask slightly inside the rim only trims plate.
const midY = Math.floor(height / 2);
const midX = Math.floor(width / 2);

let left = 0;
while (left < midX && isPlate(left, midY)) left++;
let right = width - 1;
while (right > midX && isPlate(right, midY)) right--;
let top = 0;
while (top < midY && isPlate(midX, top)) top++;
let bottom = height - 1;
while (bottom > midY && isPlate(midX, bottom)) bottom--;

const inset = Math.max(left, top, width - 1 - right, height - 1 - bottom);
const centreX = width / 2;
const centreY = height / 2;
// A hair inside the measured rim, so no ring of white survives on the edge.
const radius = Math.min(width, height) / 2 - inset - 2;

console.log(
  `source ${width}×${height}, plate inset ${inset}px on each side → mask radius ${radius.toFixed(0)}px`,
);

/* -- Cut the circle and shrink ---------------------------------------------- */

// The alpha is written straight into the pixels already in hand. Compositing an
// SVG mask would mean trusting the rasteriser to land on exactly 2000×2000, and
// it does not; this cannot drift.
//
// The edge fades across one pixel rather than switching from 255 to 0, so the
// rim does not come out jagged once the badge is scaled down.
const FEATHER = 1;

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const dx = x + 0.5 - centreX;
    const dy = y + 0.5 - centreY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const coverage =
      distance <= radius - FEATHER
        ? 1
        : distance >= radius + FEATHER
          ? 0
          : (radius + FEATHER - distance) / (2 * FEATHER);

    const alpha = (y * width + x) * 4 + 3;
    // Multiplied, not overwritten: whatever transparency the artwork already
    // had is kept.
    data[alpha] = Math.round(data[alpha] * coverage);
  }
}

const output = await sharp(data, { raw: { width, height, channels: 4 } })
  .resize(SIZE, SIZE, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .webp({ quality: 90, effort: 6, alphaQuality: 100 })
  .toBuffer();

await writeFile(TARGET, output);

console.log(
  `make-community-logo: ${SIZE}×${SIZE} → ${TARGET} (${(output.length / 1024).toFixed(1)} kB, ` +
    `down from ${(973557 / 1024).toFixed(0)} kB)`,
);
