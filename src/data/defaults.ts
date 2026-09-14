import type { WheelConfig, WheelSettings } from '../types/wheel'
import { colorForIndex } from '../utils/colors'
import { createId } from '../utils/id'
import { sanitizeLabel } from '../utils/sanitize'

export const SITE_NAME = 'Real Picker Wheel'
export const SITE_DOMAIN = 'https://www.realpickerwheel.com'

export const defaultSettings = (): WheelSettings => ({
  colorTheme: 'aurora',
  customColors: [],
  background: 'cream',
  textSize: 'md',
  textPosition: 'outer',
  borderStyle: 'none',
  pointerStyle: 'triangle',
  spinDurationMs: 4200,
  soundEnabled: true,
  tickSoundEnabled: true,
  winnerSoundEnabled: true,
  confettiEnabled: true,
  weightedMode: false,
  removeWinnerAfterSpin: false,
})

export function makeEntries(labels: string[]) {
  return labels.map((label, index) => ({
    id: createId('e'),
    label: sanitizeLabel(label),
    weight: 1,
    color: colorForIndex(index),
  }))
}

export function makeWheel(name: string, labels: string[]): WheelConfig {
  const now = Date.now()
  return {
    id: createId('wheel'),
    name,
    entries: makeEntries(labels),
    settings: defaultSettings(),
    history: [],
    createdAt: now,
    updatedAt: now,
  }
}

export function defaultWheels(): WheelConfig[] {
  return [
    makeWheel('Yes or No', ['YES', 'NO', 'YES', 'NO', 'YES', 'NO', 'YES', 'NO']),
    makeWheel('Classroom names', ['Ava', 'Noah', 'Maya', 'Leo', 'Priya', 'Owen', 'Sofia', 'Kai']),
    makeWheel('Lunch ideas', ['Noodles', 'Rice bowl', 'Salad', 'Wrap', 'Soup', 'Tacos']),
    makeWheel('Weekend plans', ['Park walk', 'Board games', 'Movie night', 'Bake something', 'Visit a friend']),
  ]
}
