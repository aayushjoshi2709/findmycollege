import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserService } from "src/user/user.service";
import { CollegeController } from "./college.controller";
import { CollegeEntity } from "./college.entity";
import { CollegeService } from "./college.service";
@Module({
    imports: [TypeOrmModule.forFeature([CollegeEntity])],
    controllers:[CollegeController],
    providers:[CollegeService]
})
export class CollegeModule{

}