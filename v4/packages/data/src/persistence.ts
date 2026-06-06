export const V4_STORAGE_KEYS = {
  progress: "lookism:v4:progress",
  profile: "lookism:v4:profile",
  analysis: "lookism:v4:analysis",
  journey: "lookism:v4:journey",
  settings: "lookism:v4:userSettings",
  trainingProgress: "lookism:v4:trainingProgress",
  chat: "lookism:v4:chat"
} as const;

export interface KeyValueStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export function readJson<T>(storage: KeyValueStorage, key: string, fallback: T): T {
  try {
    const raw = storage.getItem(key);
    return raw ? JSON.parse(raw) as T : fallback;
  } catch {
    return fallback;
  }
}

export function writeJson<T>(storage: KeyValueStorage, key: string, value: T): void {
  storage.setItem(key, JSON.stringify(value));
}

export function browserStorage(): KeyValueStorage | null {
  if (typeof globalThis === "undefined" || !("localStorage" in globalThis)) return null;
  return globalThis.localStorage;
}
