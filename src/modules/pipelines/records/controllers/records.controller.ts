import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, ValidationPipe, Request, Put } from '@nestjs/common';
import { RecordsService } from '../services/records.service';
import { CreateRecordDto, UpdateRecordDto, GetRecordDto } from '../dtos/index';

@Controller('records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Post()
  async createRecord(
    @Request() req: any,
    @Headers('projectId') projectId: string,
    @Body(ValidationPipe) createRecordDto: CreateRecordDto
  ) {
    return await this.recordsService.createRecord(req.user.id, +projectId, createRecordDto);
  }

  @Get()
  async findRecords(
    @Headers('projectId') projectId: string,
    @Body(ValidationPipe) getRecordsDto: GetRecordDto
  ) {
    return  await this.recordsService.findRecords(+projectId, getRecordsDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordsService.findOne(+id);
  }

  @Put(':id')
  async updateRecord(@Param('id') id: string, @Body() updateRecordDto: UpdateRecordDto) {
    return await this.recordsService.updateRecord(+id, updateRecordDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.recordsService.removeRecord(+id);
  }
}
