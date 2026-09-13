import { useWheel } from '../../hooks/useWheelStore'

function formatTime(ts: number): string {
  return new Intl.DateTimeFormat(undefined, {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(ts)
}

export function History() {
  const { active, clearHistory } = useWheel()

  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h2 className="text-lg font-bold">Spin history</h2>
        <button
          type="button"
          className="text-sm font-semibold text-[#9b2226]"
          onClick={clearHistory}
          disabled={!active.history.length}
        >
          Clear
        </button>
      </div>
      {active.history.length === 0 ? (
        <p className="text-sm text-[#5c6a72]">Winners will appear here after you spin.</p>
      ) : (
        <ol className="max-h-56 space-y-2 overflow-auto">
          {active.history.map((item) => (
            <li key={item.id} className="flex items-baseline justify-between gap-3 rounded-lg bg-[#f7f1e6] px-3 py-2">
              <span className="font-semibold">
                <span className="mr-2 text-xs text-[#7b8794]">#{item.spinNumber}</span>
                {item.label}
              </span>
              <time className="shrink-0 text-xs text-[#7b8794]" dateTime={new Date(item.at).toISOString()}>
                {formatTime(item.at)}
              </time>
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}
