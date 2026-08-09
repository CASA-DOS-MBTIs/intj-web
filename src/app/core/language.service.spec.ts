import { TestBed } from '@angular/core/testing';

import { LanguageService } from './language.service';

/** jsdom's navigator.languages is read-only, so redefine it per test. */
function stubLanguages(languages: string[]): void {
  Object.defineProperty(navigator, 'languages', { value: languages, configurable: true });
  Object.defineProperty(navigator, 'language', {
    value: languages[0] ?? 'en',
    configurable: true,
  });
}

describe('LanguageService', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.resetTestingModule();
  });

  it('uses Portuguese when the browser asks for it', () => {
    stubLanguages(['pt-BR', 'en-US']);
    expect(TestBed.inject(LanguageService).lang()).toBe('pt');
  });

  it('falls back to English for a locale the site does not publish', () => {
    stubLanguages(['fr-FR', 'de-DE']);
    expect(TestBed.inject(LanguageService).lang()).toBe('en');
  });

  it('honours preference order rather than just the first tag', () => {
    stubLanguages(['fr-FR', 'pt-PT']);
    expect(TestBed.inject(LanguageService).lang()).toBe('pt');
  });

  it('lets a stored choice override the browser preference', () => {
    localStorage.setItem('intj-lang', 'en');
    stubLanguages(['pt-BR']);
    expect(TestBed.inject(LanguageService).lang()).toBe('en');
  });

  it('ignores a stored value that is not a supported language', () => {
    localStorage.setItem('intj-lang', 'klingon');
    stubLanguages(['pt-BR']);
    expect(TestBed.inject(LanguageService).lang()).toBe('pt');
  });

  it('persists the reader’s choice', () => {
    stubLanguages(['pt-BR']);
    const service = TestBed.inject(LanguageService);

    service.set('en');

    expect(service.lang()).toBe('en');
    expect(localStorage.getItem('intj-lang')).toBe('en');
  });

  it('swaps the whole copy bundle when the language changes', () => {
    stubLanguages(['pt-BR']);
    const service = TestBed.inject(LanguageService);
    const before = service.content().shell.nav.skipToContent;

    service.set('en');

    expect(service.content().shell.nav.skipToContent).not.toBe(before);
  });

  it('keeps <html lang> in step with the active language', () => {
    stubLanguages(['pt-BR']);
    const service = TestBed.inject(LanguageService);

    // The document attribute is written from an effect, which Angular schedules
    // rather than running inline, so each assertion needs a flush.
    TestBed.tick();
    expect(document.documentElement.lang).toBe('pt-BR');

    service.set('en');
    TestBed.tick();
    expect(document.documentElement.lang).toBe('en');
  });
});
