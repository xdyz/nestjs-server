import { IsNotEmpty, IsString } from 'class-validator';

export class LoginAuthDto {
  /**
   * 用户名
   * @example admin
   */
  @IsNotEmpty({
    message: '用户名不能为空',
  })
  @IsString({
    message: '用户名必须为字符串',
  })
  readonly username: string;

  /**
   * 密码
   * @example 123456
   */
  @IsNotEmpty({
    message: '密码不能为空',
  })
  @IsString({
    message: '密码必须为字符串',
  })
  readonly password: string;
}
