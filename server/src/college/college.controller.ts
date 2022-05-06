import { Controller, Get, Post, Delete, Patch, Param, Body, UseInterceptors } from "@nestjs/common";
import { CollegeService } from "./college.service";
import { CreateCollegeDto } from "./Dtos/create-college.dto";
import { UpdateCollegeDto } from "./Dtos/update-college.dto";
import { UseGuards } from "@nestjs/common";
import { AuthGaurd } from "src/Gaurds/auth.gaurd";
import { UserEntity } from "src/user/user.entity";
import { CurrentUser } from "src/user/Decorators/current-user.decorator";
@Controller('colleges')
export class CollegeController{
    constructor(private collegeService: CollegeService){}
    // get all colleges 
    @Get()
    async getAllColleges(){
        let colleges = await this.collegeService.getAll();
        return colleges;
    }
    // get a college with perticular id
    @Get(':id')
    async getCollegeWithId(@Param('id') id: number){
        let college = await this.collegeService.findById(id);
        return college;
    }

    // search colleges 
    @Get('search/:criteria')
    async getAllCollegesByCriteria(@Param('criteria') criteria: string){
        let colleges = await this.collegeService.findByCriteria(criteria);
        return colleges;
    }

    // add new college to the database
    @UseGuards(AuthGaurd)
    @Post()
    async addNewCollege(@Body() body :CreateCollegeDto,@CurrentUser() user: UserEntity){
        let college = await this.collegeService.addCollege(body.name, body.website, user.id, body.courses, body.address, body.phoneNo, body.about, body.location);
        return college;
    }

    // update college data
    @UseGuards(AuthGaurd)
    @Patch(':id')
    async UpdateCollge(@Param('id') id: number, @Body() body: UpdateCollegeDto){
        let res = await this.collegeService.updateCollege(id,body);
        return res;
    }
    @UseGuards(AuthGaurd)
    @Delete(':id')
    async DeleteCollege(@Param('id') id: number){
        let res = await this.collegeService.removeCollege(id);
        return res;
    }
}