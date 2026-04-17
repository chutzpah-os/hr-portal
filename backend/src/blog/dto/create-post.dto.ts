import { IsString, IsBoolean, IsArray, IsOptional, MinLength, IsIn  } from 'class-validator'

export class CreatePostDto {
  @IsString()
  @MinLength(3)
  title: string

  @IsString()
  @MinLength(3)
  slug: string

  @IsString()
  @MinLength(10)
  content: string

  @IsString()
  excerpt: string

  @IsArray()
  @IsString({ each: true })
  tags: string[]

  @IsOptional()
  @IsString()
  coverImage?: string

  @IsOptional()
  @IsBoolean()
  published?: boolean

  @IsOptional()
  @IsIn(['Technical', 'Non-Technical'])
  category?: 'Technical' | 'Non-Technical'
}
