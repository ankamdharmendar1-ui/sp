import { defaultWheels } from '../data/defaults'
import type { StoredState, WheelConfig } from '../types/wheel'
import { colorForIndex } from './colors'
import { sanitizeLabel, sanitizeName, normalizeWeight, clampEntryCount } from './sanitize'

const KEY = 'rpw.v3'

function isEntry(value: unknown): boolean {
  if (!value || typeof value !== 'object') return false
  const v = value as Record<string, unknown>
  return typeof v.id === 'string' && typeof v.label === 'string'
}

function repairWheel(raw: unknown): WheelConfig | null {
  if (!raw || typeof raw !== 'object') return null
  const v = raw as Partial<WheelConfig>
  if (typeof v.id !== 'string' || typeof v.name !== 'string' || !Array.isArray(v.entries)) return null
  const entries = clampEntryCount(v.entries.filter(isEntry)).map((entry, index) => ({
    id: String(entry.id),
    label: sanitizeLabel(entry.label) || `Item ${index + 1}`,
    color: colorForIndex(index),
    weight: normalizeWeight(entry.weight),
  }))
  const fallback = defaultWheels()[0]
  return {
    id: v.id,
    name: sanitizeName(v.name) || 'Untitled wheel',
    entries,
    settings: {
      ...fallback.settings,
      ...(v.settings ?? {}),
      soundEnabled: v.settings?.soundEnabled ?? true,
      tickSoundEnabled: v.settings?.tickSoundEnabled ?? true,
      winnerSoundEnabled: v.settings?.winnerSoundEnabled ?? true,
    },
    history: Array.isArray(v.history) ? v.history.slice(0, 200) : [],
    createdAt: typeof v.createdAt === 'number' ? v.createdAt : Date.now(),
    updatedAt: typeof v.updatedAt === 'number' ? v.updatedAt : Date.now(),
  }
}

export function loadState(): StoredState {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) {
      const wheels = defaultWheels()
      return { version: 1, wheels, activeId: wheels[0].id }
    }
    const parsed = JSON.parse(raw) as StoredState
    const wheels = (parsed.wheels ?? []).map(repairWheel).filter((w): w is WheelConfig => Boolean(w))
    if (!wheels.length) {
      const fresh = defaultWheels()
      return { version: 1, wheels: fresh, activeId: fresh[0].id }
    }
    const activeId = wheels.some((w) => w.id === parsed.activeId) ? parsed.activeId : wheels[0].id
    const enabled = wheels.map((wheel) => ({
      ...wheel,
      settings: {
        ...wheel.settings,
        soundEnabled: true,
        tickSoundEnabled: wheel.settings.tickSoundEnabled !== false,
        winnerSoundEnabled: wheel.settings.winnerSoundEnabled !== false,
      },
    }))
    return { version: 1, wheels: enabled, activeId }
  } catch {
    const wheels = defaultWheels()
    return { version: 1, wheels, activeId: wheels[0].id }
  }
}

export function saveState(state: StoredState): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    // Quota or private mode — keep the session in memory only.
  }
}
