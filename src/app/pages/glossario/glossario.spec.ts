import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { LanguageService } from '../../core/language.service';
import { GLOSSARIO_PT } from '../../content/pt/glossario';
import { Glossario } from './glossario';

interface Mounted {
  fixture: ComponentFixture<Glossario>;
  el: HTMLElement;
}

function mount(): Mounted {
  TestBed.resetTestingModule();
  TestBed.configureTestingModule({ providers: [provideRouter([])] });
  localStorage.clear();
  localStorage.setItem('intj-lang', 'pt');
  TestBed.inject(LanguageService);
  const fixture = TestBed.createComponent(Glossario);
  fixture.detectChanges();
  return { fixture, el: fixture.nativeElement as HTMLElement };
}

const chips = (el: HTMLElement) => [...el.querySelectorAll('.terms__chip')] as HTMLButtonElement[];
const terms = (el: HTMLElement) =>
  [...el.querySelectorAll('.term__name')].map((n) => n.textContent?.trim() ?? '');

function press(mounted: Mounted, node: Element): void {
  (node as HTMLElement).click();
  mounted.fixture.detectChanges();
}

describe('Glossario', () => {
  it('starts with every term listed', () => {
    const { el } = mount();

    expect(terms(el).length).toBe(GLOSSARIO_PT.entries.length);
  });

  it('offers one filter per system, plus the unfiltered one', () => {
    const { el } = mount();

    expect(chips(el).length).toBe(GLOSSARIO_PT.systems.length + 1);
  });

  it('narrows the list to a single system', () => {
    const mounted = mount();
    const system = GLOSSARIO_PT.systems[0];
    const expected = GLOSSARIO_PT.entries.filter((e) => e.system === system);

    press(mounted, chips(mounted.el)[1]);

    expect(terms(mounted.el).length).toBe(expected.length);
    expect(terms(mounted.el)).toEqual(expected.map((e) => e.term));
  });

  it('returns to the whole list from the unfiltered chip', () => {
    const mounted = mount();

    press(mounted, chips(mounted.el)[1]);
    press(mounted, chips(mounted.el)[0]);

    expect(terms(mounted.el).length).toBe(GLOSSARIO_PT.entries.length);
  });

  it('marks which filter is active', () => {
    const mounted = mount();

    press(mounted, chips(mounted.el)[2]);

    const active = chips(mounted.el).filter((c) => c.getAttribute('aria-pressed') === 'true');
    expect(active.length).toBe(1);
    expect(active[0].textContent?.trim()).toBe(GLOSSARIO_PT.systems[1]);
  });
});
