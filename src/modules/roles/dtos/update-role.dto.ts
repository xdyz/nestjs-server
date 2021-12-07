import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';
import { CreateRoleDto } from './create-role.dto';

export class UpdateRoleDto  {
  /**
   * id
   * @example 95
   */
  @IsNotEmpty({
    message: 'id is required',
  })
  @IsInt({
    message: 'id must be an integer',
  })
  id: number;

  /**
   * name
   * @example 测试
   */
  @IsNotEmpty({
    message: 'name is required',
    always: true
  })
  @IsString({
    message: 'name must be a string'
  })
  name: string;
}
