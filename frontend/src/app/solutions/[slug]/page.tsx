import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PRODUCTS, STAGES, getProduct } from '@/data/solutions'

const BASE_URL = 'https://hanielrolemberg.com'

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.id }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return {}

  const url = `${BASE_URL}/solutions/${product.id}`
  return {
    title: `${product.name} — ${product.tagline}`,
    description: product.shortDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} — Haniel Rolemberg`,
      description: product.shortDescription,
      url,
      images: product.image ? [{ url: `${BASE_URL}${product.image}`, alt: product.name }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} — Haniel Rolemberg`,
      description: product.shortDescription,
    },
  }
}

export default async function ProductPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  const stage = STAGES.find((s) => s.label === product.status) ?? STAGES[0]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    description: product.shortDescription,
    applicationCategory: product.tags.join(', '),
    url: `${BASE_URL}/solutions/${product.id}`,
    author: { '@type': 'Person', name: 'Haniel Rolemberg', url: BASE_URL },
    keywords: product.tags.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

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

        <div className="relative max-w-3xl mx-auto px-6 md:px-10" style={{ zIndex: 1 }}>
          {/* Breadcrumb */}
          <nav className="mb-10">
            <Link
              href="/solutions"
              className="text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
              style={{ color: 'var(--white-40)' }}
            >
              ← Solutions
            </Link>
          </nav>

          {/* Header */}
          <div className="mb-10">
            {/* Tags + status */}
            <div className="flex flex-wrap gap-2 mb-5">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.55rem] uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                  style={{
                    backgroundColor: 'rgba(212,119,90,0.08)',
                    color: 'var(--accent)',
                    border: '1px solid rgba(212,119,90,0.18)',
                  }}
                >
                  {tag}
                </span>
              ))}
              <span
                className="text-[0.55rem] font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                style={{
                  backgroundColor: 'rgb(255,255,255)',
                  color: stage.color,
                  border: `1px solid ${stage.color.replace('1)', '0.35)')}`,
                  boxShadow: '0 1px 4px rgba(10,10,15,0.10)',
                }}
              >
                {product.status}
              </span>
            </div>

            <h1
              className="mb-3"
              style={{
                color: 'var(--white-100)',
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                fontFamily: 'var(--font-syne)',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
              }}
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-4 flex-wrap">
              <p
                className="text-base italic"
                style={{ color: 'var(--white-50)' }}
              >
                &ldquo;{product.tagline}&rdquo;
              </p>
              {product.cta && (
                <a
                  href={product.cta.href}
                  target={product.cta.external ? '_blank' : undefined}
                  rel={product.cta.external ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-opacity duration-200 shrink-0"
                  style={{ backgroundColor: 'var(--accent)', color: 'rgb(255,255,255)', fontWeight: 600 }}
                >
                  {product.cta.label} →
                </a>
              )}
            </div>
          </div>

          {/* Cover image */}
          {product.image && (
            <div
              className="rounded-2xl overflow-hidden mb-10"
              style={{
                aspectRatio: '16/7',
                backgroundColor: 'rgba(10,10,15,0.03)',
                border: '1px solid rgba(10,10,15,0.07)',
                position: 'relative',
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className={product.imageFit === 'cover' ? 'object-cover' : 'object-contain'}
                style={product.imageFit !== 'cover' ? { padding: '1.5rem' } : undefined}
              />
            </div>
          )}

          {/* Full description */}
          <div className="mb-10">
            {product.fullDescription.split('\n\n').map((para, i) => (
              <p
                key={i}
                className="text-base leading-relaxed mb-5"
                style={{ color: 'var(--white-70)' }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Modal photo */}
          {product.modalImage && (
            <div
              className="rounded-2xl overflow-hidden mb-10"
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
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-top"
              />
            </div>
          )}

          {/* Metrics */}
          {product.metrics && product.metrics.length > 0 && (
            <div
              className="flex flex-wrap gap-8 rounded-2xl px-8 py-6 mb-10"
              style={{
                backgroundColor: 'rgba(10,10,15,0.02)',
                border: '1px solid rgba(10,10,15,0.07)',
              }}
            >
              {product.metrics.map(({ label, value }) => (
                <div key={label}>
                  <p
                    className="text-[0.55rem] uppercase tracking-widest mb-1"
                    style={{ color: 'var(--white-35)' }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: 'var(--white-90)' }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Back */}
          <div
            className="pt-8"
            style={{ borderTop: '1px solid rgba(10,10,15,0.07)' }}
          >
            <Link
              href="/solutions"
              className="text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
              style={{ color: 'var(--white-40)' }}
            >
              ← Back to all products
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
