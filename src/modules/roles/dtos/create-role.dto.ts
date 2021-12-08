import { ApiOperation, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, IsObject } from 'class-validator';


export default class CreateRoleDto {
  /**
   * name
   * @example 测试
   */
  @IsNotEmpty({
    message: '角色名称不能为空',
    always: true
  })
  @IsString({
    message: '角色名称必须为字符串'
  })
  name: string;


  /**
   * project_root
   * @type {number}
   * @example 0
   * 
   */

  @IsNotEmpty({
    message: '是否为管理员字段不能为空',
  })
  @IsInt({
    message: '是否为管理员字段必须为整数',
  })

  projectRoot: number;


  // /**
  //  * privileges
  //  * @type {Type<Object>}
  //  * @example Object { access: [ 'admin' ], routes: [ '/api/v1/users' ] }
  //  */


  //对象类型的默认值 只能用ApiProperty来做 注释不行 没有效果
  @ApiProperty({
    description: '权限',
    required: true,
    type: JSON,
    example: {
      access:["admin","user"],
      routes:["/admin","/user"]
    }
  })

  @IsObject({
    message: '权限字段必须为对象'
  })

  privileges: string;


}
