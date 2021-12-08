import { PartialType } from '@nestjs/swagger';
import  CreateMemberDto  from './create-member.dto';

export default class UpdateMemberDto extends PartialType(CreateMemberDto) {}
