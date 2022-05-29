import { IsString, IsNumber, IsOptional,IsUrl, IsNumberString } from "class-validator";

export class UpdateCollegeDto{
    @IsOptional()
    @IsString()
    name: string;
    @IsOptional()
    @IsString()
    website: string;
    @IsOptional()
    @IsString()
    courses: string;
    @IsOptional()
    @IsString()
    address: string;
    @IsOptional()
    @IsNumberString()
    phoneNo: String;
    @IsOptional()
    @IsString()
    about: string
    @IsOptional()
    @IsString()
    location: string
    @IsOptional()
    @IsUrl()
    imageUrl: string
}