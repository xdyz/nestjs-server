import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ValidationPipe,
  UseGuards,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { ProjectsService } from '../services/projects.service';
import { CreateProjectDto, UpdateProjectDto } from '../dtos/index';
import {  } from '../dtos/update-project.dto';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

@Controller('projects')
@ApiTags('项目列表')
@UseGuards(ClassSerializerInterceptor)
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  /**
   * 获取所有项目
   */

  @Get('/all')
  @ApiOperation({ summary: '获取所有项目' })
  async getAllProjects() {
    return await this.projectsService.getAllProjects();
  }

  @Post()
  @ApiOperation({ summary: '创建项目' })
  async createProject(@Body(ValidationPipe) createProjectDto: CreateProjectDto) {
    return await this.projectsService.createProject(createProjectDto);
  }

  @Put(':id')
  @ApiOperation({summary: '更新项目' })
  async updateProject(@Param('id') id: string, @Body(ValidationPipe) updateProjectDto: UpdateProjectDto) {
    return await this.projectsService.updateProject(+id, updateProjectDto);
  }

  @Delete(':id')
  @ApiOperation({summary: '删除项目' })
  async deleteProject(@Param('id') id: string) {
    return await this.projectsService.deleteProject(+id);
  }

}
