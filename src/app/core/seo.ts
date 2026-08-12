import { DOCUMENT, Injectable, computed, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { CurrentUrl } from './current-url';
import { HTML_LANG, LanguageService } from './language.service';
import { AUTHOR } from '../content/author';
import {
  LANGS,
  PAGE_PATH,
  stripLangPrefix,
  type Lang,
  type NavLink,
  type PageKey,
  type PageMeta,
} from '../content/types';

export const SITE_ORIGIN = 'https://intj.net.br';

const SITE_NAME = 'INTJ';

const SOCIAL_IMAGE = `${SITE_ORIGIN}/social-card.webp`;

const OG_LOCALE: Record<Lang, string> = { pt: 'pt_BR', en: 'en_US' };

const OWNED = 'data-seo';

const KEY_BY_PATH = new Map<string, PageKey>(
  Object.entries(PAGE_PATH).map(([key, path]) => [path, key as PageKey]),
);

function absolute(path: string): string {
  return path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path}`;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private readonly language = inject(LanguageService);
  private readonly url = inject(CurrentUrl).path;

  private readonly labels = computed<Partial<Record<PageKey, string>>>(() => {
    const shell = this.language.content().shell;
    const lists: readonly NavLink[][] = [
      shell.nav.items,
      ...shell.nav.menus.map((menu) => menu.items),
      shell.footer.pages,
      shell.footer.deeper,
    ];

    const labels: Partial<Record<PageKey, string>> = {};
    for (const list of lists) {
      for (const link of list) {
        labels[link.key] ??= link.label;
      }
    }
    return labels;
  });

  private readonly sectionLabels = computed<Record<string, string>>(() => {
    const sections: Record<string, string> = {};

    for (const menu of this.language.content().shell.nav.menus) {
      const paths = menu.items.map((item) => PAGE_PATH[item.key]);
      const head = paths.find((candidate) =>
        paths.some((other) => other !== candidate && other.startsWith(`${candidate}/`)),
      );

      if (head !== undefined) {
        sections[head] = menu.label;
      }
    }

    return sections;
  });

  apply(meta: PageMeta, options: { index?: boolean } = {}): void {
    const index = options.index ?? true;
    const lang = this.language.lang();
    const canonical = absolute(this.url());
    const isHome = stripLangPrefix(this.url()) === '/';

    this.titleService.setTitle(meta.title);

    this.metaService.updateTag({ name: 'description', content: meta.description });
    this.metaService.updateTag({
      name: 'robots',
      content: index ? 'index, follow, max-image-preview:large' : 'noindex, follow',
    });

    this.metaService.updateTag({ property: 'og:type', content: isHome ? 'website' : 'article' });
    this.metaService.updateTag({ property: 'og:site_name', content: SITE_NAME });
    this.metaService.updateTag({ property: 'og:title', content: meta.title });
    this.metaService.updateTag({ property: 'og:description', content: meta.description });
    this.metaService.updateTag({ property: 'og:url', content: canonical });
    this.metaService.updateTag({ property: 'og:locale', content: OG_LOCALE[lang] });
    this.metaService.updateTag({ property: 'og:image', content: SOCIAL_IMAGE });
    this.metaService.updateTag({ property: 'og:image:type', content: 'image/webp' });
    this.metaService.updateTag({ property: 'og:image:width', content: '1200' });
    this.metaService.updateTag({ property: 'og:image:height', content: '630' });
    this.metaService.updateTag({ property: 'og:image:alt', content: SITE_NAME });

    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: meta.title });
    this.metaService.updateTag({ name: 'twitter:description', content: meta.description });
    this.metaService.updateTag({ name: 'twitter:image', content: SOCIAL_IMAGE });

    this.writeLinks(canonical, index);
    this.writeJsonLd(meta, canonical, index);
  }

  private writeLinks(canonical: string, index: boolean): void {
    const head = this.document.head;
    for (const stale of Array.from(head.querySelectorAll(`link[${OWNED}]`))) {
      stale.remove();
    }

    head.appendChild(this.link({ rel: 'canonical', href: canonical }));

    if (!index) {
      return;
    }

    const alternates = this.language.alternates();
    for (const lang of LANGS) {
      head.appendChild(
        this.link({
          rel: 'alternate',
          hreflang: HTML_LANG[lang],
          href: absolute(alternates[lang]),
        }),
      );
    }

    head.appendChild(this.link({ rel: 'alternate', hreflang: 'x-default', href: absolute('/') }));
  }

  private link(attributes: Record<string, string>): HTMLLinkElement {
    const element = this.document.createElement('link');
    element.setAttribute(OWNED, '');
    for (const [name, value] of Object.entries(attributes)) {
      element.setAttribute(name, value);
    }
    return element;
  }

  private writeJsonLd(meta: PageMeta, canonical: string, index: boolean): void {
    const head = this.document.head;
    head.querySelector(`script[${OWNED}]`)?.remove();

    if (!index) {
      return;
    }

    const inLanguage = HTML_LANG[this.language.lang()];
    const crumbs = this.breadcrumb(meta.title);

    const graph: unknown[] = [
      {
        '@type': 'Person',
        '@id': `${SITE_ORIGIN}/#author`,
        name: AUTHOR.name,
        url: AUTHOR.portfolio,
        sameAs: [AUTHOR.portfolio],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_ORIGIN}/#website`,
        url: `${SITE_ORIGIN}/`,
        name: SITE_NAME,
        inLanguage,
        author: { '@id': `${SITE_ORIGIN}/#author` },
        publisher: { '@id': `${SITE_ORIGIN}/#author` },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: meta.title,
        description: meta.description,
        inLanguage,
        isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
        author: { '@id': `${SITE_ORIGIN}/#author` },
        primaryImageOfPage: { '@id': `${canonical}#image` },
        ...(crumbs === null ? {} : { breadcrumb: { '@id': `${canonical}#breadcrumb` } }),
      },
      {
        '@type': 'ImageObject',
        '@id': `${canonical}#image`,
        url: SOCIAL_IMAGE,
        width: 1200,
        height: 630,
      },
      ...(crumbs === null ? [] : [{ ...crumbs, '@id': `${canonical}#breadcrumb` }]),
    ];

    const script = this.document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute(OWNED, '');
    script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
    head.appendChild(script);
  }

  private breadcrumb(fallbackName: string): Record<string, unknown> | null {
    const lang = this.language.lang();
    const bare = stripLangPrefix(this.url());
    if (bare === '/') {
      return null;
    }

    const labels = this.labels();
    const sections = this.sectionLabels();
    const paths = ['/', ...cumulativePaths(bare)];

    return {
      '@type': 'BreadcrumbList',
      itemListElement: paths.map((path, position) => {
        const key = KEY_BY_PATH.get(path);
        const isLast = position === paths.length - 1;

        const name =
          key === 'home'
            ? SITE_NAME
            : ((isLast ? undefined : sections[path]) ??
              (key === undefined ? undefined : labels[key]) ??
              fallbackName);

        return {
          '@type': 'ListItem',
          position: position + 1,
          name,
          item: absolute(path === '/' ? `/${lang}` : `/${lang}${path}`),
        };
      }),
    };
  }
}

function cumulativePaths(path: string): string[] {
  const segments = path.split('/').filter(Boolean);
  return segments.map((_, index) => `/${segments.slice(0, index + 1).join('/')}`);
}
