import { Injectable, inject, signal } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class CurrentUrl {
  private readonly value = signal(normalise(inject(PlatformLocation).pathname));

  readonly path = this.value.asReadonly();

  set(url: string): void {
    this.value.set(normalise(url));
  }
}

function normalise(url: string): string {
  const path = url.split('?')[0].split('#')[0];
  return path.replace(/\/+$/, '') || '/';
}
