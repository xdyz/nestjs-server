import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, ValidationPipe, Put } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/index';
import { ApiTags } from '@nestjs/swagger';

@Controller('category')
@ApiTags('检查分类')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Headers('projectId') projectId: string, @Body(ValidationPipe) createCategoryDto: CreateCategoryDto) {
    return this.categoryService.createResouceCategory(+projectId, createCategoryDto);
  }

  @Get()
  async findAll(@Headers('projectId') projectId: string) {
    return await this.categoryService.findAllCategoryByProjectId(+projectId);
  }

  @Get(':id')
  findOneCategoryById(@Param('id') id: string) {
    return this.categoryService.findOneCategoryById(+id);
  }

  @Put(':id')
  async updateCategory(@Headers('projectId') projectId: string, @Param('id') id: string, @Body(ValidationPipe) updateCategoryDto: UpdateCategoryDto ) {
    return await this.categoryService.updateCategory(+projectId, +id, updateCategoryDto);
  }

  @Delete(':id')
  async removeCategory(@Param('id') id: string) {
    return await this.categoryService.removeCategory(+id);
  }
}
