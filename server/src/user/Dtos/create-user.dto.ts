import { IsEmail, IsString, IsAlphanumeric } from "class-validator";

export class CreateUserDto{
    @IsString()
    fname: string;
    @IsString()
    lname: string; 
    @IsString()
    username: string;
    @IsEmail()
    email: string;
    @IsAlphanumeric()
    password: string;
}