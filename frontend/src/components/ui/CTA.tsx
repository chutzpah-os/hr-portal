import Link from 'next/link'
import type { ReactNode } from 'react'

interface CTAProps {
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  external?: boolean
  type?: 'button' | 'submit'
}

export default function CTA({
  href,
  onClick,
  children,
  className = '',
  external = false,
  type = 'button',
}: CTAProps) {
  const classes = `cta-button ${className}`

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
