import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type PostCategory = 'technical' | 'non-technical'

export interface FAQ {
  question: string
  answer: string
}

export interface PostMeta {
  slug: string
  lang: string
  title: string
  date: string
  excerpt: string
  category: PostCategory
  tags: string[]
  groups: string[]
  faqs: FAQ[]
}

export interface Post extends PostMeta {
  content: string
}

const BLOG_ROOT = () => path.join(process.cwd(), 'src/content/blog')

// Returns locale dirs that actually contain .mdx files
export function getAvailableBlogLangs(): string[] {
  const root = BLOG_ROOT()
  if (!fs.existsSync(root)) return ['en']
  return fs
    .readdirSync(root)
    .filter((entry) => {
      const p = path.join(root, entry)
      return (
        fs.statSync(p).isDirectory() &&
        fs.readdirSync(p).some((f) => f.endsWith('.mdx'))
      )
    })
    .sort()
}

function readPostsFromDir(dir: string, lang: string): PostMeta[] {
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(dir, filename), 'utf8')
      const { data } = matter(raw)
      return {
        slug,
        lang,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
        category: (data.category as PostCategory) ?? 'non-technical',
        tags: (data.tags as string[]) ?? [],
        groups: (data.groups as string[]) ?? [],
        faqs: (data.faqs as FAQ[]) ?? [],
      }
    })
}

// Returns all posts from all locale dirs that have content, tagged with lang.
export function getAllPosts(): PostMeta[] {
  const root = BLOG_ROOT()
  const langs = getAvailableBlogLangs()
  return langs
    .flatMap((lang) => readPostsFromDir(path.join(root, lang), lang))
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostBySlug(slug: string, locale = 'en'): Post | null {
  const root = BLOG_ROOT()
  const localeFile = path.join(root, locale, `${slug}.mdx`)
  const enFile = path.join(root, 'en', `${slug}.mdx`)

  const finalPath = fs.existsSync(localeFile)
    ? localeFile
    : fs.existsSync(enFile)
    ? enFile
    : null

  if (!finalPath) return null

  const lang = finalPath === localeFile ? locale : 'en'
  const raw = fs.readFileSync(finalPath, 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    lang,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    category: (data.category as PostCategory) ?? 'non-technical',
    tags: (data.tags as string[]) ?? [],
    groups: (data.groups as string[]) ?? [],
    faqs: (data.faqs as FAQ[]) ?? [],
    content,
  }
}

const LOCALE_FORMATS: Record<string, string> = {
  en: 'en-US',
  pt: 'pt-BR',
  es: 'es-ES',
  fr: 'fr-FR',
  ca: 'ca-ES',
}

// Returns which locales have a file for this slug (not fallbacks)
export function getPostLangs(slug: string): string[] {
  const root = BLOG_ROOT()
  return getAvailableBlogLangs().filter((lang) =>
    fs.existsSync(path.join(root, lang, `${slug}.mdx`))
  )
}

export function formatDate(dateStr: string, locale = 'en'): string {
  return new Date(dateStr).toLocaleDateString(LOCALE_FORMATS[locale] ?? 'en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
