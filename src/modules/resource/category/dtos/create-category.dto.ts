import { IsString } from "class-validator";

export default class CreateCategoryDto {
  @IsString({
    message: "Name must be a string",
  })
  name: string;
}
