import { PartialType } from '@nestjs/swagger';
import CreateTaskDto from './create-task.dto';

export default class UpdateTaskDto extends PartialType(CreateTaskDto) {}
