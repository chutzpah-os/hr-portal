import { Type } from 'class-transformer'
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator'

class AnswerDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  questionId: string

  @IsString()
  @IsNotEmpty()
  @MaxLength(2000)
  answer: string
}

export class SubmitResponsesDto {
  @IsOptional()
  @IsEmail({}, { message: 'leadEmail must be a valid email' })
  @MaxLength(254)
  leadEmail?: string

  @IsOptional()
  @IsString()
  @MaxLength(5)
  locale?: string

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AnswerDto)
  answers: AnswerDto[]
}
