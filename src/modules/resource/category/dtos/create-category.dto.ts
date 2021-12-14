import { IsNotEmpty, IsString } from "class-validator";

export default class CreateCategoryDto {

  /**
   * Uid
   * @example TextureDetector
   */
  @IsNotEmpty({
    message: "Category uid is required",
  })
  @IsString({
    message: "Name must be a string",
  })
  categoryName: string;


  /**
   * 分类名称
   * @example 纹理检查
   */

  @IsNotEmpty({
    message: "Category uid is required",
  })

  @IsString({
    message: "Category uid must be a string",
  })
  categoryUid: string;
}
