/**
 * Redraws the 22 logo explorations from Logo.dc.html as standalone SVG assets.
 *
 * The originals are CSS constructions (divs, borders, clip-path, gradients).
 * Each is rebuilt here with real vector primitives so the result is scalable and
 * usable as an asset. Colours are emitted as var(--token, #fallback): inlined in
 * the Angular app a logo inherits the live theme, and opened on its own it still
 * renders correctly.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const OUT = process.argv[2];
const PREVIEW = process.argv[3];

const SERIF = "'Bodoni Moda', Georgia, serif";
const MONO = "'IBM Plex Mono', ui-monospace, monospace";
const SANS = "'IBM Plex Sans', Helvetica, sans-serif";
const GROTESK = "'Space Grotesk', 'IBM Plex Sans', sans-serif";
const CORMORANT = "'Cormorant Garamond', Georgia, serif";

const FG = 'var(--fg, #eeeff5)';
const MUT = 'var(--mut, #9a9bab)';
const LINE = 'var(--line, #3c3d4b)';
const BG2 = 'var(--bg2, #14151c)';
const ACCENT = 'var(--accent, #a78bfa)';
const ON_ACCENT = 'var(--on-accent, #191a20)';

/** A <text> node with the letter-spacing the design specifies. */
function text(content, { x, y, font, size, fill = FG, spacing = 0, weight = 400, style = '', anchor = 'middle' }) {
  const bits = [
    `x="${x}"`,
    `y="${y}"`,
    `text-anchor="${anchor}"`,
    `dominant-baseline="central"`,
    `font-family="${font}"`,
    `font-size="${size}"`,
    `font-weight="${weight}"`,
    `fill="${fill}"`,
  ];
  const css = [`letter-spacing:${spacing}px`];
  if (style) css.push(style);
  bits.push(`style="${css.join(';')}"`);
  return `<text ${bits.join(' ')}>${content}</text>`;
}

function svg(viewBox, title, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" role="img" aria-labelledby="t">
  <title id="t">${title}</title>
${body
  .split('\n')
  .filter((l) => l.trim())
  .map((l) => '  ' + l.trim())
  .join('\n')}
</svg>
`;
}

/** Regular hexagon matching clip-path polygon(50% 0,100% 26%,100% 74%,50% 100%,0 74%,0 26%). */
function hexPoints(w, h, inset = 0) {
  const x0 = inset;
  const x1 = w - inset;
  const y0 = inset;
  const y1 = h - inset;
  const ih = y1 - y0;
  return [
    [(x0 + x1) / 2, y0],
    [x1, y0 + ih * 0.26],
    [x1, y0 + ih * 0.74],
    [(x0 + x1) / 2, y1],
    [x0, y0 + ih * 0.74],
    [x0, y0 + ih * 0.26],
  ]
    .map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`)
    .join(' ');
}

const LOGOS = [];
const add = (code, slug, name, family, desc, fonts, markup) =>
  LOGOS.push({ code, slug, name, family, desc, fonts, markup });

/* -- Family 01 · Monograms ------------------------------------------------- */

add('M1', 'm1-orbital-nj', 'Orbital NJ', 'Monogramas',
  'Duas órbitas concêntricas, iniciais em Bodoni. Selo clássico, favicon perfeito.',
  ['Bodoni Moda'],
  svg('0 0 100 100', 'INTJ — Orbital NJ', `
    <circle cx="50" cy="50" r="49.5" fill="none" stroke="${LINE}" stroke-width="1"/>
    <circle cx="50" cy="50" r="36.5" fill="none" stroke="${ACCENT}" stroke-width="1" opacity="0.55"/>
    ${text('NJ', { x: 51, y: 51, font: SERIF, size: 32, spacing: 1.9 })}
  `));

