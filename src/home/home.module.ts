import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeService } from './service/home.service';
import { HomeController } from './controller/home.controller';

import { TaskEntity } from 'src/entities/tasks.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  providers: [HomeService],
  controllers: [HomeController],
})
export class HomeModule {}
