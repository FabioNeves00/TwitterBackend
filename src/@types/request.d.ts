import type { CookieOptions, Request } from 'express';
import type { SessionPayload } from './session'

export interface CustomRequest extends Request {
  user: SessionPayload;
  cookies: CookieOptions & {
    session_token: string;
  }
}