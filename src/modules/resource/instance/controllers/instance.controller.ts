import { Controller, Get, Post, Body, Patch, Param, Delete, Headers,Request, UseGuards, Query, ValidationPipe, Put, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { InstanceService } from '../services/instance.service';
import { CreateInstanceDto } from '../dtos/create-instance.dto';
import { UpdateInstanceDto } from '../dtos/update-instance.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { GetInstanceDto } from '../dtos';

@Controller('instance')
@UseGuards(AuthGuard('jwt'))
@ApiTags('检查实例')
@ApiBearerAuth('jwt')
@UseInterceptors(ClassSerializerInterceptor)

export class InstanceController {
  constructor(private readonly instanceService: InstanceService) {}

  @Post()
  async createInstance(
    @Headers('projectId') projectId: string, 
    @Request() req,
    @Body(ValidationPipe) createInstanceDto: CreateInstanceDto
  ) {
    return await this.instanceService.createInstance(+projectId, req.user.id, createInstanceDto);
  }

  @Get()
  findInstances(@Headers('projectId') projectId: string, @Query(ValidationPipe) getInstanceDto: GetInstanceDto) {
    return this.instanceService.findInstances(+projectId, getInstanceDto);
  }

  @Get(':id')
  async findOneById(@Param('id') id: string) {
    return await this.instanceService.findOneById(+id);
  }

  @Put(':id')
  updateInstance(@Param('id') id: string, @Body(ValidationPipe) updateInstanceDto: UpdateInstanceDto) {
    return this.instanceService.updateInstance(+id, updateInstanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instanceService.remove(+id);
  }
}
