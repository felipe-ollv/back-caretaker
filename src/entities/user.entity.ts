import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryColumn()
  uuid_user: number;

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
