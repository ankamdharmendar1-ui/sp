import type { SegmentGeometry, WheelEntry } from '../types/wheel'

const TAU = Math.PI * 2
export const POINTER_ANGLE = -Math.PI / 2

function cryptoRandom(): number {
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const buf = new Uint32Array(1)
    crypto.getRandomValues(buf)
    return buf[0] / 2 ** 32
  }
  return Math.random()
}

export function effectiveWeight(entry: WheelEntry, weightedMode: boolean): number {
  if (!weightedMode) return 1
  return entry.weight > 0 ? entry.weight : 0
}

export function buildSegments(entries: WheelEntry[], weightedMode: boolean): SegmentGeometry[] {
  if (!entries.length) return []

  const weights = entries.map((entry) => effectiveWeight(entry, weightedMode))
  const positiveTotal = weights.reduce((sum, w) => sum + w, 0)
  const useEqual = positiveTotal <= 0
  const total = useEqual ? entries.length : positiveTotal

  let cursor = POINTER_ANGLE
  return entries.map((entry, index) => {
    const w = useEqual ? 1 : weights[index]
    const span = (w / total) * TAU
    const startAngle = cursor
    const endAngle = cursor + span
    const inset = span * 0.08
    const pickAngle = span <= 0 ? startAngle : startAngle + Math.min(span / 2, Math.max(inset, span / 2))
    cursor = endAngle
    return { index, entry, startAngle, endAngle, pickAngle }
  })
}

export function pickSegment(segments: SegmentGeometry[], weightedMode: boolean): SegmentGeometry | null {
  const selectable = segments.filter((seg) => {
    if (seg.endAngle - seg.startAngle <= 0) return false
    return !weightedMode || seg.entry.weight > 0
  })
  if (!selectable.length) return null

  if (!weightedMode) {
    const index = Math.floor(cryptoRandom() * selectable.length)
    return selectable[index]
  }

  const total = selectable.reduce((sum, seg) => sum + seg.entry.weight, 0)
  let dart = cryptoRandom() * total
  for (const seg of selectable) {
    dart -= seg.entry.weight
    if (dart <= 0) return seg
  }
  return selectable[selectable.length - 1]
}

export function rotationForPick(currentRotation: number, pickAngle: number, extraTurns: number): number {
  const current = ((currentRotation % TAU) + TAU) % TAU
  const targetMod = ((POINTER_ANGLE - pickAngle) % TAU + TAU) % TAU
  let delta = targetMod - current
  if (delta < 0) delta += TAU
  return currentRotation + extraTurns * TAU + delta
}

export function segmentAtPointer(segments: SegmentGeometry[], rotation: number): SegmentGeometry | null {
  if (!segments.length) return null
  const local = ((POINTER_ANGLE - rotation) % TAU + TAU) % TAU
  const abs = ((local - POINTER_ANGLE) % TAU + TAU) % TAU
  const angle = POINTER_ANGLE + abs
  for (const seg of segments) {
    const start = seg.startAngle
    const end = seg.endAngle
    if (angle >= start && angle < end) return seg
    if (end > start + TAU - 1e-9 && (angle >= start || angle < end - TAU)) return seg
  }
  return segments[segments.length - 1]
}

export function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3
}
