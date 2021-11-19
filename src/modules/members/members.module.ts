import { Module } from '@nestjs/common';
import { MembersService } from './services/members.service';
import { MembersController } from './controllers/members.controller';

@Module({
  controllers: [MembersController],
  providers: [MembersService],
})
export class MembersModule {}
