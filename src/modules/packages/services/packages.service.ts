import { Injectable } from '@nestjs/common';
import { CreatePackageDto, UpdatePackageDto } from '../dtos/index';

@Injectable()
export class PackagesService {

  findPackages() {
    return `This action returns all packages`;
  }

}
