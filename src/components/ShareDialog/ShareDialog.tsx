import { useState } from 'react'
import { shareUrlFor } from '../../utils/share'
import type { WheelConfig } from '../../types/wheel'

interface ShareDialogProps {
  wheel: WheelConfig
  onClose: () => void
}

export function ShareDialog({ wheel, onClose }: ShareDialogProps) {
  const url = shareUrlFor(wheel)
  const [copied, setCopied] = useState(false)
  const tooLong = url.length > 1800

  return (
    <div className="fixed inset-0 z-40 grid place-items-center bg-[#10232b]/55 p-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-lg rounded-3xl bg-[#fffaf3] p-6 shadow-2xl">
        <h2 className="text-xl font-bold">Share this wheel</h2>
        <p className="mt-2 text-sm text-[#5c6a72]">
          Anyone with the link can load these entries in their browser. Nothing is uploaded to a server.
        </p>
        {tooLong && (
          <p className="mt-2 text-sm text-[#9b2226]">
            This wheel has a lot of data. Some browsers may truncate very long links — consider exporting a file instead.
          </p>
        )}
        <textarea readOnly value={url} className="mt-4 h-28 w-full rounded-xl border border-[#d7cfc2] p-3 text-xs" />
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            className="flex-1 rounded-xl bg-[#1B6B6B] py-3 font-bold text-white"
            onClick={async () => {
              await navigator.clipboard.writeText(url)
              setCopied(true)
            }}
          >
            {copied ? 'Copied' : 'Copy link'}
          </button>
          <button type="button" className="flex-1 rounded-xl border border-[#d7cfc2] py-3 font-bold" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
