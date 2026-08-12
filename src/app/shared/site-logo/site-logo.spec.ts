import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { LanguageService } from '../../core/language.service';
import { SiteFoot } from '../site-foot/site-foot';
import { SiteNav } from '../site-nav/site-nav';
import { SiteLogo } from './site-logo';

function render(type: Parameters<typeof TestBed.createComponent>[0]): HTMLElement {
  TestBed.resetTestingModule();
  TestBed.configureTestingModule({ providers: [provideRouter([])] });
  TestBed.inject(LanguageService);
  const fixture = TestBed.createComponent(type);
  fixture.detectChanges();
  return fixture.nativeElement as HTMLElement;
}

const BARS = [
  { y: '17', width: '26' },
  { y: '24', width: '19' },
  { y: '31', width: '12' },
  { y: '38', width: '6' },
];

describe('SiteLogo', () => {
  it('reproduces the asset geometry exactly', () => {
    const el = render(SiteLogo);

    expect(el.querySelector('svg')?.getAttribute('viewBox')).toBe('0 0 210 62');

    const bars = [...el.querySelectorAll('.logo__bar')];
    expect(bars.length).toBe(4);
    bars.forEach((bar, i) => {
      expect(bar.getAttribute('x')).toBe('0');
      expect(bar.getAttribute('height')).toBe('2');
      expect(bar.getAttribute('y')).toBe(BARS[i].y);
      expect(bar.getAttribute('width')).toBe(BARS[i].width);
    });
  });

  it('keeps the wordmark and the function stack', () => {
    const el = render(SiteLogo);

    expect(el.querySelector('.logo__word')?.textContent).toBe('INTJ');
    expect(el.querySelector('.logo__stack')?.textContent).toBe('NI · TE · FI · SE');
  });

  it('is presentational unless given its own label', () => {
    const el = render(SiteLogo);

    expect(el.querySelector('svg')?.getAttribute('aria-hidden')).toBe('true');
    expect(el.querySelector('svg')?.getAttribute('role')).toBe('presentation');
  });
});

describe('the shell wears the mark', () => {
  it('puts the whole lockup in the header, stack line included', () => {
    const el = render(SiteNav);
    const brand = el.querySelector('.nav__brand');

    expect(brand?.querySelector('.logo__word')).not.toBeNull();
    expect(brand?.querySelector('.logo__stack')?.textContent).toBe('NI · TE · FI · SE');
  });

  it('names the mark rather than the link wrapped around it', () => {
    const brand = render(SiteNav).querySelector('.nav__brand');
    const svg = brand?.querySelector('svg');

    expect(brand?.getAttribute('aria-label')).toBeNull();
    expect(svg?.getAttribute('role')).toBe('img');
    expect(svg?.getAttribute('aria-label')).toBeTruthy();
    expect(svg?.getAttribute('aria-hidden')).toBeNull();
  });

  it('puts the same lockup in the footer', () => {
    const el = render(SiteFoot);

    expect(el.querySelector('.logo__word')?.textContent).toBe('INTJ');
    expect(el.querySelector('.logo__stack')?.textContent).toBe('NI · TE · FI · SE');
    expect(el.querySelectorAll('.logo__bar').length).toBe(4);
  });
});
