import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, ValidationPipe } from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { CreateTaskDto, UpdateTaskDto, GetTaskDto } from '../dtos/index';
import { ApiTags } from '@nestjs/swagger';

@Controller('tasks')
@ApiTags('任务')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async createTask(
    @Headers('projectId') projectId: string,
    @Body() createTaskDto: CreateTaskDto
  ) {
    return await this.tasksService.createTask(+projectId, createTaskDto);
  }

  @Get()
  async findTask(
    @Headers('projectId') projectId: number,
    @Body(ValidationPipe) getTaskDto: GetTaskDto
  ) {
    
  }
  @Get(':id')
  async findOneById(@Param('id') id: string) {
    return await this.tasksService.findOneById(+id);
  }

  @Patch(':id')
  async updateTask(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return await this.tasksService.updateTask(+id, updateTaskDto);
  }

  @Delete(':id')
  async removeTask(@Param('id') id: string) {
    return await this.tasksService.removeTask(+id);
  }
}
