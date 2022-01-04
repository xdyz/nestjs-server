import { IsNotEmpty, IsString, IsInt, IsJSON } from "class-validator";


export default class CreateCategoryDto {

  /**
   * 分类名称
   * @example 纹理检查
   */

  @IsNotEmpty({
    message: "Category id is required",
  })
  @IsInt({
    message: "Category id must be a number",
  })
  categroyId: number;

  @IsNotEmpty({
    message: "Category uid is required",
  })

  @IsString({
    message: "Category uid must be a string",
  })
  categoryUid: string;


  globalParams: any;
}