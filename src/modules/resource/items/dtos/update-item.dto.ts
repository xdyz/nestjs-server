import { IsIn, IsInt, IsString } from 'class-validator';

export default class UpdateItemDto {

  /**
   * 是否开启
   * @example 1
   */
  @IsInt({
    message: "enabled 必须是正整数",
  })
  @IsIn([0, 1], {
    message: "是否开启必须是0或1",
  })
  enabled?: number;

  /**
   * 阈值
   * @example 1
   */
  @IsString({
    message: "threshold_value 必须是字符串",
  })
  thresholdValue?: string;

  /**
   * 过滤正则
   * @example /^[0-9]*$/
   */
  @IsString({
    message: "filter_regex 必须是字符串",
  })
  filterRegex?: string;

  /**
   * 过滤路径
   * @example '/a/b,/c/d'
   */
  @IsString({
    message: "filter_paths 必须是字符串",
  })
  filterPaths?: string;

  /**
   * 检测目录
   * @example '/a/b,/c/d'
   */
  @IsString({
    message: "detect_paths 必须是字符串",
  })
  detectPaths?: string;
}
