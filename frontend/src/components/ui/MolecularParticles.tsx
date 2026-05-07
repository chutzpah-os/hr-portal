'use client'

import { useRef, useEffect } from 'react'

const N = 90          // particle count
const MAX_SPEED = 1.4

type Phase = 'drift' | 'assemble' | 'hold' | 'scatter'

interface P { x: number; y: number; vx: number; vy: number; tx: number; ty: number; r: number }

// ── Target generators ─────────────────────────────────────────────────────────

function hexTargets(cx: number, cy: number): [number, number][] {
  const pts: [number, number][] = [[cx, cy]]
  const rings = [6, 12, 18, 24, 30]
  for (let ri = 0; ri < rings.length && pts.length < N; ri++) {
    const count = rings[ri]
    for (let i = 0; i < count && pts.length < N; i++) {
      const a = (i / count) * Math.PI * 2
      const r = (ri + 1) * 26
      pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)])
    }
  }
  return pts
}

function textTargets(text: string, cx: number, cy: number): [number, number][] {
  const oc = document.createElement('canvas')
  oc.width = 400; oc.height = 120
  const c = oc.getContext('2d')
  if (!c) return hexTargets(cx, cy)
  c.fillStyle = 'white'
  c.font = 'bold 80px monospace'
  c.textAlign = 'center'
  c.textBaseline = 'middle'
  c.fillText(text, 200, 60)
  const d = c.getImageData(0, 0, 400, 120)
  const pts: [number, number][] = []
  const step = 7
  for (let y = 0; y < 120; y += step)
    for (let x = 0; x < 400; x += step)
      if (d.data[(y * 400 + x) * 4 + 3] > 120)
        pts.push([cx + (x - 200) * 0.85, cy + (y - 60) * 0.85])
  // Shuffle
  for (let i = pts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pts[i], pts[j]] = [pts[j], pts[i]]
  }
  while (pts.length < N) pts.push([cx + (Math.random() - 0.5) * 200, cy + (Math.random() - 0.5) * 100])
  return pts.slice(0, N)
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function MolecularParticles() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let phase: Phase = 'drift'
    let tick = 0
    let formIdx = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()

    const particles: P[] = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * MAX_SPEED,
      vy: (Math.random() - 0.5) * MAX_SPEED,
      tx: 0, ty: 0,
      r: Math.random() * 1.8 + 0.8,
    }))

    const formations = () => {
      const cx = canvas.width / 2
      const cy = canvas.height / 2
      const f = formIdx % 4
      if (f === 0) return hexTargets(cx, cy)
      if (f === 1) return textTargets('AI', cx, cy)
      if (f === 2) return textTargets('DNA', cx, cy)
      return textTargets('1b', cx, cy)
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      tick++

      // State machine
      if (phase === 'drift' && tick > 320 + Math.random() * 200) {
        phase = 'assemble'; tick = 0
        const targets = formations()
        particles.forEach((p, i) => { const t = targets[i]; p.tx = t[0]; p.ty = t[1] })
      } else if (phase === 'assemble' && tick > 200) {
        phase = 'hold'; tick = 0
      } else if (phase === 'hold' && tick > 220) {
        phase = 'scatter'; tick = 0; formIdx++
      } else if (phase === 'scatter' && tick > 90) {
        phase = 'drift'; tick = 0
        particles.forEach(p => { p.vx = (Math.random() - 0.5) * 3.5; p.vy = (Math.random() - 0.5) * 3.5 })
      }

      for (const p of particles) {
        if (phase === 'assemble' || phase === 'hold') {
          const str = phase === 'hold' ? 0.14 : 0.055
          p.vx += (p.tx - p.x) * str
          p.vy += (p.ty - p.y) * str
          p.vx *= 0.82; p.vy *= 0.82
        } else if (phase === 'scatter') {
          p.vx *= 1.06; p.vy *= 1.06
        } else {
          // Drift: soft brownian + wall bounce
          p.vx += (Math.random() - 0.5) * 0.12
          p.vy += (Math.random() - 0.5) * 0.12
          const spd = Math.hypot(p.vx, p.vy)
          if (spd > MAX_SPEED) { p.vx *= MAX_SPEED / spd; p.vy *= MAX_SPEED / spd }
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        }
        p.x += p.vx; p.y += p.vy

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(240,240,250,0.22)'
        ctx.fill()
      }

      // Bonds between nearby particles during assembly/hold
      if (phase === 'assemble' || phase === 'hold') {
        const MAX_D = 22
        for (let i = 0; i < N; i++) {
          for (let j = i + 1; j < N; j++) {
            const dx = particles[i].x - particles[j].x
            const dy = particles[i].y - particles[j].y
            const d = Math.hypot(dx, dy)
            if (d < MAX_D) {
              ctx.beginPath()
              ctx.moveTo(particles[i].x, particles[i].y)
              ctx.lineTo(particles[j].x, particles[j].y)
              ctx.strokeStyle = `rgba(240,240,250,${(1 - d / MAX_D) * 0.12})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    return () => { cancelAnimationFrame(animId); ro.disconnect() }
  }, [])

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.35 }}
    />
  )
}
