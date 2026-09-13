import { useState } from 'react'
import { useWheel } from '../../hooks/useWheelStore'

export function EntryEditor() {
  const { addEntry, appendEntriesFromText, replaceEntriesFromText, active } = useWheel()
  const [label, setLabel] = useState('')
  const [weight, setWeight] = useState('1')
  const [bulk, setBulk] = useState('')

  return (
    <div className="space-y-3">
      <form
        className="flex flex-col gap-2 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault()
          addEntry(label, Number(weight))
          setLabel('')
        }}
      >
        <label className="sr-only" htmlFor="new-entry">
          New entry
        </label>
        <input
          id="new-entry"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Add an item"
          className="min-h-11 flex-1 rounded-xl border border-[#d7cfc2] bg-white px-3"
        />
        {active.settings.weightedMode && (
          <input
            aria-label="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            type="number"
            min={0}
            step="any"
            className="min-h-11 w-24 rounded-xl border border-[#d7cfc2] bg-white px-3"
          />
        )}
        <button type="submit" className="min-h-11 rounded-xl bg-[#10232b] px-4 font-semibold text-white">
          Add
        </button>
      </form>
      <label className="block text-sm font-medium text-[#3e4c59]" htmlFor="bulk-entries">
        Paste a list (one per line). Optional weights: Alice - 10
      </label>
      <textarea
        id="bulk-entries"
        value={bulk}
        onChange={(e) => setBulk(e.target.value)}
        rows={4}
        className="w-full rounded-xl border border-[#d7cfc2] bg-white p-3 font-mono text-sm"
        placeholder={'Alice\nBob\nCharlie'}
      />
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded-lg border border-[#d7cfc2] bg-white px-3 py-2 text-sm font-semibold"
          onClick={() => {
            appendEntriesFromText(bulk)
            setBulk('')
          }}
        >
          Add list
        </button>
        <button
          type="button"
          className="rounded-lg border border-[#d7cfc2] bg-white px-3 py-2 text-sm font-semibold"
          onClick={() => {
            replaceEntriesFromText(bulk)
            setBulk('')
          }}
        >
          Replace all
        </button>
      </div>
    </div>
  )
}
