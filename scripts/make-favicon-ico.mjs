/**
 * Writes public/favicon.ico — the P1 mark without its wordmark, as a real
 * multi-size icon.
 *
 * This can be generated rather than hand-converted because the mark reduces to
 * four rectangles: no glyphs, so no font rasteriser is needed. That also means
 * every size is drawn at its own resolution instead of being downsampled from
 * one bitmap, which is what keeps 16 px crisp.
 *
 * The background is transparent and the bars keep the logo's own colours. A
 * bitmap icon cannot respond to prefers-color-scheme the way the SVG beside it
 * does, so on light browser chrome the paler bars will read faintly — the
 * alternative was repainting the mark, which is worse.
 */
import { writeFile } from 'node:fs/promises';

const OUT = process.argv[2];

/**
 * ICO entries are uncompressed 32-bit bitmaps, so every size costs
 * width × height × 4 bytes plus its mask — the 64 px entry alone was half the
 * file. These three cover what actually reads them: 16 for the tab, 32 for the
 * taskbar and high-DPI tab, 48 because that is the size Google's crawler picks
 * for the icon it shows beside a search result. Anything larger is served by
 * favicon.svg, which every modern browser prefers anyway.
 */
const SIZES = [16, 32, 48];

const LEAD = { r: 0xa7, g: 0x8b, b: 0xfa };
const INK = { r: 0xee, g: 0xef, b: 0xf5 };

/** The four bars as fractions of the tile, taken from the logo's proportions. */
const BARS = [
  { width: 20 / 32, colour: LEAD, alpha: 1 },
  { width: 14 / 32, colour: INK, alpha: 0.75 },
  { width: 9 / 32, colour: INK, alpha: 0.45 },
  { width: 5 / 32, colour: INK, alpha: 0.25 },
];

/** RGBA pixels for one tile, drawn at its own resolution over transparency. */
function draw(size) {
  // Buffer.alloc zero-fills, which is already fully transparent.
  const px = Buffer.alloc(size * size * 4);

  const x0 = Math.round(size * (6 / 32));
  const barH = Math.max(1, Math.round(size * (3 / 32)));
  const gap = Math.max(1, Math.round(size * (3 / 32)));
  const block = BARS.length * barH + (BARS.length - 1) * gap;
  let y = Math.max(0, Math.round((size - block) / 2));

  for (const bar of BARS) {
    const w = Math.max(1, Math.round(size * bar.width));
    const a = Math.round(bar.alpha * 255);
    for (let dy = 0; dy < barH && y + dy < size; dy++) {
      for (let dx = 0; dx < w && x0 + dx < size; dx++) {
        const i = ((y + dy) * size + (x0 + dx)) * 4;
        px[i] = bar.colour.r;
        px[i + 1] = bar.colour.g;
        px[i + 2] = bar.colour.b;
        px[i + 3] = a;
      }
    }
    y += barH + gap;
  }

  return px;
}

/** One ICO entry: BITMAPINFOHEADER, bottom-up BGRA, then the legacy AND mask. */
function encode(size) {
  const rgba = draw(size);

  const header = Buffer.alloc(40);
  header.writeUInt32LE(40, 0); // biSize
  header.writeInt32LE(size, 4); // biWidth
  header.writeInt32LE(size * 2, 8); // biHeight — XOR plus AND, per the icon spec
  header.writeUInt16LE(1, 12); // biPlanes
  header.writeUInt16LE(32, 14); // biBitCount
  header.writeUInt32LE(0, 16); // BI_RGB

  const xor = Buffer.alloc(size * size * 4);
  for (let row = 0; row < size; row++) {
    const src = (size - 1 - row) * size * 4; // bottom-up
    for (let col = 0; col < size; col++) {
      const s = src + col * 4;
      const d = (row * size + col) * 4;
      xor[d] = rgba[s + 2]; // B
      xor[d + 1] = rgba[s + 1]; // G
      xor[d + 2] = rgba[s]; // R
      xor[d + 3] = rgba[s + 3]; // A
    }
  }

  // Modern readers use the alpha channel, but the legacy 1-bit mask still has
  // to be there and still has to agree with it: a set bit means "leave the
  // background showing". Without this, a reader that falls back to the mask
  // paints the transparent area black.
  const maskRow = Math.ceil(size / 32) * 4;
  const and = Buffer.alloc(maskRow * size);
  for (let row = 0; row < size; row++) {
    const src = (size - 1 - row) * size * 4; // bottom-up, as above
    for (let col = 0; col < size; col++) {
      if (rgba[src + col * 4 + 3] === 0) {
        and[row * maskRow + (col >> 3)] |= 0x80 >> (col & 7);
      }
    }
  }

  return Buffer.concat([header, xor, and]);
}

const images = SIZES.map(encode);

const dir = Buffer.alloc(6 + 16 * SIZES.length);
dir.writeUInt16LE(0, 0);
dir.writeUInt16LE(1, 2); // 1 = icon
dir.writeUInt16LE(SIZES.length, 4);

let offset = dir.length;
SIZES.forEach((size, i) => {
  const o = 6 + i * 16;
  dir[o] = size === 256 ? 0 : size;
  dir[o + 1] = size === 256 ? 0 : size;
  dir[o + 2] = 0; // palette colours
  dir[o + 3] = 0;
  dir.writeUInt16LE(1, o + 4); // planes
  dir.writeUInt16LE(32, o + 6); // bpp
  dir.writeUInt32LE(images[i].length, o + 8);
  dir.writeUInt32LE(offset, o + 12);
  offset += images[i].length;
});

await writeFile(OUT, Buffer.concat([dir, ...images]));
console.log(`wrote ${OUT} — ${SIZES.join(', ')} px, ${offset} bytes`);
