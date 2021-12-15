import { IsNotEmpty, IsString } from "class-validator";

export class CreateInstanceDto {

  @IsNotEmpty({
    message: "The name is required"
  })
  @IsString({
    message: "The name must be a string"
  })
  name: string;

}
