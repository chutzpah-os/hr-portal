'use client'

import { useRef, useEffect } from 'react'

const RUNGS = 28
const TURNS = 2
const RADIUS = 58
const HEIGHT = 370
const SEQ = 'ATGCTAGCATGCGCATCGTAGCATGCAT'

// Colours per base type
const COL_A = '80,205,242'   // cyan  – A/T pair
const COL_B = '255,165,80'   // amber – G/C pair

export default function DNACanvas3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let autoY = 0
    let userY = 0
    const tiltX = 0.22
    let dragging = false
    let lastX = 0
    let animId: number

    // PointerEvents handle both mouse and touch
    const onDown = (e: PointerEvent) => {
      dragging = true
      lastX = e.clientX
      canvas.setPointerCapture(e.pointerId)
    }
    const onMove = (e: PointerEvent) => {
      if (!dragging) return
      userY += (e.clientX - lastX) * 0.013
      lastX = e.clientX
    }
    const onUp = () => { dragging = false }

    canvas.addEventListener('pointerdown', onDown)
    canvas.addEventListener('pointermove', onMove)
    canvas.addEventListener('pointerup', onUp)
    canvas.addEventListener('pointercancel', onUp)

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const project = (x: number, y: number, z: number) => {
      const ry = autoY + userY
      const x1 = x * Math.cos(ry) - z * Math.sin(ry)
      const z1 = x * Math.sin(ry) + z * Math.cos(ry)
      const y1 = y * Math.cos(tiltX) - z1 * Math.sin(tiltX)
      const z2 = y * Math.sin(tiltX) + z1 * Math.cos(tiltX)
      const fov = Math.min(canvas.width, canvas.height) * 1.15
      const s = fov / (fov + z2 + 180)
      return { sx: canvas.width / 2 + x1 * s, sy: canvas.height / 2 + y1 * s, s, z: z2 }
    }

    type Pt = ReturnType<typeof project>

    const draw = () => {
      resize()
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      if (!dragging) autoY += 0.007

      const A: Pt[] = [], B: Pt[] = []
      const rungs: { a: Pt; b: Pt; base: string; mz: number }[] = []

      for (let i = 0; i < RUNGS; i++) {
        const t = i / (RUNGS - 1)
        const ang = t * Math.PI * 2 * TURNS
        const yp = (t - 0.5) * HEIGHT
        const pa = project(RADIUS * Math.cos(ang), yp, RADIUS * Math.sin(ang))
        const pb = project(RADIUS * Math.cos(ang + Math.PI), yp, RADIUS * Math.sin(ang + Math.PI))
        A.push(pa); B.push(pb)
        rungs.push({ a: pa, b: pb, base: SEQ[i % SEQ.length], mz: (pa.z + pb.z) / 2 })
      }

      // Backbones
      ctx.lineWidth = 1.8
      for (let i = 0; i < RUNGS - 1; i++) {
        ctx.beginPath()
        ctx.moveTo(A[i].sx, A[i].sy)
        ctx.lineTo(A[i + 1].sx, A[i + 1].sy)
        ctx.strokeStyle = `rgba(${COL_A},0.28)`
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(B[i].sx, B[i].sy)
        ctx.lineTo(B[i + 1].sx, B[i + 1].sy)
        ctx.strokeStyle = `rgba(${COL_B},0.28)`
        ctx.stroke()
      }

      // Rungs — painter's order (back → front)
      const sorted = [...rungs].sort((a, b) => a.mz - b.mz)
      for (const rung of sorted) {
        const depth = Math.max(0.15, Math.min(1, 0.25 + rung.a.s * 0.9))
        const isAT = rung.base === 'A' || rung.base === 'T'
        const cA = isAT ? COL_A : COL_B
        const cB = isAT ? COL_B : COL_A

        // Rung bar
        ctx.beginPath()
        ctx.moveTo(rung.a.sx, rung.a.sy)
        ctx.lineTo(rung.b.sx, rung.b.sy)
        ctx.strokeStyle = `rgba(200,200,230,${depth * 0.14})`
        ctx.lineWidth = 0.9
        ctx.stroke()

        // H-bond dots (3 in centre)
        const dx = (rung.b.sx - rung.a.sx) / 4
        const dy = (rung.b.sy - rung.a.sy) / 4
        for (let d = 1; d <= 3; d++) {
          ctx.beginPath()
          ctx.arc(rung.a.sx + dx * d, rung.a.sy + dy * d, 1.4, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(10,10,15,${depth * 0.22})`
          ctx.fill()
        }

        const r = 4 * rung.a.s
        // Glow + node A
        ctx.beginPath()
        ctx.arc(rung.a.sx, rung.a.sy, r * 2.4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${cA},${depth * 0.10})`
        ctx.fill()
        ctx.beginPath()
        ctx.arc(rung.a.sx, rung.a.sy, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${cA},${depth * 0.50})`
        ctx.fill()

        // Glow + node B
        ctx.beginPath()
        ctx.arc(rung.b.sx, rung.b.sy, r * 2.4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${cB},${depth * 0.10})`
        ctx.fill()
        ctx.beginPath()
        ctx.arc(rung.b.sx, rung.b.sy, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${cB},${depth * 0.50})`
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
      canvas.removeEventListener('pointerdown', onDown)
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerup', onUp)
      canvas.removeEventListener('pointercancel', onUp)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full cursor-grab active:cursor-grabbing"
      style={{ touchAction: 'none', display: 'block' }}
    />
  )
}
