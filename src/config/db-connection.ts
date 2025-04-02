import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const DbConnection: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: ['query', 'schema', 'error'],
  logger: 'advanced-console',
};
