import { PartialType } from '@nestjs/swagger';
import CreateRecordDto from './create-record.dto';

export default class UpdateRecordDto extends PartialType(CreateRecordDto) {}
