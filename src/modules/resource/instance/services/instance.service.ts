import { Injectable } from '@nestjs/common';
import { CreateInstanceDto } from '../dtos/create-instance.dto';
import { UpdateInstanceDto } from '../dtos/update-instance.dto';

@Injectable()
export class InstanceService {
  create(createInstanceDto: CreateInstanceDto) {
    return 'This action adds a new instance';
  }

  findAll() {
    return `This action returns all instance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} instance`;
  }

  update(id: number, updateInstanceDto: UpdateInstanceDto) {
    return `This action updates a #${id} instance`;
  }

  remove(id: number) {
    return `This action removes a #${id} instance`;
  }
}
