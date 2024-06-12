import { IsString, IsUrl, IsNumberString } from 'class-validator';

export class CreateCollegeDto {
  @IsString()
  name: string;

  @IsString()
  website: string;

  @IsString()
  courses: string;

  @IsString()
  address: string;

  @IsNumberString()
  phoneNo: string;

  @IsString()
  about: string;

  @IsString()
  location: string;

  @IsUrl()
  imageUrl: string;
}
