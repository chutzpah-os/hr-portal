import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { ConfigModule } from '@nestjs/config'
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler'
import { FirebaseModule } from './firebase/firebase.module'
import { NewsletterModule } from './newsletter/newsletter.module'
import { LpResponsesModule } from './lp-responses/lp-responses.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // Rate limiting for public lead-capture endpoints (newsletter/subscribe,
    // lp-responses) — same person/computer resubmitting is fine (handled by
    // the 409-as-success flow), this just caps rapid-fire abuse per IP.
    ThrottlerModule.forRoot([{ ttl: 60000, limit: 10 }]),
    FirebaseModule,
    NewsletterModule,
    LpResponsesModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule {}
