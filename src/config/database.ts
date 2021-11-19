import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '10.30.30.61',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'nest',
  autoLoadEntities: true,
  // entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};

export default typeOrmConfig;
