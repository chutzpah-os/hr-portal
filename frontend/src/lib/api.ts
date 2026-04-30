export interface Post {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  tags: string[]
  coverImage: string | null
  published: boolean
  publishedAt: string | null
  createdAt: string
  updatedAt: string
  category?: 'Technical' | 'Non-Technical'
}

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api'

async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 10000)

  try {
    const res = await fetch(`${API_URL}${path}`, {
      headers: { 'Content-Type': 'application/json', ...options?.headers },
      signal: controller.signal,
      cache: 'no-store',
      ...options,
    })

    clearTimeout(timeoutId)

    if (!res.ok) {
      throw new Error(`API error ${res.status}: ${res.statusText}`)
    }

    return res.json() as Promise<T>
  } catch (error) {
    clearTimeout(timeoutId)
    throw error
  }
}

export const blogApi = {
  getPosts: () => apiFetch<Post[]>('/posts'),
  getPost: (slug: string) => apiFetch<Post>(`/posts/${slug}`),
}