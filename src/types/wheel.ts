export interface WheelEntry {
  id: string
  label: string
  color: string
  weight: number
}

export type ColorTheme = 'aurora' | 'sunset' | 'ocean' | 'forest' | 'mono' | 'custom'
export type BackgroundTheme = 'cream' | 'slate' | 'night' | 'mint'
export type TextSize = 'sm' | 'md' | 'lg'
export type TextPosition = 'outer' | 'center' | 'inner'
export type BorderStyle = 'none' | 'thin' | 'bold' | 'gold'
export type PointerStyle = 'triangle' | 'arrow' | 'pin'

export interface WheelSettings {
  colorTheme: ColorTheme
  customColors: string[]
  background: BackgroundTheme
  textSize: TextSize
  textPosition: TextPosition
  borderStyle: BorderStyle
  pointerStyle: PointerStyle
  spinDurationMs: number
  soundEnabled: boolean
  tickSoundEnabled: boolean
  winnerSoundEnabled: boolean
  confettiEnabled: boolean
  weightedMode: boolean
  removeWinnerAfterSpin: boolean
}

export interface SpinHistoryItem {
  id: string
  label: string
  at: number
  spinNumber: number
}

export interface WheelConfig {
  id: string
  name: string
  entries: WheelEntry[]
  settings: WheelSettings
  history: SpinHistoryItem[]
  createdAt: number
  updatedAt: number
}

export interface StoredState {
  version: 1
  wheels: WheelConfig[]
  activeId: string
}

export interface SegmentGeometry {
  index: number
  entry: WheelEntry
  startAngle: number
  endAngle: number
  pickAngle: number
}

export interface SharePayload {
  n: string
  e: Array<[string, number, string?]>
  s?: Partial<WheelSettings>
}
