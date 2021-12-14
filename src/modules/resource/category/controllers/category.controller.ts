import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, ValidationPipe } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/index';

@Controller('category')
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

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return await this.categoryService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
