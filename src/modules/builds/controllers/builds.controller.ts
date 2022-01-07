import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { BuildsService } from '../services/builds.service';
import { CreateBuildDto, UpdateBuildDto } from '../dtos/index';
import { ApiTags } from '@nestjs/swagger';

@Controller('builds')
@ApiTags('构建 builds')
export class BuildsController {
  constructor(private readonly buildsService: BuildsService) {}

  @Post()
  create(@Body(ValidationPipe) createBuildDto: CreateBuildDto) {
    return this.buildsService.create(createBuildDto);
  }

  @Get()
  findAll() {
    return this.buildsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.buildsService.findOneBuildById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuildDto: UpdateBuildDto) {
    return this.buildsService.update(+id, updateBuildDto);
  }

}
