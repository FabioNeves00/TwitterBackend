import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { CustomRequest } from 'src/@types/request';
import type { SessionPayload } from 'src/@types/session';

export const GetPropInSession = createParamDecorator(
  (data: keyof SessionPayload, ctx: ExecutionContext) => {
    const request: CustomRequest = ctx.switchToHttp().getRequest();
    return request.user[data];
  },
);
