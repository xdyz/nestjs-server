import { Controller, Get, Post, Body, Param, Delete, Headers, Put, ValidationPipe, UseGuards, ClassSerializerInterceptor } from '@nestjs/common';
import { TermsService } from '../services/terms.service';
import { CreateTermDto, UpdateTermDto } from '../dtos/index';
import { ApiTags } from '@nestjs/swagger';

@Controller('terms')
@ApiTags('检查项')
export class TermsController {
  constructor(private readonly termsService: TermsService) {}

  @Post()
  @UseGuards(ClassSerializerInterceptor)
  create(@Headers('project_id') projectId: string, @Body(ValidationPipe) createTermDto: CreateTermDto) {
    return this.termsService.createTerm(+projectId, createTermDto);
  }

  @Get()
  async getAllTerms(@Headers('projectId') projectId: string) {
    return await this.termsService.getAllTerms(+projectId);
  }


  @Put(':id')
  update(@Param('id') id: string, @Body(ValidationPipe) updateTermDto: UpdateTermDto) {
    console.log(updateTermDto);
    
    return this.termsService.updateTerm(+id, updateTermDto);
  }

  @Delete(':id')
  async removeTerm(@Param('id') id: string) {
    return await this.termsService.removeTerm(+id);
  }
}
