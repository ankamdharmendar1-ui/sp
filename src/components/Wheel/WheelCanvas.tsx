import { useCallback, useEffect, useRef } from 'react'
import type { TextSize, WheelEntry } from '../../types/wheel'
import { colorForIndex, contrastText } from '../../utils/colors'
import { buildSegments, easeOutCubic, rotationForPick } from '../../utils/random'
import { soundEngine } from '../../utils/sound'

interface WheelCanvasProps {
  entries: WheelEntry[]
  weightedMode: boolean
  textSize: TextSize
  spinRequest: { token: number; pick: { pickAngle: number; entry: WheelEntry }; extraTurns: number; duration: number } | null
  soundEnabled: boolean
  tickSoundEnabled: boolean
  winnerSoundEnabled: boolean
  reducedMotion: boolean
  rotation: number
  spinning: boolean
  canSpin: boolean
  onSpin: () => void
  onRotation: (value: number) => void
  onSpinEnd: (winner: WheelEntry) => void
}

const TEXT_PX: Record<TextSize, number> = { sm: 16, md: 22, lg: 28 }

export function WheelCanvas({
  entries,
  weightedMode,
  textSize,
  spinRequest,
  soundEnabled,
  tickSoundEnabled,
  winnerSoundEnabled,
  reducedMotion,
  rotation,
  spinning,
  canSpin,
  onSpin,
  onRotation,
  onSpinEnd,
}: WheelCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const rotorRef = useRef<HTMLDivElement>(null)
  const rotationRef = useRef(rotation)
  const frameRef = useRef(0)
  const lastTickRef = useRef(-1)
  const handledToken = useRef<number | null>(null)
  const onRotationRef = useRef(onRotation)
  const onSpinEndRef = useRef(onSpinEnd)
  useEffect(() => {
    onRotationRef.current = onRotation
    onSpinEndRef.current = onSpinEnd
  }, [onRotation, onSpinEnd])

  const applyRotation = useCallback((value: number) => {
    rotationRef.current = value
    if (rotorRef.current) {
      rotorRef.current.style.transform = `rotate(${value}rad)`
    }
  }, [])

  useEffect(() => {
    applyRotation(rotation)
  }, [applyRotation, rotation])

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return

    const draw = () => {
      const size = Math.min(wrap.clientWidth, wrap.clientHeight)
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = size * dpr
      canvas.height = size * dpr
      canvas.style.width = `${size}px`
      canvas.style.height = `${size}px`
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, size, size)

      const cx = size / 2
      const cy = size / 2
      const radius = size / 2 - 6
      const segments = buildSegments(entries, weightedMode)

      ctx.save()
      ctx.translate(cx, cy)

      if (!segments.length) {
        ctx.beginPath()
        ctx.fillStyle = '#F3E78C'
        ctx.arc(0, 0, radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = '#1a1a1a'
        ctx.font = '600 16px Segoe UI, sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText('Add entries', 0, 4)
      } else {
        segments.forEach((seg) => {
          const fill = colorForIndex(seg.index)
          ctx.beginPath()
          ctx.moveTo(0, 0)
          ctx.arc(0, 0, radius, seg.startAngle, seg.endAngle)
          ctx.closePath()
          ctx.fillStyle = fill
          ctx.fill()
          ctx.strokeStyle = 'rgba(255,255,255,0.35)'
          ctx.lineWidth = entries.length > 40 ? 0.5 : 1.5
          ctx.stroke()

          const span = seg.endAngle - seg.startAngle
          if (span * radius < 16 || entries.length > 80) return

          const mid = (seg.startAngle + seg.endAngle) / 2
          ctx.save()
          ctx.rotate(mid)
          ctx.translate(radius * 0.68, 0)
          ctx.rotate(Math.PI / 2)
          ctx.fillStyle = contrastText(fill)
          ctx.font = `800 ${TEXT_PX[textSize]}px Montserrat, Segoe UI, sans-serif`
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          const maxWidth = Math.max(24, span * radius * 0.72)
          let label = seg.entry.label
          while (ctx.measureText(label).width > maxWidth && label.length > 3) {
            label = `${label.slice(0, -2)}…`
          }
          ctx.fillText(label, 0, 0)
          ctx.restore()
        })
      }

      ctx.restore()
    }

    draw()
    const ro = new ResizeObserver(draw)
    ro.observe(wrap)
    return () => ro.disconnect()
  }, [entries, weightedMode, textSize])

  useEffect(() => {
    if (!spinRequest || handledToken.current === spinRequest.token) return
    handledToken.current = spinRequest.token

    const from = rotationRef.current
    const to = rotationForPick(from, spinRequest.pick.pickAngle, spinRequest.extraTurns)
    const duration = reducedMotion ? 400 : spinRequest.duration
    const start = performance.now()
    const segments = buildSegments(entries, weightedMode)
    if (soundEnabled) soundEngine.spinWhoosh()
    lastTickRef.current = -1
    let lastTickAt = 0

    let finished = false
    const slice = (Math.PI * 2) / Math.max(segments.length, 1)
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const next = from + (to - from) * easeOutCubic(t)
      applyRotation(next)

      if (tickSoundEnabled && soundEnabled && !reducedMotion) {
        const tickIndex = Math.floor(Math.abs(next) / slice)
        if (tickIndex !== lastTickRef.current && now - lastTickAt > 40) {
          lastTickRef.current = tickIndex
          lastTickAt = now
          soundEngine.tick()
        }
      }

      if (t < 1) {
        frameRef.current = requestAnimationFrame(step)
      } else {
        finished = true
        applyRotation(to)
        onRotationRef.current(to)
        if (winnerSoundEnabled && soundEnabled) soundEngine.win()
        onSpinEndRef.current(spinRequest.pick.entry)
      }
    }

    cancelAnimationFrame(frameRef.current)
    frameRef.current = requestAnimationFrame(step)
    return () => {
      cancelAnimationFrame(frameRef.current)
      if (!finished && handledToken.current === spinRequest.token) {
        handledToken.current = null
      }
    }
  }, [spinRequest, reducedMotion, entries, weightedMode, soundEnabled, tickSoundEnabled, winnerSoundEnabled, applyRotation])

  const handleWheelClick = useCallback(() => {
    if (!canSpin || spinning) return
    soundEngine.unlock()
    onSpin()
  }, [canSpin, spinning, onSpin])

  return (
    <div
      ref={wrapRef}
      onClick={handleWheelClick}
      className={`relative mx-auto aspect-square w-full max-w-[560px] ${
        canSpin && !spinning ? 'cursor-pointer' : ''
      }`}
    >
      <div
        ref={rotorRef}
        className="h-full w-full rounded-full shadow-[0_10px_28px_rgba(0,0,0,0.18)] will-change-transform"
        style={{ transform: `rotate(${rotation}rad)` }}
      >
        <canvas ref={canvasRef} className="block h-full w-full rounded-full" role="img" aria-label="Random picker wheel" />
      </div>
      <HubButton spinning={spinning} disabled={!canSpin} onClick={handleWheelClick} />
    </div>
  )
}

function HubButton({
  spinning,
  disabled,
  onClick,
}: {
  spinning: boolean
  disabled: boolean
  onClick: () => void
}) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <span
        className="absolute left-1/2 top-[38%] h-0 w-0 -translate-x-1/2 border-x-[13px] border-b-[20px] border-x-transparent border-b-[#1a1a1a]"
        aria-hidden
      />
      <button
        type="button"
        onClick={onClick}
        disabled={disabled || spinning}
        className="pointer-events-auto absolute left-1/2 top-1/2 grid h-[19%] min-h-14 w-[19%] min-w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#1a1a1a] text-[clamp(11px,2.4vw,15px)] font-extrabold tracking-wide text-white shadow-[0_4px_10px_rgba(0,0,0,0.28)] disabled:opacity-50"
        aria-live="polite"
      >
        {spinning ? '…' : 'SPIN'}
      </button>
    </div>
  )
}
