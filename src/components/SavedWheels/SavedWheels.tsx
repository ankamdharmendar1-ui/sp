import { useState } from 'react'
import { useWheel } from '../../hooks/useWheelStore'

export function SavedWheels() {
  const { wheels, active, switchWheel, createWheel, duplicateWheel, deleteWheel, renameWheel } = useWheel()
  const [editingId, setEditingId] = useState<string | null>(null)
  const [name, setName] = useState('')

  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg font-bold">Saved wheels</h2>
        <div className="flex gap-2">
          <button type="button" className="rounded-lg bg-[#10232b] px-3 py-2 text-sm font-semibold text-white" onClick={createWheel}>
            New
          </button>
          <button type="button" className="rounded-lg border border-[#d7cfc2] px-3 py-2 text-sm font-semibold" onClick={duplicateWheel}>
            Duplicate
          </button>
        </div>
      </div>
      <ul className="space-y-2">
        {wheels.map((wheel) => (
          <li key={wheel.id} className={`rounded-xl p-2 ${wheel.id === active.id ? 'bg-[#e8f3f1]' : 'bg-[#f7f1e6]'}`}>
            {editingId === wheel.id ? (
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  renameWheel(wheel.id, name)
                  setEditingId(null)
                }}
              >
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="min-h-10 flex-1 rounded-lg border border-[#d7cfc2] px-2"
                  aria-label="Wheel name"
                />
                <button type="submit" className="text-sm font-semibold">
                  Save
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="min-h-10 flex-1 text-left font-semibold"
                  onClick={() => switchWheel(wheel.id)}
                >
                  {wheel.name}
                  <span className="ml-2 text-xs font-normal text-[#7b8794]">{wheel.entries.length} entries</span>
                </button>
                <button
                  type="button"
                  className="text-sm font-semibold"
                  onClick={() => {
                    setEditingId(wheel.id)
                    setName(wheel.name)
                  }}
                >
                  Rename
                </button>
                <button type="button" className="text-sm font-semibold text-[#9b2226]" onClick={() => deleteWheel(wheel.id)}>
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
