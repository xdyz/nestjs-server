import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UsersEntity } from '../entities/users.entity';
@Injectable()
export class UsersService {
  @InjectRepository(UsersEntity)
  private readonly usersRepository: Repository<UsersEntity>;
  // 通过用户名查找用户
  findOneByName(name: string) {
    return this.usersRepository.findOne({
      where: {
        name,
      },
    });
  }
}
