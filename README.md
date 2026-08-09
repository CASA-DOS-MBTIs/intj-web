# INTJ

A bilingual site about the INTJ type — the cognitive stack, strengths and shadows, work,
bonds, the journey by age, the enneagram overlay, comparisons with neighbouring types, and
a twelve-statement self-reflection quiz.

Built with Angular 22 (standalone, zoneless, signals), TypeScript and SCSS. No runtime
dependencies beyond Angular itself.

## Running it

```bash
npm install
npm start          # http://localhost:4200
npm test           # vitest
npm run build      # production build
```

## Fonts, and why the site makes no third-party requests

Every webfont is self-hosted. The app never contacts `fonts.googleapis.com` or
`fonts.gstatic.com` — the only external URL anywhere in the build output is the SVG XML
namespace, which is an identifier, not a fetch.

Five families ship: **Bodoni Moda**, **IBM Plex Sans**, **IBM Plex Mono**, **Space
Grotesk** and **Cormorant Garamond**. All five are SIL Open Font License 1.1, which
permits self-hosting; the licence texts travel with them in
`public/assets/fonts/licenses/`.

The `.woff2` files live in `src/assets/fonts/` and are referenced from
`src/styles/_fonts.scss`, so the Angular build fingerprints them and rewrites the `url()`
itself — which is what keeps them working under the `/intj-web/` base href on Pages.

`_fonts.scss` is generated. To change which weights or families ship, edit and re-run:

```bash
node scripts/fetch-fonts.mjs src/assets/fonts public/assets/fonts/licenses \
  src/styles/_fonts.scss design/fonts-local.css
```

Two details worth knowing before trimming anything:

- Faces are split by `unicode-range`, so ~1 MB on disk is not 1 MB over the wire. A
  browser downloads only the subsets a page actually needs — `latin-ext` never loads
  unless a character in that range appears.
- Bodoni Moda additionally carries the `math` subset, but **only at weight 400 upright**.
  That subset exists for exactly one glyph: `U+2248` (≈) in the home page's stat figures,
  which are set in Bodoni. Shipping `math` for the other three Bodoni faces would add
  ~130 kB that no browser would ever request.

Space Grotesk and Cormorant Garamond entered the project only for the logo explorations.
If the logo you eventually pick uses neither, they can be dropped from the fetch script.

## Languages

The site ships Portuguese and English. On a first visit the language is chosen from the
browser: `navigator.languages` is scanned in preference order and the first entry that
resolves to `pt` or `en` wins, so a reader with `['fr-FR', 'pt-BR']` gets Portuguese. A
locale the site does not publish falls back to English, which travels further than
Portuguese for a reader who has neither.

Switching language from the header stores the choice under `intj-lang` in `localStorage`,
and a stored choice always outranks the browser preference on later visits.

All of this lives in `src/app/core/language.service.ts`, and it is the part covered by
tests (`language.service.spec.ts`).

### Adding or editing copy

Copy is data, not markup. Every string lives in `src/app/content/`:

```
content/
  types.ts        interfaces every locale must satisfy
  pt/             Portuguese bundle, one file per page
  en/             English bundle, same shape
  content.ts      { pt, en }
```

Because both bundles are typed as `SiteContent`, adding a string to one language without
the other is a compile error rather than a blank space on the page. Adding a **third**
language means adding a directory, extending the `Lang` union in `types.ts`, and fixing
whatever the compiler then points at.

A field typed `RichText` may carry inline `<strong>` / `<em>` and is rendered through
`[innerHTML]`. Links never go in content — they need `routerLink`, so they are modelled as
separate fields (see `EspelhoContent.result.footnote`).

## Sources, and the kinds of authority

Every substantive claim is traceable. `content/sources.ts` is the single registry; `SourceId`
is derived from the object itself, so citing a work that does not exist is a compile error.

Each entry carries a `kind`, and that is the load-bearing part. The site draws on Jung, on
official MBTI material, on peer-reviewed psychology, on named commercial models, on published
criticism, on antiquity, on self-selected online polls, and on health authorities — and
blurring those is how a page ends up saying "MBTI says" about something that came from a
commercial questionnaire or a forum. `<app-references>` renders the kind as a visible badge
beside every citation, which does most of the framing work no amount of prose would.

Anything the evidence does not support is stated as such on the page itself, not buried in a
disclaimer: the enneagram has almost no validation literature, tritypes have none at all, the
four temperaments are pre-scientific vocabulary, and the A/T suffix is 16Personalities', not
the MBTI's.

## The profile lens

A reader can tell the site which INTJ they are — identity, wing, tritype, instinct,
temperament blend — from the header. `ProfileService` persists that under
`intj-profile` and pages read it: the enneagram page opens on your own type, your tritype
stays marked among the 27, and the temperament page opens on your blend.

**The control only appears where it changes something, and it lives on the page.**
`content/profile-scope.ts` maps pages to the facets they actually read. The lens
(`shared/profile-lens/`) renders inline, next to the thing it will change, rather than in
the header — offering to "apply your profile" on a page whose text is identical either way
is worse than not offering it, because the reader configures something, sees nothing
happen, and concludes the feature is decorative. It is also why the gender facet was
removed: no page used it, so the selector was a promise the site never kept.

