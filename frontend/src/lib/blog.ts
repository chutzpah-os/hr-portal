import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'src/content/blog')

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

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'))

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), 'utf8')
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

export function getPostBySlug(slug: string): Post | null {
  const filepath = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filepath)) return null
  const raw = fs.readFileSync(filepath, 'utf8')
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

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
