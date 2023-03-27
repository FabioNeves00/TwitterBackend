import { IsEmail, IsString, Matches } from "class-validator";

export class CreateSessionDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)
  password: string;
}