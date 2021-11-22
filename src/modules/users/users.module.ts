import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './entities/users.entity';
import { MembersEntity } from '../members/entities/members.entity';
import { RolesEntity } from '../roles/entities/roles.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersEntity, MembersEntity, RolesEntity]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
