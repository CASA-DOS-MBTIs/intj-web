import { readFileSync } from 'node:fs';
import { TestBed } from '@angular/core/testing';

import { LanguageService } from './language.service';
import { LANGS } from '../content/types';

const html = readFileSync('src/index.html', 'utf8');
const script = /<script>([\s\S]*?)<\/script>/.exec(html)?.[1] ?? '';

interface Attempt {
  languages: string[];
  stored?: string | null;
  path?: string;
  search?: string;
  hash?: string;
}

function run({ languages, stored = null, path = '/', search = '', hash = '' }: Attempt) {
  let target: string | null = null;

  const location = {
    pathname: path,
    search,
    hash,
    replace: (url: string) => {
      target = url;
    },
  };
  const navigator = { languages, language: languages[0] ?? '' };
  const storage = { getItem: (key: string) => (key === storedKey() ? stored : null) };

  new Function('location', 'navigator', 'localStorage', script)(location, navigator, storage);
  return target;
}

function storedKey(): string {
  TestBed.resetTestingModule();
  localStorage.clear();
  TestBed.inject(LanguageService).set('pt');
  return localStorage.key(0) ?? '';
}

describe('the language door script', () => {
  it('ships in the document rather than in a bundle', () => {
    expect(script.trim()).not.toBe('');
    expect(script).toContain('location.replace');
  });

  it('sends a Portuguese browser to the Portuguese tree', () => {
    expect(run({ languages: ['pt-BR', 'en-US'] })).toBe('/pt');
  });

  it('sends an English browser to the English tree', () => {
    expect(run({ languages: ['en-US'] })).toBe('/en');
  });

  it('falls back to English for a language the site does not publish', () => {
    expect(run({ languages: ['fr-FR', 'de-DE'] })).toBe('/en');
  });

  it('honours the order the browser states its preferences in', () => {
    expect(run({ languages: ['fr-FR', 'pt-PT', 'en-GB'] })).toBe('/pt');
  });

  it('copes with a browser that offers no list at all', () => {
    expect(run({ languages: [] })).toBe('/en');
  });

  it('lets a remembered choice outrank the browser', () => {
    expect(run({ languages: ['en-US'], stored: 'pt' })).toBe('/pt');
    expect(run({ languages: ['pt-BR'], stored: 'en' })).toBe('/en');
  });

  it('ignores a stored value that is not a language it publishes', () => {
    expect(run({ languages: ['pt-BR'], stored: 'constructor' })).toBe('/pt');
    expect(run({ languages: ['pt-BR'], stored: 'zz' })).toBe('/pt');
  });

  it('carries the query and fragment across', () => {
    expect(run({ languages: ['pt-BR'], search: '?a=1', hash: '#x' })).toBe('/pt?a=1#x');
  });

  it('leaves every address that already names its language alone', () => {
    expect(run({ languages: ['pt-BR'], path: '/en/mente' })).toBeNull();
    expect(run({ languages: ['pt-BR'], path: '/pt' })).toBeNull();
    expect(run({ languages: ['pt-BR'], path: '/404' })).toBeNull();
  });

  it('reads the same stored choice the app writes', () => {
    expect(script).toContain(`'${storedKey()}'`);
  });

  it('knows exactly the languages the app publishes', () => {
    for (const lang of LANGS) {
      expect(script).toContain(`'${lang}'`);
    }
    expect(run({ languages: LANGS.map((lang) => `${lang}-XX`) })).toBe(`/${LANGS[0]}`);
  });
});
