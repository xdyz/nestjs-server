import { Injectable } from '@nestjs/common';
import { CreateRecordDto } from '../dtos/create-record.dto';
import { UpdateRecordDto } from '../dtos/update-record.dto';

@Injectable()
export class RecordsService {
  create(createRecordDto: CreateRecordDto) {
    return 'This action adds a new record';
  }

  findAll() {
    return `This action returns all records`;
  }

  findOne(id: number) {
    return `This action returns a #${id} record`;
  }

  update(id: number, updateRecordDto: UpdateRecordDto) {
    return `This action updates a #${id} record`;
  }

  remove(id: number) {
    return `This action removes a #${id} record`;
  }
}
