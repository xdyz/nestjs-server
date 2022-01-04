import { PartialType } from '@nestjs/swagger';
import CreatePackageDto from './create-package.dto';

export default class UpdatePackageDto extends PartialType(CreatePackageDto) {}
