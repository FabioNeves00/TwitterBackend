import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
// import { TokenException } from 'src/common/exceptions/invalid-token';
import { configurationService } from 'src/config/config.service';
import { Repository } from 'typeorm';
import { SessionPayload } from 'src/@types/session';
import { User } from '../users/entities/user.entity';
import { CreateSessionDto } from './dto/create-session.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signin(sessionDto: CreateSessionDto) {
    let user = await this.userRepository.findOne({
      where: { email: sessionDto.email },
    });

    if (!user) {
      //throw does not exist error  NOT FOUND
    }
  }

  async signup(sessionDto: CreateSessionDto) {
    let user = await this.userRepository.findOne({
      where: { email: sessionDto.email },
    });

    if (!user) {
      //throw does not exist error  NOT FOUND
    }
  }

  async generateSession(sessionDto: CreateSessionDto) {

    // const token = await this.jwtService.signAsync(
    //   { ...sessionDto, sub: user.id },
    //   {
    //     secret: configurationService.getValue('JWT_SECRET'),
    //     expiresIn: configurationService.getValue('JWT_EXPIRE'),
    //   },
    // );

    // return token;
  }

  async verifySession(session: string) {
    try {
      return await this.jwtService.verify(session, {
        secret: configurationService.getValue('JWT_SECRET'),
      });
    } catch (error) {
      throw new TokenException();
    }
  }

  async getUserFromSession(session: string) {
    try {
      const payload = this.jwtService.decode(session) as SessionPayload;
      return payload;
    } catch (error) {
      throw new TokenException();
    }
  }
}