import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "../dtos/create-user.dto";
import { UpdateUserDto } from "../dtos/update-user.dto";
import { UsersEntity } from "../entities/users.entity";
@Injectable()
export class UsersService {
  @InjectRepository(UsersEntity)
  private readonly usersRepository: Repository<UsersEntity>;

  // 通过id 查询用户是否存在
  async findOneById(id: number) {
    const user = await this.usersRepository.findOne({
      where: { id }
    });
    if (!user) throw new HttpException("用户不存在", HttpStatus.BAD_REQUEST);
    return user;
  }

  // 通过用户名查找用户
  findOneByName(username: string, password: string) {
    return this.usersRepository.findOne({
      where: {
        username,
        password
      }
    });
  }

  async findOneByUserId(userId: number) {
    const user = await this.usersRepository
      .createQueryBuilder("u")
      .select(["u.id", "u.username", "u.email", "u.isRoot"])
      .where("u.id = :id", { id: userId })
      .leftJoinAndMapMany("u.projects", "members", "m", "u.id = m.userId")
      .leftJoinAndMapOne("m.role", "roles", "r", "m.roleId = r.id")
      .getOne();

    return user;
  }

  // 创建用户
  async createUser(createUserDto: CreateUserDto) {
    try {
      const user = await this.usersRepository.create(createUserDto);
      const result = this.usersRepository.create(user);
      return result;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // 更新用户
  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    try {
      await this.findOneById(id);
      const user = await this.usersRepository.save({
        id,
        ...updateUserDto
      });
      return user;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // 删除用户
  async deleteUser(id: number) {
    await this.usersRepository.delete({
      id
    });
    return {};
  }

  /**
   * 对于两张表之间没有设置外键关系的情况下，可以使用这种方式，能够将第二张表的数据存在一个属性中
   * leftJoinAndMapMany 和 leftJoinAndMapOne 可以将第二张表的数据存在一个属性中，
   * 他们第一个参数就是需要你设置给哪个属性，
   * 第二个参数就是你需要操作的表 例如，
   * 第三个参数就是表的别名 例如 m，
   * 第四个参数就是关系 u.id = m.user_id
   * SELECT `u`.`id` AS `u_id`, `u`.`username` AS `u_username`, `u`.`email` AS `u_email`, `u`.`is_root` AS `u_is_root`,
   *  `m`.`id` AS `m_id`, `m`.`user_id` AS `m_user_id`, `m`.`project_id` AS `m_project_id`, `m`.`role_id` AS `m_role_id`,
   *  `r`.`id` AS `r_id`, `r`.`name` AS `r_name`, `r`.`privileges` AS `r_privileges`, `r`.`project_root` AS `r_project_root`, `r`.`project_id` AS `r_project_id`
   *  FROM `users` `u`
   *  LEFT JOIN `members` `m` ON `u`.`id` = `m`.`user_id`
   *   LEFT JOIN `roles` `r` ON `m`.`role_id` = `r`.`id`
   * @returns {Promise<UsersEntity[]>}
   */
  async getAllUsers() {
    const users = await this.usersRepository
      .createQueryBuilder("u")
      .select(["u.id", "u.username", "u.email", "u.isRoot"])
      .leftJoinAndMapMany("u.projects", "members", "m", "u.id = m.user_id")
      .leftJoinAndMapOne("m.role", "roles", "r", "m.role_id = r.id")
      .getMany();

    return users;
  }
}
