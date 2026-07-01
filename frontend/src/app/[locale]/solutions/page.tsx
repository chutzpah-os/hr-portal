'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { PRODUCTS, getLocalizedProduct, type Product } from '@/data/solutions'

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const tc = useTranslations('common')

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
          {tc('close')}
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
        <div className="flex items-center gap-4 mb-7 flex-wrap">
          <p className="text-sm italic" style={{ color: 'var(--white-50)' }}>
            &ldquo;{product.tagline}&rdquo;
          </p>
          {product.cta && (
            <a
              href={product.cta.href}
              target={product.cta.external ? '_blank' : undefined}
              rel={product.cta.external ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-200 shrink-0"
              style={{ backgroundColor: 'var(--accent)', color: 'rgb(255,255,255)', fontWeight: 600 }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
            >
              {product.cta.label} →
            </a>
          )}
        </div>

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

        {/* Description — truncated preview */}
        <div className="mb-7">
          {product.fullDescription.split('\n\n').slice(0, 2).map((para, i) => (
            <p key={i} className="text-sm leading-relaxed mb-4" style={{ color: 'var(--white-70)' }}>
              {para}
            </p>
          ))}
          {product.fullDescription.split('\n\n').length > 2 && (
            <p className="text-xs" style={{ color: 'var(--white-35)' }}>…</p>
          )}
        </div>

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

        {/* View full page */}
        <div
          className="pt-5 flex items-center justify-between flex-wrap gap-3"
          style={{ borderTop: '1px solid rgba(10,10,15,0.07)' }}
        >
          <p className="text-xs" style={{ color: 'var(--white-35)' }}>
            {tc('fullDetailsPage')}
          </p>
          <Link
            href={`/solutions/${product.id}`}
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-200 shrink-0"
            style={{
              backgroundColor: 'rgba(10,10,15,0.05)',
              color: 'var(--white-80)',
              border: '1px solid rgba(10,10,15,0.10)',
              fontWeight: 500,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(10,10,15,0.08)' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(10,10,15,0.05)' }}
          >
            {tc('viewFullPage')}
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  const tc = useTranslations('common')
  return (
    <button onClick={onClick} className="text-left block w-full h-full">
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
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-6">
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

          <div className="mt-5">
            <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--white-35)' }}>
              {tc('preview')}
            </span>
          </div>
        </div>
      </div>
    </button>
  )
}

export default function SolutionsPage() {
  const t = useTranslations('lab')
  const tc = useTranslations('common')
  const locale = useLocale()
  const products = PRODUCTS.map((p) => getLocalizedProduct(p, locale))
  const [selected, setSelected] = useState<Product | null>(null)
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
            <p className="section-label mb-4">{t('sectionLabel')}</p>
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
              {t('title')}
            </h1>
            <p
              className="text-base max-w-xl leading-relaxed"
              style={{ color: 'var(--white-55)' }}
            >
              {t('subtitle')}
            </p>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20"
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.06, ease: 'easeOut' }}
              >
                <ProductCard
                  product={product}
                  onClick={() => setSelected(product)}
                />
              </motion.div>
            ))}
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
            <p className="section-label mb-4">{tc('whatsNext')}</p>
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
              {tc('haveProblem')}
            </h2>
            <p
              className="text-sm mb-8 max-w-md mx-auto leading-relaxed"
              style={{ color: 'var(--white-50)' }}
            >
              {tc('haveProblemSub')}
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
              {tc('bookCallCta')}
            </a>
          </motion.div>
        </div>
      </main>
    </>
  )
}
