import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Headers,
  Query,
  ValidationPipe,
  Put,
  UseInterceptors,
  ClassSerializerInterceptor
} from '@nestjs/common';
import { MembersService } from '../services/members.service';
import { CreateMemberDto, UpdateMemberDto, GetMemberDto } from '../dtos/index';
import { ApiTags } from '@nestjs/swagger';

@Controller('members')
@ApiTags('成员管理')
@UseInterceptors(ClassSerializerInterceptor)
export class MembersController {
  constructor(private readonly membersService: MembersService) {}


  /**
   * 通过projectId查询成员
   * @returns 
   */

  @Get('/all')
  async findAllMembers(@Headers('project_id') project_id: number): Promise<any> {
    return await this.membersService.findAllMembers(project_id);
  }



  /**
   * 分页获取成员 且可筛选
   * @param page
   * @param size
   * @param project_id
   * @param name
   *
   */

  @Get()
  async findMembers(@Headers('project_id') projectId: number, @Query() getMembersDto: GetMemberDto): Promise<any> {
    return await this.membersService.findMembers(projectId, getMembersDto);
  }



  /**
   * 添加成员
   * @param createMemberDto
   */

  @Post()
  async createMember(@Body(ValidationPipe) createMemberDto: CreateMemberDto): Promise<any> {
    return await this.membersService.createMember(createMemberDto);
  }


  /**
   * 更新成员
   * @param updateMemberDto
   */


  @Put(':id')
  async updateMember(@Param('id') id: number, @Body(ValidationPipe) updateMemberDto: UpdateMemberDto): Promise<any> {
    return await this.membersService.updateMember(+id, updateMemberDto);
  }


  /**
   * 删除成员
   * @param id
   */

  @Delete(':id')
  async deleteMember(@Param('id') id: number): Promise<any> {
    return await this.membersService.deleteMember(+id);
  }

}
