import { Controller, Get, Post, Body, Param, Delete, Headers, Put, ValidationPipe } from '@nestjs/common';
import { TermsService } from '../services/terms.service';
import { CreateTermDto, UpdateTermDto } from '../dtos/index';

@Controller('terms')
export class TermsController {
  constructor(private readonly termsService: TermsService) {}

  @Post()
  create(@Body(ValidationPipe) createTermDto: CreateTermDto) {
    return this.termsService.createTerm(createTermDto);
  }

  @Get()
  async getAllTerms(@Headers('projectId') projectId: string) {
    return await this.termsService.getAllTerms(+projectId);
  }


  @Put(':id')
  update(@Param('id') id: string, @Body(ValidationPipe) updateTermDto: UpdateTermDto) {
    return this.termsService.updateTerm(+id, updateTermDto);
  }

  @Delete(':id')
  async removeTerm(@Param('id') id: string) {
    return await this.termsService.removeTerm(+id);
  }
}
