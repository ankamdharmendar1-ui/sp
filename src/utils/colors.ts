export const WHEEL_PALETTE = ['#1F6B16', '#A8A02E', '#E8B425', '#F3E78C']

export function colorForIndex(index: number): string {
  return WHEEL_PALETTE[((index % WHEEL_PALETTE.length) + WHEEL_PALETTE.length) % WHEEL_PALETTE.length]
}

export function contrastText(hex: string): string {
  const raw = hex.replace('#', '')
  if (raw.length !== 6) return '#1a1a1a'
  const r = Number.parseInt(raw.slice(0, 2), 16)
  const g = Number.parseInt(raw.slice(2, 4), 16)
  const b = Number.parseInt(raw.slice(4, 6), 16)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 150 ? '#1a1a1a' : '#ffffff'
}
