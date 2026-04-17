import { Injectable, NotFoundException, ConflictException } from '@nestjs/common'
import { FirebaseService } from '../firebase/firebase.service'
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'
import { Post } from './entities/post.entity'

const COLLECTION = 'posts'

@Injectable()
export class BlogService {
  constructor(private readonly firebase: FirebaseService) {}

  async create(dto: CreatePostDto): Promise<Post> {
    const existing = await this.firebase
      .collection(COLLECTION)
      .where('slug', '==', dto.slug)
      .get()

    if (!existing.empty) {
      throw new ConflictException(`Post with slug "${dto.slug}" already exists`)
    }

    const now = new Date().toISOString()
    const post: Omit<Post, 'id'> = {
      title: dto.title,
      slug: dto.slug,
      content: dto.content,
      excerpt: dto.excerpt,
      tags: dto.tags,
      category: dto.category,
      coverImage: dto.coverImage ?? null,
      published: dto.published ?? false,
      publishedAt: dto.published ? now : null,
      createdAt: now,
      updatedAt: now,
    }

    const ref = await this.firebase.collection(COLLECTION).add(post)
    return { id: ref.id, ...post }
  }

  async findAll(onlyPublished = true): Promise<Post[]> {
    let query = this.firebase.collection(COLLECTION).orderBy('createdAt', 'desc')

    if (onlyPublished) {
      query = query.where('published', '==', true) as any
    }

    const snapshot = await query.get()
    return snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as Omit<Post, 'id'>) }))
  }

  async findBySlug(slug: string): Promise<Post> {
    const snapshot = await this.firebase
      .collection(COLLECTION)
      .where('slug', '==', slug)
      .limit(1)
      .get()

    if (snapshot.empty) {
      throw new NotFoundException(`Post "${slug}" not found`)
    }

    const doc = snapshot.docs[0]
    return { id: doc.id, ...(doc.data() as Omit<Post, 'id'>) }
  }

  async update(slug: string, dto: UpdatePostDto): Promise<Post> {
    const post = await this.findBySlug(slug)

    const now = new Date().toISOString()
    const updates: Partial<Post> = {
      ...dto,
      updatedAt: now,
    }

    if (dto.published && !post.published) {
      updates.publishedAt = now
    }

    await this.firebase.collection(COLLECTION).doc(post.id).update(updates)
    return { ...post, ...updates }
  }

  async remove(slug: string): Promise<void> {
    const post = await this.findBySlug(slug)
    await this.firebase.collection(COLLECTION).doc(post.id).delete()
  }
}
