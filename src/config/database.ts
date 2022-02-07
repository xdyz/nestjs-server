import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const typeOrmConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123456",
  database: "nest",
  autoLoadEntities: true,
  entities: [__dirname + "/../**/*.entity.{js,ts}"], // 扫描所有的entity production 时不要开启
  synchronize: true // 同步数据库 production 时不要开启
};

export default typeOrmConfig;
