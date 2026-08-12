import { Component, computed, signal } from '@angular/core';

import { usePageMeta } from '../../core/page-meta';
import { usePageContent } from '../../core/page-content';
import { Reveal } from '../../core/reveal.directive';
import { References } from '../../shared/references/references';
import { PageMasthead, type BloomPosition } from '../../shared/page-header/page-header';
import { COMPATIBILIDADE_EN } from '../../content/en/compatibilidade';
import { COMPATIBILIDADE_PT } from '../../content/pt/compatibilidade';
import { type MbtiType } from '../../content/profile-keys';
import {
  axesFor,
  combinedScore,
  rankedPairings,
  workingFor,
} from '../../content/compatibility-model';

type Axis = 'combined' | 'recognition' | 'complement' | 'livability';

@Component({
  selector: 'app-compatibilidade',
  imports: [PageMasthead, References, Reveal],
  templateUrl: './compatibilidade.html',
  styleUrl: './compatibilidade.scss',
})
export class Compatibilidade {
  protected readonly page = usePageContent({
    pt: COMPATIBILIDADE_PT,
    en: COMPATIBILIDADE_EN,
  });

  protected readonly bloom: BloomPosition = {
    top: '-44%',
    right: '20%',
    width: 'min(700px, 90vw)',
  };

  protected readonly byCombined = rankedPairings();

  private readonly chosen = signal<MbtiType>(this.byCombined[0].code);

  protected readonly selected = this.chosen.asReadonly();
  protected readonly detail = computed(() => this.page().types[this.chosen()]);
  protected readonly selectedAxes = computed(() => axesFor(this.chosen()));
  protected readonly selectedScore = computed(() => combinedScore(this.selectedAxes()));

  protected readonly breakdownRows = computed(() => {
    const working = workingFor(this.chosen());
    return this.detail().breakdown.map((line, index) => ({
      ...line,
      working: working[index] ?? null,
    }));
  });

  protected readonly sortBy = signal<Axis>('combined');

  protected readonly axisOptions: readonly Axis[] = [
    'combined',
    'recognition',
    'complement',
    'livability',
  ];

  protected readonly axisNote = computed(() => this.page().axes[this.sortBy()].note);

  protected readonly ranked = computed(() => {
    const axis = this.sortBy();
    return axis === 'combined'
      ? this.byCombined
      : [...this.byCombined].sort((a, b) => b.axes[axis] - a.axes[axis]);
  });

  constructor() {
    usePageMeta(() => this.page().meta);
  }

  protected choose(code: MbtiType): void {
    this.chosen.set(code);
  }

  protected sortByAxis(axis: Axis): void {
    this.sortBy.set(axis);
  }
}
