import { Body, Controller, Get, Headers, ValidationPipe } from '@nestjs/common';
import { PackagesService } from '../services/packages.service';
import { GetPackageDto } from '../dtos/index';

@Controller('packages')
export class PackagesController {
  constructor(private readonly packagesService: PackagesService) {}

  @Get()
  findPackages(
    @Headers('projectId') projectId: string,
    @Body(ValidationPipe) getPackageDto: GetPackageDto
  ) {
    return this.packagesService.findPackages(+projectId, getPackageDto);
  }
}
