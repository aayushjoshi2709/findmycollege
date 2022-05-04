import { IsEmail, IsString, IsAlphanumeric } from "class-validator";

export class SignInUserDto{
    @IsString()
    username: string;
    @IsAlphanumeric()
    password: string;
}