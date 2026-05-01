'use client'

import Image from 'next/image'
import SectionWrapper from '@/components/ui/SectionWrapper'

const CONTACT_ITEMS = [
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
  {
    key: 'github',
    label: 'GitHub',
    value: 'github.com/hanielrolemberg',
    href: 'https://github.com/chutzpah-os',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    key: 'medium',
    label: 'Blog',
    value: 'medium.com/@hanielrolemberg',
    href: 'https://medium.com/@hanielrolemberg',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  },
  {
    key: 'youtube',
    label: 'YouTube',
    value: 'youtube.com/@hanielrolemberg',
    href: 'https://www.youtube.com/@hanielrolemberg',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" fullscreen={false}>
      <h2 className="text-center mb-12 px-6 md:px-10" style={{ color: 'var(--white-100)' }}>
        Get in Touch
      </h2>

      <div className="flex flex-col md:flex-row items-center">
        {/* Image — bleeds to the left edge, taller */}
        <div className="relative hidden md:block flex-shrink-0" style={{ width: '50%', height: '480px' }}>
          {/* Dark tint */}
          <div className="absolute inset-0 z-[1]" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} />
          {/* Right fade */}
          <div
            className="absolute inset-y-0 right-0 z-10"
            style={{ width: '55%', background: 'linear-gradient(to left, rgb(0,0,0) 0%, rgba(0,0,0,0.6) 40%, transparent 100%)' }}
          />
          {/* Top fade */}
          <div
            className="absolute inset-x-0 top-0 z-10"
            style={{ height: '40%', background: 'linear-gradient(to bottom, rgb(0,0,0) 0%, transparent 100%)' }}
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-x-0 bottom-0 z-10"
            style={{ height: '40%', background: 'linear-gradient(to top, rgb(0,0,0) 0%, transparent 100%)' }}
          />
          <Image
            src="/images/contact-bg.jpg"
            alt=""
            fill
            className="object-cover object-center"
            loading="lazy"
            sizes="50vw"
          />
        </div>

        {/* Contact links — right, inside the card */}
        <div className="flex-1 px-6 md:px-10 max-w-xl ml-auto">
          <div
            className="rounded p-8 md:p-12"
            style={{
              border: '1px solid var(--white-15)',
              backgroundColor: 'rgba(5, 5, 5, 0.9)',
            }}
          >
            <div className="space-y-8">
              {CONTACT_ITEMS.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-5 group"
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded transition-colors duration-300"
                    style={{
                      border: '1px solid var(--white-15)',
                      color: 'var(--white-60)',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest mb-1"
                      style={{ color: 'var(--white-40)' }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm transition-colors duration-200"
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
      </div>
    </SectionWrapper>
  )
}
