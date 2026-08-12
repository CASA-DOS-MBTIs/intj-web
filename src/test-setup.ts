function createMemoryStorage(): Storage {
  const entries = new Map<string, string>();

  const storage = {
    get length(): number {
      return entries.size;
    },
    clear(): void {
      entries.clear();
    },
    getItem(key: string): string | null {
      return entries.get(key) ?? null;
    },
    key(index: number): string | null {
      return [...entries.keys()][index] ?? null;
    },
    removeItem(key: string): void {
      entries.delete(key);
    },
    setItem(key: string, value: string): void {
      entries.set(key, String(value));
    },
  };

  return storage as Storage;
}

function isStorageUsable(): boolean {
  try {
    const probe = globalThis.localStorage;
    if (!probe) {
      return false;
    }
    probe.setItem('__probe__', '1');
    probe.removeItem('__probe__');
    return true;
  } catch {
    return false;
  }
}

if (!isStorageUsable()) {
  Object.defineProperty(globalThis, 'localStorage', {
    value: createMemoryStorage(),
    configurable: true,
    writable: true,
  });
}

if (typeof Element !== 'undefined' && typeof Element.prototype.scrollIntoView !== 'function') {
  Element.prototype.scrollIntoView = function scrollIntoView(): void {};
}
