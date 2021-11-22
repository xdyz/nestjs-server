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
  findOneByName(username: string, password: string) {
    return this.usersRepository.findOne({
      where: {
        username,
        password,
      },
    });
  }

  async findOneByUser(userId: number) {
    const user = await this.usersRepository
      .createQueryBuilder('u')
      .leftJoinAndMapMany('u.projects', 'members', 'm', 'u.id = m.user_id')
      .leftJoinAndMapOne('m.role', 'roles', 'r', 'm.role_id = r.id')
      .where('u.id = :id', { id: userId })
      .getOne();

    return user;
  }

  // 创建用户
}
