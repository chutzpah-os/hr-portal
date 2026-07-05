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
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
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
  const related = allPosts
    .filter((p) =>
      p.groups.some((g) => g === group || g.startsWith(`${group}/`))
    )
    .slice(0, 6)

  if (related.length === 0) return null

  return (
    <div className="mb-12">
      <div
        className="text-[0.55rem] uppercase tracking-widest mb-6"
        style={{ color: 'var(--white-30)', borderBottom: '1px solid rgba(10,10,15,0.06)', paddingBottom: '0.5rem' }}
      >
        {label}
      </div>
      <div className="space-y-0 divide-y divide-[rgba(10,10,15,0.06)]">
        {related.map((post) => (
          <Link
            key={`${post.slug}-${post.lang}`}
            href={`/blog/${post.slug}`}
            locale={post.lang}
            className="group flex items-baseline justify-between py-4 transition-opacity hover:opacity-70"
          >
            <div className="flex-1 mr-4">
              <div
                className="text-sm font-medium line-clamp-1"
                style={{ color: 'var(--white-80)', fontFamily: 'var(--font-syne)' }}
              >
                {post.title}
              </div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--white-40)' }}>
                {formatDate(post.date, locale)}
              </div>
            </div>
            <span
              className="text-[0.5rem] uppercase tracking-widest shrink-0 px-2 py-0.5 rounded-full"
              style={{ backgroundColor: 'rgba(147,197,253,0.06)', color: 'rgba(147,197,253,0.55)', border: '1px solid rgba(147,197,253,0.14)' }}
            >
              {post.lang}
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-4">
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
