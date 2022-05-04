import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { randomBytes, scrypt as _scrypt} from "crypto";
import { promisify } from "util";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
const scrypt = promisify(_scrypt);

@Injectable()
export class UserService{
    constructor(@InjectRepository(UserEntity) private repo: Repository<UserEntity>){}
    async createUser(fname: string, lname: string, username: string, email: string, password: string){
        let checkUser = await this.repo.find({where: {email: email}});
        if(checkUser.length > 0) throw new BadRequestException('User already exist');
        // hash the user pass
        // generate salt
        const salt = randomBytes(8).toString('hex');
        const hash = (await scrypt(password, salt, 32)) as Buffer;
        const result = salt + '.' + hash.toString('hex');
        let user = this.repo.create( {
            fname: fname, 
            lname: lname, 
            username: username, 
            email: email, 
            password: result 
        });
        return this.repo.save(user);
    }
    async signIn(username: string, password: string){ 
        const [user] = await this.repo.find({where:{username: username}});
        if(!user) throw new NotFoundException('user not found');
        const [salt, storedHash] = user.password.split('.');
        const hash = (await scrypt(password, salt, 32)) as Buffer;
        if(storedHash != hash.toString('hex')) throw new BadRequestException('bad password');
        return user;
    }
    async getAllUser(): Promise<UserEntity[]>{
        let users = await this.repo.find({});
        return users;
    }
    async findOne(id: number){
        let user = await this.repo.findOne({where:{id:id}});
        return user;
    }
    async updateUser(id:number, attrs: Partial<UserEntity>){
        const user = await this.repo.findOne({where:{id:id}});
        if(!user) throw new NotFoundException('user not found');
        Object.assign(user, attrs);
        return this.repo.save(user);
    }

    async removeUser(id: number){
        const user = await this.repo.findOne({where:{id: id}});
        if(!user) throw new NotFoundException('user not found');
        return this.repo.remove(user);
    }
}