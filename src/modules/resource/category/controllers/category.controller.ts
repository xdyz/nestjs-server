import { Controller, Get, Post, Body, Param, Delete, Headers, ValidationPipe, Put, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { CreateCategoryDto, UpdateCategoryDto, CreateExtraDto } from '../dtos/index';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

@Controller('category')
@ApiTags('检查分类')
@UseInterceptors(ClassSerializerInterceptor)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiOperation({ summary: '新增分类信息' })
  async create(@Headers('projectId') projectId: string, @Body(ValidationPipe) createCategoryDto: CreateCategoryDto) {
    return await this.categoryService.createResouceCategory(+projectId, createCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: '获取所有分类信息' })
  async findAll(@Headers('projectId') projectId: string) {
    return await this.categoryService.findAllCategoryByProjectId(+projectId);
  }

  @Get(':id')
  @ApiOperation({ summary: '根据id 获取分类信息' })
  findOneCategoryById(@Param('id') id: string) {
    return this.categoryService.findOneCategoryById(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: '更新分类信息' })
  async updateCategory(@Headers('projectId') projectId: string, @Param('id') id: string, @Body(ValidationPipe) updateCategoryDto: UpdateCategoryDto ) {
    return await this.categoryService.updateCategory(+projectId, +id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除分类' })
  async removeCategory(@Param('id') id: string) {
    return await this.categoryService.removeCategory(+id);
  }


  @Get('extra/:id')
  @ApiOperation({ summary: '获取分类额外信息' })
  async findOneCategoryExtraByCategoryId(@Param('id') id: string) {
    return await this.categoryService.findOneCategoryExtraByCategoryId(+id);
  }

  @Post('extra/:id')
  @ApiOperation({ summary: '新增分类额外信息' })
  async createCategoryExtra(
    @Param('id') id: string,
    @Headers('projectId') projectId: string,
    @Body(ValidationPipe) createCategoryExtra: CreateExtraDto
  ) {
    return await this.categoryService.createCategoryExtra(+id, +projectId, createCategoryExtra);
  }

}
