import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TermsEntity } from '../../terms/entities/terms.entity';
import { CreateItemDto, UpdateItemDto } from '../dtos/index';
import { InstanceItemsEntity } from '../entities/instance_items.entity';

@Injectable()
export class InstanceItemsService {

  @InjectRepository(InstanceItemsEntity)
  private readonly instanceItemsRepository: Repository<InstanceItemsEntity>
  @InjectRepository(TermsEntity)
  private readonly termsRepository: Repository<TermsEntity>

  async findOneItemById(id: number) {
    const item =  await this.instanceItemsRepository.findOne(id);
    if(!item)
      throw new HttpException('Resouce Instance Item Not found', HttpStatus.NOT_FOUND)
    return item
  }

  async createInstanceItem(instanceId, projectId, createItemDto: CreateItemDto) {
    try {
      const { ids } = createItemDto
      const iterms = await this.termsRepository.createQueryBuilder('terms')
        .where('terms.id IN (:...ids)', { ids })
        .select([
          'id AS term_id',
          'detect_paths',
          'filter_paths',
          'filter_regex',
          'threshold_value',
          'enabled'
        ])
        .getMany()

      const instanceItems = iterms.map(iterm => {
        return {
          ...iterm,
          instance_id: instanceId,
          project_id: projectId
        }
      })

      const items = await this.instanceItemsRepository.create(instanceItems)
      const result = await this.instanceItemsRepository.save(items)

      return result

    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async findAllByInstanceId(instanceId: number, projectId: number) {
    try {
      const result = await this.instanceItemsRepository.find({
        where: {
          instanceId,
          projectId
        }
      })
      return result
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }


  async updateItem(id: number, updateItemDto: UpdateItemDto) {
    try {
      await this.findOneItemById(id)
      return await this.instanceItemsRepository.save({
        ...updateItemDto,
        id
      })
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async removeItem(id: number) {
    try {
      await this.findOneItemById(id)
      await this.instanceItemsRepository.delete(id)
      return {}
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
