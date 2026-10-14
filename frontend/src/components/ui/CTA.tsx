import Link from 'next/link'
import { Link as LocaleLink } from '@/navigation'
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
    if (external) {
      return (
        <Link href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </Link>
      )
    }
    return (
      <LocaleLink href={href} className={classes}>
        {children}
      </LocaleLink>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
