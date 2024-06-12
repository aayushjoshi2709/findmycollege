import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  fname: string;

  @IsString()
  lname: string;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
