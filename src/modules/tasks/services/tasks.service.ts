import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto, UpdateTaskDto, GetTaskDto } from '../dtos/index';
import { TasksEntity } from '../entities/task.entity';

@Injectable()
export class TasksService {

  @InjectRepository(TasksEntity)
  private readonly tasksRepository: Repository<TasksEntity>;

  /**
   * 查看是否已经存在相同的任务了 同一个项目下
   * @param projectId number
   * @param name string
   * @returns 
   */
  async findOneTaskByName(projectId: number, name: string) {
    const task = await this.tasksRepository.findOne({
      where: {
        name,
        projectId
      }
    })
    if (task) throw new HttpException('Task name already exists', HttpStatus.BAD_REQUEST);
    return task;
  }

  /**
   * 新增任务
   * @param projectId number
   * @param createTaskDto 
   * @returns 
   */

  async createTask(projectId: number, createTaskDto: CreateTaskDto) {
    try {
      await this.findOneTaskByName(projectId, createTaskDto.name);
      const task = await this.tasksRepository.create({
        ...createTaskDto,
        projectId,
      })
      const result = await this.tasksRepository.save(task);
      return result;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  /**
   * 分页获取任务
   * @param projectId number
   * @param getTaskDto GetTaskDto
   * @returns 
   */
  async findTask(projectId: number, getTaskDto: GetTaskDto) {
    const { page, size }  = getTaskDto;
    const [tasks, count] = await this.tasksRepository.findAndCount({
      where: {
        projectId,
      },
      skip: (page - 1) * size || 0,
      take: size || 10,
      order: {
        createdAt: 'DESC',
      }
    })
    
    return {
      list: tasks,
      total: count
    }
  }

  async findOneById(id: number) {
    const task = await this.tasksRepository.findOne(id);
    if (!task) throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    return task;
  }

  async updateTask(id: number, updateTaskDto: UpdateTaskDto) {
    try {
      await this.findOneById(id);
      const task = await this.tasksRepository.save({
        ...updateTaskDto,
        id,
      });
      return task;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async removeTask(id: number) {
    try {
      await this.findOneById(id);
      await this.tasksRepository.delete(id);
      return
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
