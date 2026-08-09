/**
 * Draws public/social-card.webp — the 1200×630 image every link preview and
 * `og:image` points at.
 *
 * The palette is converted from the same OKLCH values `src/styles.scss` uses,
 * rather than hand-picked hex, so the card is the site's own background by
 * construction and cannot drift when a token moves.
 *
 * WebP rather than PNG: every renderer that matters — Meta, X, LinkedIn,
 * WhatsApp, Slack, Discord — reads it now, and it costs a fraction of the
 * bytes for flat artwork like this.
 *
 * Run: node scripts/make-social-card.mjs
 */
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;

/* -- Colour ---------------------------------------------------------------- */

/** OKLCH -> sRGB, the same transform a browser applies to `oklch()`. */
function oklch(lightness, chroma, hueDegrees) {
  const hue = (hueDegrees * Math.PI) / 180;
  const a = chroma * Math.cos(hue);
  const b = chroma * Math.sin(hue);

  const l = (lightness + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (lightness - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (lightness - 0.0894841775 * a - 1.291485548 * b) ** 3;

  const channels = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ].map((channel) => {
    const c = Math.min(1, Math.max(0, channel));
    const encoded = c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055;
    return Math.round(encoded * 255);
  });

  return `rgb(${channels.join(',')})`;
}

// Straight from the custom properties in src/styles.scss.
const BG = oklch(0.155, 0.012, 265);
const FG = oklch(0.945, 0.008, 265);
const MUTED = oklch(0.665, 0.013, 265);
const LINE = oklch(0.3, 0.016, 265);
const ACCENT = '#a78bfa';

/* -- Composition ----------------------------------------------------------- */

/**
 * The logo is a 210×62 viewBox: 2px bars at y=17/24/31/38 with widths
 * 26/19/12/6, and the wordmark set to their right. Scaled ×7 and kept in that
 * arrangement — the card is the mark enlarged, not a second mark.
 */
const SCALE = 7;
const BARS = [
  { width: 26, fill: ACCENT, opacity: 1 },
  { width: 19, fill: FG, opacity: 0.75 },
  { width: 12, fill: FG, opacity: 0.45 },
  { width: 6, fill: FG, opacity: 0.25 },
];

const barsLeft = 110;
const barsTop = 215;
const barHeight = 2 * SCALE;
const barPitch = 7 * SCALE;

const bars = BARS.map(
  (bar, index) =>
    `<rect x="${barsLeft}" y="${barsTop + index * barPitch}" width="${bar.width * SCALE}" ` +
    `height="${barHeight}" fill="${bar.fill}" opacity="${bar.opacity}"/>`,
).join('\n    ');

// Clear of the widest bar, with the wordmark's optical centre sitting on the
// centre of the bar stack rather than on the canvas.
const wordLeft = barsLeft + BARS[0].width * SCALE + 62;

/**
 * Bodoni Moda is bundled as woff2 for the browser and is not a system font, so
 * the renderer here falls back. Didot and Georgia are the closest widely
 * installed relatives — high-contrast serifs in the same family of shapes.
 */
const SERIF = 'Bodoni Moda, Didot, Georgia, Times New Roman, serif';
const MONO = 'IBM Plex Mono, Consolas, DejaVu Sans Mono, monospace';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${BG}"/>
  <g>
    ${bars}
  </g>
  <text x="${wordLeft}" y="345" font-family="${SERIF}" font-size="150" fill="${FG}"
        letter-spacing="16">INTJ</text>
  <text x="${wordLeft + 5}" y="398" font-family="${MONO}" font-size="22" fill="${ACCENT}"
        letter-spacing="8">NI · TE · FI · SE</text>
  <line x1="110" y1="512" x2="${WIDTH - 110}" y2="512" stroke="${LINE}" stroke-width="1"/>
  <text x="110" y="556" font-family="${MONO}" font-size="20" fill="${MUTED}"
        letter-spacing="4">intj.net.br</text>
</svg>`;

const target = join(process.cwd(), 'public', 'social-card.webp');

const output = await sharp(Buffer.from(svg))
  .webp({ quality: 92, effort: 6 })
  .toBuffer();

await writeFile(target, output);

console.log(
  `make-social-card: wrote ${WIDTH}×${HEIGHT} card (${(output.length / 1024).toFixed(1)} kB) to public/social-card.webp`,
);
