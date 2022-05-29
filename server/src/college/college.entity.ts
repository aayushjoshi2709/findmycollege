import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CollegeEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    website: string;
    @Column()
    userid: number;
    @Column()
    courses: string;
    @Column()
    address: string;
    @Column({nullable: false,type:'bigint'})
    phoneNo: string;
    @Column()
    about: string
    @Column()
    location: string
    @Column()
    imageUrl: string
}