add('M2', 'm2-quadrante', 'Quadrante', 'Monogramas',
  'As quatro letras como quatro eixos de uma matriz. Frio, técnico, sistemático.',
  ['IBM Plex Mono'],
  svg('0 0 96 96', 'INTJ — Quadrante', `
    <rect x="0.5" y="0.5" width="95" height="95" fill="none" stroke="${LINE}" stroke-width="1"/>
    <line x1="48" y1="0" x2="48" y2="96" stroke="${LINE}" stroke-width="1"/>
    <line x1="0" y1="48" x2="96" y2="48" stroke="${LINE}" stroke-width="1"/>
    ${text('I', { x: 24, y: 24, font: MONO, size: 17, fill: ACCENT })}
    ${text('N', { x: 72, y: 24, font: MONO, size: 17 })}
    ${text('T', { x: 24, y: 72, font: MONO, size: 17 })}
    ${text('J', { x: 72, y: 72, font: MONO, size: 17 })}
  `));

add('M3', 'm3-eclipse', 'Eclipse', 'Monogramas',
  'Disco sólido com satélite: IN em bloco, TJ orbitando. Único com peso de cor cheia.',
  ['Bodoni Moda'],
  svg('0 0 110 108', 'INTJ — Eclipse', `
    <circle cx="52" cy="52" r="52" fill="${ACCENT}"/>
    ${text('IN', { x: 52, y: 53, font: SERIF, size: 34, fill: ON_ACCENT, spacing: 1.4 })}
    <circle cx="91" cy="89" r="17" fill="${BG2}" stroke="${LINE}" stroke-width="1"/>
    ${text('TJ', { x: 91, y: 90, font: SERIF, size: 14 })}
  `));

add('M4', 'm4-ligadura-nj', 'Ligadura NJ', 'Monogramas',
  'Letras sobrepostas em Bodoni, sem moldura. A mais editorial e a mais leve.',
  ['Bodoni Moda'],
  svg('0 0 118 90', 'INTJ — Ligadura NJ', `
    ${text('N', { x: 4, y: 46, font: SERIF, size: 78, anchor: 'start', spacing: -3.1 })}
    ${text('J', { x: 62, y: 46, font: SERIF, size: 78, fill: ACCENT, anchor: 'start', spacing: -3.1 })}
  `));

/* -- Family 02 · The cognitive stack --------------------------------------- */

add('P1', 'p1-barras-decrescentes', 'Barras decrescentes', 'A pilha cognitiva',
  'A hierarquia das funções explicada sem legenda. Conceito mais claro do conjunto.',
  ['Bodoni Moda', 'IBM Plex Mono'],
  svg('0 0 210 62', 'INTJ — Barras decrescentes', `
    <rect x="0" y="17" width="26" height="2" fill="${ACCENT}"/>
    <rect x="0" y="24" width="19" height="2" fill="${FG}" opacity="0.75"/>
    <rect x="0" y="31" width="12" height="2" fill="${FG}" opacity="0.45"/>
    <rect x="0" y="38" width="6" height="2" fill="${FG}" opacity="0.25"/>
    ${text('INTJ', { x: 42, y: 24, font: SERIF, size: 42, anchor: 'start', spacing: 7.6 })}
    ${text('NI · TE · FI · SE', { x: 43, y: 48, font: MONO, size: 8.5, fill: MUT, anchor: 'start', spacing: 2.2 })}
  `));

add('P2', 'p2-torres', 'Torres', 'A pilha cognitiva',
  'Versão vertical e mais dura, com Space Grotesk. Sensação de painel e dados.',
  ['Space Grotesk'],
  svg('0 0 120 100', 'INTJ — Torres', `
    <rect x="42" y="8" width="9" height="56" fill="${ACCENT}"/>
    <rect x="57" y="24" width="9" height="40" fill="${FG}" opacity="0.7"/>
    <rect x="72" y="39" width="9" height="25" fill="${FG}" opacity="0.42"/>
    <rect x="87" y="51" width="9" height="13" fill="${FG}" opacity="0.22"/>
    ${text('INTJ', { x: 62, y: 87, font: GROTESK, size: 26, weight: 500, spacing: 5.7 })}
  `));

