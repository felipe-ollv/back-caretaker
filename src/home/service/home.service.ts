import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/entities/tasks.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HomeService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  taskList(): Promise<Task[]> {
    return this.taskRepository.find();
  }
}
