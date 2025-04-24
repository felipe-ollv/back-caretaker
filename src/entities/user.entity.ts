import { Entity, Column, PrimaryColumn, JoinColumn, ManyToMany } from 'typeorm';
import { FamilyEntity } from './family.entity';

@Entity('users')
export class UserEntity {
  @PrimaryColumn()
  id: number;

  @Column({ name: 'uuid_user', unique: true })
  uuid_user: string;

  @ManyToMany(() => FamilyEntity, (family) => family.uuid_family)
  @JoinColumn({ name: 'uuid_family_fk', referencedColumnName: 'uuid_family' })
  uuid_family_fk: string;

  @Column()
  name: string;

  @Column()
  last_name: string;

  @Column()
  bio: string;

  @Column()
  email: string;

  @Column()
  phone: string;
}
