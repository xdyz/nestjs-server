import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
  Headers
} from '@nestjs/common';
import { RolesService } from '../services/roles.service';
import { CreateRoleDto, UpdateRoleDto, GetRoleDto } from '../dtos/index';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import TransformPrivilegesJsonPipe from '../pipes/transform-privileges-json.pipe';

@Controller('roles')
@ApiTags('角色管理')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  /**
   * 分页获取角色
   * @returns
   */
  @Get('/')
  async findWithParameters(@Query(ValidationPipe) getRoleDto: GetRoleDto) {
    return await this.rolesService.findWithParameters(getRoleDto);
  }

  /**
   * 获取单个角色权限
   * @param id
   * @returns
   */
  @Get(':id')
  findOneRole(@Param('id') id: string) {
    return this.rolesService.findOneRole(+id);
  }

  /**
   * 根据project_id 获取所有角色
   * @param project_id number 
   * @returns 
   */

  @Get('/all')
  async findAllRoles(@Headers('project_id') project_id: number) {
    return await this.rolesService.findAllRoles(project_id);
  }


  /**
   * 新增角色权限
   * @param createRoleDto
   * @returns
   */
  @Post()
  // @UsePipes(ValidationPipe)
  async createOneRole(@Body(ValidationPipe) createRoleDto: CreateRoleDto) {
    return await this.rolesService.createOneRole(createRoleDto);
  }

  /**
   * 通过id 更新角色权限
   * @param id
   * @param updateRoleDto
   * @returns
   */

  @Put(':id')
  @ApiOperation({ summary: '更新角色权限' })
  // @UsePipes(ValidationPipe)
  async updateRole(@Param('id', ParseIntPipe) id: number, @Body(new ValidationPipe()) updateRoleDto: UpdateRoleDto) {
    return await this.rolesService.updateRole(id, updateRoleDto);
  }

  /**
   * 通过id 删除角色权限
   * @param id number
   * @returns {Promise<void>}
   */

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.rolesService.remove(+id);
  }
}
