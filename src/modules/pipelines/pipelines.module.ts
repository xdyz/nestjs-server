import { Module } from '@nestjs/common';
import { PipelinesService } from './list/services/pipelines.service';
import { PipelinesController } from './list/controllers/pipelines.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from '@nestjs/core';
import { PipelinesEntity } from './list/entities/pipeline.entity';
import { RecordsEntity } from './records/entities/record.entity';
import { RecordsController } from './records/controllers/records.controller';
import { RecordsService } from './records/services/records.service';

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'pipelines',
        module: PipelinesModule
      }
    ]),
    TypeOrmModule.forFeature([PipelinesEntity, RecordsEntity])
  ],
  controllers: [PipelinesController, RecordsController],
  providers: [PipelinesService, RecordsService]
})
export class PipelinesModule {}
