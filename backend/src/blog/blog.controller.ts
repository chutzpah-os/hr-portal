import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common'
import { BlogService } from './blog.service'
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'
import { ApiKeyGuard } from '../common/guards/api-key.guard'

@Controller('posts')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  // Public — list all published posts
  @Get()
  findAll() {
    return this.blogService.findAll(true)
  }

  // Public — get a single post by slug
  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.blogService.findBySlug(slug)
  }

  // Admin — create a new post (requires x-api-key header)
  @Post()
  @UseGuards(ApiKeyGuard)
  create(@Body() dto: CreatePostDto) {
    return this.blogService.create(dto)
  }

  // Admin — update a post by slug
  @Patch(':slug')
  @UseGuards(ApiKeyGuard)
  update(@Param('slug') slug: string, @Body() dto: UpdatePostDto) {
    return this.blogService.update(slug, dto)
  }

  // Admin — delete a post by slug
  @Delete(':slug')
  @UseGuards(ApiKeyGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('slug') slug: string) {
    return this.blogService.remove(slug)
  }
}
