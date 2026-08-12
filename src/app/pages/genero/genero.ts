import { Component, computed, signal } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { Reveal } from '../../core/reveal.directive';
import { References } from '../../shared/references/references';
import { PageMasthead, type BloomPosition } from '../../shared/page-header/page-header';
import { GENDER_KEYS, type GenderKey } from '../../content/profile-keys';
import { GENERO_EN } from '../../content/en/genero';
import { GENERO_PT } from '../../content/pt/genero';

@Component({
  selector: 'app-genero',
  imports: [PageMasthead, References, Reveal],
  templateUrl: './genero.html',
  styleUrl: './genero.scss',
})
export class Genero {
  protected readonly page = usePageContent({ pt: GENERO_PT, en: GENERO_EN });
  protected readonly genderKeys = GENDER_KEYS;
  protected readonly bloom: BloomPosition = {
    top: '-46%',
    right: '10%',
    width: 'min(680px, 90vw)',
  };

  private readonly chosen = signal<GenderKey>('man');

  protected readonly selected = this.chosen.asReadonly();
  protected readonly detail = computed(() => this.page().sides[this.chosen()]);

  constructor() {
    usePageMeta(() => this.page().meta);
  }

  protected choose(key: GenderKey): void {
    this.chosen.set(key);
  }
}
