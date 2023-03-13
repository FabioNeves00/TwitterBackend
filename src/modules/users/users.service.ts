import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  findAll() {
    return this.userRepo.find({
      relations: ['posts'],
    });
  }

  findOne(id: string) {
    return this.userRepo.find({
      where: {
        id,
      },
      relations: ['posts'],
    });
  }
}
