import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { makeEntries, makeWheel } from '../data/defaults'
import { colorForIndex } from '../utils/colors'
import { createId } from '../utils/id'
import { parseBulkText, shuffle } from '../utils/importExport'
import { buildSegments, pickSegment } from '../utils/random'
import { payloadToDraft, readShareFromLocation } from '../utils/share'
import { clampEntryCount, normalizeWeight, sanitizeLabel, sanitizeName } from '../utils/sanitize'
import { soundEngine } from '../utils/sound'
import { loadState, saveState } from '../utils/storage'
import type { SegmentGeometry, WheelConfig, WheelEntry, WheelSettings } from '../types/wheel'

interface WheelContextValue {
  wheels: WheelConfig[]
  active: WheelConfig
  spinning: boolean
  rotation: number
  result: WheelEntry | null
  notice: string | null
  spinRequest: { token: number; pick: SegmentGeometry; extraTurns: number; duration: number } | null
  setRotation: (v: number) => void
  clearNotice: () => void
  clearResult: () => void
  updateSettings: (patch: Partial<WheelSettings>) => void
  addEntry: (label: string, weight?: number) => void
  updateEntry: (id: string, patch: Partial<Pick<WheelEntry, 'label' | 'weight' | 'color'>>) => void
  removeEntry: (id: string) => void
  replaceEntriesFromText: (text: string) => void
  appendEntriesFromText: (text: string) => void
  clearEntries: () => void
  shuffleEntries: () => void
  createWheel: () => void
  duplicateWheel: () => void
  switchWheel: (id: string) => void
  deleteWheel: (id: string) => void
  renameWheel: (id: string, name: string) => void
  spin: () => void
  instantPick: () => void
  keepWinner: () => void
  removeWinner: () => void
  clearHistory: () => void
  resetWheel: () => void
  finishSpin: (winner: WheelEntry) => void
}

const WheelContext = createContext<WheelContextValue | null>(null)

function patchActive(wheels: WheelConfig[], activeId: string, fn: (w: WheelConfig) => WheelConfig): WheelConfig[] {
  return wheels.map((wheel) => (wheel.id === activeId ? { ...fn(wheel), updatedAt: Date.now() } : wheel))
}

