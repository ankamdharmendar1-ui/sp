import { useCallback, useEffect, useState } from 'react'
import { EntryEditor } from '../../components/EntryEditor/EntryEditor'
import { EntryList } from '../../components/EntryList/EntryList'
import { History } from '../../components/History/History'
import { ImportExportBar } from '../../components/ImportExport/ImportExportBar'
import { ResultDisplay } from '../../components/ResultDisplay/ResultDisplay'
import { Settings } from '../../components/Settings/Settings'
import { ShareDialog } from '../../components/ShareDialog/ShareDialog'
import { ConfettiBurst } from '../../components/Wheel/ConfettiBurst'
import { WheelCanvas } from '../../components/Wheel/WheelCanvas'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useWheel } from '../../hooks/useWheelStore'
import type { WheelEntry } from '../../types/wheel'

import { EmbedModal } from '../../components/EmbedDialog/EmbedModal'

const BACKGROUNDS = {
  cream: 'bg-[#f4efe4] text-[#10232b]',
  slate: 'bg-[#dbe3ea] text-[#10232b]',
  night: 'bg-[#10232b] text-[#f4efe4]',
  mint: 'bg-[#dceee6] text-[#10232b]',
}

export function WheelWorkbench({
  heading,
  subheading,
}: {
  heading: string
  subheading: string
}) {
  const {
    active,
    spinning,
    rotation,
    result,
    notice,
    spinRequest,
    setRotation,
    clearNotice,
    clearResult,
    shuffleEntries,
    clearEntries,
    spin,
    keepWinner,
    resetWheel,
    finishSpin,
  } = useWheel()
  const reducedMotion = usePrefersReducedMotion()
  const [shareOpen, setShareOpen] = useState(false)
  const [embedOpen, setEmbedOpen] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const s = active.settings
  const canSpin = active.entries.length > 0 && !spinning

  const onSpinEnd = useCallback(
    (winner: WheelEntry) => {
      finishSpin(winner)
      if (s.confettiEnabled && !reducedMotion) {
        setShowConfetti(true)
        window.setTimeout(() => setShowConfetti(false), 2200)
      }
    },
    [finishSpin, reducedMotion, s.confettiEnabled],
  )

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShareOpen(false)
        clearResult()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [clearResult])

  return (
    <div className={`min-h-screen ${BACKGROUNDS[s.background as keyof typeof BACKGROUNDS]}`}>
      <div className="relative mx-auto max-w-6xl px-3 py-4 sm:px-4 sm:py-6">
        <header className="mb-4 max-w-3xl sm:mb-6">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-5xl">{heading}</h1>
          <p className="mt-2 text-sm leading-relaxed text-[#3e4c59] sm:mt-3 sm:text-lg">{subheading}</p>
        </header>

        {notice && (
          <div className="mb-4 flex items-center justify-between gap-3 rounded-2xl bg-[#1B6B6B] px-4 py-3 text-white" role="status">
            <p className="text-sm sm:text-base">{notice}</p>
            <button type="button" className="font-bold text-lg" onClick={clearNotice} aria-label="Dismiss notice">
              ×
            </button>
          </div>
        )}

        <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] sm:gap-6">
          <section
            id="main"
            className="rounded-2xl bg-white/80 p-3 shadow-sm sm:rounded-3xl sm:p-6"
          >
            <ConfettiBurst active={showConfetti} />
            <WheelCanvas
              entries={active.entries}
              weightedMode={s.weightedMode}
              textSize={s.textSize}
              spinRequest={spinRequest}
              soundEnabled={s.soundEnabled}
              tickSoundEnabled={s.tickSoundEnabled}
              winnerSoundEnabled={s.winnerSoundEnabled}
              reducedMotion={reducedMotion}
              rotation={rotation}
              spinning={spinning}
              canSpin={canSpin}
              onSpin={spin}
              onRotation={setRotation}
              onSpinEnd={onSpinEnd}
            />
            <div className="mx-auto mt-4 max-w-sm space-y-2 sm:mt-5">
              <div className="grid grid-cols-3 gap-2">
                <ToolButton onClick={resetWheel} disabled={spinning}>
                  Reset
                </ToolButton>
                <ToolButton
                  onClick={() => {
                    clearEntries()
                    const entriesSection = document.getElementById('entries-section')
                    if (entriesSection) {
                      entriesSection.scrollIntoView({ behavior: 'smooth' })
                      const inputElement = document.getElementById('new-entry')
                      if (inputElement) {
                        inputElement.focus()
                      }
                    }
                  }}
                  disabled={spinning}
                >
                  Names
                </ToolButton>
                <ToolButton onClick={() => setEmbedOpen(true)} disabled={spinning}>
                  Embed
                </ToolButton>
              </div>
            </div>
            <EmbedModal
              isOpen={embedOpen}
              onClose={() => setEmbedOpen(false)}
              wheelName={active.name}
            />
            <p className="mt-3 text-center text-xs text-[#5c6a72] sm:text-sm">
              {active.entries.length} {active.entries.length === 1 ? 'entry' : 'entries'}
              {s.weightedMode ? ' · weighted mode on' : ''}
            </p>
          </section>

          <div className="space-y-4">
            <section id="entries-section" className="rounded-2xl bg-white p-4 shadow-sm">
              <h2 className="mb-3 text-lg font-bold">Entries</h2>
              <EntryEditor />
              <div className="my-3 flex flex-wrap gap-2">
                <ToolButton onClick={clearEntries}>Clear all</ToolButton>
                <ToolButton onClick={shuffleEntries}>Randomize order</ToolButton>
              </div>
              <ImportExportBar />
              <div className="mt-3">
                <EntryList />
              </div>
            </section>
            <History />
            <Settings />
          </div>
        </div>
      </div>

      {result && (
        <ResultDisplay
          label={result.label}
          onKeep={keepWinner}
        />
      )}
      {shareOpen && <ShareDialog wheel={active} onClose={() => setShareOpen(false)} />}
    </div>
  )
}

function ToolButton({
  children,
  onClick,
  disabled,
  fullWidth,
}: {
  children: string
  onClick: () => void
  disabled?: boolean
  fullWidth?: boolean
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`min-h-11 rounded-xl border border-[#d7cfc2] bg-white px-3 text-sm font-semibold disabled:opacity-50 ${fullWidth ? 'w-full' : ''}`}
    >
      {children}
    </button>
  )
}
