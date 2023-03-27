import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepo: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto, userId: string) {
    const newPost = this.postRepo.create({
      ...createPostDto,
      author: userId as unknown as User,
    });

    return await this.postRepo.save(newPost);
  }

  async findAll() {
    return await this.postRepo.find({
      relations: ['author'],
      select: {
        author: {
          id: true,
          username: true,
        },
      },
    });
  }

  async findUserPosts(id: string) {
    return await this.postRepo.find({
      relations: ['author'],
      where: {
        author: {
          id,
        },
      },
      select: {
        content: true,
        id: true,
        created_at: true,
        author: {
          id: true,
          username: true,
        },
      },
    });
  }
}
