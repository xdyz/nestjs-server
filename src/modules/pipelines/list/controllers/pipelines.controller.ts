import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, ValidationPipe, Query, Put } from '@nestjs/common';
import { PipelinesService } from '../services/pipelines.service';
import { CreatePipelineDto, UpdatePipelineDto } from '../dtos/index';
import { ApiTags } from '@nestjs/swagger';
import GetPipelineDto from '../dtos/get-pipeline.dto';

@Controller('list')
@ApiTags('管线列表')
export class PipelinesController {
  constructor(private readonly pipelinesService: PipelinesService) {}

  @Post()
  createPipeline(
    @Headers('project_id') projectId: string,
    @Body(ValidationPipe) createPipelineDto: CreatePipelineDto
  ) {
    return this.pipelinesService.createPipeline(createPipelineDto);
  }

  @Get()
  findPipelines(
    @Headers('project_id') projectId: string,
    @Query(ValidationPipe) getPipelinesDto: GetPipelineDto,
  ) {
    return this.pipelinesService.findPipelines(+projectId, getPipelinesDto);
  }

  @Get(':id')
  findOnePipeline(@Param('id') id: string) {
    return this.pipelinesService.findOnePipeline(+id);
  }

  @Put(':id')
  updatePipeline(
    @Param('id') id: string, 
    @Body(ValidationPipe) updatePipelineDto: UpdatePipelineDto
  ) {
    return this.pipelinesService.updatePipeline(+id, updatePipelineDto);
  }

  @Delete(':id')
  removePipeline(@Param('id') id: string) {
    return this.pipelinesService.removePipeline(+id);
  }
}
