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
} from '@nestjs/common';
import { RolesService } from '../services/roles.service';
import { CreateRoleDto } from '../dtos/create-role.dto';
import { UpdateRoleDto } from '../dtos/update-role.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetRoleDto } from '../dtos/get-role.dto';

@Controller('roles')
@ApiTags('角色管理')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  /**
   * 分页获取角色
   * @returns
   */
  @Get('/')
  findWithParameters(@Query(ValidationPipe) getRoleDto: GetRoleDto) {
    return this.rolesService.findWithParameters(getRoleDto);
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
   * 新增角色权限
   * @param createRoleDto
   * @returns
   */
  @Post()
  createOneRole(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.createOneRole(createRoleDto);
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
  updateRole(@Param('id', ParseIntPipe) id: number, @Body(new ValidationPipe()) updateRoleDto: UpdateRoleDto) {
    return this.rolesService.updateRole(id, updateRoleDto);
  }

  /**
   * 通过id 删除角色权限
   * @param id number
   * @returns {Promise<void>}
   */

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
