import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common'
import { LpResponsesService } from './lp-responses.service'
import { SubmitResponsesDto } from './dto/submit-responses.dto'

@Controller('lp-responses')
export class LpResponsesController {
  constructor(private readonly lpResponsesService: LpResponsesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  submit(@Body() dto: SubmitResponsesDto) {
    return this.lpResponsesService.submit(dto)
  }
}
