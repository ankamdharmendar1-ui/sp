import type { WheelEntry } from '../types/wheel'
import { colorForIndex } from './colors'
import { createId } from './id'
import { clampEntryCount, normalizeWeight, sanitizeLabel } from './sanitize'

export function parseBulkText(text: string): WheelEntry[] {
  const lines = text.split(/\r?\n/)
  const entries: WheelEntry[] = []
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue
    const weighted = trimmed.match(/^(.*?)(?:\s*[-–,]\s*|\s+)(\d+(?:\.\d+)?)\s*$/)
    let label = trimmed
    let weight = 1
    if (weighted && sanitizeLabel(weighted[1])) {
      label = weighted[1]
      weight = normalizeWeight(weighted[2])
    }
    const clean = sanitizeLabel(label)
    if (!clean) continue
    entries.push({
      id: createId('e'),
      label: clean,
      weight,
        color: colorForIndex(entries.length),
    })
  }
  return clampEntryCount(entries)
}

export function toTxt(entries: WheelEntry[], includeWeights: boolean): string {
  return entries
    .map((entry) => (includeWeights ? `${entry.label} - ${entry.weight}` : entry.label))
    .join('\n')
}

export function toCsv(entries: WheelEntry[]): string {
  const header = 'label,weight,color'
  const rows = entries.map((entry) => {
    const label = `"${entry.label.replace(/"/g, '""')}"`
    return `${label},${entry.weight},${entry.color}`
  })
  return [header, ...rows].join('\n')
}

export function downloadFile(filename: string, contents: string, mime: string): void {
  const blob = new Blob([contents], { type: mime })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

export function shuffle<T>(items: T[]): T[] {
  const next = [...items]
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[next[i], next[j]] = [next[j], next[i]]
  }
  return next
}
