import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { PipelinesService } from '../services/pipelines.service';
import { CreatePipelineDto } from '../dtos/create-pipeline.dto';
import { UpdatePipelineDto } from '../dtos/update-pipeline.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('list')
@ApiTags('管线列表')
export class PipelinesController {
  constructor(private readonly pipelinesService: PipelinesService) {}

  @Post()
  create(@Body(ValidationPipe) createPipelineDto: CreatePipelineDto) {
    return this.pipelinesService.create(createPipelineDto);
  }

  @Get()
  findAll() {
    return this.pipelinesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pipelinesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePipelineDto: UpdatePipelineDto) {
    return this.pipelinesService.update(+id, updatePipelineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pipelinesService.remove(+id);
  }
}
