import { Injectable } from '@nestjs/common';
import { CreatePipelineDto } from '../dtos/create-pipeline.dto';
import { UpdatePipelineDto } from '../dtos/update-pipeline.dto';

@Injectable()
export class PipelinesService {
  create(createPipelineDto: CreatePipelineDto) {
    return 'This action adds a new pipeline';
  }

  findAll() {
    return `This action returns all pipelines`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pipeline`;
  }

  update(id: number, updatePipelineDto: UpdatePipelineDto) {
    return `This action updates a #${id} pipeline`;
  }

  remove(id: number) {
    return `This action removes a #${id} pipeline`;
  }
}
