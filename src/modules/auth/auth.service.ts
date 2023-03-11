import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { hash, verify } from 'argon2';
import type { SessionPayload } from 'src/@types/session';
import { InvalidCredentialsException } from 'src/common/exceptions/invalid-credentials';
import { TokenException } from 'src/common/exceptions/invalid-token';
import { configurationService } from 'src/config/config.service';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { CreateSessionDto } from './dto/create-session.dto';
import { SignUpDto } from './dto/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signin(sessionDto: CreateSessionDto) {
    const user = await this.userRepository.findOne({
      where: { email: sessionDto.email },
    });

    if (!user) throw new TokenException()

    if(!verify(user.password, sessionDto.password)) throw new InvalidCredentialsException()

    return this.generateSession({ email: user.email, sub: user.id, username: user.username })
  }

  async signup(signUpDto: SignUpDto) {
    const user = await this.userRepository.findOne({
      where: { email: signUpDto.email },
    });
    
    if (user) throw new UnauthorizedException()
  
    const newUser = this.userRepository.create(signUpDto)
    newUser.password = await hash(newUser.password)
    console.log(newUser);
    await this.userRepository.save(newUser)
    return this.generateSession({ email: newUser.email, sub: newUser.id, username: newUser.username })
  }

  async generateSession(session: SessionPayload) {
    const token = await this.jwtService.signAsync(
      session,
      {
        secret: configurationService.getValue('JWT_SECRET'),
        expiresIn: configurationService.getValue('JWT_EXPIRE'),
      },
    );

    return token;
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