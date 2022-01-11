import { Controller, Get, Post, Body, Patch, Param, Headers, ValidationPipe, Query, Put } from '@nestjs/common';
import { BuildsService } from '../services/builds.service';
import { CreateBuildDto, UpdateBuildDto, GetBuildDto } from '../dtos/index';
import { ApiTags } from '@nestjs/swagger';

@Controller('/:taskId/builds')
@ApiTags('构建 builds')
export class BuildsController {
  constructor(private readonly buildsService: BuildsService) {}

  @Post()
  createBuild(
    @Param('taskId') taskId: string,
    @Body(ValidationPipe) createBuildDto: CreateBuildDto
  ) {
    return this.buildsService.createBuild(+taskId, createBuildDto);
  }

  @Get()
  async findBuilds(
    @Param('taskId') taskId: string,
    @Query(ValidationPipe) getBuildDto: GetBuildDto
  ) {
    return await this.buildsService.findBuilds(+taskId, getBuildDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.buildsService.findOneBuildById(+id);
  }

  @Put(':id')
  updateBuild(@Param('id') id: string, @Body() updateBuildDto: UpdateBuildDto) {
    return this.buildsService.updateBuild(+id, updateBuildDto);
  }

}
