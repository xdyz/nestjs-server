import { Controller, Get, Post, Body, Put, Param, Delete, Headers, ValidationPipe} from '@nestjs/common';
import { InstanceItemsService } from '../services/instance_items.service';
import { CreateItemDto, UpdateItemDto } from '../dtos/index';
import { ApiTags } from '@nestjs/swagger';

@Controller('instance/:instance_id/items')
@ApiTags('检查实例详情')
export class InstanceItemsController {
  constructor(private readonly instanceItemsService: InstanceItemsService) {}

  @Post()
  async createInstanceItem(
    @Param('instance_id') instanceId: string,
    @Headers('projectId') projectId: string,
    @Body(ValidationPipe) createItemDto: CreateItemDto
  ) {
    return await this.instanceItemsService.createInstanceItem( +instanceId, +projectId, createItemDto);
  }

  @Get()
  async findAllByInstanceId(@Param('instanceId') instanceId: string, @Headers('projectId') projectId: string) {
    return await this.instanceItemsService.findAllByInstanceId(+instanceId, +projectId);
  }

  @Put(':id')
  async updateItem(@Param('id') id: string, @Body(ValidationPipe) updateItemDto: UpdateItemDto) {
    return await this.instanceItemsService.updateItem(+id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instanceItemsService.removeItem(+id);
  }
}
