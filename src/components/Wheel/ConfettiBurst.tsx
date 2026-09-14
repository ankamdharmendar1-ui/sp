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
  shape: 'rect' | 'circle' | 'star'
}

const COLORS = ['#e85d4c', '#1B6B6B', '#F2CC8F', '#E07A5F', '#81B29A', '#3D405B', '#FFD166', '#EF476F', '#06D6A0', '#118AB2', '#9B5DE5', '#F15BB5']

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
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    const w = window.innerWidth
    const h = window.innerHeight

    // Generate 220 high-velocity particles popping from top and middle across whole screen
    const particles: Particle[] = Array.from({ length: 220 }, () => {
      const isTopExplosion = Math.random() > 0.3
      return {
        x: isTopExplosion ? Math.random() * w : w / 2 + (Math.random() - 0.5) * 300,
        y: isTopExplosion ? -10 - Math.random() * 100 : h * 0.4,
        vx: (Math.random() - 0.5) * (isTopExplosion ? 8 : 24),
        vy: isTopExplosion ? Math.random() * 8 + 8 : Math.random() * -20 - 6,
        w: 8 + Math.random() * 10,
        h: 10 + Math.random() * 12,
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.4,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        shape: Math.random() > 0.3 ? 'rect' : Math.random() > 0.5 ? 'circle' : 'star',
      }
    })

    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach((p) => {
        p.vy += 0.35 // Fast gravity pull downwards
        p.x += p.vx
        p.y += p.vy
        p.rot += p.vr

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.fillStyle = p.color

        if (p.shape === 'rect') {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
        } else if (p.shape === 'circle') {
          ctx.beginPath()
          ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2)
          ctx.fill()
        } else {
          // Star
          ctx.beginPath()
          for (let i = 0; i < 5; i++) {
            ctx.lineTo(Math.cos(((18 + i * 72) * Math.PI) / 180) * p.w, -Math.sin(((18 + i * 72) * Math.PI) / 180) * p.w)
            ctx.lineTo(Math.cos(((54 + i * 72) * Math.PI) / 180) * (p.w / 2), -Math.sin(((54 + i * 72) * Math.PI) / 180) * (p.w / 2))
          }
          ctx.closePath()
          ctx.fill()
        }

        ctx.restore()
      })
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    const stop = window.setTimeout(() => cancelAnimationFrame(frame), 3000)
    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(stop)
    }
  }, [active])

  if (!active) return null
  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[100] h-full w-full"
      aria-hidden
    />
  )
}

