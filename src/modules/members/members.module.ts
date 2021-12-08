import { Module } from '@nestjs/common';
import { MembersService } from './services/members.service';
import { MembersController } from './controllers/members.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembersEntity } from './entities/members.entity';
import { RolesEntity } from '../roles/entities/roles.entity';
import { UsersEntity } from '../users/entities/users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([MembersEntity, RolesEntity, UsersEntity])
  ],
  controllers: [MembersController],
  providers: [MembersService],
})
export class MembersModule {}
