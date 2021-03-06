import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import typeOrmConfig from "src/config/database";
import { UsersModule } from "./modules/users/users.module";
import { MembersModule } from "./modules/members/members.module";
import { AuthModule } from "./modules/auth/auth.module";
import { ProjectsModule } from "./modules/projects/projects.module";
import { RolesModule } from "./modules/roles/roles.module";
import { ResourceModule } from "./modules/resource/resource.module";
// import { SentryModule } from '@ntegral/nestjs-sentry';
import { PackagesModule } from "./modules/packages/packages.module";
import { TasksModule } from "./modules/tasks/tasks.module";
import { PipelinesModule } from "./modules/pipelines/pipelines.module";

console.log(process.env.NODE_ENV);
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    // SentryModule.forRoot({
    //   dsn: 'https://07f9431a94fc4f498c9101098d94c9e6@o1067381.ingest.sentry.io/6060907',
    //   tracesSampleRate: 1.0,
    // }),
    UsersModule,
    MembersModule,
    AuthModule,
    ProjectsModule,
    RolesModule,
    ResourceModule,
    PackagesModule,
    TasksModule,
    PipelinesModule
  ],

  controllers: [],
  providers: []
})
export class AppModule {}
