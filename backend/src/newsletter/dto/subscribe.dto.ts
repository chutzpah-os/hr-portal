import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator'

const PHONE_REGEX = /^\+?[0-9\s\-()]{8,20}$/

export class SubscribeDto {
  @IsString()
  @IsNotEmpty({ message: 'name is required' })
  @MinLength(2, { message: 'name must be at least 2 characters' })
  @MaxLength(100)
  name: string

  @IsEmail({}, { message: 'a valid email is required' })
  @MaxLength(254)
  email: string

  @IsOptional()
  @IsString()
  @Matches(PHONE_REGEX, { message: 'phone must be a valid phone number' })
  phone?: string
}
