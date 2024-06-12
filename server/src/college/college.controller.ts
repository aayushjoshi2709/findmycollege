import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Param,
  Body,
} from '@nestjs/common';
import { CollegeService } from './college.service';
import { CreateCollegeDto } from './Dtos/create-college.dto';
import { UpdateCollegeDto } from './Dtos/update-college.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGaurd } from 'src/Gaurds/auth.gaurd';
import { UserEntity } from 'src/user/user.entity';
import { CurrentUser } from 'src/user/Decorators/current-user.decorator';
@Controller('colleges')
export class CollegeController {
  constructor(private collegeService: CollegeService) {}
  // get all colleges
  @Get()
  async getAllColleges() {
    const colleges = await this.collegeService.getAll();
    return colleges;
  }
  // get a college with perticular id
  @Get(':id')
  async getCollegeWithId(@Param('id') id: number) {
    const college = await this.collegeService.findById(id);
    return college;
  }

  // search colleges
  @Get('search/:criteria')
  async getAllCollegesByCriteria(@Param('criteria') criteria: string) {
    const colleges = await this.collegeService.findByCriteria(criteria);
    return colleges;
  }

  // add new college to the database
  @UseGuards(AuthGaurd)
  @Post()
  async addNewCollege(
    @Body() body: CreateCollegeDto,
    @CurrentUser() user: UserEntity,
  ) {
    const college = await this.collegeService.addCollege(
      body.name,
      body.website,
      user.id,
      body.courses,
      body.address,
      body.phoneNo,
      body.about,
      body.location,
      body.imageUrl,
    );
    return college;
  }

  // update college data
  @UseGuards(AuthGaurd)
  @Patch(':id')
  async UpdateCollge(
    @CurrentUser() user: UserEntity,
    @Param('id') id: number,
    @Body() body: UpdateCollegeDto,
  ) {
    const res = await this.collegeService.updateCollege(user, id, body);
    return res;
  }
  @UseGuards(AuthGaurd)
  @Delete(':id')
  async DeleteCollege(
    @CurrentUser() user: UserEntity,
    @Param('id') id: number,
  ) {
    const res = await this.collegeService.removeCollege(user, id);
    return res;
  }
  // add comments router
  @UseGuards(AuthGaurd)
  @Post('comments')
  async AddComment(@CurrentUser() user: UserEntity, @Body() body) {
    const res = await this.collegeService.addComment(
      body.text,
      user.id,
      body.collegeId,
    );
    return res;
  }
  // get all comments route
  @Get('comments/:id')
  async GetComment(@CurrentUser() user: UserEntity, @Param('id') id: number) {
    const res = await this.collegeService.getComments(id);
    return res;
  }
  // delete comment
  @UseGuards(AuthGaurd)
  @Delete('comments/:id')
  async DeleteComment(
    @CurrentUser() user: UserEntity,
    @Param('id') id: number,
  ) {
    await this.collegeService.removeComment(user, id);
  }
}