add('P3', 'p3-legenda-tecnica', 'Legenda técnica', 'A pilha cognitiva',
  'A pilha nomeada. Funciona melhor grande — no rodapé ou como assinatura.',
  ['IBM Plex Mono'],
  svg('0 0 120 74', 'INTJ — Legenda técnica', `
    ${text('Ni', { x: 0, y: 8, font: MONO, size: 12.5, fill: ACCENT, anchor: 'start', spacing: 2.5 })}
    <rect x="32" y="7.5" width="74" height="1" fill="${ACCENT}"/>
    ${text('Te', { x: 0, y: 28, font: MONO, size: 12.5, fill: MUT, anchor: 'start', spacing: 2.5 })}
    <rect x="32" y="27.5" width="54" height="1" fill="${LINE}"/>
    ${text('Fi', { x: 0, y: 48, font: MONO, size: 12.5, fill: MUT, anchor: 'start', spacing: 2.5 })}
    <rect x="32" y="47.5" width="34" height="1" fill="${LINE}"/>
    ${text('Se', { x: 0, y: 68, font: MONO, size: 12.5, fill: MUT, anchor: 'start', spacing: 2.5 })}
    <rect x="32" y="67.5" width="16" height="1" fill="${LINE}"/>
  `));

/* -- Family 03 · Convergence ----------------------------------------------- */

add('C1', 'c1-ponto-unico', 'Ponto único', 'Convergência',
  'Ni é convergência: tudo colapsa num ponto. A mais enigmática e abstrata.',
  ['IBM Plex Mono'],
  svg('0 0 140 140', 'INTJ — Ponto único', `
    <defs>
      <radialGradient id="glow">
        <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0.55"/>
        <stop offset="100%" stop-color="${ACCENT}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="70" cy="70" r="69.5" fill="none" stroke="${LINE}" stroke-width="1" stroke-dasharray="4 4"/>
    <circle cx="70" cy="70" r="26" fill="url(#glow)"/>
    <circle cx="70" cy="70" r="3.5" fill="${ACCENT}"/>
    ${text('INTJ', { x: 70, y: 116, font: MONO, size: 9, fill: MUT, spacing: 2.7 })}
  `));

add('C2', 'c2-feixe', 'Feixe', 'Convergência',
  'Cinco linhas de informação e uma que atravessa até o resultado. Direção e foco.',
  ['—'],
  svg('0 0 120 100', 'INTJ — Feixe', `
    <defs>
      <linearGradient id="fadeLine" x1="0" x2="1">
        <stop offset="0%" stop-color="${LINE}" stop-opacity="0"/>
        <stop offset="100%" stop-color="${LINE}" stop-opacity="1"/>
      </linearGradient>
      <linearGradient id="fadeAccent" x1="0" x2="1">
        <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0"/>
        <stop offset="100%" stop-color="${ACCENT}" stop-opacity="1"/>
      </linearGradient>
    </defs>
    <rect x="0" y="6" width="110" height="1" fill="url(#fadeLine)"/>
    <rect x="0" y="28" width="110" height="1" fill="url(#fadeLine)"/>
    <rect x="0" y="50" width="110" height="1" fill="url(#fadeAccent)"/>
    <rect x="0" y="72" width="110" height="1" fill="url(#fadeLine)"/>
    <rect x="0" y="94" width="110" height="1" fill="url(#fadeLine)"/>
    <circle cx="110" cy="50.5" r="4.5" fill="${ACCENT}"/>
  `));

add('C3', 'c3-losango-duplo', 'Losango duplo', 'Convergência',
  'Interno e externo, mundo interior dentro da estrutura externa. Simetria rígida.',
  ['IBM Plex Mono'],
  svg('0 0 152 152', 'INTJ — Losango duplo', `
    <polygon points="76,0.7 151.3,76 76,151.3 0.7,76" fill="none" stroke="${LINE}" stroke-width="1"/>
    <polygon points="76,31 121,76 76,121 31,76" fill="none" stroke="${ACCENT}" stroke-width="1" opacity="0.6"/>
    ${text('INTJ', { x: 77, y: 76, font: MONO, size: 11, spacing: 2.2 })}
  `));

add('C4', 'c4-meias-orbitas', 'Meias órbitas', 'Convergência',
  'Dois arcos incompletos que se completam. Serifa leve, ar de observatório.',
  ['Cormorant Garamond'],
  svg('0 0 120 120', 'INTJ — Meias órbitas', `
    <path d="M 0.5 60 A 59.5 59.5 0 0 1 119.5 60" fill="none" stroke="${LINE}" stroke-width="1"/>
    <path d="M 18.5 60 A 41.5 41.5 0 0 0 101.5 60" fill="none" stroke="${ACCENT}" stroke-width="1"/>
    ${text('INTJ', { x: 62, y: 61, font: CORMORANT, size: 29, spacing: 5.2 })}
  `));

