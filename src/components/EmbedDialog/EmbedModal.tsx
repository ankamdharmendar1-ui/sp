import { useState } from 'react'

interface EmbedModalProps {
  isOpen: boolean
  onClose: () => void
  wheelName: string
}

export function EmbedModal({ isOpen, onClose, wheelName }: EmbedModalProps) {
  const [copied, setCopied] = useState(false)
  const currentUrl = window.location.href

  const iframeCode = `<iframe src="${currentUrl}" width="100%" height="700" style="border:0; border-radius:16px; overflow:hidden;" title="${wheelName} - Real Picker Wheel" loading="lazy"></iframe>\n<p style="font-size:12px; text-align:center; margin-top:8px;">Powered by <a href="https://realpickerwheel.com" target="_blank" rel="noopener">Real Picker Wheel</a></p>`

  if (!isOpen) return null

  const handleCopy = () => {
    navigator.clipboard.writeText(iframeCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl border border-[#d7cfc2]">
        <div className="flex items-center justify-between border-b border-[#e4d9c8] pb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <h3 className="text-xl font-extrabold text-[#10232b]">Embed Wheel Widget</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-[#5c6a72] hover:bg-[#f4efe4] hover:text-[#10232b] font-bold"
          >
            ✕
          </button>
        </div>

        <div className="my-5 space-y-3">
          <p className="text-sm font-semibold text-[#3e4c59]">
            Copy and paste this code snippet into your blog, school website, or HTML page to embed this live wheel:
          </p>
          <div className="relative">
            <textarea
              readOnly
              value={iframeCode}
              rows={5}
              className="w-full rounded-2xl border border-[#d7cfc2] bg-[#fbf6ee] p-3 text-xs font-mono text-[#10232b] focus:outline-none focus:ring-2 focus:ring-[#1B6B6B]"
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 pt-2">
          <span className="text-xs font-bold text-[#1B6B6B]">Includes free backlink attribution</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-[#d7cfc2] px-4 py-2 text-xs font-bold text-[#3e4c59] hover:bg-[#f4efe4]"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="rounded-xl bg-[#1B6B6B] px-5 py-2 text-xs font-extrabold text-white shadow-md hover:bg-[#155353] transition-colors"
            >
              {copied ? '✓ Copied!' : 'Copy Code'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
