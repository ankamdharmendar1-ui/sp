import type { SharePayload, WheelConfig, WheelSettings } from '../types/wheel'
import { SITE_DOMAIN } from '../data/defaults'
import { clampEntryCount, normalizeWeight, sanitizeLabel, sanitizeName } from './sanitize'

export function toSharePayload(wheel: WheelConfig): SharePayload {
  return {
    n: wheel.name,
    e: wheel.entries.map((entry) => [entry.label, entry.weight, entry.color]),
    s: {
      colorTheme: wheel.settings.colorTheme,
      weightedMode: wheel.settings.weightedMode,
      spinDurationMs: wheel.settings.spinDurationMs,
      textSize: wheel.settings.textSize,
      textPosition: wheel.settings.textPosition,
      borderStyle: wheel.settings.borderStyle,
      pointerStyle: wheel.settings.pointerStyle,
    },
  }
}

export function encodeShare(payload: SharePayload): string {
  const json = JSON.stringify(payload)
  const bytes = encodeURIComponent(json)
  return btoa(bytes).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

export function decodeShare(token: string): SharePayload | null {
  try {
    const padded = token.replace(/-/g, '+').replace(/_/g, '/')
    const pad = padded.length % 4 === 0 ? '' : '='.repeat(4 - (padded.length % 4))
    const json = decodeURIComponent(atob(padded + pad))
    const data = JSON.parse(json) as SharePayload
    if (!data || !Array.isArray(data.e)) return null
    return data
  } catch {
    return null
  }
}

export function payloadToDraft(payload: SharePayload, settingsBase: WheelSettings): {
  name: string
  labels: Array<{ label: string; weight: number; color?: string }>
  settings: WheelSettings
} {
  return {
    name: sanitizeName(payload.n || 'Shared wheel') || 'Shared wheel',
    labels: clampEntryCount(payload.e).map((row) => ({
      label: sanitizeLabel(row[0] || ''),
      weight: normalizeWeight(row[1]),
      color: row[2],
    })),
    settings: { ...settingsBase, ...(payload.s ?? {}) },
  }
}

export function shareUrlFor(wheel: WheelConfig): string {
  const token = encodeShare(toSharePayload(wheel))
  const origin = typeof window !== 'undefined' ? window.location.origin : SITE_DOMAIN
  return `${origin}/#w=${token}`
}

export function readShareFromLocation(): SharePayload | null {
  if (typeof window === 'undefined') return null
  const hash = window.location.hash
  if (hash.startsWith('#w=')) return decodeShare(hash.slice(3))
  const params = new URLSearchParams(window.location.search)
  const q = params.get('w')
  return q ? decodeShare(q) : null
}
