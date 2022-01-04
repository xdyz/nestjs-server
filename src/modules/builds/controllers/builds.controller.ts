import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuildsService } from '../services/builds.service';
import { CreateBuildDto, UpdateBuildDto } from '../dtos/index';

@Controller('builds')
export class BuildsController {
  constructor(private readonly buildsService: BuildsService) {}

  @Post()
  create(@Body() createBuildDto: CreateBuildDto) {
    return this.buildsService.create(createBuildDto);
  }

  @Get()
  findAll() {
    return this.buildsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuildDto: UpdateBuildDto) {
    return this.buildsService.update(+id, updateBuildDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildsService.remove(+id);
  }
}
