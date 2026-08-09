/**
 * GitHub Pages post-build step.
 *
 * The build prerenders every route, so the output is a tree of real documents —
 * `pt/mente/index.html` and so on — which Pages serves directly. Three things
 * still have to be added on top:
 *
 *  - `404.html`, so an unknown address gets the not-found page *with a 404
 *    status*. Pages has no rewrite rules; serving a copy of the homepage at 200
 *    instead would tell search engines that every typo is a real page.
 *  - `sitemap.xml` and `robots.txt`, listing what was prerendered.
 *  - `.nojekyll`, which stops Pages running the output through Jekyll and
 *    dropping every file whose name begins with an underscore.
 *
 * The sitemap is derived from the emitted files rather than from a list kept
 * alongside the router, so it cannot fall out of step with what actually
 * shipped: a page that failed to prerender is simply absent from both.
 */
import { access, copyFile, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { join, posix, relative, sep } from 'node:path';

const ORIGIN = 'https://intj.net.br';

/** Must match LANGS in src/app/content/types.ts. */
const LANGS = ['pt', 'en'];

/** BCP-47 tags for hreflang, matching HTML_LANG in language.service.ts. */
const HREFLANG = { pt: 'pt-BR', en: 'en' };

const outDir = join(process.cwd(), 'dist', 'intj-web', 'browser');

try {
  await access(join(outDir, 'index.html'));
} catch {
  console.error(`postbuild-pages: no build output at ${outDir}. Run "ng build" first.`);
  process.exit(1);
}

/**
 * Every prerendered route, with the title and description its own document
 * carries.
 *
 * Read back out of the emitted HTML rather than out of the content bundles: it
 * is the same reason the sitemap is derived from the output. A page that failed
 * to render is absent from every index we publish, and no index can describe a
 * page differently from the page itself.
 */
async function prerenderedRoutes(dir) {
  const found = [];

  for (const entry of await readdir(dir, { withFileTypes: true, recursive: true })) {
    if (!entry.isFile() || entry.name !== 'index.html') {
      continue;
    }

    // `parentPath` on older Node releases is `path`; both name the same thing.
    const parent = entry.parentPath ?? entry.path;
    const relativeDir = relative(dir, parent);
    const html = await readFile(join(parent, entry.name), 'utf8');

    found.push({
      path: relativeDir === '' ? '/' : `/${relativeDir.split(sep).join(posix.sep)}`,
      title: decodeEntities(/<title>([^<]*)<\/title>/.exec(html)?.[1] ?? ''),
      description: decodeEntities(
        /<meta name="description" content="([^"]*)"/.exec(html)?.[1] ?? '',
      ),
    });
  }

  return found.sort((a, b) => a.path.localeCompare(b.path));
}

/** The few entities Angular's serializer emits into attributes and titles. */
function decodeEntities(text) {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

const pages = await prerenderedRoutes(outDir);
const routes = pages.map((page) => page.path);

/**
 * Preload the two faces that are on screen before anything is scrolled.
 *
 * A webfont is only discovered once the stylesheet that names it has been
 * fetched and parsed, which puts it two round trips behind the HTML. These are
 * self-hosted and fingerprinted, so the filename is not knowable until the
 * build has run — hence doing it here rather than in index.html.
 *
 * Deliberately two, not all eleven: a preload is a promise that the file is
 * needed immediately, and promising eleven of them makes the browser fetch the
 * body font last. The mono face is left out because it only sets small labels,
 * which `font-display: swap` covers without a visible reflow.
 */
const PRELOAD = [
  /^bodoni-moda-400-latin-[A-Z0-9]+\.woff2$/i, // headings and numerals
  /^ibm-plex-sans-300-latin-[A-Z0-9]+\.woff2$/i, // body copy
];

const mediaFiles = await readdir(join(outDir, 'media')).catch(() => []);
const preloadTags = PRELOAD.map((pattern) => mediaFiles.find((file) => pattern.test(file)))
  .filter(Boolean)
  .map(
    (file) =>
      // crossorigin is not optional: fonts are fetched in CORS mode even from
      // the same origin, and a preload without it is fetched a second time.
      `<link rel="preload" as="font" type="font/woff2" href="/media/${file}" crossorigin>`,
  )
  .join('');

/**
 * Content-Security-Policy, as a meta tag.
 *
 * It belongs in a response header, and GitHub Pages does not let anyone set
 * one — so the two directives that only work as a header are simply not
 * available here: `frame-ancestors` (clickjacking) and `report-uri`. Everything
 * else a meta policy enforces exactly as a header would.
 *
 * The point of the exercise: `default-src 'self'` means the document cannot
 * fetch anything from anywhere but this origin. No CDN, no analytics, no font
 * service, no tracking pixel — not as a matter of discipline, but because the
 * browser refuses. If a dependency ever tries to phone home, the request fails
 * and it shows up in the console instead of in someone's data set.
 *
 * `'self'` rather than `'none'` as the default deliberately: this policy ships
 * inside a static file that cannot be hot-fixed behind a header, and a
 * directive I failed to think of should fall back to same-origin-only rather
 * than to a blank page.
 */
function policyFor(html) {
  const hashes = new Set();

  // Every inline <script>, whatever its type. The executable ones must be
  // hashed or they will not run; the JSON data blocks are not script-checked by
  // the spec, but hashing them costs bytes and removes the argument.
  for (const [, , body] of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
    if (body.trim()) {
      hashes.add(`'sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}'`);
    }
  }

  // Inline event-handler attributes are not covered by an ordinary hash, which
  // is what `'unsafe-hashes'` exists for. There is exactly one on the page —
  // the `media="print"` swap that keeps the stylesheet from blocking render —
  // and this allows that string and nothing else.
  const handlers = new Set();
  for (const [, code] of html.matchAll(/\son[a-z]+="([^"]*)"/g)) {
    handlers.add(`'sha256-${createHash('sha256').update(code, 'utf8').digest('base64')}'`);
  }

  const script = ["'self'", ...(handlers.size ? ["'unsafe-hashes'"] : []), ...hashes, ...handlers];

  return [
    "default-src 'self'",
    `script-src ${script.join(' ')}`,
    // The one concession. Angular injects a component's styles as an inline
    // <style> the moment a lazy route is entered, so the set of style hashes is
    // not knowable from the built document. Unlike script, an inline style
    // executes nothing; it would need a separate injection flaw to matter, and
    // this app renders no user input anywhere.
    "style-src 'self' 'unsafe-inline'",
    // data: is for the grain overlay, an inline SVG in a background-image. It
    // is part of the document, not a network fetch.
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'self'",
    "base-uri 'self'",
    "form-action 'none'",
    "frame-src 'none'",
    "object-src 'none'",
    'upgrade-insecure-requests',
  ].join('; ');
}

