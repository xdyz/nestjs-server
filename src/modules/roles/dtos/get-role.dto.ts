import { IsString } from 'class-validator';

export class GetRoleDto {

  /**
   * 页数
   * @example 1
   */
  @IsString({
    message: 'page must be a string',
  })
  readonly page?: string;

  /**
   * 每页数量
   * @example 10
   */
  @IsString({
    message: 'size must be a string',
  })
  readonly size?: string;
}
