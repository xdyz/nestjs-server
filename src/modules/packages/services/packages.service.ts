import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BuildEntity } from "src/modules/tasks/builds/entities/build.entity";
import { Repository } from "typeorm";
import { GetPackageDto } from "../dtos/index";

@Injectable()
export class PackagesService {
  @InjectRepository(BuildEntity)
  private readonly buildRepository: Repository<BuildEntity>;

  /**
   * 获取包的构建记录
   * @param projectId
   * @param getPackageDto
   * @returns
   */
  async findPackages(projectId, getPackageDto: GetPackageDto) {
    const { page, size } = getPackageDto;
    const [data, total] = await this.buildRepository.findAndCount({
      where: { projectId },
      skip: (page - 1) * size,
      take: size
    });
    return { data, total };
  }
}