export function WheelProvider({ children }: { children: ReactNode }) {
  const loaded = useRef(false)
  const [wheels, setWheels] = useState<WheelConfig[]>([])
  const [activeId, setActiveId] = useState('')
  const [spinning, setSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [result, setResult] = useState<WheelEntry | null>(null)
  const [notice, setNotice] = useState<string | null>(null)
  const [spinRequest, setSpinRequest] = useState<WheelContextValue['spinRequest']>(null)

  useEffect(() => {
    const stored = loadState()
    let nextWheels = stored.wheels
    let nextActive = stored.activeId
    const shared = readShareFromLocation()
    if (shared) {
      const base = stored.wheels[0]?.settings
      if (base) {
        const draft = payloadToDraft(shared, base)
        const labels = draft.labels.filter((row) => row.label)
        if (labels.length) {
          const wheel = makeWheel(draft.name, labels.map((row) => row.label))
          wheel.settings = draft.settings
          wheel.entries = labels.map((row, index) => ({
            id: createId('e'),
            label: row.label,
            weight: row.weight,
            color: row.color && /^#[0-9A-Fa-f]{6}$/.test(row.color)
              ? row.color
              : colorForIndex(index),
          }))
          nextWheels = [wheel, ...stored.wheels]
          nextActive = wheel.id
          setNotice('Loaded a shared wheel from this link.')
        } else {
          setNotice('That share link did not contain any valid entries.')
        }
      }
    }
    setWheels(nextWheels)
    setActiveId(nextActive)
    loaded.current = true
  }, [])

  useEffect(() => {
    if (!loaded.current || !wheels.length || !activeId) return
    saveState({ version: 1, wheels, activeId })
  }, [wheels, activeId])

  const active = useMemo(
    () => wheels.find((w) => w.id === activeId) ?? wheels[0],
    [wheels, activeId],
  )

  const mutate = useCallback((fn: (w: WheelConfig) => WheelConfig) => {
    setWheels((prev) => {
      const current = prev.find((w) => w.id === activeId) ?? prev[0]
      if (!current) return prev
      return patchActive(prev, current.id, fn)
    })
  }, [activeId])

  const addEntry = useCallback((label: string, weight = 1) => {
    const clean = sanitizeLabel(label)
    if (!clean) return
    mutate((w) => {
      if (w.entries.length >= 250) {
        setNotice('This wheel already has the maximum of 250 entries.')
        return w
      }
      const entry: WheelEntry = {
        id: createId('e'),
        label: clean,
        weight: normalizeWeight(weight),
        color: colorForIndex(w.entries.length),
      }
      return { ...w, entries: [...w.entries, entry] }
    })
  }, [mutate])

  const updateEntry = useCallback((id: string, patch: Partial<Pick<WheelEntry, 'label' | 'weight' | 'color'>>) => {
    mutate((w) => ({
      ...w,
      entries: w.entries.map((entry) =>
        entry.id === id
          ? {
              ...entry,
              label: patch.label !== undefined ? sanitizeLabel(patch.label) || entry.label : entry.label,
              weight: patch.weight !== undefined ? normalizeWeight(patch.weight) : entry.weight,
              color: patch.color ?? entry.color,
            }
          : entry,
      ),
    }))
  }, [mutate])

  const removeEntry = useCallback((id: string) => {
    mutate((w) => ({ ...w, entries: w.entries.filter((entry) => entry.id !== id) }))
  }, [mutate])

  const replaceEntriesFromText = useCallback((text: string) => {
    mutate((w) => ({ ...w, entries: parseBulkText(text) }))
  }, [mutate])

  const appendEntriesFromText = useCallback((text: string) => {
    mutate((w) => {
      const extra = parseBulkText(text)
      return { ...w, entries: clampEntryCount([...w.entries, ...extra]) }
    })
  }, [mutate])

  const clearEntries = useCallback(() => {
    mutate((w) => ({ ...w, entries: [] }))
  }, [mutate])

  const shuffleEntries = useCallback(() => {
    mutate((w) => ({ ...w, entries: shuffle(w.entries) }))
  }, [mutate])

  const updateSettings = useCallback((patch: Partial<WheelSettings>) => {
    mutate((w) => ({ ...w, settings: { ...w.settings, ...patch } }))
  }, [mutate])

  const createWheel = useCallback(() => {
    const wheel = makeWheel(`Wheel ${wheels.length + 1}`, ['Option A', 'Option B', 'Option C'])
    setWheels((prev) => [...prev, wheel])
    setActiveId(wheel.id)
    setResult(null)
  }, [wheels.length])

  const duplicateWheel = useCallback(() => {
    if (!active) return
    const copy: WheelConfig = {
      ...structuredClone(active),
      id: createId('wheel'),
      name: `${active.name} copy`,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }
    setWheels((prev) => [...prev, copy])
    setActiveId(copy.id)
  }, [active])

  const switchWheel = useCallback((id: string) => {
    if (spinning) return
    setActiveId(id)
    setResult(null)
    setRotation(0)
  }, [spinning])

  const deleteWheel = useCallback((id: string) => {
    setWheels((prev) => {
      if (prev.length <= 1) {
        setNotice('Keep at least one wheel.')
        return prev
      }
      const next = prev.filter((w) => w.id !== id)
      if (id === activeId) setActiveId(next[0].id)
      return next
    })
  }, [activeId])

  const renameWheel = useCallback((id: string, name: string) => {
    setWheels((prev) =>
      prev.map((w) => (w.id === id ? { ...w, name: sanitizeName(name) || w.name, updatedAt: Date.now() } : w)),
    )
  }, [])

  const recordWin = useCallback((winner: WheelEntry, remove: boolean) => {
    mutate((w) => {
      const spinNumber = w.history.length + 1
      const history = [
        { id: createId('h'), label: winner.label, at: Date.now(), spinNumber },
        ...w.history,
      ].slice(0, 100)
      const entries = remove ? w.entries.filter((e) => e.id !== winner.id) : w.entries
      return { ...w, history, entries }
    })
    setResult(winner)
  }, [mutate])

  const spin = useCallback(() => {
    if (spinning || !active) return
    soundEngine.unlock()
    const segments = buildSegments(active.entries, active.settings.weightedMode)
    const picked = pickSegment(segments, active.settings.weightedMode)
    if (!picked) {
      setNotice('Add at least one selectable entry to spin.')
      return
    }
    setResult(null)
    setSpinning(true)
    const extraTurns = 5 + Math.floor(Math.random() * 3)
    const duration = Math.min(9000, Math.max(1200, active.settings.spinDurationMs))
    setSpinRequest({
      token: Date.now(),
      pick: picked,
      extraTurns,
      duration,
    })
  }, [active, spinning])

  const instantPick = useCallback(() => {
    if (spinning || !active) return
    soundEngine.unlock()
    const segments = buildSegments(active.entries, active.settings.weightedMode)
    const picked = pickSegment(segments, active.settings.weightedMode)
    if (!picked) {
      setNotice('Add at least one selectable entry to pick.')
      return
    }
    if (active.settings.winnerSoundEnabled && active.settings.soundEnabled) soundEngine.win()
    recordWin(picked.entry, active.settings.removeWinnerAfterSpin)
  }, [active, recordWin, spinning])

  const finishSpin = useCallback((winner: WheelEntry) => {
    setSpinning(false)
    setSpinRequest(null)
    if (!active) return
    recordWin(winner, active.settings.removeWinnerAfterSpin)
  }, [active, recordWin])

  const keepWinner = useCallback(() => setResult(null), [])

  const removeWinner = useCallback(() => {
    if (!result) return
    mutate((w) => ({ ...w, entries: w.entries.filter((e) => e.id !== result.id) }))
    setResult(null)
  }, [mutate, result])

  const clearHistory = useCallback(() => {
    mutate((w) => ({ ...w, history: [] }))
  }, [mutate])

  const resetWheel = useCallback(() => {
    if (spinning) return
    mutate((w) => ({
      ...w,
      entries: makeEntries(['YES', 'NO', 'YES', 'NO', 'YES', 'NO', 'YES', 'NO']),
    }))
    setRotation(0)
    setResult(null)
  }, [mutate, spinning])

  const clearNotice = useCallback(() => setNotice(null), [])
  const clearResult = useCallback(() => setResult(null), [])

  const value: WheelContextValue | null = active
    ? {
        wheels,
        active,
        spinning,
        rotation,
        result,
        notice,
        spinRequest,
        setRotation,
        clearNotice,
        clearResult,
        updateSettings,
        addEntry,
        updateEntry,
        removeEntry,
        replaceEntriesFromText,
        appendEntriesFromText,
        clearEntries,
        shuffleEntries,
        createWheel,
        duplicateWheel,
        switchWheel,
        deleteWheel,
        renameWheel,
        spin,
        instantPick,
        keepWinner,
        removeWinner,
        clearHistory,
        resetWheel,
        finishSpin,
      }
    : null

  if (!value) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#f4efe4] text-[#10232b]">
        Loading your wheels…
      </div>
    )
  }

  return <WheelContext.Provider value={value}>{children}</WheelContext.Provider>
}

export function useWheel() {
  const ctx = useContext(WheelContext)
  if (!ctx) throw new Error('useWheel must be used within WheelProvider')
  return ctx
}
