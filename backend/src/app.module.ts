import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { FirebaseModule } from './firebase/firebase.module'
import { BlogModule } from './blog/blog.module'
import { NewsletterModule } from './newsletter/newsletter.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FirebaseModule,
    BlogModule,
    NewsletterModule,
  ],
})
export class AppModule {}
