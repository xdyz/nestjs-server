import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import CreateProjectDto from './create-project.dto';

export default class UpdateProjectDto extends PartialType(CreateProjectDto) {
  @IsString({
    message: 'imageUrl must be a string',
  })
  imageUrl?: string;
}
