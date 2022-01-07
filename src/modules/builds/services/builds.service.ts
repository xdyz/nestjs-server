import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBuildDto, UpdateBuildDto } from '../dtos/index';
import { BuildEntity } from '../entities/build.entity';

@Injectable()
export class BuildsService {

  @InjectRepository(BuildEntity)
  private readonly buildRepository: Repository<BuildEntity>

  /**
   * 根据id 获取build 记录
   * @param id number
   * @returns 
   */
  async findOneBuildById(id: number) {
    const result = await this.buildRepository.findOne(id);
    if (!result) throw new HttpException('该构建不存在', HttpStatus.BAD_REQUEST);
    return result;
  }
  create(createBuildDto: CreateBuildDto) {
    return 'This action adds a new build';
  }

  findAll() {
    return `This action returns all builds`;
  }

  update(id: number, updateBuildDto: UpdateBuildDto) {
    return `This action updates a #${id} build`;
  }
}
