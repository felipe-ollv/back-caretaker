import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('family')
export class FamilyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'uuid_family', unique: true })
  uuid_family: string;

  @Column()
  name: string;
}
