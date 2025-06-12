import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
@Index('IDX_CAT_NAME', ['name'])
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column({ nullable: true })
  breed: string;

  @Column({ nullable: true })
  image: string;

  @Column({ default: true })
  isActive: boolean;
}