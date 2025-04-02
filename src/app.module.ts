/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

// Controllers
import { AppController } from './app.controller';
import { HomeController } from './home/controller/home.controller';

// Services
import { AppService } from './app.service';
import { HomeService } from './home/service/home.service';

// Modules

// Entities
import { Task } from './entities/tasks.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Task],
    }),
    TypeOrmModule.forFeature([Task]),
  ],
  controllers: [AppController, HomeController],
  providers: [AppService, HomeService],
})
export class AppModule {}
