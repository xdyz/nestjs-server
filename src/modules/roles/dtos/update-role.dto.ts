import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';
import CreateRoleDto  from './create-role.dto';

export default class UpdateRoleDto extends PartialType(CreateRoleDto) {}
