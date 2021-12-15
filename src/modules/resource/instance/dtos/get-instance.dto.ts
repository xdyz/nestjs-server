import { PartialType } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsString } from "class-validator";
import { CreateInstanceDto } from "./create-instance.dto";


export class GetInstanceDto extends PartialType(CreateInstanceDto) {
  
  @Type(() => Number)
  @IsInt({
    message: "The page must be a number"
  })
  page?: number;



  @Type(() => Number)
  @IsInt({
    message: "The size must be a number"
  })
  size?: number
}