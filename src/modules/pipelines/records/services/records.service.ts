import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRecordDto, UpdateRecordDto, GetRecordDto } from '../dtos/index';
import { RecordsEntity } from '../entities/record.entity';

@Injectable()
export class RecordsService {

  @InjectRepository(RecordsEntity)
  private readonly recordsRepository: Repository<RecordsEntity>;


  /**
   * 新建管线记录
   * @param userId 
   * @param projectId 
   * @param createRecordDto 
   * @returns 
   */
  async createRecord(userId, projectId: number, createRecordDto: CreateRecordDto) {
    try {
      const record = await this.recordsRepository.create({
        ...createRecordDto,
        userId,
        projectId,
        status: 1
      })
      const result = await this.recordsRepository.save(record);
      return result
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  /**
   * 获取管线执行记录
   * @param projectId 
   * @param getRecordsDto 
   * @returns 
   */
  async findRecords(projectId: number, getRecordsDto: GetRecordDto) {
    const { page, size } = getRecordsDto;
    const [data, total] = await this.recordsRepository.createQueryBuilder('records')
      .where('records.projectId = :projectId', { projectId })
      .leftJoinAndMapOne('records.user', 'users', 'users.id = records.userId')
      .select([
        'records.id',
        'records.name',
        'records.status',
        'records.createdAt',
        'records.updatedAt',
        'user.id',
        'user.username',
        'user.nickname',
      ])
      .skip((page - 1) * size || 0)
      .take(size || 10)
      .getManyAndCount()

    return {
      data,
      total,
    };
  }

  async findOne(id: number) {
    const record = this.recordsRepository.findOne(id);
    if (!record) {
      throw new HttpException('管线不存在', HttpStatus.NOT_FOUND)
    }
    return record
  }

  async updateRecord(id: number, updateRecordDto: UpdateRecordDto) {
    try {
      await this.findOne(id);
      const record = await this.recordsRepository.create({
        ...updateRecordDto,
        id
      });
      const result = await this.recordsRepository.save(record);
      return result

    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async removeRecord(id: number) {
    try {
      await this.findOne(id);
      await this.recordsRepository.delete(id);
      return {}
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
