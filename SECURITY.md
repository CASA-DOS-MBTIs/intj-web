# Security

The site is static: prerendered HTML on GitHub Pages, no server, no database, no
accounts, no forms, no user input rendered anywhere. That shape decides which
threats are real and which are theatre.

## Reporting

Something wrong, or something that looks wrong: **contact@intj.net.br**.

## What the code already does

- **Loads nothing from another origin.** Fonts, styles, scripts and the social
  card are all served from this domain. `scripts/postbuild-pages.mjs` fails the
  build if a prerendered document acquires an external `<script src>`,
  stylesheet, icon, preload or `url()`.
- **A Content-Security-Policy on every document**, written per page so that
  `script-src` carries the hash of each inline script instead of
  `'unsafe-inline'`. An injected `<script>` does not execute.
- **No dynamic code paths.** No `eval`, no `new Function`, no `document.write`,
  no `insertAdjacentHTML`, no `postMessage` listener. Nothing renders from the
  URL, the query string or the fragment.
- **No sanitiser bypasses.** Every `[innerHTML]` binding carries authored copy
  and passes through Angular's sanitiser; `bypassSecurityTrust*` appears
  nowhere.
- **Defensive storage reads.** The three `localStorage` keys are re-validated
  field by field on read, so a hand-edited value degrades to defaults rather
  than reaching a lookup.
- **A pinned, least-privilege pipeline.** Actions are pinned to commit SHAs,
  `permissions` is `contents: read` plus what Pages needs, and the checkout does
  not leave a credential behind.
- **A live integrity check** every four hours (`.github/workflows/integrity.yml`)
  that fails if the published site stops looking like itself.

## What the code cannot do — and where the real risk is

Sites like this one are almost never replaced through a flaw in their own
JavaScript. They are replaced because somebody obtained the ability to publish.
In rough order of how often it actually happens:

1. **The registrar account.** Whoever controls the domain at registro.br
   controls where it points, and nothing in this repository is involved.
2. **The GitHub account.** One push to `main` replaces the entire site.
3. **A leaked token** — a personal access token or deploy key committed, pasted,
   or printed into a build log.
4. **A compromised dependency or Action** with access to the deploy.
5. **Cross-site scripting.** Last, and the only one the application layer
   addresses at all.

The controls that prevent 1 through 3 live in account settings, not in code:

- Two-factor authentication on **GitHub and on registro.br** — a hardware key or
  an authenticator app, not SMS.
- Branch protection on `main`: require a pull request, block force-pushes and
  deletions. Without it, a single stolen session rewrites the site.
- Auto-renew on the domain, and a calendar reminder anyway. An expired `.br` is
  the cheapest takeover there is.
- Review the authorised OAuth apps, personal access tokens and deploy keys on
  the GitHub account; revoke anything unrecognised.
- **Enforce HTTPS** in the repository's Pages settings once the certificate has
  been issued.

## Known limitations

- `frame-ancestors` and `report-uri` only work as HTTP response headers, and
  GitHub Pages does not allow custom headers. Clickjacking is close to
  irrelevant here — there is no login and no click that changes state — but the
  header is genuinely unavailable, not merely omitted.
- `style-src` still permits `'unsafe-inline'`. Angular injects a component's
  styles as an inline `<style>` when a lazy route is entered, so the hashes are
  not knowable at build time. An inline style executes nothing.
