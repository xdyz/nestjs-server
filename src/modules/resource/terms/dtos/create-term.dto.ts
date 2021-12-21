import { Type } from "class-transformer";
import { IsInt, IsString } from "class-validator";

export class CreateTermDto {

  
  /**
   * 检查分类id
   * @example 1
   */
  @IsInt({
    message: '分类id必须是数字',
  })
  categoryId: number;

  /**
   * rule_uid
   * @example 'rule_uid'
   */
  @IsString({
    message: 'rule_uid必须是字符串'
  })
  ruleUid: string;

  /**
   * rule_name
   * @example 'rule_name'
   */
  @IsString({
    message: 'rule_name必须是字符串'
  })
  ruleName: string;

  /**
   * rule_desc
   * @example 'rule_desc'
   */

  @IsString({
    message: 'rule_desc必须是字符串'
  })
  ruleDesc: string;

  /**
   * suggest
   * @example 'suggest'
   */
  @IsString({
    message: 'suggest必须是字符串'
  })
  suggest?: string;

  /**
   * level
   * @example 1
   */
  @IsInt({
    message: 'level必须是数字'
  })
  level: number;


  /**
   * detect_paths
   * @example 'detect_paths'
   */
  @Type(() => String)  // 这里不确定是不是可以把字符串数组 join 为字符串，如果不行就写个管道 自己转换好了
  @IsString({
    message: 'detect_paths必须是字符串'
  })
  detectPaths: string;

  
  /**
   * filter_paths
   * @example 'filter_paths'
   */
  @IsString({
    message: 'filter_paths必须是字符串'
  })
  filterPaths?: string;

  /**
   * filter_regex
   * @example 'filter_regex'
   */
  @IsString({
    message: 'filter_regex必须是字符串'
  })
  filterRegex?: string;
  

  /**
   * threshold_range
   * @example 'threshold_range'
   */

  @IsString({
    message: 'threshold_range必须是字符串'
  })
  thresholdRange?: string;

  /**
   * threshold_value
   * @example 'threshold_value'
   */
  @IsString({
    message: 'threshold_value必须是字符串'
  })
  thresholdValue?: string;


  /**
   * enabled
   * @example 1
   */
  @IsInt({
    message: 'enabled必须是数字'
  })
  enabled: number;
}

