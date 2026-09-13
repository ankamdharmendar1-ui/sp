import { useWheel } from '../../hooks/useWheelStore'

export function EntryList() {
  const { active, updateEntry, removeEntry } = useWheel()

  if (!active.entries.length) {
    return <p className="text-sm text-[#5c6a72]">No entries yet. Add names or options to fill the wheel.</p>
  }

  return (
    <ul className="max-h-72 space-y-2 overflow-auto pr-1" aria-label="Wheel entries">
      {active.entries.map((entry, index) => (
        <li key={entry.id} className="flex items-center gap-1.5 rounded-xl bg-[#f7f1e6] p-2 min-w-0">
          <span className="w-5 shrink-0 text-center text-xs font-bold text-[#7b8794]">{index + 1}</span>
          <span className="h-4 w-4 shrink-0 rounded-full" style={{ background: entry.color }} aria-hidden />
          <label className="sr-only" htmlFor={`entry-${entry.id}`}>
            Label
          </label>
          <input
            id={`entry-${entry.id}`}
            value={entry.label}
            onChange={(e) => updateEntry(entry.id, { label: e.target.value })}
            className="min-h-10 min-w-0 flex-1 rounded-lg border border-transparent bg-white px-2 text-sm"
          />
          {active.settings.weightedMode && (
            <input
              aria-label={`Weight for ${entry.label}`}
              type="number"
              min={0}
              step="any"
              value={entry.weight}
              onChange={(e) => updateEntry(entry.id, { weight: Number(e.target.value) })}
              className="h-10 w-14 shrink-0 rounded-lg border border-[#d7cfc2] bg-white px-1.5 text-xs sm:w-20 sm:px-2 sm:text-sm"
            />
          )}
          <button
            type="button"
            className="shrink-0 rounded-lg px-2 py-2 text-xs font-semibold text-[#9b2226] sm:text-sm"
            onClick={() => removeEntry(entry.id)}
            aria-label={`Delete ${entry.label}`}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}
