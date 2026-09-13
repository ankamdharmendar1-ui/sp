import { useEffect, useRef } from 'react'

interface ConfettiBurstProps {
  active: boolean
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  w: number
  h: number
  rot: number
  vr: number
  color: string
}

const COLORS = ['#e85d4c', '#1B6B6B', '#F2CC8F', '#E07A5F', '#81B29A', '#3D405B']

export function ConfettiBurst({ active }: ConfettiBurstProps) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!active) return
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let frame = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    const w = canvas.offsetWidth
    const h = canvas.offsetHeight
    const particles: Particle[] = Array.from({ length: 90 }, () => ({
      x: w / 2,
      y: h / 3,
      vx: (Math.random() - 0.5) * 14,
      vy: Math.random() * -12 - 4,
      w: 6 + Math.random() * 6,
      h: 8 + Math.random() * 8,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }))

    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach((p) => {
        p.vy += 0.28
        p.x += p.vx
        p.y += p.vy
        p.rot += p.vr
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
        ctx.restore()
      })
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    const stop = window.setTimeout(() => cancelAnimationFrame(frame), 2200)
    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(stop)
    }
  }, [active])

  if (!active) return null
  return (
    <canvas
      ref={ref}
      className="pointer-events-none absolute inset-0 z-20 h-full w-full"
      aria-hidden
    />
  )
}
