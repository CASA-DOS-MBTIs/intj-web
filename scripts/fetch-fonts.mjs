/**
 * Downloads every webfont the site uses and generates local @font-face rules,
 * so the running app makes no external requests at all.
 *
 * All three families are SIL Open Font License 1.1, which explicitly permits
 * self-hosting; the licence texts are fetched alongside the fonts.
 *
 * Only the faces the stylesheets actually apply are fetched. The set used to be
 * five families and thirty-five files, of which twenty-five were never applied
 * by any rule: Cormorant Garamond and Space Grotesk had no `font-family`
 * declaration anywhere, and the 200/500/700 weights had no `font-weight` to
 * match. An unapplied @font-face never downloads, so nobody was paying for the
 * woff2 — but every one of them shipped a rule in the render-blocking
 * stylesheet, and all of them sat in the deploy.
 *
 * Applied weights, verified against the stylesheets: 300 (body) and 400
 * (everything else, including `strong`, which this site sets to 400 rather than
 * bold). Italic exists only for Bodoni.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const FONT_DIR = process.argv[2]; // src/assets/fonts  — bundled via url() in SCSS
const LICENSE_DIR = process.argv[3]; // public/assets/fonts/licenses — served as-is
const SCSS_OUT = process.argv[4]; // src/styles/_fonts.scss
const PREVIEW_CSS = process.argv[5]; // design/fonts-local.css

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) ' +
  'Chrome/126.0.0.0 Safari/537.36';

const CSS_URL =
  'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;1,6..96,400' +
  '&family=IBM+Plex+Mono:wght@400' +
  '&family=IBM+Plex+Sans:wght@300;400' +
  '&display=swap';

/**
 * latin covers Portuguese and English; latin-ext is cheap insurance for names.
 * Bodoni additionally needs `math`, which is where U+2248 (≈) lives — the home
 * page sets "≈2%" in Bodoni, and without it that one glyph falls back to Georgia.
 */
const BASE_SUBSETS = new Set(['latin', 'latin-ext']);

/**
 * The only glyph the site needs from `math` is U+2248 in the home page's stat
 * figures, which are Bodoni 400 upright. Shipping the math subset for the other
 * three Bodoni faces would add ~130 kB that no browser would ever request.
 */
function wantsExtraSubset(family, style, weight, subset) {
  return family === 'Bodoni Moda' && subset === 'math' && style === 'normal' && weight === '400';
}

const LICENSES = {
  'Bodoni Moda': 'bodonimoda',
  'IBM Plex Mono': 'ibmplexmono',
  'IBM Plex Sans': 'ibmplexsans',
};

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

await mkdir(FONT_DIR, { recursive: true });
await mkdir(LICENSE_DIR, { recursive: true });

const css = await (await fetch(CSS_URL, { headers: { 'User-Agent': UA } })).text();

const blocks = [...css.matchAll(/\/\*\s*([\w-]+)\s*\*\/\s*@font-face\s*\{([^}]+)\}/g)];
const faces = [];

for (const [, subset, body] of blocks) {
  const family = /font-family:\s*'([^']+)'/.exec(body)?.[1];
  const style = /font-style:\s*(\w+)/.exec(body)?.[1] ?? 'normal';
  const weight = /font-weight:\s*(\d+)/.exec(body)?.[1];
  const url = /src:\s*url\(([^)]+)\)/.exec(body)?.[1];
  const range = /unicode-range:\s*([^;]+);/.exec(body)?.[1].trim();
  if (!family || !weight || !url) continue;

  const wanted = BASE_SUBSETS.has(subset) || wantsExtraSubset(family, style, weight, subset);
  if (!wanted) continue;

  const file = `${slug(family)}-${weight}${style === 'italic' ? '-italic' : ''}-${subset}.woff2`;
  faces.push({ family, style, weight: Number(weight), subset, url, range, file });
}

let total = 0;
for (const face of faces) {
  const buf = Buffer.from(await (await fetch(face.url, { headers: { 'User-Agent': UA } })).arrayBuffer());
  await writeFile(join(FONT_DIR, face.file), buf);
  face.bytes = buf.length;
  total += buf.length;
}

// Licences travel with the fonts, as OFL 1.1 requires when redistributing.
for (const [family, dir] of Object.entries(LICENSES)) {
  const res = await fetch(`https://raw.githubusercontent.com/google/fonts/main/ofl/${dir}/OFL.txt`);
  if (res.ok) {
    await writeFile(join(LICENSE_DIR, `${slug(family)}-OFL.txt`), await res.text(), 'utf8');
  } else {
    console.warn(`! licence fetch failed for ${family} (${res.status})`);
  }
}

/** Order faces so the generated file reads family by family, light to heavy. */
faces.sort(
  (a, b) =>
    a.family.localeCompare(b.family) ||
    a.style.localeCompare(b.style) ||
    a.weight - b.weight ||
    a.subset.localeCompare(b.subset),
);

function rules(pathPrefix) {
  let out = '';
  let currentFamily = '';
  for (const f of faces) {
    if (f.family !== currentFamily) {
      currentFamily = f.family;
      out += `\n/* ${f.family} */\n`;
    }
    out += `@font-face {
  font-family: '${f.family}';
  font-style: ${f.style};
  font-weight: ${f.weight};
  font-display: swap;
  src: url('${pathPrefix}${f.file}') format('woff2');
  unicode-range: ${f.range};
}
`;
  }
  return out;
}

const header = `// GENERATED — do not edit by hand.
//
// Self-hosted webfaces. The app makes no request to fonts.googleapis.com or
// fonts.gstatic.com; these files are bundled by the Angular build, which
// fingerprints them and rewrites the url() below.
//
// All five families are SIL Open Font License 1.1. Licence texts ship in
// public/assets/fonts/licenses/.
//
// Subsets kept: latin, latin-ext (+ math for Bodoni Moda, which carries U+2248).
// Regenerate with scripts/fetch-fonts.mjs.
`;

await writeFile(SCSS_OUT, header + rules('../assets/fonts/'), 'utf8');
await writeFile(
  PREVIEW_CSS,
  '/* GENERATED — local faces for the offline logo contact sheet. */\n' +
    rules('../src/assets/fonts/'),
  'utf8',
);

const byFamily = new Map();
for (const f of faces) byFamily.set(f.family, (byFamily.get(f.family) ?? 0) + f.bytes);

console.log(`${faces.length} font files, ${(total / 1024).toFixed(0)} kB total\n`);
for (const [family, bytes] of [...byFamily].sort()) {
  console.log(`  ${family.padEnd(20)} ${(bytes / 1024).toFixed(0).padStart(5)} kB`);
}
