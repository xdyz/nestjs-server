import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { UsersEntity } from 'src/modules/users/entities/users.entity';
import { Repository } from 'typeorm';
import { GetInstanceDto } from '../dtos';
import { CreateInstanceDto } from '../dtos/create-instance.dto';
import { UpdateInstanceDto } from '../dtos/update-instance.dto';
import { InstanceEntity } from '../entities/instance.entity';

@Injectable()
export class InstanceService {
  @InjectRepository(InstanceEntity)
  private readonly instanceRepository: Repository<InstanceEntity>;


  findOneById(id: number) {
    const instance = this.instanceRepository.createQueryBuilder('instance')
      .where('instance.id = :id', { id })
      .leftJoinAndMapOne('instance.user', 'users', 'user', 'user.id = instance.userId')
      .select([
        'instance.id',
        'instance.name',
        'instance.userId',
        'instance.createdAt',
        'user.id',
        'user.username',
        'user.nickname',
      ])
      .getOne();
    if (!instance) {
      throw new HttpException('Instance not found', HttpStatus.BAD_REQUEST);
    }

    return instance
  }

  async createInstance(projectId: number, userId: number, createInstanceDto: CreateInstanceDto) {
    try {
      
      // create 创建出实例
      const instance =  await this.instanceRepository.create({
        ...createInstanceDto,
        projectId,
        userId,
      })
      
      // save 保存实例 这样就不会返回哪些不需要的字段
      return await this.instanceRepository.save(instance);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findInstances(projectId: number, getInstanceDto: GetInstanceDto) {
    const { page, size } = getInstanceDto;
    try {
      const [instances, count] = await this.instanceRepository.createQueryBuilder('instance')
        .where('instance.projectId = :projectId', { projectId })
        .skip((page - 1) * size || 0)
        .take(size || 10)
        .leftJoinAndMapOne('instance.user', 'users', 'user', 'user.id = instance.userId')
        .select([
          'instance.id',
          'instance.name',
          'instance.userId',
          'instance.createdAt',
          'user.id',
          'user.username',
          'user.nickname',
        ])
        .getManyAndCount();

      return {
        list: instances,
        count
      }
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }



  async updateInstance(id: number, updateInstanceDto: UpdateInstanceDto) {
    try {
      await this.findOneById(id);
      const instance = await this.instanceRepository.save({
        id,
        ...updateInstanceDto
      })
      return instance
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} instance`;
  }
}