/* -- Family 04 · Typographic seals ----------------------------------------- */

add('S1', 's1-selo-editorial', 'Selo editorial', 'Selos tipográficos',
  'Capa de livro. A mais sóbria e legível; já conversa com o traço de acento do site.',
  ['Bodoni Moda', 'IBM Plex Mono'],
  svg('0 0 220 96', 'INTJ — Selo editorial', `
    <rect x="1" y="0.5" width="218" height="95" fill="none" stroke="${LINE}" stroke-width="1"/>
    <rect x="0" y="0" width="2" height="96" fill="${ACCENT}"/>
    ${text('INTJ', { x: 26, y: 38, font: SERIF, size: 38, anchor: 'start', spacing: 11.4 })}
    ${text('RETRATO COMPLETO DO TIPO', { x: 27, y: 68, font: MONO, size: 8.5, fill: MUT, anchor: 'start', spacing: 1.7 })}
  `));

add('S2', 's2-italico-entre-filetes', 'Itálico entre filetes', 'Selos tipográficos',
  'Caixa mista em itálico Bodoni: o mais humano e menos corporativo do conjunto.',
  ['Bodoni Moda', 'IBM Plex Mono'],
  svg('0 0 140 110', 'INTJ — Itálico entre filetes', `
    <rect x="10" y="12" width="120" height="1" fill="${LINE}"/>
    ${text('Intj', { x: 70, y: 47, font: SERIF, size: 46, weight: 500, style: 'font-style:italic' })}
    <rect x="10" y="80" width="120" height="1" fill="${LINE}"/>
    ${text('O ESTRATEGISTA', { x: 70, y: 97, font: MONO, size: 8.5, fill: ACCENT, spacing: 2.4 })}
  `));

add('S3', 's3-etiqueta', 'Etiqueta', 'Selos tipográficos',
  'Bloco sólido + ficha técnica. O mais contemporâneo e o mais "produto".',
  ['Space Grotesk', 'IBM Plex Mono'],
  svg('0 0 240 58', 'INTJ — Etiqueta', `
    <rect x="0" y="0" width="104" height="58" fill="${ACCENT}"/>
    ${text('INTJ', { x: 52, y: 30, font: GROTESK, size: 30, weight: 700, fill: ON_ACCENT, spacing: 1.2 })}
    <rect x="104.5" y="0.5" width="135" height="57" fill="none" stroke="${LINE}" stroke-width="1"/>
    ${text('TIPO 2%', { x: 120, y: 21, font: MONO, size: 8.5, fill: MUT, anchor: 'start', spacing: 1.7 })}
    ${text('Ni · Te · Fi · Se', { x: 120, y: 38, font: MONO, size: 8.5, fill: MUT, anchor: 'start', spacing: 1.7 })}
  `));

add('S4', 's4-fina-espacada', 'Fina e espaçada', 'Selos tipográficos',
  'Peso 200 com muito tracking. Silenciosa, quase sussurrada — bem INTJ.',
  ['IBM Plex Sans'],
  svg('0 0 220 78', 'INTJ — Fina e espaçada', `
    ${text('INTJ', { x: 119, y: 30, font: SANS, size: 44, weight: 200, spacing: 18.5 })}
    <rect x="10" y="58" width="200" height="1" fill="${ACCENT}" opacity="0.7"/>
  `));

/* -- Family 05 · Secrecy --------------------------------------------------- */

add('X1', 'x1-hexagono-duplo', 'Hexágono duplo', 'Sigilo e mistério',
  'Selo hexagonal com núcleo interno. Ar de brasão discreto, sem heráldica.',
  ['Bodoni Moda'],
  svg('0 0 100 112', 'INTJ — Hexágono duplo', `
    <polygon points="${hexPoints(100, 112, 0.5)}" fill="none" stroke="${LINE}" stroke-width="1"/>
    <polygon points="${hexPoints(100, 112, 14.5)}" fill="none" stroke="${ACCENT}" stroke-width="1" opacity="0.55"/>
    ${text('NJ', { x: 50, y: 57, font: SERIF, size: 26 })}
  `));