for (const page of pages) {
  const file = join(outDir, ...page.path.split('/').filter(Boolean), 'index.html');
  let html = await readFile(file, 'utf8');

  if (preloadTags && !html.includes('rel="preload" as="font"')) {
    html = html.replace('</head>', `${preloadTags}</head>`);
  }

  if (!html.includes('http-equiv="Content-Security-Policy"')) {
    // Directly after <meta charset>: a policy only governs what is parsed after
    // it, so anything above this line would be outside it.
    html = html.replace(
      /(<meta charset="[^"]*">)/i,
      `$1<meta http-equiv="Content-Security-Policy" content="${policyFor(html)}">`,
    );
  }

  await writeFile(file, html, 'utf8');
}

/**
 * The guarantee, enforced rather than asserted.
 *
 * "This site loads nothing from anywhere else" is easy to state and easy to
 * break — one `<link>` to a font service, one analytics snippet, and it is no
 * longer true while every test still passes. So the build checks it and fails.
 *
 * Only *loading* positions count. An `<a href>` to the community page is the
 * reader choosing to leave, which is not the site fetching anything, and the
 * canonical and hreflang links are absolute by specification without being
 * fetches.
 */
const LOADING_REL = /^(?:stylesheet|preload|prefetch|modulepreload|icon|apple-touch-icon|manifest)$/i;

const offences = [];

for (const page of pages) {
  const file = join(outDir, ...page.path.split('/').filter(Boolean), 'index.html');
  const html = await readFile(file, 'utf8');
  const external = (url) => /^(?:https?:)?\/\//i.test(url) && !url.startsWith(ORIGIN);

  for (const [, src] of html.matchAll(/<script[^>]+src="([^"]+)"/g)) {
    if (external(src)) offences.push(`${page.path}: <script src="${src}">`);
  }
  for (const [, attrs] of html.matchAll(/<link([^>]+)>/g)) {
    const rel = /rel="([^"]+)"/.exec(attrs)?.[1] ?? '';
    const href = /href="([^"]+)"/.exec(attrs)?.[1] ?? '';
    if (LOADING_REL.test(rel) && external(href)) {
      offences.push(`${page.path}: <link rel="${rel}" href="${href}">`);
    }
  }
  for (const [, src] of html.matchAll(/<(?:img|source|iframe|video|audio|embed)[^>]+src="([^"]+)"/g)) {
    if (external(src)) offences.push(`${page.path}: embedded ${src}`);
  }
  for (const [, url] of html.matchAll(/url\(\s*['"]?((?:https?:)?\/\/[^'")]+)/g)) {
    if (external(url)) offences.push(`${page.path}: css url(${url})`);
  }

  // A policy that does not cover its own document is worse than none: it looks
  // like protection and the page half-works.
  const csp = /<meta http-equiv="Content-Security-Policy" content="([^"]*)"/.exec(html)?.[1];
  if (!csp) {
    offences.push(`${page.path}: no Content-Security-Policy`);
    continue;
  }
  const JS_TYPES = new Set(['', 'text/javascript', 'module', 'application/javascript']);
  for (const [, attrs, body] of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
    const type = (/type="([^"]+)"/.exec(attrs)?.[1] ?? '').toLowerCase();
    if (!body.trim() || !JS_TYPES.has(type)) continue;
    const hash = createHash('sha256').update(body, 'utf8').digest('base64');
    if (!csp.includes(hash)) offences.push(`${page.path}: inline script not in the policy`);
  }
}

