import { Controller, Get, Param } from '@nestjs/common';
import { HomeService } from '../service/home.service';

@Controller('/home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('/task-list/:uuidUser')
  async fetchTaskList(@Param('uuidUser') uuidUser: string): Promise<any> {
    const aux = await this.homeService.getPendingTasksByUser(uuidUser);
    console.log(aux);
    return aux;
  }
}
