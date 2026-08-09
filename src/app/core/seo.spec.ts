import { TestBed } from '@angular/core/testing';

import { CurrentUrl } from './current-url';
import { LanguageService } from './language.service';
import { SITE_ORIGIN, SeoService } from './seo';
import {
  LANGS,
  LANG_PAGE_PATH,
  PAGE_PATH,
  langFromUrl,
  stripLangPrefix,
  type PageKey,
} from '../content/types';

const META = { title: 'A title', description: 'A description' };

function headSeo(selector: string): Element[] {
  return Array.from(document.head.querySelectorAll(selector));
}

function hrefFor(hreflang: string): string | null {
  return (
    headSeo(`link[rel="alternate"][hreflang="${hreflang}"]`)[0]?.getAttribute('href') ?? null
  );
}

/** Puts the app on a URL and writes the tags for it, as a navigation would. */
function applyAt(url: string, options: { index?: boolean } = {}): void {
  TestBed.inject(CurrentUrl).set(url);
  TestBed.inject(SeoService).apply(META, options);
}

function jsonLd(): Record<string, any> | null {
  const script = document.head.querySelector('script[type="application/ld+json"]');
  return script === null ? null : JSON.parse(script.textContent ?? '{}');
}

function nodeOfType(type: string): Record<string, any> | undefined {
  return jsonLd()?.['@graph'].find((node: { '@type': string }) => node['@type'] === type);
}

describe('URL language prefixes', () => {
  it('reads the language off the first segment', () => {
    expect(langFromUrl('/en/mente')).toBe('en');
    expect(langFromUrl('/pt')).toBe('pt');
  });

  it('treats the entry door as language-neutral', () => {
    expect(langFromUrl('/')).toBeNull();
  });

  it('does not mistake a slug that merely starts with a language code', () => {
    expect(langFromUrl('/entrada')).toBeNull();
    expect(stripLangPrefix('/entrada')).toBe('/entrada');
  });

  it('strips the prefix back to the shared page path', () => {
    expect(stripLangPrefix('/en/alem-do-mbti/tritipos')).toBe('/alem-do-mbti/tritipos');
    expect(stripLangPrefix('/pt')).toBe('/');
  });

  it('publishes every page under every language', () => {
    for (const lang of LANGS) {
      for (const key of Object.keys(PAGE_PATH) as PageKey[]) {
        expect(LANG_PAGE_PATH[lang][key].startsWith(`/${lang}`)).toBe(true);
        expect(stripLangPrefix(LANG_PAGE_PATH[lang][key])).toBe(PAGE_PATH[key]);
      }
    }
  });
});

describe('LanguageService, driven by the URL', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.resetTestingModule();
  });

  it('lets the address outrank a stored preference', () => {
    localStorage.setItem('intj-lang', 'pt');
    TestBed.inject(CurrentUrl).set('/en/mente');

    expect(TestBed.inject(LanguageService).lang()).toBe('en');
  });

  it('keeps the reader’s language on the door, which names none', () => {
    localStorage.setItem('intj-lang', 'pt');
    TestBed.inject(CurrentUrl).set('/');

    expect(TestBed.inject(LanguageService).lang()).toBe('pt');
  });

  it('prefixes every internal path with the active language', () => {
    TestBed.inject(CurrentUrl).set('/en/mente');

    expect(TestBed.inject(LanguageService).path()['tritipos']).toBe('/en/alem-do-mbti/tritipos');
  });

  it('offers the same page in the other language', () => {
    TestBed.inject(CurrentUrl).set('/pt/alem-do-mbti/jung');

    expect(TestBed.inject(LanguageService).alternates()).toEqual({
      pt: '/pt/alem-do-mbti/jung',
      en: '/en/alem-do-mbti/jung',
    });
  });

  it('sends the door to each language’s home', () => {
    TestBed.inject(CurrentUrl).set('/');

    expect(TestBed.inject(LanguageService).alternates()).toEqual({ pt: '/pt', en: '/en' });
  });
});

describe('SeoService', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.resetTestingModule();
    for (const owned of headSeo('[data-seo]')) {
      owned.remove();
    }
  });

  it('points the canonical at the absolute current URL', () => {
    applyAt('/pt/mente');

    expect(headSeo('link[rel="canonical"]')[0]?.getAttribute('href')).toBe(
      `${SITE_ORIGIN}/pt/mente`,
    );
  });

  it('names both languages, including the page’s own', () => {
    applyAt('/pt/mente');

    expect(hrefFor('pt-BR')).toBe(`${SITE_ORIGIN}/pt/mente`);
    expect(hrefFor('en')).toBe(`${SITE_ORIGIN}/en/mente`);
  });

  it('sends x-default to the language door', () => {
    applyAt('/en/saude');

    expect(hrefFor('x-default')).toBe(`${SITE_ORIGIN}/`);
  });

  it('replaces its own tags rather than stacking them up over a session', () => {
    applyAt('/pt/mente');
    applyAt('/pt/saude');
    applyAt('/en/saude');

    expect(headSeo('link[rel="canonical"]')).toHaveLength(1);
    expect(headSeo('link[rel="alternate"]')).toHaveLength(LANGS.length + 1);
    expect(headSeo('link[rel="canonical"]')[0].getAttribute('href')).toBe(
      `${SITE_ORIGIN}/en/saude`,
    );
  });

  it('keeps a noindex page out of the alternate set and out of structured data', () => {
    applyAt('/pt/404', { index: false });

    expect(document.querySelector('meta[name="robots"]')?.getAttribute('content')).toContain(
      'noindex',
    );
    expect(headSeo('link[rel="alternate"]')).toHaveLength(0);
    expect(jsonLd()).toBeNull();
    // The canonical stays: it still says which address this page is.
    expect(headSeo('link[rel="canonical"]')).toHaveLength(1);
  });

  it('describes the page as an article and the home page as the site', () => {
    applyAt('/pt/mente');
    expect(document.querySelector('meta[property="og:type"]')?.getAttribute('content')).toBe(
      'article',
    );

    applyAt('/pt');
    expect(document.querySelector('meta[property="og:type"]')?.getAttribute('content')).toBe(
      'website',
    );
  });

  it('attributes every page to the author', () => {
    applyAt('/en/mente');

    expect(nodeOfType('Person')?.['url']).toBe('https://alexZ7000.com.br');
    expect(nodeOfType('WebPage')?.['author']).toEqual({ '@id': `${SITE_ORIGIN}/#author` });
  });

  it('declares the language the page is actually written in', () => {
    applyAt('/en/mente');
    expect(nodeOfType('WebPage')?.['inLanguage']).toBe('en');

    applyAt('/pt/mente');
    expect(nodeOfType('WebPage')?.['inLanguage']).toBe('pt-BR');
  });

  it('omits a breadcrumb on the home page, where a one-item trail says nothing', () => {
    applyAt('/pt');

    expect(nodeOfType('BreadcrumbList')).toBeUndefined();
  });

  it('names an ancestor by its section, not by the link text inside its menu', () => {
    applyAt('/pt/alem-do-mbti/eneagrama');

    const trail = nodeOfType('BreadcrumbList')?.['itemListElement'];
    expect(trail.map((item: { name: string }) => item.name)).toEqual([
      'INTJ',
      'Além do MBTI',
      'Eneagrama',
    ]);
    expect(trail.at(-1).item).toBe(`${SITE_ORIGIN}/pt/alem-do-mbti/eneagrama`);
  });
});
