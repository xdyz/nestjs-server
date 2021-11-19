import { IsNotEmpty, IsString } from 'class-validator';

export class LoginAuthDto {
  /**
   * @description: 用户名
   */
  @IsNotEmpty()
  @IsString()
  readonly username: string;
}
