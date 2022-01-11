import { Type } from "class-transformer";
import { IsInt } from "class-validator";

export default class GetBuildDto {
  /**
   * page
   * @example 1
   */
  @Type(() => Number)
  @IsInt({
    message: "page must be an integer"
  })
  page: number;

  /**
   * size
   * @example 10
   */
  @Type(() => Number)
  @IsInt({
    message: "size must be an integer"
  })
  size: number;

}