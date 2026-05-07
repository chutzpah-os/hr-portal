'use client'

import React from 'react'

// [text, x%, y%, fontSize, opMin, opMax, dur, delay]
type Entry = [string, number, number, number, number, number, number, number]

const ENTRIES: Entry[] = [
  // ── Physics ──
  ['F = ma',                   5,  4, 11, 0.22, 0.55,  7, 0.0],
  ['E = hν',                  28,  4, 11, 0.20, 0.50,  9, 1.8],
  ['∇·B = 0',                 55,  4, 10, 0.20, 0.48, 11, 0.9],
  ['G = 6.67×10⁻¹¹',         80,  4,  9, 0.18, 0.44, 13, 2.5],
  ['ΔxΔp ≥ ℏ/2',              7, 22, 10, 0.22, 0.55,  9, 1.3],
  ['iℏ ∂ψ/∂t = Ĥψ',         60, 22, 10, 0.22, 0.55,  8, 2.0],
  ['pV = nRT',                58, 44, 11, 0.25, 0.58,  8, 2.3],
  ['S = k ln Ω',               9, 55,  9, 0.18, 0.48, 10, 2.0],
  ['F = qE + qv×B',           10, 77, 11, 0.22, 0.55,  8, 0.9],
  // ── Mathematics ──
  ['e^(iπ) + 1 = 0',          14, 12, 11, 0.25, 0.62,  8, 0.4],
  ['∑ 1/n² = π²/6',           42, 12, 10, 0.20, 0.50, 10, 2.2],
  ['lim(1+1/n)ⁿ = e',         70, 12,  9, 0.18, 0.44, 12, 1.1],
  ['H(X) = −∑ p log₂p',      10, 33, 10, 0.22, 0.55,  7, 0.5],
  ['det(A) = Π λᵢ',           30, 44, 10, 0.20, 0.50, 11, 0.8],
  ['O(n log n)',               84, 44, 11, 0.22, 0.55,  7, 0.0],
  ['∫₋∞^∞ e^−x² dx = √π',    87, 55,  9, 0.18, 0.44, 14, 2.8],
  ['T(n) = 2T(n/2) + n',       5, 66, 10, 0.20, 0.50, 11, 1.0],
  ['E = mc²',                  60, 66, 13, 0.28, 0.65,  6, 1.7],
  ['∇²ψ = 0',                  10, 77, 11, 0.22, 0.55,  8, 0.9],
  ['∂f/∂x',                    6, 88, 11, 0.22, 0.55,  7, 0.5],
  ['lim sin(x)/x = 1',         80, 88,  9, 0.18, 0.44, 12, 1.6],
  // ── Chemistry ──
  ['ΔG = ΔH − TΔS',           85, 22,  9, 0.18, 0.44, 13, 0.7],
  ['pH = −log[H⁺]',            88, 33,  9, 0.18, 0.44, 10, 0.3],
  ['Ka · Kb = Kw',             90, 12,  9, 0.18, 0.44, 14, 3.0],
  ['ATP → ADP + Pᵢ',           84, 66,  9, 0.18, 0.44,  9, 2.4],
  ['ΔH = Σ Hf(p) − Σ Hf(r)', 33, 66,  8, 0.15, 0.40, 13, 0.4],
  ['C = B log₂(1+S/N)',        36, 77, 10, 0.20, 0.50, 10, 2.1],
  // ── Genetics / RNA / Biology ──
  ['p² + 2pq + q² = 1',        32, 22,  9, 0.18, 0.44, 11, 0.2],
  ['v = Vmax[S]/(Km+[S])',     38, 33,  9, 0.18, 0.44, 12, 1.9],
  ['5′-AUGCGA-3′',              4, 44, 10, 0.20, 0.50,  9, 1.5],
  ['CRISPR-Cas9',               62, 55, 10, 0.20, 0.50,  9, 0.6],
  ['mRNA → protein',            84, 66,  9, 0.18, 0.44,  9, 2.4],
  ['A-T · G-C',                 63, 77, 10, 0.20, 0.50,  8, 0.2],
  ['1b2035',                    28, 88, 10, 0.20, 0.55, 11, 3.2],
  // ── Information / CS ──
  ['P vs NP?',                  65, 33, 11, 0.22, 0.55,  6, 3.1],
  ['SNR = Ps/Pn',               55, 88, 10, 0.20, 0.50,  9, 1.4],
]

export default function FormulaBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden select-none"
      style={{ zIndex: 1, mixBlendMode: 'screen' }}
    >
      <style>{`
        @keyframes bgFPulse {
          0%, 100% { opacity: var(--op-min); }
          50%       { opacity: var(--op-max); }
        }
      `}</style>
      {ENTRIES.map(([text, x, y, fs, opMin, opMax, dur, delay], i) => (
        <span
          key={i}
          style={Object.assign(
            {
              position: 'absolute',
              left: `${x}%`,
              top: `${y}%`,
              fontSize: `${fs}px`,
              fontFamily: 'monospace',
              color: 'rgba(240,240,250,1)',
              whiteSpace: 'nowrap',
              animation: `bgFPulse ${dur}s ease-in-out ${delay}s infinite`,
            } as React.CSSProperties,
            { '--op-min': opMin, '--op-max': opMax }
          )}
        >
          {text}
        </span>
      ))}
    </div>
  )
}
