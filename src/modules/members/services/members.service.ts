import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMemberDto, UpdateMemberDto, GetMemberDto } from '../dtos/index';
import { MembersEntity } from '../entities/members.entity';

@Injectable()
export class MembersService {
  @InjectRepository(MembersEntity)
  private readonly membersRepository: Repository<MembersEntity>


  /**
   * 查询单个成员信息
   * @Description: 一个成员在一个项目中 只能出现一次 这里通过项目id和用户id来查询 是否已经存在相同成员
   * @param projectId 
   * @param userId
   * @returns 
   */

  async findOneByProIdAndUserId(projectId: number, userId: number) {
    const result = this.membersRepository.findOne({
      where: {
        projectId,
        userId
      }
    })

    if (!result) throw new HttpException('该成员不存在', HttpStatus.BAD_REQUEST);
    return result;
  }

  /**
   * 通过id 查询成员是否存在
   * @param id 
   * @returns 
   */

  async findOneById(id: number) {
    const result = await this.membersRepository.findOne(id);
    if (!result) throw new HttpException('该成员不存在', HttpStatus.BAD_REQUEST);
    return result;
  }



  /**
   * 获取项目的所有成员列表
   * @param projectId
   */

  async findAllMembers(projectId: number) {
    const result = await this.membersRepository.createQueryBuilder('m')
      .where('m.projectId = :projectId', { projectId })
      .leftJoinAndMapOne('m.user', 'UsersEntity', 'u', 'm.userId = u.id')
      .leftJoinAndMapOne('m.role', 'RolesEntity', 'r', 'm.roleId = r.id')
      .getMany();

    return result;
  }


  /**
   * 分页 + 条件筛选 数据
   */

  async findMembers(projectId: number, { page, size, ...rest }: GetMemberDto) {
    const [list, total] = await this.membersRepository.createQueryBuilder('m')
      .where('m.projectId = :projectId', { projectId })
      .where(rest)
      .skip((page - 1) * size || 0)
      .take(size || 10)
      .orderBy('m.createdAt', 'DESC')
      .leftJoinAndMapOne('m.user', 'UsersEntity', 'u', 'm.userId = u.id')
      .leftJoinAndMapOne('m.role', 'RolesEntity', 'r', 'm.roleId = r.id')
      .getManyAndCount();

    return {
      list,
      total
    };
  }


  /**
   * 新增成员
   * @param CreateMemberDto
   */

  async createMember(createMemberDto: CreateMemberDto) {
    try {
      const { projectId, userId } = createMemberDto;
      await this.findOneByProIdAndUserId(projectId, userId); // 如果该项目已经存在该成员了，那么就不能再次添加
      return await this.membersRepository.save(createMemberDto);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  /**
   * 更新成员
   * @param updateMemberDto
   */

  async updateMember(id: number, updateMemberDto: UpdateMemberDto) {
    try {
      await this.findOneById(id);
      return await this.membersRepository.save({ ...updateMemberDto, id });
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }



  /**
   * 删除成员
   * @param id
   */


  async deleteMember(id: number) {
    try {
      await this.findOneById(id);
      await this.membersRepository.delete(id);
      return {}
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }



}
