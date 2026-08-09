/**
 * Asks the live site whether it is still itself.
 *
 * This exists because of how sites like this one actually get replaced. It is
 * almost never a flaw in the application: it is the GitHub account, the domain
 * registrar, or a token — and every one of those hands the attacker the ability
 * to publish whatever they like, at which point no amount of care in the code
 * matters. Nothing in a repository can prevent that. What a repository CAN do
 * is notice quickly.
 *
 * So this checks invariants that must hold, rather than hunting for strings
 * that must not. A page fully replaced by something else fails the first
 * assertion; a page with an injected payload fails the script check. Both are
 * caught without anyone having to guess what the payload will look like.
 *
 * Run locally against a preview with:
 *   SITE_ORIGIN=http://localhost:4200 node scripts/check-live.mjs
 */
const ORIGIN = (process.env.SITE_ORIGIN ?? 'https://intj.net.br').replace(/\/$/, '');

/** One from each tree, plus the language door and a deep route. */
const PAGES = ['/', '/pt', '/en', '/pt/mente', '/en/alem-do-mbti/eneagrama'];

/** Present on every document this project publishes. */
const MARKERS = [
  { name: 'security policy', test: (html) => html.includes('http-equiv="Content-Security-Policy"') },
  { name: 'referrer policy', test: (html) => html.includes('name="referrer"') },
  { name: 'canonical link', test: (html) => /rel="canonical" href="https:\/\/intj\.net\.br/.test(html) },
  { name: 'structured data', test: (html) => html.includes('application/ld+json') },
  { name: 'the cognitive stack', test: (html) => html.includes('Ni') && html.includes('Te') },
];

const failures = [];

for (const path of PAGES) {
  const url = `${ORIGIN}${path}`;
  let html;

  try {
    const response = await fetch(url, { redirect: 'follow' });
    if (!response.ok) {
      failures.push(`${path}: HTTP ${response.status}`);
      continue;
    }
    html = await response.text();
  } catch (error) {
    // A domain that stops resolving is not a lesser problem than a domain
    // serving the wrong thing — it is usually the same problem, earlier.
    failures.push(`${path}: unreachable — ${error.message}`);
    continue;
  }

  for (const marker of MARKERS) {
    if (!marker.test(html)) {
      failures.push(`${path}: missing ${marker.name}`);
    }
  }

  // Nothing this site publishes loads a script from anywhere else. If one
  // appears, either the deploy was tampered with or someone added a dependency
  // that phones home — both worth an alarm.
  for (const [, src] of html.matchAll(/<script[^>]+src="([^"]+)"/g)) {
    if (/^(?:https?:)?\/\//i.test(src) && !src.startsWith(ORIGIN)) {
      failures.push(`${path}: FOREIGN SCRIPT ${src}`);
    }
  }

  for (const tag of ['<iframe', '<form', '<embed', '<object']) {
    if (html.includes(tag)) {
      failures.push(`${path}: unexpected ${tag}`);
    }
  }
}

if (failures.length) {
  console.error(`check-live: ${ORIGIN} does not look like this site\n`);
  for (const failure of failures) {
    console.error(`  ${failure}`);
  }
  process.exit(1);
}

console.log(`check-live: ${PAGES.length} pages on ${ORIGIN} check out`);
