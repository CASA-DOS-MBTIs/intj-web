import { Component, computed, signal } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { References } from '../../shared/references/references';
import { PageMasthead, type BloomPosition } from '../../shared/page-header/page-header';
import { GLOSSARIO_EN } from '../../content/en/glossario';
import { GLOSSARIO_PT } from '../../content/pt/glossario';

const ALL = '';

@Component({
  selector: 'app-glossario',
  imports: [PageMasthead, References],
  templateUrl: './glossario.html',
  styleUrl: './glossario.scss',
})
export class Glossario {
  protected readonly page = usePageContent({ pt: GLOSSARIO_PT, en: GLOSSARIO_EN });
  protected readonly bloom: BloomPosition = {
    top: '-42%',
    right: '34%',
    width: 'min(660px, 90vw)',
  };

  protected readonly system = signal<string>(ALL);
  protected readonly all = ALL;

  protected readonly entries = computed(() => {
    const chosen = this.system();
    const entries = this.page().entries;
    return chosen === ALL ? entries : entries.filter((entry) => entry.system === chosen);
  });

  constructor() {
    usePageMeta(() => this.page().meta);
  }

  protected filter(system: string): void {
    this.system.set(system);
  }
}
