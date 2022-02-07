import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import GetPipelineDto from "../dtos/get-pipeline.dto";
import { CreatePipelineDto, UpdatePipelineDto } from "../dtos/index";
import { PipelinesEntity } from "../entities/pipeline.entity";

@Injectable()
export class PipelinesService {
  @InjectRepository(PipelinesEntity)
  private readonly pipelinesRepository: Repository<PipelinesEntity>;

  async createPipeline(createPipelineDto: CreatePipelineDto) {
    try {
      const pipeline = await this.pipelinesRepository.create(createPipelineDto);
      const result = await this.pipelinesRepository.save(pipeline);
      return result;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findPipelines(projectId: number, getPipelinesDto: GetPipelineDto) {
    const { page, size } = getPipelinesDto;
    const [data, count] = await this.pipelinesRepository.findAndCount({
      where: {
        projectId
      },
      skip: (page - 1) * size || 0,
      take: size || 10
    });
    return {
      data,
      count
    };
  }

  async findOnePipeline(id: number) {
    const pipeline = await this.pipelinesRepository.findOne(id);
    if (!pipeline) {
      throw new HttpException("管线不存在", HttpStatus.NOT_FOUND);
    }
    return pipeline;
  }

  async updatePipeline(id: number, updatePipelineDto: UpdatePipelineDto) {
    try {
      await this.findOnePipeline(id);
      const pipeline = await this.pipelinesRepository.create({
        ...updatePipelineDto,
        id
      });
      const result = await this.pipelinesRepository.save(pipeline);
      return result;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async removePipeline(id: number) {
    try {
      await this.findOnePipeline(id);
      await this.pipelinesRepository.delete(id);
      return {};
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
