import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { TermsEntity } from '../../terms/entities/terms.entity';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/index';
import { CategoryEntity } from '../entities/category.entity';

@Injectable()
export class CategoryService {

  @InjectRepository(CategoryEntity)
  private readonly categoryRepository: Repository<CategoryEntity>;

  @Inject()
  private readonly connection: Connection;

  async findOneCategoryById(id: number) {
    const result = await this.categoryRepository.findOne({
      where: {
        id
      }
    })

    if (!result) throw new HttpException('Category not found', HttpStatus.BAD_REQUEST);
    return result
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
      const category = await this.categoryRepository.create({
        ...createCategoryDto,
        projectId,
      })
      const result = await this.categoryRepository.save(category);
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

  async updateCategory(projectId: number, id: number, updateCategoryDto: UpdateCategoryDto) {
    try {
      await this.findOneCategoryByUid(projectId, updateCategoryDto.categoryUid);
      const result = await this.categoryRepository.save({
        id,
        ...updateCategoryDto
      })

      return result
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async removeCategory(id: number) {
    const queryRunner = await this.connection.createQueryRunner()
    // 连接事务
    await queryRunner.connect();
    // 启动事务
    await queryRunner.startTransaction();
    try {
      // 删除 category
      await queryRunner.manager.delete(CategoryEntity, {
        id
      });

      // 后续还需要删除分类下的检查项
      await queryRunner.manager.delete(TermsEntity,{
        categoryId: id
      })
      // 删除实例下的检查项
      await queryRunner.commitTransaction(); // 提交事务
    } catch (error) {
      await queryRunner.rollbackTransaction(); // 回滚事务
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await queryRunner.release(); // 释放连接
    }

    return {}
  }
}
