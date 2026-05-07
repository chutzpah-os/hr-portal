'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import CTA from '@/components/ui/CTA'

// ─── Animated particle network ────────────────────────────────────────────────
function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const MAX_DIST = 130
    const NODE_COUNT = 60

    type Node = { x: number; y: number; vx: number; vy: number; r: number }
    let nodes: Node[] = []
    let animId: number

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.5 + 0.5,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.18
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(240,240,250,${alpha * 0.7})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // nodes
      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(240,240,250,0.28)'
        ctx.fill()

        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
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
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.45 }}
    />
  )
}

// ─── Science / tech SVG overlay ───────────────────────────────────────────────

// Each entry: [label, x, y, fontSize, _unused, opPeak, cycleDur, beginOffset]
// Animation: 0 → 0 → opPeak → opPeak → 0 → 0  (appear, hold, disappear, long gap)
const SCIENCE_LABELS: [string, number, number, number, number, number, number, number][] = [
  // ── Physics ──
  ['E = mc²',            310,  78, 11, 0, 0.32, 18,  0.0],
  ['F = ma',             460,  62, 10, 0, 0.28, 20,  3.8],
  ['ΔxΔp ≥ ℏ/2',        440, 148,  9, 0, 0.28, 17,  8.2],
  ['iℏ∂ψ/∂t = Ĥψ',     290, 205,  9, 0, 0.28, 22,  1.5],
  ['∇·E = ρ/ε₀',        470, 295, 10, 0, 0.26, 16, 12.0],
  ['c = λf',             130, 430, 10, 0, 0.28, 15,  6.5],
  ['T = 2π√(L/g)',        80,  85,  9, 0, 0.26, 21, 15.0],
  ['pV = nRT',           460, 530, 10, 0, 0.28, 19,  0.8],
  ['S = k ln Ω',         155, 560, 10, 0, 0.26, 23,  9.3],
  ['a = Gm/r²',          300, 485, 10, 0, 0.28, 17,  4.1],
  ['ℏ',                  405, 525, 13, 0, 0.30, 15, 11.7],
  // ── Mathematics ──
  ['e^(iπ) + 1 = 0',     410, 170, 11, 0, 0.32, 24,  2.0],
  ['∑ n=1→∞ 1/n²',      355, 198,  9, 0, 0.26, 20,  7.5],
  ['∂f/∂x',             480, 185, 10, 0, 0.28, 16, 13.5],
  ['∇²ψ = 0',           100, 505, 10, 0, 0.26, 18,  5.0],
  ['O(n log n)',          88, 525,  9, 0, 0.24, 22, 10.2],
  ['P(A|B)',             150, 485, 10, 0, 0.28, 19,  1.3],
  ['π ≈ 3.14159',       470,  60,  9, 0, 0.24, 16, 14.8],
  ['∫₋∞^∞ e^−x² dx',    285,  62,  9, 0, 0.24, 21,  6.0],
  ['lim x→0 sin(x)/x',  460, 390,  9, 0, 0.24, 17,  2.9],
  // ── Genetics & RNA ──
  ['5′-AUGCGA-3′',       310, 600,  9, 0, 0.28, 20, 11.0],
  ['A-T · G-C',          420, 620,  9, 0, 0.26, 18,  0.5],
  ['mRNA → protein',     230, 510,  9, 0, 0.24, 22,  8.0],
  ['UGA (stop)',          140, 545,  9, 0, 0.24, 15, 15.5],
  ['CRISPR-Cas9',        200, 625,  9, 0, 0.28, 19,  3.5],
  ['p53 ⊣ apoptosis',     95, 570,  8, 0, 0.22, 23,  7.0],
  ['ATCG',               455, 455, 10, 0, 0.26, 16,  1.0],
  // ── Chemistry ──
  ['ΔG = ΔH − TΔS',     385, 460, 10, 0, 0.28, 18,  9.7],
  ['CH₄ + 2O₂ →',      340, 640,  9, 0, 0.24, 20, 13.0],
  ['pH = −log[H⁺]',     255, 650,  9, 0, 0.24, 21,  4.8],
  ['Kₑ=[C][D]/[A][B]',  110, 610,  8, 0, 0.22, 24,  0.2],
  ['ATP → ADP + Pᵢ',    470, 355,  9, 0, 0.24, 17, 12.3],
  ['6CO₂+6H₂O→C₆H₁₂O₆',380,580,  8, 0, 0.20, 23,  5.7],
]

