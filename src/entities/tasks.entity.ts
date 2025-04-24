import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('tasks')
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'uuid_task', unique: true })
  uuid_task: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: ['pending', 'canceled', 'completed'],
    default: 'pending',
  })
  status: string;

  @OneToOne(() => UserEntity, (user) => user.uuid_user)
  @JoinColumn({ name: 'uuid_user_fk', referencedColumnName: 'uuid_user' })
  uuid_user_fk: string;

  @Column({
    name: 'created_at',
    type: 'timestamp',
    precision: 3,
    default: () => 'CURRENT_TIMESTAMP(3)',
  })
  createdAt: Date;

  @Column({
    name: 'updated_at',
    type: 'timestamp',
    precision: 3,
    nullable: true,
    default: null,
    onUpdate: 'CURRENT_TIMESTAMP(3)',
  })
  updatedAt: Date;
}
