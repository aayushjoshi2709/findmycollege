import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/user/user.entity";
import { CollegeController } from "./college.controller";
import { CollegeEntity } from "./college.entity";
import { CollegeService } from "./college.service";
import { CommentsEntity } from "./comments.entity";
@Module({
    imports: [TypeOrmModule.forFeature([CollegeEntity, CommentsEntity,UserEntity])],
    controllers:[CollegeController],
    providers:[CollegeService]
})
export class CollegeModule{

}