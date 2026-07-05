import { getAllPosts } from '@/lib/blog'
import { Link } from '@/navigation'

const LOCALE_FORMATS: Record<string, string> = {
  en: 'en-US',
  pt: 'pt-BR',
  es: 'es-ES',
  fr: 'fr-FR',
  ca: 'ca-ES',
}

function formatDate(dateStr: string, locale: string): string {
  return new Date(dateStr).toLocaleDateString(LOCALE_FORMATS[locale] ?? 'en-US', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  })
}

const READ_MORE: Record<string, string> = {
  en: 'Read more →',
  pt: 'Ler mais →',
  es: 'Leer más →',
  fr: 'Lire la suite →',
  ca: 'Llegir més →',
}

export default async function RelatedPosts({
  group,
  locale,
  label,
  seeAllLabel,
}: {
  group: string
  locale: string
  label: string
  seeAllLabel: string
}) {
  const allPosts = getAllPosts()
  const grouped = allPosts.filter((p) =>
    p.groups.some((g) => g === group || g.startsWith(`${group}/`))
  )

  /* Show posts in the current locale first; fall back to EN if none */
  const byLocale = grouped.filter((p) => p.lang === locale)
  const posts = byLocale.length > 0 ? byLocale : grouped.filter((p) => p.lang === 'en')

  if (posts.length === 0) return null

  const readMoreLabel = READ_MORE[locale] ?? READ_MORE.en

  return (
    <div className="mb-12">
      <div
        className="text-[0.55rem] uppercase tracking-widest mb-6"
        style={{ color: 'var(--white-30)', borderBottom: '1px solid rgba(10,10,15,0.06)', paddingBottom: '0.5rem' }}
      >
        {label}
      </div>

      <div>
        {posts.map((post, i) => (
          <article
            key={`${post.slug}-${post.lang}`}
            style={{
              borderTop: i === 0 ? '1px solid rgba(10,10,15,0.08)' : undefined,
              borderBottom: '1px solid rgba(10,10,15,0.08)',
              padding: '1.5rem 0',
            }}
          >
            {/* Title */}
            <Link href={`/blog/${post.slug}`} locale={post.lang} className="group block mb-2">
              <h3
                className="font-semibold transition-opacity duration-200 group-hover:opacity-60"
                style={{
                  color: 'var(--white-100)',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  letterSpacing: '-0.02em',
                  fontFamily: 'var(--font-syne)',
                }}
              >
                {post.title}
              </h3>
            </Link>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
              <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--white-35)' }}>
                {formatDate(post.date, locale)}
              </span>
              <span
                className="text-[0.48rem] uppercase tracking-widest px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: 'rgba(147,197,253,0.06)',
                  color: 'rgba(147,197,253,0.55)',
                  border: '1px solid rgba(147,197,253,0.14)',
                }}
              >
                {post.lang}
              </span>
            </div>

            {/* Excerpt */}
            <p
              className="text-sm leading-relaxed mb-3 line-clamp-2"
              style={{ color: 'var(--white-58)' }}
            >
              {post.excerpt}
            </p>

            {/* Read more */}
            <Link
              href={`/blog/${post.slug}`}
              locale={post.lang}
              className="text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
              style={{ color: 'var(--accent)' }}
            >
              {readMoreLabel}
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-5">
        <Link
          href="/blog"
          className="text-[0.55rem] uppercase tracking-widest transition-opacity hover:opacity-70"
          style={{ color: 'var(--accent)' }}
        >
          {seeAllLabel}
        </Link>
      </div>
    </div>
  )
}
