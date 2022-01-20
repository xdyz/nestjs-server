import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export default class GetMemberDto {
  // 可以将  前端 url 传过来的字符串 转换为 数字
  @Type(() => Number)
  @IsInt({
    message: 'page mast be a int'
  })
  page?: number;

  // 可以将  前端 url 传过来的字符串 转换为 数字
  @Type(() => Number)
  @IsInt({
    message: 'size mast be int'
  })
  size?: number;
}
