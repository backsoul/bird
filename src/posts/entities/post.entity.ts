import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  content: string;

  @Column()
  userUrlPhoto: string;

  @Column()
  userName: string;
}
