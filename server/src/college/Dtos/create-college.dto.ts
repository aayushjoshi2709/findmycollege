import { IsString, IsNumber } from "class-validator";

export class CreateCollegeDto{
    @IsString()
    name: string;
    @IsString()
    website: string;
    @IsString()
    courses: string;
    @IsString()
    address: string;
    @IsNumber()
    phoneNo: number;
    @IsString()
    about: string
    @IsString()
    location: string
}


