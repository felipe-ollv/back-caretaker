import { Controller, Get } from '@nestjs/common';
import { HomeService } from '../service/home.service';
import { Task } from 'src/entities/tasks.entity';

@Controller('/home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('/task-list')
  fetchTaskList(): Promise<Task[]> {
    console.log('chamou o controller');
    return this.homeService.taskList();
  }
}
