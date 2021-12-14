import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/index';
import { CategoryEntity } from '../entities/category.entity';

@Injectable()
export class CategoryService {

  @InjectRepository(CategoryEntity)
  private readonly categoryRepository: Repository<CategoryEntity>;

  async findOneCategoryById(id: number) {
    return `This action returns a #${id} category`;
  }


  /**
   * category_uid 不可重复
   * @param uid 
   * @returns 
   */
  async findOneCategoryByUid(projectId, categoryUid: string) {
    const result = await this.categoryRepository.findOne({
      where: {
        categoryUid,
        projectId,
      }
    });

    if (result) throw new HttpException('Category_uid already exists ', HttpStatus.BAD_REQUEST);

    return result
  }


  async createResouceCategory(projectId: number, createCategoryDto: CreateCategoryDto) {
    try {
      await this.findOneCategoryByUid(projectId, createCategoryDto.categoryUid);
      const result = await this.categoryRepository.save({
        ...createCategoryDto,
        projectId,
      });
      return result;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  findAllCategoryByProjectId(projectId: number) {
    const result = this.categoryRepository.find({
      where: {
        projectId,
      }
    })

    return result
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
