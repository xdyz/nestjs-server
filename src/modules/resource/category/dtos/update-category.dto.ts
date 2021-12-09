import { PartialType } from '@nestjs/swagger';
import CreateCategoryDto from './create-category.dto';

export default class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
