import { Module } from '@nestjs/common';
import { PackagesService } from './services/packages.service';
import { PackagesController } from './controllers/packages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildEntity } from '../tasks/builds/entities/build.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BuildEntity])],
  controllers: [PackagesController],
  providers: [PackagesService]
})
export class PackagesModule {}
