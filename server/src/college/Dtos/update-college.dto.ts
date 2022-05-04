import { IsString, IsNumber, IsOptional } from "class-validator";

export class UpdateCollegeDto{
    @IsOptional()
    @IsString()
    name: string;
    @IsOptional()
    @IsString()
    website: string;
    @IsOptional()
    @IsNumber()
    userid: number;
    @IsOptional()
    @IsString()
    courses: string;
    @IsOptional()
    @IsString()
    address: string;
    @IsOptional()
    @IsNumber()
    phoneNo: number;
    @IsOptional()
    @IsString()
    about: string
    @IsOptional()
    @IsString()
    location: string
}