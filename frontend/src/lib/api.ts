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
  const res = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    // Increase timeout for build environments
    signal: AbortSignal.timeout(30000), // 30 seconds timeout
    ...options,
  })

  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${res.statusText}`)
  }

  return res.json() as Promise<T>
}

export const blogApi = {
  getPosts: () => apiFetch<Post[]>('/posts'),
  getPost: (slug: string) => apiFetch<Post>(`/posts/${slug}`),
}