add('X2', 'x2-reticulo', 'Retículo', 'Sigilo e mistério',
  'Mira de precisão: eixos, losango e centro. Estratégia sem literalidade.',
  ['—'],
  svg('0 0 112 112', 'INTJ — Retículo', `
    <line x1="56" y1="0" x2="56" y2="112" stroke="${LINE}" stroke-width="1"/>
    <line x1="0" y1="56" x2="112" y2="56" stroke="${LINE}" stroke-width="1"/>
    <polygon points="56,13.6 98.4,56 56,98.4 13.6,56" fill="none" stroke="${ACCENT}" stroke-width="1" opacity="0.7"/>
    <circle cx="56" cy="56" r="2.5" fill="${ACCENT}"/>
  `));

add('X3', 'x3-nevoa', 'Névoa', 'Sigilo e mistério',
  'Halo difuso dentro do disco. A mais atmosférica; precisa de tamanho médio.',
  ['IBM Plex Mono'],
  svg('0 0 118 118', 'INTJ — Névoa', `
    <defs>
      <radialGradient id="haze" cx="0.5" cy="0.42" r="0.58">
        <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="${ACCENT}" stop-opacity="0"/>
      </radialGradient>
      <clipPath id="disc"><circle cx="59" cy="59" r="58.5"/></clipPath>
    </defs>
    <g clip-path="url(#disc)"><rect width="118" height="118" fill="url(#haze)"/></g>
    <circle cx="59" cy="59" r="58.5" fill="none" stroke="${LINE}" stroke-width="1"/>
    ${text('INTJ', { x: 59, y: 98, font: MONO, size: 9, spacing: 2.7 })}
  `));

/* -- Family 06 · Angular --------------------------------------------------- */

add('A1', 'a1-vetor', 'Vetor', 'Angulosas',
  'Uma seta e a palavra. Direção pura, zero ornamento — o mais decidido.',
  ['Space Grotesk'],
  svg('0 0 190 42', 'INTJ — Vetor', `
    <polygon points="0,5 26,21 0,37" fill="${ACCENT}"/>
    ${text('INTJ', { x: 40, y: 21, font: GROTESK, size: 34, weight: 500, anchor: 'start', spacing: 5.4 })}
  `));

add('A2', 'a2-prisma', 'Prisma', 'Angulosas',
  'Triângulo com eixo interno: informação entrando e virando uma linha só.',
  ['IBM Plex Mono'],
  svg('0 0 88 104', 'INTJ — Prisma', `
    <polygon points="44,1 87,75 1,75" fill="none" stroke="${LINE}" stroke-width="1"/>
    <line x1="44" y1="15" x2="44" y2="65" stroke="${ACCENT}" stroke-width="1"/>
    ${text('INTJ', { x: 46, y: 96, font: MONO, size: 10, fill: MUT, spacing: 3.2 })}
  `));

add('A3', 'a3-diagonal', 'Diagonal', 'Angulosas',
  'Grade de nove com uma diagonal acesa: padrão encontrado dentro do sistema.',
  ['—'],
  svg('0 0 96 96', 'INTJ — Diagonal', `
    <rect x="0" y="0" width="28.67" height="28.67" fill="${ACCENT}"/>
    <rect x="33.67" y="0.5" width="27.67" height="27.67" fill="none" stroke="${LINE}"/>
    <rect x="67.33" y="0.5" width="27.67" height="27.67" fill="none" stroke="${LINE}"/>
    <rect x="0.5" y="34.17" width="27.67" height="27.67" fill="none" stroke="${LINE}"/>
    <rect x="33.67" y="33.67" width="28.67" height="28.67" fill="${ACCENT}" opacity="0.45"/>
    <rect x="67.33" y="34.17" width="27.67" height="27.67" fill="none" stroke="${LINE}"/>
    <rect x="0.5" y="67.83" width="27.67" height="27.67" fill="none" stroke="${LINE}"/>
    <rect x="33.67" y="67.83" width="27.67" height="27.67" fill="none" stroke="${LINE}"/>
    <rect x="67.33" y="67.33" width="28.67" height="28.67" fill="${ACCENT}" opacity="0.18"/>
  `));

