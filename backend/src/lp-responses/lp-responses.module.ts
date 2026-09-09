import { Module } from '@nestjs/common'
import { LpResponsesController } from './lp-responses.controller'
import { LpResponsesService } from './lp-responses.service'
import { FirebaseModule } from '../firebase/firebase.module'

@Module({
  imports: [FirebaseModule],
  controllers: [LpResponsesController],
  providers: [LpResponsesService],
})
export class LpResponsesModule {}
