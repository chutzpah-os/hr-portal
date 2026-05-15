'use client'

import SectionWrapper from '@/components/ui/SectionWrapper'

const CONTACT_ITEMS = [
  {
    key: 'calendly',
    label: 'Book a Meeting',
    value: 'calendly.com/hanielrolemberg',
    href: 'https://calendly.com/hanielrolemberg',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    key: 'email',
    label: 'Email',
    value: 'contact@hanielrolemberg.com',
    href: 'mailto:contact@hanielrolemberg.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/hanielrolemberg',
    href: 'https://linkedin.com/in/hanielrolemberg',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

// ── Information theory / signal / wave formulas ────────────────────────────────
// [label, x, y, fontSize, opMin, opMax, dur, beginDelay]
// [label, x, y, fontSize, _unused, opPeak, cycleDur, beginOffset]
const SIGNAL_FORMULAS: [string, number, number, number, number, number, number, number][] = [
  ['H(X) = −∑ p log₂p',        200,  48, 10, 0, 0.30, 18,  0.0],
  ['C = B log₂(1 + S/N)',        62, 115, 9.5,0, 0.26, 20,  5.3],
  ['I(X;Y) = H(X) − H(X|Y)',   342, 192,  9, 0, 0.24, 22, 11.0],
  ['BER = Q(√(2Eᵦ/N₀))',       155, 422,  9, 0, 0.24, 17,  2.1],
  ['f(t) = A sin(ωt + φ)',       316,  92, 9.5,0, 0.30, 16,  7.8],
  ['X[k]=Σ x[n] e^−j2πnk/N',   200, 448,  8, 0, 0.22, 23, 14.5],
  ['SNR = 10 log(Pₛ/Pₙ)',        62, 298, 9.5,0, 0.26, 15,  3.4],
  ['λ = c / f',                  352, 342, 11, 0, 0.30, 19,  9.2],
  ['∇²E = με ∂²E/∂t²',          335, 462,  8, 0, 0.22, 21,  1.0],
  ['v = fλ',                      62,  48, 11, 0, 0.30, 16, 13.8],
  ['P(B|A) P(A) = P(A|B) P(B)', 300, 378,  8, 0, 0.22, 24,  6.5],
  ['E[X] = ∫ x · f(x) dx',       62, 382,  9, 0, 0.24, 20,  0.7],
  ['S = −kᵦ ∑ pᵢ ln pᵢ',        200, 132,  9, 0, 0.24, 22,  4.0],
  ['dS/dt ≥ 0',                   320, 458, 9.5,0, 0.26, 18, 10.5],
]

// ── Network topology nodes & edges ─────────────────────────────────────────────
const NET_NODES = [
  { id: 0, cx: 200, cy: 240, r: 5,   main: true  },
  { id: 1, cx: 200, cy: 108, r: 3,   main: false },
  { id: 2, cx:  78, cy: 178, r: 3.5, main: false },
  { id: 3, cx: 332, cy: 162, r: 3,   main: false },
  { id: 4, cx: 118, cy: 348, r: 3.5, main: false },
  { id: 5, cx: 292, cy: 358, r: 3,   main: false },
  { id: 6, cx:  52, cy:  88, r: 2.5, main: false },
  { id: 7, cx: 358, cy: 308, r: 2.5, main: false },
]

const NET_EDGES = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
  [1, 3], [2, 6], [3, 7], [4, 5],
]

// Sine wave path (cubic-bezier approximation)
function sinePath(cy: number, amp: number, period: number, width = 400): string {
  const segs = Math.ceil(width / period)
  let d = `M 0,${cy}`
  for (let i = 0; i < segs; i++) {
    const x0 = i * period
    const xm = x0 + period / 2
    const x1 = x0 + period
    const p4 = x0 + period / 4
    const p34 = x0 + (3 * period) / 4
    d += ` C ${p4},${cy - amp} ${p4},${cy - amp} ${xm},${cy}`
    d += ` C ${p34},${cy + amp} ${p34},${cy + amp} ${x1},${cy}`
  }
  return d
}

// ── Science visual panel ───────────────────────────────────────────────────────
function SignalOverlay() {
  return (
    <svg
      viewBox="0 0 400 480"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.40 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── Oscilloscope sine waves ── */}
      {[
        { cy:  75, amp: 18, period: 120, op: 0.07 },
        { cy: 155, amp: 13, period:  88, op: 0.055 },
        { cy: 322, amp: 22, period: 108, op: 0.07 },
        { cy: 416, amp: 15, period: 100, op: 0.05 },
      ].map(({ cy, amp, period, op }, i) => (
        <path
          key={`wave-${i}`}
          d={sinePath(cy, amp, period)}
          stroke={`rgba(10,10,15,${op})`}
          strokeWidth="1"
          fill="none"
        />
      ))}

      {/* ── Network topology ── */}
      {NET_EDGES.map(([a, b]) => {
        const na = NET_NODES[a]
        const nb = NET_NODES[b]
        return (
          <line
            key={`e-${a}-${b}`}
            x1={na.cx} y1={na.cy}
            x2={nb.cx} y2={nb.cy}
            stroke="rgba(10,10,15,0.22)"
            strokeWidth="1"
            strokeDasharray="4 3"
          />
        )
      })}
      {NET_NODES.map((n) => (
        <circle
          key={`n-${n.id}`}
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          fill={n.main ? 'rgba(10,10,15,0.45)' : 'rgba(10,10,15,0.20)'}
        />
      ))}

      {/* ── Expanding signal rings (beacon) ── */}
      {[0, 1.45, 2.9].map((delay, i) => (
        <circle
          key={`ring-${i}`}
          cx="200"
          cy="240"
          r="10"
          fill="none"
          stroke="rgba(10,10,15,0.25)"
          strokeWidth="0.8"
        >
          <animate
            attributeName="r"
            values="10;185"
            dur="4.35s"
            repeatCount="indefinite"
            begin={`${delay}s`}
          />
          <animate
            attributeName="opacity"
            values="0.35;0"
            dur="4.35s"
            repeatCount="indefinite"
            begin={`${delay}s`}
          />
        </circle>
      ))}

      {/* Hub pulse */}
      <circle cx="200" cy="240" r="5" fill="rgba(10,10,15,0.45)">
        <animate attributeName="r"       values="5;7.5;5"     dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.30;0.50;0.30" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="240" r="14" fill="none" stroke="rgba(10,10,15,0.08)" strokeWidth="0.8">
        <animate attributeName="r"       values="14;21;14"   dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.08;0;0.08" dur="2.4s" repeatCount="indefinite" />
      </circle>

      {/* ── Formulas ── */}
      {SIGNAL_FORMULAS.map(([label, x, y, fs, , opPeak, dur, begin]) => (
        <text
          key={`${label}-${x}`}
          x={x}
          y={y}
          fontSize={fs}
          fill="rgba(10,10,15,1)"
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
    </svg>
  )
}

// ── Section ────────────────────────────────────────────────────────────────────
export default function ContactSection() {
  return (
    <SectionWrapper id="contact" fullscreen={false}>
      <p className="section-label text-center mb-12 px-6 md:px-10">
        Contact
      </p>

      <div className="max-w-2xl mx-auto px-6 md:px-10 w-full">
        <div
          className="rounded p-8 md:p-12"
          style={{
            border: '1px solid var(--white-10)',
            backgroundColor: 'rgba(248, 248, 252, 0.85)',
          }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            {CONTACT_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 group"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded transition-colors duration-300"
                  style={{
                    border: '1px solid var(--white-15)',
                    color: 'var(--white-60)',
                  }}
                >
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p
                    className="text-xs uppercase tracking-widest mb-0.5"
                    style={{ color: 'var(--white-40)' }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-xs transition-colors duration-200 truncate"
                    style={{ color: 'var(--white-80)' }}
                  >
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
