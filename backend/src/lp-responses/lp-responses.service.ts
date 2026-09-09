import { Injectable } from '@nestjs/common'
import { FirebaseService } from '../firebase/firebase.service'
import { SubmitResponsesDto } from './dto/submit-responses.dto'

const COLLECTION = 'lp_responses'

@Injectable()
export class LpResponsesService {
  constructor(private readonly firebase: FirebaseService) {}

  async submit(dto: SubmitResponsesDto): Promise<{ message: string }> {
    await this.firebase.collection(COLLECTION).add({
      leadEmail: dto.leadEmail?.toLowerCase() ?? null,
      locale: dto.locale ?? null,
      answers: dto.answers.map((a) => ({ questionId: a.questionId, answer: a.answer })),
      submittedAt: new Date().toISOString(),
    })

    return { message: 'Responses recorded' }
  }
}
