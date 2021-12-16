import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectDto, UpdateProjectDto } from '../dtos/index';
import { ProjectsEntity } from '../entities/projects.entity';

@Injectable()
export class ProjectsService {
  @InjectRepository(ProjectsEntity)
  private readonly projectsRepository: Repository<ProjectsEntity>;

  /**
   * 获取所有项目 不分页
   * @returns 
   */
  async getAllProjects(): Promise<ProjectsEntity[]> {
    return await this.projectsRepository.find();
  }


  /**
   * 根据名称获取项目 如果存在则提示已存在
   * @param name string
   */

  async findOneByName(name: string): Promise<ProjectsEntity> {
    const result = await this.projectsRepository.findOne({
      where: {
        name
      }
    });

    if (result) throw new HttpException('项目已存在', HttpStatus.BAD_REQUEST);
    return
  }


  /**
   * 根据id 查询项目 如果不存在则提示项目不存在，存在则返回项目信息
   * @param id number 
   * @returns 
   */

  findOneById(id: number): Promise<ProjectsEntity> {
    const result = this.projectsRepository.findOne({
      where: {
        id
      }
    });
    if (!result) throw new HttpException('项目不存在', HttpStatus.BAD_REQUEST);
    return result;
  }


  /**
   * 新增项目
   * @param createProjectDto
   */

  async createProject(createProjectDto: CreateProjectDto): Promise<ProjectsEntity> {
    try {
      await this.findOneByName(createProjectDto.name);
      const project = await this.projectsRepository.create(createProjectDto);
      console.log(project);

      return await this.projectsRepository.save(project);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }


  /**
   * 更新项目
   * @param id number
   * @param updateProjectDto UpdateProjectDto
   */

  async updateProject(id: number, updateProjectDto: UpdateProjectDto): Promise<ProjectsEntity> {
    try {
      await this.findOneById(id);
      return await this.projectsRepository.save({
        ...updateProjectDto,
        id
      });
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }


  /**
   * 删除项目 软删除 将isDel字段改为1
   * @param id number
   */

  async deleteProject(id: number): Promise<{}> {
    try {
      await this.findOneById(id);
      await this.projectsRepository.softDelete({
        id
      });
      return {}
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

}