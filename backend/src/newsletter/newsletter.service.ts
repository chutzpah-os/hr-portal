import { Injectable, ConflictException } from '@nestjs/common'
import { FirebaseService } from '../firebase/firebase.service'
import { SubscribeDto } from './dto/subscribe.dto'

const COLLECTION = 'newsletter_subscribers'

@Injectable()
export class NewsletterService {
  constructor(private readonly firebase: FirebaseService) {}

  async subscribe(dto: SubscribeDto): Promise<{ message: string }> {
    const existing = await this.firebase
      .collection(COLLECTION)
      .where('email', '==', dto.email.toLowerCase())
      .limit(1)
      .get()

    if (!existing.empty) {
      throw new ConflictException('Email already subscribed')
    }

    await this.firebase.collection(COLLECTION).add({
      email: dto.email.toLowerCase(),
      subscribedAt: new Date().toISOString(),
    })

    return { message: 'Subscribed successfully' }
  }
}
