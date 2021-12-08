import { PartialType } from '@nestjs/swagger'
import { Type } from 'class-transformer';
import { IsInt, IsString } from 'class-validator';
import CreateRoleDto from './create-role.dto';

export default class GetRoleDto  {

  /**
   * 页数
   * @example 1
   */

  // 可以将  前端 url 传过来的字符串 转换为 数字
  @Type(() => Number)
  @IsInt({
    message: "page mast be a int",
  })
  readonly page?: number;

  /**
   * 每页数量
   * @example 10
   */
  // 可以将  前端 url 传过来的字符串 转换为 数字
  @Type(() => Number)
  @IsInt({
    message: "size mast be a int",
  })
  readonly size?: number;

  /**
   * project_root
   * @type {number}
   * @example 0
   * 
   */

  // 可以将  前端 url 传过来的字符串 转换为 数字
  @Type(() => Number)
  @IsInt({
    message: "projectRoot mast be a int",
  })

  projectRoot?: number;
}
