/**
 * Node 26 ships its own `localStorage` global that stays disabled unless the
 * process is started with `--localstorage-file`, and it shadows the jsdom
 * implementation the test builder would otherwise provide. Touching it throws.
 *
 * The site treats storage as best-effort — LanguageService wraps every access
 * in try/catch — so tests get a simple in-memory stand-in rather than the app
 * being reshaped around a test-runner quirk.
 */

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

/**
 * jsdom does no layout, so it ships no `scrollIntoView`. The Espelho moves the
 * reader when the questionnaire opens or closes, and calling a method that does
 * not exist would fail those tests for a reason unrelated to what they assert —
 * there is no viewport to scroll here either way.
 */
if (typeof Element !== 'undefined' && typeof Element.prototype.scrollIntoView !== 'function') {
  Element.prototype.scrollIntoView = function scrollIntoView(): void {};
}
