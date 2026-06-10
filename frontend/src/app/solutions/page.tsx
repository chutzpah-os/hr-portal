'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

type FilterTag = 'All' | 'R&D' | 'Software' | 'Education' | 'Management' | 'Social Impact' | 'Health'

interface Product {
  id: string
  name: string
  tagline: string
  shortDescription: string
  fullDescription: string
  metrics?: { label: string; value: string }[]
  tags: FilterTag[]
  status: string
  image?: string
  imageFit?: 'contain' | 'cover'
  modalImage?: string
  cta?: { label: string; href: string; external?: boolean }
}

const PRODUCTS: Product[] = [
  {
    id: 'cherut',
    name: 'Cherut',
    tagline: 'Your life, running on a system.',
    shortDescription: 'Full operating system for personal productivity — OKRs, habits, calendar, and journaling in one place.',
    fullDescription: `Cherut is a life OS built for people who treat daily execution as measurable data. The name comes from the Hebrew word for freedom — because a good system doesn't constrain you, it frees you.

The premise: most productivity tools are disconnected. You track goals in one app, habits in another, calendar in a third, and reflect somewhere else entirely. Cherut unifies these layers into a single, structured operating system.

At its core: OKRs cascade into weekly priorities, which connect to daily habits and time blocks. Every evening, a short review closes the loop. Over time, you accumulate a personal dataset — not just tasks done, but patterns, energy, focus windows, and progress toward what actually matters.

Built for ambitious people who want to move faster without losing clarity on why they're moving at all.`,
    tags: ['R&D', 'Software', 'Management'],
    status: 'In Development',
    image: '/images/cherut.png',
    imageFit: 'contain',
  },
  {
    id: 'hofshilang',
    name: 'HofShiLang',
    tagline: 'Empowering youth through languages.',
    shortDescription: 'Language learning with a proprietary formula designed to turn ambition into measurable fluency.',
    fullDescription: `HofShiLang is a language learning product built around a proprietary formula — not a generic curriculum, but a structured method that maps ambition to measurable outcomes.

The core insight: most learners plateau because they track effort (hours studied, lessons completed) instead of progress (what they can actually do). HofShiLang shifts the frame. Every learner has a clear CEFR target, a weekly engagement contract, and real-world interaction goals that build toward fluency.

Beyond the product, HofShiLang operates as an educational initiative. Through partnerships with youth programs, it brings language access to communities where multilingualism is a direct path to economic opportunity.

The formula: structured input + real-world output + accountability loops. The result: learners who don't just study a language — they start using it.`,
    metrics: [
      { label: 'Framework', value: 'CEFR-aligned' },
      { label: 'Focus', value: 'Youth' },
      { label: 'Model', value: 'Product + Initiative' },
    ],
    tags: ['R&D', 'Software', 'Education'],
    status: 'In Development',
    image: '/images/hofshilang.png',
    imageFit: 'contain',
  },
  {
    id: '1k-miles',
    name: '1k Miles of Hope',
    tagline: 'Running for a cure.',
    shortDescription: 'A fundraising campaign to finance cancer research — every mile matters.',
    fullDescription: `1k Miles of Hope is a fundraising initiative created to support cancer research through the Terry Fox Foundation — one of the most impactful cancer research programs in the world.

The goal is simple: run 1,000 miles and raise funds that go directly toward financing scientific research aimed at finding a cure. Every kilometer translates into real resources for real scientists working on real breakthroughs.

Cancer touches almost every family. This campaign is a way to turn movement into meaning — to make every run, every mile, and every step count for something larger than the finish line.

If you want to contribute, every donation makes a difference.`,
    tags: ['Social Impact', 'Health'],
    status: 'Active',
    image: '/images/hospitalroompai.jpg',
    imageFit: 'cover',
    modalImage: '/images/hanielrunning.jpeg',
    cta: { label: 'Donate', href: 'https://international.terryfox.ca/page/1k-miles-of-hope', external: true },
  },
]

const FILTERS: FilterTag[] = ['All', 'R&D', 'Software', 'Education', 'Management', 'Social Impact', 'Health']

