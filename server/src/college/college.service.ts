import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CollegeEntity } from "./college.entity";
import { Repository, Like } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/user/user.entity";
import { CommentsEntity } from "./comments.entity";
@Injectable()
export class CollegeService{
    constructor(@InjectRepository(CollegeEntity) private repo: Repository<CollegeEntity>,
                @InjectRepository(CommentsEntity) private commentsRepo: Repository<CommentsEntity>,
                @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>
    ){}
    async getAll(){
        let colleges = await this.repo.find({});
        return colleges;
    }
    async findById(id: number){
        let college = await this.repo.findOne({where:{id:id}});
        if(!college) throw new NotFoundException('College not found');
        return college;
    }

    async findByCriteria(criteria: string){
        let colleges = await this.repo.find({ where:
            [ 
                {name: Like(`%${criteria}%`)},
                {address: Like(`%${criteria}%`)},
                {location: Like(`%${criteria}%`)},
                {courses: Like(`%${criteria}%`)}
            ]
        });
        return colleges;
    }
    async addCollege(name: string, website: string, userid: number, courses: string, address: string, phoneNo: string, about: string, location:string, imageUrl:string){
        let college = this.repo.create({
            name: name,
            website: website,
            userid: userid,
            courses: courses,
            address: address,
            phoneNo: phoneNo,
            about: about,
            location: location,
            imageUrl: imageUrl
        });
        var createdCollege = await this.repo.save(college);
        return createdCollege;
    }
    async updateCollege(user:UserEntity, id: number, attrs:Partial<CollegeEntity>){
        const college = await this.repo.findOne({where: {id : id}});
        if(!college) throw new NotFoundException('user not found');
        if(user.id != college.userid) throw new BadRequestException('you are not authorised for this operation');
        Object.assign(college, attrs);
        return this.repo.save(college);
    }
    async removeCollege(user: UserEntity,id: number){
        const college = await this.repo.findOne({where:{id: id}});
        if(!college) throw new NotFoundException('College not found');
        if(user.id != college.userid) throw new BadRequestException('you are not authorised for this operation');
        return this.repo.remove(college);
    }   
    async addComment(text:string, userid:number, collegeId:number){
        let comment = this.commentsRepo.create({
            userid: userid,
            collegeid: collegeId,
            text: text
        })
        return this.commentsRepo.save(comment);
    }
    async getComments(collegeId:number){
        const comments = await this.commentsRepo.find({where:{collegeid: collegeId}});  
        let tempComment:any = [...comments];
        let res = {};
        await Promise.all(Object.keys(tempComment).map(async (idx,key) => {
            const uid = tempComment[key].userid;
            let user: UserEntity = await Promise.resolve(this.userRepo.findOne({ where: { id: uid } }));
            let resuser = {id:user.id, username:user.username};
            tempComment[key].user = resuser;
        }))
        return tempComment;           
    }
    async removeComment(user: UserEntity,id: number){
        const comment = await this.commentsRepo.findOne({where:{id: id}});
        if(!comment) throw new NotFoundException('College not found');
        if(user.id != comment.userid) throw new BadRequestException('you are not authorised for this operation');
        return this.commentsRepo.remove(comment);
    }
}