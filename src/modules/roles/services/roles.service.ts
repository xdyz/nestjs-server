import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateRoleDto } from '../dtos/create-role.dto';
import { UpdateRoleDto } from '../dtos/update-role.dto';
import { RolesEntity } from '../entities/roles.entity';

@Injectable()
export class RolesService {
  @InjectRepository(RolesEntity)
  private readonly rolesRepository: Repository<RolesEntity>;

  @Inject()
  private readonly connection: Connection;

  async findWithParameters(getRoleDto) {
    const { page, size, ...rest } = getRoleDto;
    const [list, total] =  await this.rolesRepository.findAndCount({
      where: {
        ...rest,
      },
      order: {
        createdAt: 'DESC',
      }, 
      skip: (page - 1) * size || 0, // 偏移量
      take: size | 10,
    });


    return {
      list,
      total
    };
  }

  /**
   * 通过id 获取角色信息
   * @param id
   * @returns
   */

  findOneRole(id: number) {
    return this.rolesRepository.findOne(id);
  }

  /**
   * 新增角色
   * @param createRoleDto
   * @returns
   */
  async createOneRole(createRoleDto: CreateRoleDto) {
    // const queryRunner = this.connection.createQueryRunner();
    // await queryRunner.connect();
    // await queryRunner.startTransaction();
    // let role = null;
    // try {
    //   role = await queryRunner.manager.save(RolesEntity, createRoleDto);
    //   await queryRunner.commitTransaction();
    // } catch (error) {
    //   await queryRunner.rollbackTransaction();
    //   throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    // } finally {
    //   await queryRunner.release();
    // }

    // return role;

    const role = await this.rolesRepository.save(createRoleDto);
    return role;
  }

  async updateRole(id: number, updateRoleDto: UpdateRoleDto) {
    // const queryRunner = this.connection.createQueryRunner();
    // await queryRunner.connect();
    // await queryRunner.startTransaction();
    // try {
    //   // 通过id 更新
    //   await queryRunner.manager.update(RolesEntity, id, updateRoleDto);
    // } catch (error) {}
    const role = await this.rolesRepository.save(updateRoleDto)

    return role
  }

  async remove(id: number) {
    await this.rolesRepository.delete(id);
    return {}
  }
}
