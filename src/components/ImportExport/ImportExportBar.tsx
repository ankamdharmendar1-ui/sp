import { useState } from 'react'
import { downloadFile, toCsv, toTxt } from '../../utils/importExport'
import { useWheel } from '../../hooks/useWheelStore'

export function ImportExportBar() {
  const { active, appendEntriesFromText, replaceEntriesFromText } = useWheel()
  const [message, setMessage] = useState('')

  const copyAll = async () => {
    await navigator.clipboard.writeText(toTxt(active.entries, active.settings.weightedMode))
    setMessage('Copied all entries.')
  }

  const paste = async () => {
    const text = await navigator.clipboard.readText()
    appendEntriesFromText(text)
    setMessage('Pasted entries from clipboard.')
  }

  const onFile = async (file: File) => {
    const text = await file.text()
    replaceEntriesFromText(text)
    setMessage(`Imported ${file.name}.`)
  }

  return (
    <div className="flex flex-wrap gap-1.5 sm:gap-2">
      <button type="button" className="rounded-lg border border-[#d7cfc2] bg-white px-2.5 py-1.5 text-xs font-semibold sm:px-3 sm:py-2 sm:text-sm" onClick={copyAll}>
        Copy all
      </button>
      <button type="button" className="rounded-lg border border-[#d7cfc2] bg-white px-2.5 py-1.5 text-xs font-semibold sm:px-3 sm:py-2 sm:text-sm" onClick={() => void paste()}>
        Paste
      </button>
      <button
        type="button"
        className="rounded-lg border border-[#d7cfc2] bg-white px-2.5 py-1.5 text-xs font-semibold sm:px-3 sm:py-2 sm:text-sm"
        onClick={() => downloadFile(`${active.name}.txt`, toTxt(active.entries, active.settings.weightedMode), 'text/plain')}
      >
        Export TXT
      </button>
      <button
        type="button"
        className="rounded-lg border border-[#d7cfc2] bg-white px-2.5 py-1.5 text-xs font-semibold sm:px-3 sm:py-2 sm:text-sm"
        onClick={() => downloadFile(`${active.name}.csv`, toCsv(active.entries), 'text/csv')}
      >
        Export CSV
      </button>
      <label className="rounded-lg border border-[#d7cfc2] bg-white px-2.5 py-1.5 text-xs font-semibold sm:px-3 sm:py-2 sm:text-sm">
        Import file
        <input
          type="file"
          accept=".txt,.csv,text/plain,text/csv"
          className="sr-only"
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (file) void onFile(file)
            e.target.value = ''
          }}
        />
      </label>
      {message && <p className="w-full text-xs text-[#1B6B6B] sm:text-sm">{message}</p>}
    </div>
  )
}
