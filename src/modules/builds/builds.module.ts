import { Module } from '@nestjs/common';
import { BuildsService } from './services/builds.service';
import { BuildsController } from './controllers/builds.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildEntity } from './entities/build.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BuildEntity])],
  controllers: [BuildsController],
  providers: [BuildsService]
})
export class BuildsModule {}
