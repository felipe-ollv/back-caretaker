import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from 'src/entities/tasks.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HomeService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
  ) {}

  taskList(): Promise<TaskEntity[]> {
    return this.taskRepository.find();
  }

  async getPendingTasksByUser(uuid: string): Promise<any[]> {
    return this.taskRepository
      .createQueryBuilder('task')
      .innerJoinAndSelect('task.uuid_user_fk', 'users')
      .where('users.uuid_user = :uuid', { uuid })
      .andWhere('task.status = :status', { status: 'pending' })
      .select([
        'task.uuid_task',
        'task.title',
        'task.description',
        'task.status',
        'task.createdAt',
        'users.name',
      ])
      .orderBy('task.createdAt', 'DESC')
      .getMany();
  }
}
