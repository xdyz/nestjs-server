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

  async findOneByUserId(userId: number) {
    const user = await this.usersRepository
      .createQueryBuilder('u')
      .where('u.id = :id', { id: userId })
      .select(['u.id', 'u.username', 'u.email', 'u.isRoot'])
      .leftJoinAndMapMany('u.projects', 'members', 'm', 'u.id = m.user_id')
      .leftJoinAndMapOne('m.role', 'roles', 'r', 'm.role_id = r.id')
      .getOne();

    return user;
  }

  // 创建用户
  async createUser(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);
    return user;
  }

  // 更新用户
  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.update(
      {
        id,
      },
      updateUserDto,
    );
    return user;
  }

  // 删除用户
  async deleteUser(id: number) {
    await this.usersRepository.delete({
      id,
    });
    return {};
  }

  async getAllUsers() {
    const users = await this.usersRepository
      .createQueryBuilder('u')
      .select(['u.id', 'u.username', 'u.email', 'u.isRoot'])
      .leftJoinAndMapMany('u.projects', 'members', 'm', 'u.id = m.user_id')
      .leftJoinAndMapOne('m.role', 'roles', 'r', 'm.role_id = r.id')
      .getMany();

    return users;
  }
}
