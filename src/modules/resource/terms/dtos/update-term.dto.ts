import { PartialType } from '@nestjs/mapped-types';
import { CreateTermDto } from './create-term.dto';

export class UpdateTermDto extends PartialType(CreateTermDto) {}
