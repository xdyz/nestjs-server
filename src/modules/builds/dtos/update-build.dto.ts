import { PartialType } from '@nestjs/swagger';
import CreateBuildDto from './create-build.dto';

export default class UpdateBuildDto extends PartialType(CreateBuildDto) {}
