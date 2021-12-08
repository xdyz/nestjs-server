import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateRoleDto, UpdateRoleDto, GetRoleDto } from '../dtos/index';
import { RolesEntity } from '../entities/roles.entity';

@Injectable()
export class RolesService {
  @InjectRepository(RolesEntity)
  private readonly rolesRepository: Repository<RolesEntity>;

  @Inject()
  private readonly connection: Connection;


  
  
  /**
   * 分页查寻角色
   * @param getRoleDto 
   * @returns 
   */
  async findWithParameters(getRoleDto: GetRoleDto) {
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

  async findOneRole(id: number) {
    const role = await this.rolesRepository.findOne(id);
    if(!role) {
      throw new HttpException('角色不存在', HttpStatus.NOT_FOUND);
    }
    return role;
  }

  /**
   * 获取不同项目的所有的角色
   * @param createRoleDto 
   * @returns 
   */
  async findAllRoles(project_id) {
    const roles = await this.rolesRepository.find({
      where: {
        project_id,
      }
    });
    return roles;
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
    
    try {
      await this.findOneRole(id);

      // save 作为更新的时候，只返回你更新存储的字段，如果你需要返回所有字段，那么需要自己去加一个返回所有字段的方法
      const result = await this.rolesRepository.save({...updateRoleDto, id});
  
      return result
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    try {
      await this.findOneRole(id);
      await this.rolesRepository.delete(id);
      return {}
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
