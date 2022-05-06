import { IsEmail, IsString, IsOptional } from "class-validator";

export class UpdateUserDto{
    @IsOptional()
    @IsString()
    fname: string;
    @IsOptional()
    @IsString()
    lname: string; 
    @IsOptional()
    @IsString()
    username: string;
    @IsOptional()
    @IsEmail()
    email: string;
}