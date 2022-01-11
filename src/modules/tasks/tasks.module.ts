import { Module } from '@nestjs/common';
import { TasksService } from './list/services/tasks.service';
import { TasksController } from './list/controllers/tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksEntity } from './list/entities/task.entity';
import { BuildsController } from './builds/controllers/builds.controller';
import { BuildEntity } from './builds/entities/build.entity';
import { BuildsService } from './builds/services/builds.service';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'tasks',
        module: TasksModule
      }
    ]),
    TypeOrmModule.forFeature([TasksEntity, BuildEntity]),
  ],
  controllers: [TasksController, BuildsController],
  providers: [TasksService, BuildsService]
})
export class TasksModule {}
