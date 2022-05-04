import { IsEmail, IsString, IsAlphanumeric, IsOptional } from "class-validator";

export class UpdateUserDto{
    @IsString()
    @IsOptional()
    fname: string;
    @IsString()
    @IsOptional()
    lname: string; 
    @IsString()
    @IsOptional()
    username: string;
    @IsEmail()
    @IsOptional()
    email: string;
    @IsAlphanumeric()
    @IsOptional()
    password: string;
}