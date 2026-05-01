'use client'

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/hanielrolemberg',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

const NAV_LINKS: { label: string; href: string }[] = []

export default function Footer() {
  return (
    <footer
      className="no-print"
      style={{ borderTop: '1px solid var(--white-25)' }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-content mx-auto px-5 py-6 md:px-10">
        {/* Social icons */}
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex items-center justify-center transition-colors duration-200"
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '32px',
                backgroundColor: 'var(--white-10)',
                color: 'var(--white-60)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--white-15)'
                e.currentTarget.style.color = 'var(--white-100)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--white-10)'
                e.currentTarget.style.color = 'var(--white-60)'
              }}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs uppercase tracking-widest transition-colors duration-200"
              style={{ color: 'var(--white-50)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white-80)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white-50)')}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--white-50)' }}>
          © 2026 Haniel Rolemberg. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
