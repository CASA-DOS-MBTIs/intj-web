import { Injectable, computed, signal } from '@angular/core';

import {
  IDENTITY_KEYS,
  INSTINCT_KEYS,
  TEMPERAMENT_PAIR_KEYS,
  TRITYPE_KEYS,
  WING_KEYS,
  coreType,
  type EnneatypeKey,
  type IdentityKey,
  type InstinctKey,
  type TemperamentPairKey,
  type TritypeKey,
  type WingKey,
} from '../content/profile-keys';

const STORAGE_KEY = 'intj-profile';

export interface Profile {
  identity: IdentityKey | null;
  wing: WingKey | null;
  tritype: TritypeKey | null;
  instinct: InstinctKey | null;
  temperament: TemperamentPairKey | null;
}

export type ProfileFacet = keyof Profile;

const EMPTY: Profile = {
  identity: null,
  wing: null,
  tritype: null,
  instinct: null,
  temperament: null,
};

function pick<T extends string>(value: unknown, allowed: readonly T[]): T | null {
  return typeof value === 'string' && (allowed as readonly string[]).includes(value)
    ? (value as T)
    : null;
}

function readStored(): Profile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) {
      return EMPTY;
    }

    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null) {
      return EMPTY;
    }

    const record = parsed as Record<string, unknown>;
    return {
      identity: pick(record['identity'], IDENTITY_KEYS),
      wing: pick(record['wing'], WING_KEYS),
      tritype: pick(record['tritype'], TRITYPE_KEYS),
      instinct: pick(record['instinct'], INSTINCT_KEYS),
      temperament: pick(record['temperament'], TEMPERAMENT_PAIR_KEYS),
    };
  } catch {
    return EMPTY;
  }
}

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private readonly current = signal<Profile>(readStored());

  readonly profile = this.current.asReadonly();

  readonly enneatype = computed<EnneatypeKey | null>(() => {
    const wing = this.current().wing;
    return wing === null ? null : coreType(wing);
  });

  readonly hasAny = computed(() => Object.values(this.current()).some((value) => value !== null));

  readonly filledCount = computed(
    () => Object.values(this.current()).filter((value) => value !== null).length,
  );

  set<K extends keyof Profile>(facet: K, value: Profile[K]): void {
    this.current.update((profile) => {
      const next = { ...profile, [facet]: profile[facet] === value ? null : value };
      this.persist(next);
      return next;
    });
  }

  clear(): void {
    this.current.set(EMPTY);
    this.persist(EMPTY);
  }

  private persist(profile: Profile): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch {}
  }
}
