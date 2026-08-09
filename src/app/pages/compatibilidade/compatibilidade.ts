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

/** Which column the list is ordered by. */
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

  /**
   * Every pairing with its three axes and its combined score, best first.
   *
   * A plain field rather than a computed: the figures come from the function
   * stacks, which are the same in Portuguese and in English. Only the prose
   * beside them changes with the language.
   */
  protected readonly byCombined = rankedPairings();

  /** Opens on the highest-scoring pairing rather than a hardcoded favourite. */
  private readonly chosen = signal<MbtiType>(this.byCombined[0].code);

  protected readonly selected = this.chosen.asReadonly();
  protected readonly detail = computed(() => this.page().types[this.chosen()]);
  protected readonly selectedAxes = computed(() => axesFor(this.chosen()));
  protected readonly selectedScore = computed(() => combinedScore(this.selectedAxes()));

  /**
   * The prose for each function pair, married to the figure that pair earned.
   *
   * The content carries one row more than the model does — the last one is the
   * flat bonus for an extroverted dominant, which belongs to no function pair
   * and so gets no figure of its own.
   */
  protected readonly breakdownRows = computed(() => {
    const working = workingFor(this.chosen());
    return this.detail().breakdown.map((line, index) => ({
      ...line,
      working: working[index] ?? null,
    }));
  });

  /**
   * The combined column is the default, and the three axes stay available under
   * it. Sorting by recognition alone still puts the mirror first — kept on
   * purpose, because watching INTJ × INTJ top that one column and sit mid-table
   * on the combined one explains the penalty better than the note does.
   */
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
