import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { FamilyEntity } from './family.entity';
import { UserEntity } from './user.entity';

@Entity('family_members')
export class FamilyMembersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'uuid_family_members', unique: true })
  uuid_family_members: string;

  @ManyToOne(() => FamilyEntity, (family) => family.uuid_family)
  @JoinColumn({ name: 'uuid_family_fk', referencedColumnName: 'uuid_family' })
  uuid_family_fk: string;

  @ManyToOne(() => UserEntity, (user) => user.uuid_user)
  @JoinColumn({ name: 'uuid_user_fk', referencedColumnName: 'uuid_user' })
  uuid_user_fk: string;
}
