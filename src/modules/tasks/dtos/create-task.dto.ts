import { IsIn, IsInt, IsNotEmpty, IsString } from "class-validator";


export default class CreateTaskDto  {
  
  @IsNotEmpty({
    message: "name id is required"
  })
  @IsString({
    message: "name must be a string"
  })
  name:string



  @IsNotEmpty({
    message: "displayName id is required"
  })
  @IsString({
    message: "displayName must be a string"
  })
  displayName:string


  @IsNotEmpty({
    message: "description id is required"
  })
  @IsString({
    message: "description must be a string"
  })
  description:string


  @IsNotEmpty({
    message: "documentUrl id is required"
  })
  @IsString({
    message: "documentUrl must be a string"
  })
  documentUrl:string


  @IsNotEmpty({
    message: "jenkinsId  is required"
  })
  @IsInt({
    message: "jenkinsId must be a number"
  })
  jenkinsId:number

  @IsNotEmpty({
    message: "viewId  is required"
  })
  @IsInt({
    message: "viewId must be a number"
  })
  viewId:number

}
