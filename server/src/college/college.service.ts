import { Injectable, NotFoundException } from "@nestjs/common";
import { CollegeEntity } from "./college.entity";
import { Repository, Like } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CollegeService{

    constructor(@InjectRepository(CollegeEntity) private repo: Repository<CollegeEntity>){}
    
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
    async addCollege(name: string, website: string, userid: number, courses: string, address: string, phoneNo: number, about: string, location:string){
        let college = await this.repo.create({
            name: name,
            website: website,
            userid: userid,
            courses: courses,
            address: address,
            phoneNo: phoneNo,
            about: about,
            location: location
        });
        var createdCollege = await this.repo.save(college);
        return createdCollege;
    }
    async updateCollege(id: number, attrs:Partial<CollegeEntity>){
        const college = await this.repo.findOne({where: {id : id}});
        if(!college) throw new NotFoundException('user not found');
        Object.assign(college, attrs);
        return this.repo.save(college);
    }
    async removeCollege(id: number){
        const college = await this.repo.findOne({where:{id: id}});
        if(!college) throw new NotFoundException('College not found');
        return this.repo.remove(college);
    }
}