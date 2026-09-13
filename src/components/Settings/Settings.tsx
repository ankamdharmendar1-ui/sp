import type { ReactNode } from 'react'
import type { BackgroundTheme, TextSize } from '../../types/wheel'
import { useWheel } from '../../hooks/useWheelStore'

const SELECT = 'min-h-11 w-full rounded-xl border border-[#d7cfc2] bg-white px-3'

export function Settings() {
  const { active, updateSettings } = useWheel()
  const s = active.settings

  return (
    <section className="space-y-4 rounded-2xl bg-white p-4 shadow-sm">
      <h2 className="text-lg font-bold">Wheel customization</h2>
      <Field label="Page background">
        <select
          className={SELECT}
          value={s.background}
          onChange={(e) => updateSettings({ background: e.target.value as BackgroundTheme })}
        >
          <option value="cream">Cream</option>
          <option value="slate">Slate</option>
          <option value="night">Night</option>
          <option value="mint">Mint</option>
        </select>
      </Field>
      <Field label="Text size">
        <select className={SELECT} value={s.textSize} onChange={(e) => updateSettings({ textSize: e.target.value as TextSize })}>
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </Field>
      <Field label={`Spin duration (${Math.round(s.spinDurationMs / 1000)}s)`}>
        <input
          type="range"
          min={1500}
          max={8000}
          step={100}
          value={s.spinDurationMs}
          onChange={(e) => updateSettings({ spinDurationMs: Number(e.target.value) })}
          className="w-full"
        />
      </Field>
      <Toggle
        label="Weighted probabilities"
        checked={s.weightedMode}
        onChange={(checked) => updateSettings({ weightedMode: checked })}
      />
      <Toggle label="Sound" checked={s.soundEnabled} onChange={(checked) => updateSettings({ soundEnabled: checked })} />
      <Toggle
        label="Tick while spinning"
        checked={s.tickSoundEnabled}
        onChange={(checked) => updateSettings({ tickSoundEnabled: checked })}
      />
      <Toggle
        label="Winner sound"
        checked={s.winnerSoundEnabled}
        onChange={(checked) => updateSettings({ winnerSoundEnabled: checked })}
      />
      <Toggle
        label="Confetti"
        checked={s.confettiEnabled}
        onChange={(checked) => updateSettings({ confettiEnabled: checked })}
      />
      <Toggle
        label="Remove winner after each spin"
        checked={s.removeWinnerAfterSpin}
        onChange={(checked) => updateSettings({ removeWinnerAfterSpin: checked })}
      />
    </section>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block text-sm font-medium">
      <span className="mb-1 block">{label}</span>
      {children}
    </label>
  )
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string
  checked: boolean
  onChange: (value: boolean) => void
}) {
  return (
    <label className="flex items-center justify-between gap-3 text-sm font-medium">
      {label}
      <input type="checkbox" checked={checked} className="h-5 w-5 accent-[#1B6B6B]" onChange={(e) => onChange(e.target.checked)} />
    </label>
  )
}
