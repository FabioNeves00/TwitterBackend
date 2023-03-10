import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { CustomRequest } from 'src/@types/request';

export const GetInCookies = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request: CustomRequest = ctx.switchToHttp().getRequest();
    return request.cookies[data];
  },
);
