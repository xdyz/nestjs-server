import { Type } from "class-transformer";
import { IsInt } from "class-validator";

export default class GetTaskDto {
  /**
   * 页数
   * @example 1
   */
  @Type(() => Number)
  @IsInt({
    message: "page must be a number",
  })
  page: number;

  /**
   * 每页数量
   * @example 10
   */
  @Type(() => Number)
  @IsInt({
    message: "size must be a number",
  })
  size: number;
}