add('A4', 'a4-bloco-pesado', 'Bloco pesado', 'Angulosas',
  'Grotesk 700 com dois acentos. O mais forte e o mais moderno; menos misterioso.',
  ['Space Grotesk'],
  svg('0 0 150 76', 'INTJ — Bloco pesado', `
    ${text('I', { x: 6, y: 32, font: GROTESK, size: 52, weight: 700, anchor: 'start', spacing: -1 })}
    ${text('N', { x: 22, y: 32, font: GROTESK, size: 52, weight: 700, fill: ACCENT, anchor: 'start', spacing: -1 })}
    ${text('T', { x: 62, y: 32, font: GROTESK, size: 52, weight: 700, anchor: 'start', spacing: -1 })}
    ${text('J', { x: 97, y: 32, font: GROTESK, size: 52, weight: 700, anchor: 'start', spacing: -1 })}
    <rect x="97" y="60" width="28" height="4" fill="${ACCENT}"/>
  `));

/* -- Emit ------------------------------------------------------------------ */

/**
 * Namespace every internal id with the logo's slug.
 *
 * These are meant to be inlined, and more than one may sit on the same page —
 * two SVGs both defining `#glow` would have the second silently steal the
 * first's gradient. Prefixing makes each document self-contained.
 */
function namespaceIds(markup, slug) {
  const ids = [...markup.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  let out = markup;
  for (const id of ids) {
    const scoped = `${slug}-${id}`;
    out = out
      .replaceAll(`id="${id}"`, `id="${scoped}"`)
      .replaceAll(`url(#${id})`, `url(#${scoped})`)
      .replaceAll(`aria-labelledby="${id}"`, `aria-labelledby="${scoped}"`)
      .replaceAll(`clip-path="url(#${id})"`, `clip-path="url(#${scoped})"`);
  }
  return out;
}

await mkdir(OUT, { recursive: true });

for (const logo of LOGOS) {
  logo.markup = namespaceIds(logo.markup, logo.slug);
  await writeFile(join(OUT, `${logo.slug}.svg`), logo.markup, 'utf8');
}

const families = [...new Set(LOGOS.map((l) => l.family))];

const readme = `# Logos — explorações

${LOGOS.length} explorações de identidade importadas de \`Logo.dc.html\` do projeto Claude Design.

**Nenhuma está aplicada no site.** São assets guardados para você testar e escolher.

## Como usar para testar

Abra \`design/logos-preview.html\` na raiz do repositório para ver todas lado a lado,
em tamanho grande e em tamanho de navegação.

Para experimentar uma no site, o caminho servido é \`assets/logos/<arquivo>.svg\`.
Inline (via \`<svg>\` no template) a logo herda os tokens do tema — inclusive a troca de
cor de acento. Como \`<img src>\` ela usa as cores de fallback embutidas.

## Fontes

Cada SVG referencia as famílias pelo nome. Todas as cinco usadas aqui são
auto-hospedadas pela aplicação — Bodoni Moda, IBM Plex Sans, IBM Plex Mono, Space Grotesk
e Cormorant Garamond — então qualquer uma destas logos renderiza com a tipografia certa,
inline no site ou nesta folha de contato, sem nenhuma requisição externa.

As duas famílias que entraram no projeto só por causa destas explorações:

- **Space Grotesk** — ${LOGOS.filter((l) => l.fonts.includes('Space Grotesk')).map((l) => l.code).join(', ')}
- **Cormorant Garamond** — ${LOGOS.filter((l) => l.fonts.includes('Cormorant Garamond')).map((l) => l.code).join(', ')}

Se nenhuma das escolhidas usar essas duas, dá para removê-las de
\`scripts/fetch-fonts.mjs\` e economizar cerca de 370 kB no repositório.

## Catálogo

${families
  .map(
    (family) => `### ${family}

| Código | Nome | Arquivo | Notas |
| --- | --- | --- | --- |
${LOGOS.filter((l) => l.family === family)
  .map((l) => `| \`${l.code}\` | ${l.name} | \`${l.slug}.svg\` | ${l.desc} |`)
  .join('\n')}`,
  )
  .join('\n\n')}

## Fidelidade

Os originais são construções em CSS (bordas, \`clip-path\`, gradientes), não vetores.
Cada logo foi redesenhada com primitivas SVG reais. A geometria é fiel; o espaçamento
horizontal dos blocos com texto é aproximado, porque a largura exata de uma palavra só é
conhecida quando a fonte carrega. Ao escolher uma, vale ajustar o \`viewBox\` dela.

Duas logos animavam no original e aqui estão estáticas, no quadro de repouso:
\`C1\` (órbita tracejada girando) e \`C2\` (ponto pulsando).
`;

await writeFile(join(OUT, 'README.md'), readme, 'utf8');

const preview = `<!doctype html>
<meta charset="utf-8">
<title>INTJ — 22 explorações de logo</title>
<link rel="stylesheet" href="fonts-local.css">
<style>
  :root{--bg:oklch(0.155 0.012 265);--bg2:oklch(0.122 0.012 265);--line:oklch(0.30 0.016 265);
        --fg:oklch(0.945 0.008 265);--mut:oklch(0.665 0.013 265);--accent:#a78bfa;
        --on-accent:oklch(0.14 0.01 265)}
  body{margin:0;background:var(--bg);color:var(--fg);font-family:'IBM Plex Sans',sans-serif;
       font-weight:300;padding:70px 28px 120px}
  .wrap{max-width:1280px;margin:0 auto}
  h1{font-family:'Bodoni Moda',serif;font-weight:400;font-size:clamp(40px,6vw,84px);
     line-height:1;margin:18px 0 16px}
  .eyebrow{font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.24em;
           text-transform:uppercase;color:var(--mut)}
  .fam{font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.22em;
       text-transform:uppercase;color:var(--accent);margin:60px 0 20px}
  .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:16px}
  .card{background:var(--bg2);border:1px solid var(--line);border-radius:3px;overflow:hidden}
  .stage{height:210px;display:flex;align-items:center;justify-content:center;
         border-bottom:1px solid var(--line);padding:26px}
  .stage img{max-width:100%;max-height:100%}
  .meta{padding:22px 24px}
  .code{font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.14em;color:var(--accent)}
  .desc{font-size:13.5px;line-height:1.7;color:var(--mut);margin:10px 0 0}
  .nav{display:flex;flex-wrap:wrap;gap:30px;align-items:center;margin-top:26px;
       background:var(--bg2);border:1px solid var(--line);border-radius:3px;padding:24px 26px}
  .nav div{display:flex;align-items:center;gap:9px}
  .nav img{height:28px;width:auto}
  .nav span{font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:var(--mut)}
  .note{font-size:13px;line-height:1.7;color:var(--mut);max-width:70ch;margin:14px 0 0}
</style>
<div class="wrap">
  <div class="eyebrow">Identidade · exploração</div>
  <h1>Vinte e duas logos</h1>
  <p class="note">Nenhuma está aplicada no site. Os arquivos vivem em
    <code>public/assets/logos/</code>. Esta folha de contato não faz parte do app e não é
    publicada — serve só para escolher.</p>

${families
  .map(
    (family) => `  <div class="fam">${family}</div>
  <div class="grid">
${LOGOS.filter((l) => l.family === family)
  .map(
    (l) => `    <div class="card">
      <div class="stage"><img src="../public/assets/logos/${l.slug}.svg" alt="${l.name}"></div>
      <div class="meta"><span class="code">${l.code}</span> &nbsp; ${l.name}
        <p class="desc">${l.desc}</p></div>
    </div>`,
  )
  .join('\n')}
  </div>`,
  )
  .join('\n')}

  <div class="fam" style="margin-top:70px">Todas em tamanho de navegação</div>
  <div class="nav">
${LOGOS.map(
  (l) =>
    `    <div><img src="../public/assets/logos/${l.slug}.svg" alt="${l.name}"><span>${l.code}</span></div>`,
).join('\n')}
  </div>
</div>
`;

await mkdir(join(PREVIEW, '..'), { recursive: true });
await writeFile(PREVIEW, preview, 'utf8');

console.log(`wrote ${LOGOS.length} svg files + README to ${OUT}`);
console.log(LOGOS.map((l) => `${l.code}  ${l.slug}.svg`).join('\n'));
