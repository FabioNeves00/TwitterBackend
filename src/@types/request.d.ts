import type { CookieOptions, Request } from 'express'

export interface CustomRequest extends Request {
  user: Session;
  cookies: CookieOptions & {
    session_token: string;
  }
}