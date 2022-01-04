import { Module } from '@nestjs/common';
import { BuildsService } from './services/builds.service';
import { BuildsController } from './controllers/builds.controller';

@Module({
  controllers: [BuildsController],
  providers: [BuildsService]
})
export class BuildsModule {}
