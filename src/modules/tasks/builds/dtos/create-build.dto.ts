import { IsIn, IsInt, IsNotEmpty, IsObject, IsString } from "class-validator";

export default class CreateBuildDto {


  /**
   * 任务id
   * @example 1
   */
  @IsNotEmpty({
    message: 'taskId 不能为空'
  })
  
  @IsInt({
    message: 'taskId 必须是整数'
  })
  taskId: number;


  /**
   * 任务状态
   * @example 1
   */
  @IsNotEmpty({
    message: 'status 不能为空'
  })
  @IsInt({
    message: 'status 必须是整数'
  })
  
  status: number;


  /**
   * 用户id
   * @example 1
   */
  @IsNotEmpty({
    message: 'userId 不能为空'
  })
  @IsInt({
    message: 'userId 必须是整数'
  })
  userId: number;


  /**
   * job_name
   * @example android_test
   */
  @IsNotEmpty({
    message: 'jobName 不能为空'
  })
  @IsString({
    message: 'jobName 必须是字符串'
  })
  jobName: string;


  
  /**
   * build_type
   * @example resource
   */

  @IsNotEmpty({
    message: 'buildType 不能为空'
  })
  @IsString({
    message: 'buildType 必须是字符串'
  })
  buildType: string;

  /**
   * parameters
   * @example {"param1":"value1","param2":"value2"}
   */
  @IsNotEmpty({
    message: 'parameters 不能为空'
  })
  @IsObject({
    message: 'parameters 必须是对象'
  })
  parameters: unknown;
}
