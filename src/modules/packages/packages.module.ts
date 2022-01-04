import { Module } from '@nestjs/common';
import { PackagesService } from './services/packages.service';
import { PackagesController } from './controllers/packages.controller';

@Module({
  controllers: [PackagesController],
  providers: [PackagesService]
})
export class PackagesModule {}
