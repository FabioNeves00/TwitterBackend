import {
    Body,
    Controller, Post,
    Put, Res
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Public } from 'src/common/decorators/metadata/public.metadata';
import { AuthService } from './auth.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { SignUpDto } from './dto/sign-up.dto';

@Controller('auth')
@ApiTags('Auth Routes')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Public()
  @Put('signin')
  async signin(
    @Body() signInDto: CreateSessionDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const token = await this.authService.signin(signInDto);
    response.cookie('session_token', token);

    return { status: 'Ok' };
  }

  @Public()
  @Post('signup')
  async vote(
    @Body() signUpDto: SignUpDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const token = await this.authService.signup(signUpDto);
    response.cookie('session_token', token);

    return { status: 'Ok' };
  }
}