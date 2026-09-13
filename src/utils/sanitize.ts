const MAX_LABEL = 80
const MAX_NAME = 60
const MAX_ENTRIES = 250

export function sanitizeLabel(value: string): string {
  return value.replace(/[\u0000-\u001F\u007F]/g, '').replace(/\s+/g, ' ').trim().slice(0, MAX_LABEL)
}

export function sanitizeName(value: string): string {
  return value.replace(/[\u0000-\u001F\u007F]/g, '').replace(/\s+/g, ' ').trim().slice(0, MAX_NAME)
}

export function clampEntryCount<T>(items: T[]): T[] {
  return items.slice(0, MAX_ENTRIES)
}

export function normalizeWeight(value: unknown): number {
  const n = typeof value === 'number' ? value : Number(value)
  if (!Number.isFinite(n) || n < 0) return 1
  if (n === 0) return 0
  return Math.min(n, 1_000_000)
}

export { MAX_ENTRIES }
