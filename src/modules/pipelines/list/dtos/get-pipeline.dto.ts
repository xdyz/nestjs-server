import { Type } from "class-transformer";
import { IsInt } from "class-validator";

export default class GetPipelineDto {
  
  @Type(() => Number)
  @IsInt({
    message: 'page 必须是数字'
  })
  page?: number;


  @Type(() => Number)
  @IsInt({
    message: 'size 必须是数字'
  })
  size?: number;

  
}