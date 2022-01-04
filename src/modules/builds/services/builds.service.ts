import { Injectable } from '@nestjs/common';
import { CreateBuildDto, UpdateBuildDto } from '../dtos/index';

@Injectable()
export class BuildsService {
  create(createBuildDto: CreateBuildDto) {
    return 'This action adds a new build';
  }

  findAll() {
    return `This action returns all builds`;
  }

  findOne(id: number) {
    return `This action returns a #${id} build`;
  }

  update(id: number, updateBuildDto: UpdateBuildDto) {
    return `This action updates a #${id} build`;
  }

  remove(id: number) {
    return `This action removes a #${id} build`;
  }
}
