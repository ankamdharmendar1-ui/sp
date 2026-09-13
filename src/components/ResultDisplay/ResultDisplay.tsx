interface ResultDisplayProps {
  label: string
  onKeep: () => void
}

export function ResultDisplay({ label, onKeep }: ResultDisplayProps) {
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-[#10232b]/60 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="winner-title"
      onClick={onKeep}
    >
      <div
        className="winner-pop relative flex w-full max-w-lg flex-col items-center justify-between rounded-3xl border-4 border-[#c5b84c] bg-white p-8 text-center shadow-2xl min-h-[340px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="my-auto flex flex-col items-center justify-center space-y-3">
          <h2 id="winner-title" className="break-words text-5xl font-black tracking-tight text-[#10232b] sm:text-6xl">
            {label}
          </h2>
          <p className="text-base font-semibold text-[#5c6a72]">Selected</p>
          <button
            type="button"
            onClick={async () => {
              if (navigator.share) {
                try {
                  await navigator.share({ title: 'Picker Wheel Result', text: `Result: ${label}` })
                } catch {
                  // ignore cancel
                }
              } else {
                await navigator.clipboard.writeText(label)
              }
            }}
            className="mt-1 flex h-10 w-10 items-center justify-center rounded-full text-[#3e4c59] hover:bg-[#f4efe4]"
            aria-label="Share result"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </button>
        </div>

        <div className="mt-6 w-full space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#5c6a72]">
            <span className="inline-block h-3 w-3 rounded-full bg-[#1B6B6B]" />
            Real Picker Wheel
          </div>
          <button
            type="button"
            onClick={onKeep}
            className="min-h-12 w-full rounded-2xl bg-[#ffb703] text-lg font-black tracking-wide text-white shadow-md hover:bg-[#ffa200] active:scale-[0.99]"
          >
            DONE
          </button>
        </div>
      </div>
    </div>
  )
}
