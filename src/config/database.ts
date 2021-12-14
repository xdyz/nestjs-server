import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'nest',
  autoLoadEntities: true,
  // entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true
};

export default typeOrmConfig
