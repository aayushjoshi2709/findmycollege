import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('comments')
export class CommentsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userid: number;

  @Column()
  collegeid: number;

  @Column()
  text: string;
}