**Naming your variant does not filter the page — it replaces it.** In the general view a
page describes every option at a readable depth. The moment you say "this one is me",
breadth stops being useful, so the page drops the other seventeen wings (or twenty-six
tritypes, or eleven blends) and renders the unabridged analysis of yours instead: a lede,
four to six sections, strengths, traps, what *this* variant does under stress, growth, what
it gets mistaken for, and how it differs from the variant beside it. One shape — `VariantDeep`
— serves all four pages, so a reader who has configured two of them gets the same reading
experience on both.

The "back to the general view" control stores *which* variant you widened out of rather
than a boolean, so changing your wing drops you into the focused view for the new one —
which is what changing it meant.

## The compatibility index

`/compatibilidade` publishes **two axes, not a ranking** — and prints the rules that produce
both, so a reader can recompute any pair by hand. An auditable heuristic, never a
measurement.

- **Recognition** — how easily you are understood without translating.
- **Complement** — how much the other type supplies what a Ni–Te–Fi–Se stack does not
  generate alone.

The first version scored a single index from function *overlap*, and that was wrong: an
overlap index rewards sameness, so its top result is a mirror, which is not what anyone
means by compatibility and is the opposite of what the evidence beside it says. Splitting
the axes makes "you would be marrying a mirror" a visible corner of the map instead of first
place — INTJ × INTJ saturates recognition and bottoms out complement, and a test asserts
exactly that.

The page also names the rival traditions, because they disagree and that disagreement is
the real finding: Keirsey pairs Rationals with Idealists, socionics gives the INTJ's
functional analogue a *sensing* dual rather than the ENFP everyone ships, and the community
consensus is a third answer with no published basis.

The evidence section sits *above* the table on purpose. Dyrenforth et al. (2010), three
nationally representative samples, N ≈ 20,000: partner-similarity effects added under 0.5%
of incremental variance in relationship satisfaction — what predicted it was each person's
own traits, emotional stability first. A reader who only scrolls past the numbers should
still have met the finding that undermines them.

Storage is rebuilt field by field on read rather than trusted wholesale, so a profile saved
by an older version degrades to nulls instead of poisoning every lookup keyed off it. Every
facet is independently optional, and the site stays useful when all of them are empty.

Keys live in `content/profile-keys.ts` and are language-neutral: 18 wings, 27 tritype
archetypes, 12 ordered temperament blends, 3 instincts. Labels are copy, so they live in the
locale bundles.

## Structure

```
src/
  assets/fonts/           self-hosted woff2, bundled through _fonts.scss
  styles.scss             design tokens, element baseline, shared class vocabulary
  styles/_tokens.scss     SCSS variables and mixins (no CSS output — it is @use-d widely)
  styles/_fonts.scss      generated @font-face rules
  app/
    core/                 language + profile services, page-meta, page-content, reveal
    content/              all copy, per language, one file per page
    shared/               nav, footer, page header, next-page, references, profile panel
    pages/                one folder per route (18 of them)
public/assets/logos/      22 logo explorations, none applied yet
design/                   local-only contact sheet for picking a logo
```

Page-specific layout lives in the component's own `.scss`; anything shared by more than one
page belongs in `styles.scss`.

Twenty-seven routes. The header groups them into two dropdowns — **Vida** (childhood,
journey, work, bonds, compatibility, friendship, family, men & women, health, what nobody
tells you, if you love an INTJ) and **Além do MBTI** (the overview, combinations, the
enneagram with nine types and eighteen wings, the 27 tritypes, the instinctual subtypes, the
twelve temperament blends, the Big Five, Socionics, DISC, Jung, and the glossary) — because
a flat bar stopped working at about the twelfth page.

Every one of them describes its model *as it shows up in an INTJ*, which is the point of the
site. Two pages are deliberately not written to an INTJ: `/para-quem-ama-um-intj`, for the
person on the other side, and the glossary.

### Why page copy is not in `SiteContent`

Each page imports its own two locale bundles through `usePageContent`, and only the shell
and the profile lens live in the site-wide object. That is deliberate: collecting every
page's copy into one object made the lazy routes lazy in name only — the components split,
the prose did not, and opening the home page downloaded all eighteen pages in both
languages. Moving the copy into the pages cut the initial transfer from 224 kB to 79 kB.

If you add a page, give it its own content files and wire them through `usePageContent`;
do not add them to `SiteContent`.

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` builds and publishes on every push to `main`. Enable it once
under **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Two details make Pages work with a client-side router:

- The production build sets `baseHref: /intj-web/` (in `angular.json`), because the site is
  served from a repository subpath rather than a domain root. Renaming the repository means
  changing that value and `outputPath`'s sibling reference in the workflow.
- `npm run build:pages` runs `scripts/postbuild-pages.mjs`, which copies `index.html` to
  `404.html` and writes `.nojekyll`. Pages has no SPA rewrite rule, so without the copy a
  cold load of `/intj-web/espelho` would 404 before Angular ever booted; without
  `.nojekyll`, Jekyll would strip files whose names begin with an underscore.

To build the deployable output locally:

```bash
npm run build:pages    # → dist/intj-web/browser
```

## Origin

The design comes from a Claude Design prototype whose pages were `.dc.html` components —
templates interpreted in the browser by a runtime that fetched React and Babel from a CDN on
every page load. This repository is that design reimplemented: the same layout, type scale
and colour system, rebuilt as a static Angular app with no runtime template compilation.
