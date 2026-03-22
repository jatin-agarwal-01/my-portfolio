import { useEffect, useRef } from 'react'

// Lightweight smoke background optimized for low-end machines.
// Key constraints: <=25 particles, capped at 30fps, no heavy blur/shadows, no DPR scaling.

export default function SmokeBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let width = window.innerWidth
    let height = window.innerHeight
    // Do NOT use devicePixelRatio scaling.
    canvas.width = width
    canvas.height = height
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    // no debug draw; keep canvas clean

    const MAX_PARTICLES = 25
    const particles = []

    const random = (min, max) => min + Math.random() * (max - min)

    const createParticle = () => ({
      x: Math.random() * width,
      y: height + random(10, 80),
      vx: random(-10, 10), // slight horizontal drift (px/sec)
      vy: -random(20, 80), // upward speed (px/sec)
      r: random(10, 40), // particle radius px
      alpha: random(0.15, 0.35), // much higher for visibility
    })

    const resetParticle = (p) => {
      p.x = Math.random() * width
      p.y = height + random(10, 80)
      p.vx = random(-10, 10)
      p.vy = -random(20, 80)
      p.r = random(10, 40)
      p.alpha = random(0.15, 0.35)
    }

    for (let i = 0; i < MAX_PARTICLES; i += 1) particles.push(createParticle())

    const FRAME_MS = 1000 / 30 // cap at 30fps
    let lastTime = performance.now()
    let acc = 0
    let rafId = null
    let running = true

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
    }

    const update = (dt) => {
      // dt in ms
      const s = dt / 1000
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i]
        p.x += p.vx * s
        p.y += p.vy * s

        // small horizontal wrap-around
        if (p.x < -50) p.x = width + 50
        if (p.x > width + 50) p.x = -50

        // if particle moved off top, reset from bottom
        if (p.y + p.r < -40) resetParticle(p)
      }
    }

    const draw = () => {
      // Clear fully each frame to keep GPU/CPU predictable.
      ctx.clearRect(0, 0, width, height)

      // draw particles with radial gradient for soft, foggy smoke
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i]
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r)
        grad.addColorStop(0, `rgba(220,228,236,${p.alpha})`)
        grad.addColorStop(0.6, `rgba(220,228,236,${p.alpha * 0.5})`)
        grad.addColorStop(1, 'rgba(220,228,236,0)')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const tick = (now) => {
      if (!running) return
      const delta = now - lastTime
      lastTime = now
      acc += delta
      // Only update/draw when enough time has accumulated to keep <=30fps
      if (acc >= FRAME_MS) {
        // allow multiple steps when switching back from hidden or lag
        while (acc >= FRAME_MS) {
          update(FRAME_MS)
          acc -= FRAME_MS
        }
        draw()
      }
      rafId = window.requestAnimationFrame(tick)
    }

    // Visibility handling: stop animation when tab hidden to save CPU
    const handleVisibility = () => {
      if (document.visibilityState === 'hidden') {
        running = false
        if (rafId) {
          window.cancelAnimationFrame(rafId)
          rafId = null
        }
      } else {
        if (!running) {
          running = true
          lastTime = performance.now()
          acc = 0
          rafId = window.requestAnimationFrame(tick)
        }
      }
    }

    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', handleVisibility)

    lastTime = performance.now()
    rafId = window.requestAnimationFrame(tick)

    return () => {
      running = false
      if (rafId) window.cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ opacity: 0.35, mixBlendMode: 'screen' }}
    />
  )
}
