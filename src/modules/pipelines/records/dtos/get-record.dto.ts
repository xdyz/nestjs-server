import { Type } from "class-transformer";
import { IsIn, IsInt } from "class-validator";

export default class GetRecordDto {

  /**
   * 页码
   * @example 1
   */
  @Type(() => Number)
  @IsInt({
    message: 'page 必须为整数',
  })
  page: number;

  /**
   * 页数
   * @example 10
   */
  @Type(() => Number)
  @IsInt({
    message: 'size 必须为整数',
  })
  size: number;

}