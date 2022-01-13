import { Module } from '@nestjs/common';
import { PipelinesService } from './list/services/pipelines.service';
import { PipelinesController } from './list/controllers/pipelines.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'pipelines',
        module: PipelinesModule
      }
    ]),
    TypeOrmModule.forFeature([])
  ],
  controllers: [PipelinesController],
  providers: [PipelinesService]
})
export class PipelinesModule {}
