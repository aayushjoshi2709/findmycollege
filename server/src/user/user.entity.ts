import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  fname: string;
  @Column()
  lname: string;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
}
