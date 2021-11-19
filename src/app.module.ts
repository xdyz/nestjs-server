import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from 'src/config/database';
import { UsersModule } from './modules/users/users.module';
import { MembersModule } from './modules/members/members.module';
import { AuthModule } from './modules/auth/auth.module';
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, MembersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
