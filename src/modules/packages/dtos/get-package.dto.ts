import { IsInt } from "class-validator";

export default class GetPackageDto {

  @IsInt({
    message: "page must be a number",
  })
  page: number;

  @IsInt({
    message: "size must be a number",
  })
  size: number;
}