import { IsInt } from "class-validator";

export default class CreateMemberDto {

  @IsInt({
    message: 'projectId must be a number',
  })
  projectId: number;


  @IsInt({
    message: 'userId must be a number',
  })
  roleId: number;

  @IsInt({
    message: 'userId must be a number',
  })
  userId: number;
}