if (offences.length) {
  console.error('postbuild-pages: the build loads something it should not:');
  for (const offence of offences.slice(0, 20)) {
    console.error(`  ${offence}`);
  }
  process.exit(1);
}

/**
 * Angular emits `index.csr.html` — the empty client-render shell — alongside
 * the prerendered tree. Nothing on Pages ever serves it: every route has its
 * own document and 404.html catches the rest. But it is deployed, so it is
 * reachable by typing the name, and it is the one document the policy pass
 * above does not cover. An unprotected HTML file nobody uses is a surface with
 * no upside; it goes.
 */
await rm(join(outDir, 'index.csr.html'), { force: true });

// Pages looks for this exact filename at the root and answers it with a 404.
await copyFile(join(outDir, '404', 'index.html'), join(outDir, '404.html'));

/**
 * The not-found page is deliberately absent from the sitemap: it carries
 * `noindex`, and listing a page you have asked not to be indexed is a
 * contradiction search consoles report as an error.
 */
const indexable = routes.filter((route) => route !== '/404');
const lastmod = new Date().toISOString().slice(0, 10);

function alternatesFor(route) {
  const bare = route.replace(new RegExp(`^/(${LANGS.join('|')})(?=/|$)`), '') || '/';
  const suffix = bare === '/' ? '' : bare;

  return [
    ...LANGS.map(
      (lang) =>
        `    <xhtml:link rel="alternate" hreflang="${HREFLANG[lang]}" href="${ORIGIN}/${lang}${suffix}"/>`,
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${ORIGIN}/"/>`,
  ].join('\n');
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
  '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...indexable.map((route) =>
    [
      '  <url>',
      `    <loc>${ORIGIN}${route === '/' ? '/' : route}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      alternatesFor(route),
      '  </url>',
    ].join('\n'),
  ),
  '</urlset>',
  '',
].join('\n');

const robots = [
  'User-agent: *',
  'Allow: /',
  '',
  // Not disallowed: the not-found page has to stay crawlable for its own
  // `noindex` to be readable. A blocked URL is one a crawler never fetches, so
  // it never learns the page asked to be left out.
  `Sitemap: ${ORIGIN}/sitemap.xml`,
  '',
].join('\n');

/**
 * llms.txt — the same index, written for a language model rather than a
 * crawler (llmstxt.org).
 *
 * A model answering a question about the INTJ has to decide which page to read
 * before it reads any of them, and it makes that decision from titles and
 * descriptions. This gives it all fifty-seven in one request instead of a
 * sitemap full of bare URLs. The two languages are separated because a model
 * answering in Portuguese should not be quoting the English page.
 */
const LANG_HEADING = { pt: 'Português (pt-BR)', en: 'English' };

function llmsSection(lang) {
  const rows = pages
    .filter((page) => page.path === `/${lang}` || page.path.startsWith(`/${lang}/`))
    .map((page) => `- [${page.title}](${ORIGIN}${page.path}): ${page.description}`);

  return [`## ${LANG_HEADING[lang]}`, '', ...rows].join('\n');
}

const home = pages.find((page) => page.path === '/pt') ?? pages[0];

const llms = [
  '# INTJ — intj.net.br',
  '',
  `> ${home.description}`,
  '',
  'Site bilíngue sobre o tipo INTJ, escrito por uma pessoa e publicado sem anúncios,',
  'sem rastreadores e sem cadastro. Cada página cita as obras em que se apoia e diz',
  'onde a evidência é fraca — tipologia é modelo de autoconhecimento, não diagnóstico',
  'clínico nem instrumento de seleção.',
  '',
  'Cada página existe em português e em inglês sob o mesmo caminho, trocando apenas o',
  'prefixo /pt/ por /en/. O conteúdo é equivalente, não uma tradução automática.',
  '',
  llmsSection('pt'),
  '',
  llmsSection('en'),
  '',
  '## Meta',
  '',
  `- [Sitemap](${ORIGIN}/sitemap.xml): todas as URLs com os alternates de idioma.`,
  `- [Contato](${ORIGIN}/pt/contato): correções são bem-vindas, sobretudo as factuais.`,
  '',
].join('\n');

await writeFile(join(outDir, 'sitemap.xml'), sitemap, 'utf8');
await writeFile(join(outDir, 'robots.txt'), robots, 'utf8');
await writeFile(join(outDir, 'llms.txt'), llms, 'utf8');
await writeFile(join(outDir, '.nojekyll'), '');

console.log(
  `postbuild-pages: ${indexable.length} routes in sitemap.xml and llms.txt, ` +
    'plus robots.txt, 404.html and .nojekyll',
);