function ScientificOverlay() {
  return (
    <svg
      viewBox="0 0 500 700"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.40 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── Hexagonal grid (top-right area) ── */}
      <g stroke="rgba(240,240,250,0.07)" strokeWidth="0.6" fill="none">
        {[0, 1, 2, 3, 4, 5].map((row) =>
          [0, 1, 2, 3, 4].map((col) => {
            const cx = 280 + col * 38 + (row % 2 === 0 ? 0 : 19)
            const cy = 40 + row * 33
            const r = 18
            const pts = Array.from({ length: 6 }, (_, i) => {
              const a = (Math.PI / 3) * i - Math.PI / 6
              return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`
            }).join(' ')
            return <polygon key={`h-${row}-${col}`} points={pts} />
          })
        )}
      </g>

      {/* ── Orbital ellipses (center) ── */}
      <g transform="translate(340 350)">
        {/* Orbit 1 */}
        <ellipse cx="0" cy="0" rx="110" ry="45" stroke="rgba(240,240,250,0.15)" strokeWidth="0.8" fill="none" transform="rotate(-30)">
          <animateTransform attributeName="transform" type="rotate" from="-30" to="330" dur="18s" repeatCount="indefinite" />
        </ellipse>
        <circle r="3" fill="rgba(240,240,250,0.5)">
          <animateMotion dur="18s" repeatCount="indefinite" path="M 76.2 -39 a 110 45 0 0 1 -152.4 78" />
        </circle>

        {/* Orbit 2 */}
        <ellipse cx="0" cy="0" rx="75" ry="30" stroke="rgba(240,240,250,0.12)" strokeWidth="0.8" fill="none" transform="rotate(60)">
          <animateTransform attributeName="transform" type="rotate" from="60" to="420" dur="11s" repeatCount="indefinite" />
        </ellipse>
        <circle r="2.5" fill="rgba(240,240,250,0.45)">
          <animateMotion dur="11s" repeatCount="indefinite" path="M 37.5 -52 a 75 30 0 0 1 -75 104" />
        </circle>

        {/* Orbit 3 */}
        <ellipse cx="0" cy="0" rx="148" ry="60" stroke="rgba(240,240,250,0.08)" strokeWidth="0.6" fill="none" transform="rotate(15)">
          <animateTransform attributeName="transform" type="rotate" from="15" to="375" dur="28s" repeatCount="indefinite" />
        </ellipse>

        {/* Central node */}
        <circle cx="0" cy="0" r="6" fill="rgba(240,240,250,0.6)">
          <animate attributeName="r" values="6;9;6" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="0" cy="0" r="16" fill="none" stroke="rgba(240,240,250,0.12)" strokeWidth="0.8">
          <animate attributeName="r" values="16;22;16" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.12;0;0.12" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* ── DNA helix (left side) ── */}
      <g transform="translate(60 150)">
        {Array.from({ length: 14 }, (_, i) => {
          const y = i * 28
          const xA = Math.sin((i / 14) * Math.PI * 2) * 22
          const xB = -xA
          return (
            <g key={`dna-${i}`}>
              <line x1={xA} y1={y} x2={xB} y2={y} stroke="rgba(240,240,250,0.12)" strokeWidth="0.8" />
              <circle cx={xA} cy={y} r="2.5" fill="rgba(240,240,250,0.22)" />
              <circle cx={xB} cy={y} r="2.5" fill="rgba(240,240,250,0.16)" />
            </g>
          )
        })}
        {/* backbone curves */}
        <path
          d="M 22,0 C 10,56 -10,112 -22,168 C -10,224 10,280 22,336"
          stroke="rgba(240,240,250,0.18)" strokeWidth="1" fill="none"
        />
        <path
          d="M -22,0 C -10,56 10,112 22,168 C 10,224 -10,280 -22,336"
          stroke="rgba(240,240,250,0.18)" strokeWidth="1" fill="none"
        />
      </g>

      {/* ── Circuit traces (bottom) ── */}
      <g stroke="rgba(240,240,250,0.09)" strokeWidth="0.8" fill="none">
        <path d="M 200 620 L 260 620 L 260 590 L 340 590 L 340 620 L 420 620" />
        <path d="M 240 620 L 240 640 L 310 640 L 310 620" />
        <path d="M 380 620 L 380 640 L 450 640" />
        <circle cx="260" cy="620" r="3" fill="rgba(240,240,250,0.3)" />
        <circle cx="340" cy="620" r="3" fill="rgba(240,240,250,0.3)" />
        <circle cx="310" cy="640" r="2.5" fill="rgba(240,240,250,0.2)" />
        <path d="M 140 580 L 140 540 L 190 540 L 190 510 L 230 510" strokeDasharray="3 3" />
        <circle cx="190" cy="540" r="2" fill="rgba(240,240,250,0.25)" />
      </g>

      {/* ── Scientific formulas — physics, math, chemistry, genetics, RNA ── */}
      {SCIENCE_LABELS.map(([label, x, y, fs, , opPeak, dur, begin]) => (
        <text
          key={`${label}-${x}-${y}`}
          x={x}
          y={y}
          fontSize={fs}
          fill="rgba(240,240,250,1)"
          opacity={0}
          fontFamily="monospace"
          textAnchor="middle"
        >
          {label}
          <animate
            attributeName="opacity"
            values={`0;0;${opPeak};${opPeak};0;0`}
            keyTimes="0;0.28;0.40;0.68;0.80;1"
            calcMode="linear"
            dur={`${dur}s`}
            repeatCount="indefinite"
            begin={`${begin}s`}
          />
        </text>
      ))}

      {/* ── Molecular nodes scatter ── */}
      {[
        [390, 160, 4], [420, 230, 3], [355, 195, 2.5], [480, 180, 3.5],
        [100, 500, 3], [145, 480, 2], [90, 520, 2.5],
      ].map(([cx, cy, r], i) => (
        <g key={`mol-${i}`}>
          <circle cx={cx} cy={cy} r={r} fill="rgba(240,240,250,0.18)" />
          {i < 3 && (
            <line
              x1={cx} y1={cy}
              x2={[420, 355, 480][i]} y2={[230, 195, 180][i]}
              stroke="rgba(240,240,250,0.09)" strokeWidth="0.8"
            />
          )}
        </g>
      ))}
    </svg>
  )
}

// ─── Animation variants ────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, delay, ease: 'easeOut' } },
})

const ABOUT_PARAGRAPHS = [
  "I'm a Problem Solver — someone who turns challenges into opportunities through technology, strategy, and purpose.",
  "Over the past years, I've been working across software development, data systems, and cybersecurity, building solutions that go beyond code — solutions that protect, empower, and transform.",
  "My mission: to impact 1 billion lives by 2035 through innovation, education, and intelligent problem-solving.",
]

export default function Hero() {
  return (
    <section
      id="about"
      className="section-fullscreen relative overflow-hidden"
      style={{ backgroundColor: 'rgb(0, 0, 0)' }}
    >
      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(240,240,250,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          zIndex: 0,
        }}
      />

      {/* Right visual panel */}
      <div
        className="absolute inset-y-0 right-0 hidden md:block"
        style={{ width: '48%', zIndex: 1 }}
      >
        <NetworkCanvas />
        <ScientificOverlay />

        {/* Fades to blend into left content */}
        <div
          className="absolute inset-y-0 left-0 w-64 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgb(0,0,0), transparent)', zIndex: 2 }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgb(0,0,0), transparent)', zIndex: 2 }}
        />
        <div
          className="absolute inset-x-0 top-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgb(0,0,0), transparent)', zIndex: 2 }}
        />
      </div>

      {/* Left content column */}
      <div
        className="inner-left-middle section-content relative"
        style={{ maxWidth: '600px', zIndex: 2 }}
      >
        {/* Eyebrow */}
        <motion.p
          className="text-xs uppercase tracking-[0.3em] mb-6"
          style={{ color: 'var(--white-35)' }}
          initial="hidden"
          animate="visible"
          variants={fadeUp(0)}
        >
          Problem Solver Foundation · 1b2035
        </motion.p>

        {/* Name */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.1)}
            style={{
              color: 'var(--white-100)',
              fontSize: 'clamp(2.25rem, 6vw, 5rem)',
              lineHeight: '95%',
            }}
          >
            Haniel Rolemberg
          </motion.h1>
        </div>

        {/* Title */}
        <div className="overflow-hidden mb-8">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.25)}
            className="text-xl md:text-2xl uppercase tracking-widest"
            style={{ color: 'var(--white-60)' }}
          >
            Problem Solver
          </motion.p>
        </div>

        {/* About paragraphs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.4)}
          className="space-y-4 mb-10 max-w-lg"
        >
          {ABOUT_PARAGRAPHS.map((text, i) => (
            <p
              key={i}
              className="text-sm md:text-base leading-relaxed"
              style={{ color: 'var(--white-70)' }}
            >
              {text}
            </p>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.55)}
          className="flex flex-wrap gap-4"
        >
          <CTA href="/portfolio#projects">View Projects</CTA>
          <a
            href="https://calendly.com/hanielrolemberg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-200"
            style={{ border: '1px solid var(--white-20)', color: 'var(--white-60)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--white-50)'
              e.currentTarget.style.color = 'var(--white-90)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--white-20)'
              e.currentTarget.style.color = 'var(--white-60)'
            }}
          >
            Book a Call
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div
        className="scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 no-print"
        style={{ zIndex: 3, color: 'var(--white-35)' }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12" style={{ backgroundColor: 'var(--white-35)' }} />
      </div>
    </section>
  )
}
