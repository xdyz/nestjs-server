import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBuildDto, UpdateBuildDto, GetBuildDto } from '../dtos/index';
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

  async createBuild( taskId: number, createBuildDto: CreateBuildDto) {
    try {
      const build = await this.buildRepository.create({
        ...createBuildDto,
        taskId
      })
      const result = await this.buildRepository.save(build);
      return result;
    } catch (error) {
      throw new HttpException('创建失败', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  /**
   * 获取构建列表
   * @param taskId number
   * @param packageId number
   * @param getBuildDto GetBuildDto
   * @returns 
   */
  async findBuilds(taskId: number, getBuildDto: GetBuildDto) {
    const { page, size } = getBuildDto;
    const result = await this.buildRepository.find({
      where: {
        taskId,
      },
      skip: (page - 1) * size,
      take: size
    });
    return result;
  }

  async updateBuild(id: number, updateBuildDto: UpdateBuildDto) {
    try {
      await this.buildRepository.findOne(id);
      const build = await this.buildRepository.create({
        ...updateBuildDto,
        id
      })
      const result = await this.buildRepository.save(build);
      return result;
    } catch (error) {
      throw new HttpException('更新失败', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
