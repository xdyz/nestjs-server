import { IsArray, IsInt } from "class-validator";

export default class CreateItemDto {
  /**
   * 实例id
   * @example [1]
   */

  @IsArray({
    message: "ids 必须是数组",
  })
  @IsInt({
    message: "ids 内的值必须是正整数",
    each: true
  })

  // 可以用于验证对象数组
  // @ValidateNested({
  //   each: true
  // })
  ids: number[];
}
