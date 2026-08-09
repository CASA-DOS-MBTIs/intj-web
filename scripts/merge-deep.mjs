/**
 * Stitches the per-variant deep analyses into their page bundles.
 *
 * The analyses are written into `content/{lang}/deep/*.ts` by separate authors
 * so they never touch the same file; this wires them back in — adding the
 * imports, hanging a `deep:` property on every variant, and attaching the
 * page's focus labels. Idempotent: re-running skips anything already wired.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = process.argv[2];
const CONTENT = join(ROOT, 'src', 'app', 'content');

/** Turns a variant key into the const the author exported for it. */
const constName = {
  wing: (k) => `DEEP_${k.toUpperCase()}`,
  tritype: (k) => `DEEP_T${k}`,
  temperament: (k) => `DEEP_${k.toUpperCase().replace(/-/g, '_')}`,
  instinct: (k) => `DEEP_${k.toUpperCase()}`,
};

const WINGS = ['1w9','1w2','2w1','2w3','3w2','3w4','4w3','4w5','5w4','5w6',
               '6w5','6w7','7w6','7w8','8w7','8w9','9w8','9w1'];
const TRITYPES = ['125','126','127','135','136','137','145','146','147',
                  '258','268','278','358','368','378','458','468','478',
                  '259','269','279','359','369','379','459','469','479'];
const TEMPERAMENTS = ['melancholic-choleric','melancholic-phlegmatic','melancholic-sanguine',
                      'choleric-melancholic','choleric-phlegmatic','choleric-sanguine',
                      'phlegmatic-melancholic','phlegmatic-choleric','phlegmatic-sanguine',
                      'sanguine-melancholic','sanguine-choleric','sanguine-phlegmatic'];
const INSTINCTS = ['sp', 'so', 'sx'];

const PAGES = [
  {
    file: 'eneagrama.ts',
    exportName: 'ENEAGRAMA',
    kind: 'wing',
    keys: WINGS,
    focus: 'FOCUS_ENEAGRAMA',
    modules: ['wings-a', 'wings-b', 'wings-c', 'wings-d', 'wings-e'],
  },
  {
    file: 'tritipos.ts',
    exportName: 'TRITIPOS',
    kind: 'tritype',
    keys: TRITYPES,
    focus: 'FOCUS_TRITIPOS',
    modules: ['tritypes-a', 'tritypes-b', 'tritypes-c'],
  },
  {
    file: 'temperamentos.ts',
    exportName: 'TEMPERAMENTOS',
    kind: 'temperament',
    keys: TEMPERAMENTS,
    focus: 'FOCUS_TEMPERAMENTOS',
    modules: ['temperaments-a', 'temperaments-b'],
  },
  {
    file: 'subtipos.ts',
    exportName: 'SUBTIPOS',
    kind: 'instinct',
    keys: INSTINCTS,
    focus: 'FOCUS_SUBTIPOS',
    modules: ['instincts'],
  },
];

/** Which module each const lives in, discovered by reading the deep files. */
async function indexModules(lang, modules) {
  const index = new Map();
  for (const mod of modules) {
    const path = join(CONTENT, lang, 'deep', `${mod}.ts`);
    let src;
    try {
      src = await readFile(path, 'utf8');
    } catch {
      console.error(`  ! missing ${lang}/deep/${mod}.ts`);
      continue;
    }
    for (const m of src.matchAll(/export const (\w+)\s*[:=]/g)) {
      index.set(m[1], mod);
    }
  }
  return index;
}

let problems = 0;

for (const lang of ['pt', 'en']) {
  const suffix = lang.toUpperCase();

  for (const page of PAGES) {
    const path = join(CONTENT, lang, page.file);
    let src = await readFile(path, 'utf8');

    // Un-merge first, so a re-run after a partial pass starts from a clean file
    // rather than skipping the entries the previous pass could not resolve.
    src = src
      .replace(/^import \{[^}]*\} from '\.\/deep\/[^']+';\r?\n/gm, '')
      .replace(/^[ \t]*deep: DEEP_\w+,\r?\n/gm, '')
      .replace(/^[ \t]*focus: FOCUS_\w+,\r?\n/gm, '');

    const index = await indexModules(lang, page.modules);
    const focusIndex = await indexModules(lang, ['focus']);
    const imports = new Map();

    // 1. Hang `deep:` on every variant.
    for (const key of page.keys) {
      const name = `${constName[page.kind](key)}_${suffix}`;
      const mod = index.get(name);
      if (!mod) {
        console.error(`  ! ${lang}/${page.file}: no export named ${name}`);
        problems += 1;
        continue;
      }
      if (!imports.has(mod)) imports.set(mod, []);
      imports.get(mod).push(name);

      // Matches `'3w4': {` and `sp: {` alike, then inserts the property first.
      const re = new RegExp(`(^\\s*'?${key.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&')}'?:\\s*\\{)`, 'm');
      if (!re.test(src)) {
        console.error(`  ! ${lang}/${page.file}: no entry for ${key}`);
        problems += 1;
        continue;
      }
      src = src.replace(re, `$1\n      deep: ${name},`);
    }

    // 2. Attach the page's focus labels at the top of the exported object.
    const focusName = `${page.focus}_${suffix}`;
    const focusMod = focusIndex.get(focusName);
    if (!focusMod) {
      console.error(`  ! ${lang}/${page.file}: no export named ${focusName}`);
      problems += 1;
    } else {
      const open = new RegExp(`(export const ${page.exportName}_${suffix}[^=]*=\\s*\\{)`);
      src = src.replace(open, `$1\n  focus: ${focusName},`);
      if (!imports.has('focus')) imports.set('focus', []);
      imports.get('focus').push(focusName);
    }

    // 3. Add the imports above the first existing import.
    const lines = [...imports.entries()].map(
      ([mod, names]) => `import { ${names.sort().join(', ')} } from './deep/${mod}';`,
    );
    const firstImport = src.match(/^import .*$/m);
    src = src.replace(firstImport[0], `${lines.join('\n')}\n${firstImport[0]}`);

    await writeFile(path, src, 'utf8');
    console.log(`merged ${lang}/${page.file}`);
  }
}

console.log(problems === 0 ? '\nall merged cleanly' : `\n${problems} problem(s) — see above`);
process.exit(problems === 0 ? 0 : 1);
