import { IsNotEmpty, IsString } from "class-validator";

export default class CreateProjectDto {
  @IsNotEmpty({
    message: "name is required",
  })
  @IsString({
    message: "name must be a string",
  })
  name: string;
}
