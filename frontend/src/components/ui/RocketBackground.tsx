'use client'

// [cx, cy, rot_deg, op_peak, dur_s, begin_s]
const ROCKETS: [number, number, number, number, number, number][] = [
  [570, 720, -64, 0.52, 28, 0],
  [762, 348, -32, 0.48, 33, 11],
  [642, 188, -78, 0.45, 26, 19],
  [828, 558, -50, 0.50, 31, 6],
]

// [text, x, y, rot, dur, begin]
const CALCS: [string, number, number, number, number, number][] = [
  ['ΔV = Isp · g₀ · ln(m₀/m₁)', 560, 310, -9,  20, 0],
  ['v = √(GM / r)',               820, 160,  7,  17, 5],
  ['T = 2π √(r³/GM)',             650, 620, -5,  22, 11],
  ['F = ma',                      480, 500, 11,  15, 3],
  ['KE = ½mv²',                  790, 470, -11, 19, 8],
  ['h = v₀t − ½gt²',             550, 760,  6,  21, 14],
  ['E = −GMm / 2r',              740, 370, -7,  18, 2],
  ['a_c = v² / r',                600, 690,  9,  16, 7],
  ['p = mv',                      870, 290, -9,  20, 12],
  ['ΣF = 0',                      490, 210,  5,  23, 6],
  ['v_esc = √(2GM/r)',            680, 550, -8,  19, 9],
  ['θ = arctan(vy/vx)',           560, 440,  8,  17, 15],
]

export default function RocketBackground() {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className="fixed inset-0 w-full h-full pointer-events-none select-none"
      style={{ zIndex: 1 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="arrowTip" markerWidth="8" markerHeight="8" refX="4" refY="3" orient="auto">
          <polyline
            points="0,0 6,3 0,6"
            stroke="rgba(240,240,250,0.55)"
            fill="none"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
        </marker>
      </defs>

      {/* ── Sketch rockets — static, stroke-only ── */}
      {ROCKETS.map(([cx, cy, rot, peak, dur, begin], i) => {
        const rad = (rot * Math.PI) / 180
        const dx = Math.cos(rad)
        const dy = Math.sin(rad)
        // Trajectory arc control + end points (in world space from rocket nose)
        const noseX = cx + dx * 26
        const noseY = cy + dy * 26
        const perpX = -dy
        const perpY = dx
        const arcEndX = noseX + dx * 160 + perpX * 28
        const arcEndY = noseY + dy * 160 + perpY * 28
        const ctrlX = noseX + dx * 70 + perpX * 55
        const ctrlY = noseY + dy * 70 + perpY * 55
        // Ground reference line
        const groundY = cy + 40
        const groundX1 = cx - 45
        const groundX2 = cx + 45
        // Velocity vector end (from nose, in rocket direction)
        const velEndX = noseX + dx * 55
        const velEndY = noseY + dy * 55
        // Label position
        const lblX = cx + perpX * 36 - dx * 5
        const lblY = cy + perpY * 36 - dy * 5

        return (
          <g key={i} opacity={0}>

            {/* Ground reference dashed line */}
            <line
              x1={groundX1} y1={groundY}
              x2={groundX2} y2={groundY}
              stroke="rgba(240,240,250,0.20)"
              strokeWidth="0.7"
              strokeDasharray="5 4"
            />
            {/* Vertical reference from ground to rocket */}
            <line
              x1={cx} y1={groundY}
              x2={cx} y2={cy + 8}
              stroke="rgba(240,240,250,0.15)"
              strokeWidth="0.7"
              strokeDasharray="3 3"
            />

            {/* Trajectory arc */}
            <path
              d={`M ${noseX} ${noseY} Q ${ctrlX} ${ctrlY} ${arcEndX} ${arcEndY}`}
              stroke="rgba(240,240,250,0.22)"
              fill="none"
              strokeWidth="0.9"
              strokeDasharray="7 5"
              strokeLinecap="round"
            />

            {/* Velocity vector */}
            <line
              x1={noseX} y1={noseY}
              x2={velEndX} y2={velEndY}
              stroke="rgba(240,240,250,0.50)"
              strokeWidth="0.9"
              markerEnd="url(#arrowTip)"
            />

            {/* Rocket sketch — transform: translate then rotate */}
            <g
              transform={`translate(${cx} ${cy}) rotate(${rot})`}
              stroke="rgba(240,240,250,0.82)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.15"
            >
              {/* Nose cone */}
              <path d="M 26,0 L 8,-8 L 8,8 Z" />
              {/* Body */}
              <rect x="-13" y="-8" width="21" height="16" rx="1.5" />
              {/* Porthole / window */}
              <circle cx="10" cy="0" r="4" strokeWidth="0.9" />
              {/* Top fin */}
              <path d="M -13,-8 L -23,-22 L -13,-14" />
              {/* Bottom fin */}
              <path d="M -13,8 L -23,22 L -13,14" />
              {/* Nozzle bell */}
              <path d="M -13,-6 L -21,-5 L -21,5 L -13,6" />
              {/* Nozzle throat hint */}
              <line x1="-21" y1="-5" x2="-25" y2="-3" strokeWidth="0.75" />
              <line x1="-21" y1="5"  x2="-25" y2="3"  strokeWidth="0.75" />
              {/* Detail: body centerline */}
              <line x1="-12" y1="0" x2="6" y2="0" strokeWidth="0.5" strokeDasharray="4 3" />
              {/* Detail: panel seam */}
              <line x1="0" y1="-8" x2="0" y2="8" strokeWidth="0.5" />
            </g>

            {/* Angle annotation label */}
            <text
              x={lblX} y={lblY}
              fontSize="9"
              fontFamily="monospace"
              fontStyle="italic"
              fill="rgba(240,240,250,0.45)"
              textAnchor="middle"
            >
              θ = {Math.abs(rot)}°
            </text>

            {/* Appear/disappear animation */}
            <animate
              attributeName="opacity"
              values={`0;0;${peak};${peak};0;0`}
              keyTimes="0;0.25;0.38;0.70;0.83;1"
              calcMode="linear"
              dur={`${dur}s`}
              repeatCount="indefinite"
              begin={`${begin}s`}
            />
          </g>
        )
      })}

      {/* ── Floating calculations ── */}
      {CALCS.map(([text, x, y, rot, dur, begin]) => (
        <text
          key={`${text}-${x}`}
          x={x} y={y}
          fontSize="12"
          fontFamily="monospace"
          fontStyle="italic"
          fill="rgba(240,240,250,1)"
          opacity={0}
          textAnchor="middle"
          transform={`rotate(${rot} ${x} ${y})`}
        >
          {text}
          <animate
            attributeName="opacity"
            values="0;0;0.52;0.52;0;0"
            keyTimes="0;0.28;0.40;0.70;0.82;1"
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
