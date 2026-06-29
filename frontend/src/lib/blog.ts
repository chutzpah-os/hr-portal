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

function contentDir(locale = 'en'): string {
  const localeDir = path.join(process.cwd(), 'src/content/blog', locale)
  if (fs.existsSync(localeDir)) return localeDir
  return path.join(process.cwd(), 'src/content/blog/en')
}

export function getAllPosts(locale = 'en'): PostMeta[] {
  const dir = contentDir(locale)
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'))

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(dir, filename), 'utf8')
      const { data } = matter(raw)
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
        category: (data.category as PostCategory) ?? 'non-technical',
        tags: (data.tags as string[]) ?? [],
        groups: (data.groups as string[]) ?? [],
        faqs: (data.faqs as FAQ[]) ?? [],
      }
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostBySlug(slug: string, locale = 'en'): Post | null {
  const dir = contentDir(locale)
  const filepath = path.join(dir, `${slug}.mdx`)

  // fallback to EN if locale version doesn't exist
  const finalPath = fs.existsSync(filepath)
    ? filepath
    : path.join(process.cwd(), 'src/content/blog/en', `${slug}.mdx`)

  if (!fs.existsSync(finalPath)) return null

  const raw = fs.readFileSync(finalPath, 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
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

export function formatDate(dateStr: string, locale = 'en'): string {
  return new Date(dateStr).toLocaleDateString(locale === 'pt' ? 'pt-BR' : 'en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