function StatusBadge({ status }: { status: string }) {
  const isActive = status === 'Active'
  return (
    <span
      className="text-[0.55rem] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full"
      style={{
        backgroundColor: isActive ? 'rgba(74,222,128,0.12)' : 'rgba(212,119,90,0.10)',
        color: isActive ? 'rgba(34,150,80,1)' : 'var(--accent)',
        border: `1px solid ${isActive ? 'rgba(74,222,128,0.25)' : 'rgba(212,119,90,0.20)'}`,
      }}
    >
      {status}
    </span>
  )
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-end md:items-center justify-center p-0 md:p-6"
      style={{ backgroundColor: 'rgba(255,255,255,0.80)', backdropFilter: 'blur(14px)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full md:max-w-2xl max-h-[92svh] md:max-h-[88vh] overflow-y-auto rounded-t-3xl md:rounded-3xl"
        style={{
          backgroundColor: 'rgb(255,255,255)',
          border: '1px solid rgba(10,10,15,0.10)',
          boxShadow: '0 32px 80px rgba(10,10,15,0.14)',
          padding: 'clamp(1.5rem, 5vw, 3rem)',
        }}
        initial={{ y: 40, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[0.6rem] uppercase tracking-widest transition-opacity hover:opacity-50"
          style={{ color: 'var(--white-40)' }}
        >
          ✕ Close
        </button>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.55rem] uppercase tracking-widest px-2.5 py-0.5 rounded-full"
              style={{ backgroundColor: 'rgba(212,119,90,0.08)', color: 'var(--accent)', border: '1px solid rgba(212,119,90,0.18)' }}
            >
              {tag}
            </span>
          ))}
          <StatusBadge status={product.status} />
        </div>

        {/* Name */}
        <h2
          className="mb-2"
          style={{
            color: 'var(--white-100)',
            fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
            fontFamily: 'var(--font-syne)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          {product.name}
        </h2>
        <p className="text-sm italic mb-7" style={{ color: 'var(--white-50)' }}>
          &ldquo;{product.tagline}&rdquo;
        </p>

        {/* Cover image */}
        {product.image && (
          <div
            className="rounded-2xl overflow-hidden mb-7"
            style={{
              aspectRatio: '16/7',
              backgroundColor: 'rgba(10,10,15,0.04)',
              border: '1px solid rgba(10,10,15,0.07)',
              position: 'relative',
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className={product.imageFit === 'cover' ? 'object-cover' : 'object-contain'}
              style={product.imageFit !== 'cover' ? { padding: '1rem' } : undefined}
            />
          </div>
        )}

        {/* Description */}
        <div className="mb-7">
          {product.fullDescription.split('\n\n').map((para, i) => (
            <p key={i} className="text-sm leading-relaxed mb-4" style={{ color: 'var(--white-70)' }}>
              {para}
            </p>
          ))}
        </div>

        {/* Modal photo */}
        {product.modalImage && (
          <div
            className="rounded-2xl overflow-hidden mb-7"
            style={{
              aspectRatio: '4/3',
              position: 'relative',
              border: '1px solid rgba(10,10,15,0.07)',
            }}
          >
            <Image
              src={product.modalImage}
              alt={`${product.name} — photo`}
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover object-top"
            />
          </div>
        )}

        {/* Metrics */}
        {product.metrics && product.metrics.length > 0 && (
          <div
            className="flex flex-wrap gap-6 rounded-2xl px-6 py-5 mb-7"
            style={{ backgroundColor: 'rgba(10,10,15,0.03)', border: '1px solid rgba(10,10,15,0.07)' }}
          >
            {product.metrics.map(({ label, value }) => (
              <div key={label}>
                <p className="text-[0.55rem] uppercase tracking-widest mb-0.5" style={{ color: 'var(--white-35)' }}>{label}</p>
                <p className="text-sm font-semibold" style={{ color: 'var(--white-90)' }}>{value}</p>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        {product.cta && (
          <a
            href={product.cta.href}
            target={product.cta.external ? '_blank' : undefined}
            rel={product.cta.external ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-200"
            style={{ backgroundColor: 'var(--accent)', color: 'rgb(255,255,255)', fontWeight: 600 }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
          >
            {product.cta.label} →
          </a>
        )}
      </motion.div>
    </motion.div>
  )
}

function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  const cardContent = (
    <div
      className="group flex flex-col h-full rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer"
      style={{
        border: '1px solid rgba(10,10,15,0.08)',
        backgroundColor: 'rgba(252,252,254,1)',
        boxShadow: '0 2px 12px rgba(10,10,15,0.05)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.borderColor = 'var(--accent)'
        el.style.boxShadow = '0 8px 32px rgba(212,119,90,0.12)'
        el.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.borderColor = 'rgba(10,10,15,0.08)'
        el.style.boxShadow = '0 2px 12px rgba(10,10,15,0.05)'
        el.style.transform = 'translateY(0)'
      }}
    >
      {/* Image / placeholder area */}
      <div
        className="relative shrink-0"
        style={{
          aspectRatio: '16/9',
          backgroundColor: 'rgba(10,10,15,0.03)',
          borderBottom: '1px solid rgba(10,10,15,0.06)',
        }}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-4xl font-bold"
              style={{ color: 'rgba(10,10,15,0.06)', fontFamily: 'var(--font-syne)' }}
            >
              {product.name[0]}
            </span>
          </div>
        )}
        {/* Status badge overlay */}
        <div className="absolute top-3 right-3">
          <StatusBadge status={product.status} />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.5rem] uppercase tracking-widest px-2 py-0.5 rounded-full"
              style={{ backgroundColor: 'rgba(212,119,90,0.07)', color: 'var(--accent)', border: '1px solid rgba(212,119,90,0.15)' }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3
          className="mb-1.5"
          style={{
            color: 'var(--white-100)',
            fontSize: '1.1rem',
            fontFamily: 'var(--font-syne)',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.015em',
          }}
        >
          {product.name}
        </h3>
        <p className="text-xs italic mb-3" style={{ color: 'var(--white-45)' }}>
          &ldquo;{product.tagline}&rdquo;
        </p>
        <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--white-60)' }}>
          {product.shortDescription}
        </p>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between">
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: 'var(--white-35)' }}
          >
            View details →
          </span>
        </div>
      </div>
    </div>
  )

  return (
    <button onClick={onClick} className="text-left block w-full h-full">
      {cardContent}
    </button>
  )
}

export default function SolutionsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterTag>('All')
  const [selected, setSelected] = useState<Product | null>(null)

  const filtered = activeFilter === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.tags.includes(activeFilter))

  const handleClose = useCallback(() => setSelected(null), [])

  return (
    <>
      <AnimatePresence>
        {selected && <ProductModal product={selected} onClose={handleClose} />}
      </AnimatePresence>

      <main
        style={{
          minHeight: '100svh',
          backgroundColor: 'rgb(255,255,255)',
          paddingTop: '7rem',
          paddingBottom: '6rem',
        }}
      >
        {/* Dot-grid texture */}
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(10,10,15,0.04) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            zIndex: 0,
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 md:px-10" style={{ zIndex: 1 }}>
          {/* Hero */}
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="section-label mb-4">Solutions</p>
            <h1
              className="mb-4"
              style={{
                color: 'var(--white-100)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontFamily: 'var(--font-syne)',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              Products &amp; Initiatives
            </h1>
            <p
              className="text-base max-w-xl leading-relaxed"
              style={{ color: 'var(--white-55)' }}
            >
              Things I&apos;m building — from personal productivity systems to language learning and social impact. Each starts with a real problem.
            </p>
          </motion.div>

          {/* Filter bar */}
          <motion.div
            className="flex flex-wrap gap-2 mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            {FILTERS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className="text-[0.65rem] uppercase tracking-widest px-4 py-1.5 rounded-full transition-all duration-200"
                style={{
                  border: '1px solid',
                  borderColor: activeFilter === tag ? 'var(--accent)' : 'rgba(10,10,15,0.12)',
                  color: activeFilter === tag ? 'rgb(255,255,255)' : 'var(--white-50)',
                  backgroundColor: activeFilter === tag ? 'var(--accent)' : 'transparent',
                  fontWeight: activeFilter === tag ? 600 : 400,
                }}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          {/* Cards grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3, delay: i * 0.06, ease: 'easeOut' }}
                >
                  <ProductCard
                    product={product}
                    onClick={() => setSelected(product)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA footer */}
          <motion.div
            className="rounded-3xl p-10 md:p-14 text-center"
            style={{
              border: '1px solid rgba(10,10,15,0.08)',
              backgroundColor: 'rgba(10,10,15,0.02)',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-4">What&apos;s next</p>
            <h2
              className="mb-4"
              style={{
                color: 'var(--white-100)',
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                fontFamily: 'var(--font-syne)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.015em',
              }}
            >
              Have a problem worth solving?
            </h2>
            <p
              className="text-sm mb-8 max-w-md mx-auto leading-relaxed"
              style={{ color: 'var(--white-50)' }}
            >
              Whether it&apos;s technical, strategic, or social — if the problem is real, I want to hear about it.
            </p>
            <a
              href="https://calendly.com/hanielrolemberg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-200"
              style={{ backgroundColor: 'var(--accent)', color: 'rgb(255,255,255)', fontWeight: 600 }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
            >
              Book a Call
            </a>
          </motion.div>
        </div>
      </main>
    </>
  )
}
