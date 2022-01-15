import { PartialType } from '@nestjs/swagger';
import CreatePipelineDto from './create-pipeline.dto';

export default class UpdatePipelineDto extends PartialType(CreatePipelineDto) {}
