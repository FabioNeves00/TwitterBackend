
import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidCredentialsException extends HttpException {
  constructor() {
    super('Wrong credentials', HttpStatus.UNAUTHORIZED);
  }
}