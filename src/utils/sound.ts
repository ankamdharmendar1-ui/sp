export class SoundEngine {
  private ctx: AudioContext | null = null

  unlock(): void {
    const ctx = this.getContext()
    if (!ctx) return
    if (ctx.state === 'suspended') {
      void ctx.resume()
    }
    try {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      gain.gain.value = 0.001
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start(0)
      osc.stop(0.001)
    } catch {
      // ignore unlock error
    }
  }

  tick(): void {
    try {
      const ctx = this.getContext()
      if (!ctx) return
      const t = ctx.currentTime
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      // High-pitched woodblock / mechanical pointer click sound
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(800, t)
      osc.frequency.exponentialRampToValueAtTime(1800, t + 0.005)
      osc.frequency.exponentialRampToValueAtTime(300, t + 0.025)

      gain.gain.setValueAtTime(0.3, t)
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.03)

      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start(t)
      osc.stop(t + 0.035)
    } catch {
      // Audio not available
    }
  }

  spinWhoosh(): void {
    try {
      const ctx = this.getContext()
      if (!ctx) return
      const t = ctx.currentTime
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(320, t)
      osc.frequency.exponentialRampToValueAtTime(120, t + 0.4)

      gain.gain.setValueAtTime(0.2, t)
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4)

      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start(t)
      osc.stop(t + 0.42)
    } catch {
      // Audio not available
    }
  }

  win(): void {
    try {
      const ctx = this.getContext()
      if (!ctx) return
      const t = ctx.currentTime
      // Fanfare arpeggio: C5, E5, G5, C6
      ;[523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'triangle'
        osc.frequency.value = freq
        const start = t + i * 0.1
        const duration = i === 3 ? 0.6 : 0.25
        gain.gain.setValueAtTime(0.25, start)
        gain.gain.exponentialRampToValueAtTime(0.001, start + duration)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start(start)
        osc.stop(start + duration + 0.05)
      })
    } catch {
      // Audio not available
    }
  }

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null
    if (!this.ctx) {
      const Ctor =
        window.AudioContext ||
        (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
      if (!Ctor) return null
      this.ctx = new Ctor()
    }
    if (this.ctx.state === 'suspended') {
      void this.ctx.resume()
    }
    return this.ctx
  }
}

export const soundEngine = new SoundEngine()
