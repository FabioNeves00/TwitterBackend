import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { ApiTags } from '@nestjs/swagger';
import { SessionGuard } from 'src/common/decorators/guards/session.guard';
import { GetPropInSession } from 'src/common/decorators/params/get-prop-in-session';

@ApiTags('Posts')
@Controller('posts')
@UseGuards(SessionGuard)
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(
    @GetPropInSession('sub') userId: string,
    @Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto, userId);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findUserPosts(id);
  }
}
