import { BaseEntity } from "src/config/base.entity";
import { Column, Entity } from "typeorm";

@Entity('builds')
export class Build  extends BaseEntity{

  @Column({
    name: 'task_id',
    type: 'int',
    nullable: false
  })
  taskId: number;

  @Column({
    name: 'status',
    type: 'int',
    nullable: false
  })
  status: number;

  @Column({
    name: 'user_id',
    type: 'int',
    nullable: false
  })
  userId: number;

  @Column({
    name: 'job_name',
    type: 'varchar',
    length: 255,
    nullable: false
  })
  jobName: string;

  @Column({
    name: 'number',
    type: 'int',
    nullable: false
  })
  number: number;

  @Column({
    name: 'parameters',
    type: 'json',
    nullable: true
  })
  parameters: unknown;

  @Column({
    name: 'build_type',
    type: 'varchar',
    length: 255,
    nullable: false
  })
  buildType: string;

  /**
   * @description  mongodb document id
   */
  @Column({
    name: 'file_id',
    type: 'varchar',
    length: 255,
    nullable: true
  })
  fileId: string;

  /**
   * @description  build result  id 文件数据提取后的id
   */

  @Column({
    name: 'result_id',
    type: 'int',
    nullable: true
  })
  resultId: number;


  @Column({
    name: 'project_id',
    type: 'int',
    nullable: false
  })
  projectId: number;
}
