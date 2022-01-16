import { BaseEntity } from "src/config/base.entity";
import { Column, Entity } from "typeorm";

@Entity('pipeline_records')
export class RecordsEntity extends BaseEntity {

  @Column({
    name: 'name',
    type: 'varchar',
    length: '255',
    nullable: false,
  })
  name: string;
  
  @Column({
    name: 'pipeline_id',
    type: 'int',
    nullable: false
  })
  pipelineId: number;

  @Column({
    name: 'user_id',
    type: 'int',
    nullable: false
  })
  userId: number;

  @Column({
    name: 'project_id',
    type: 'int',
    nullable: false
  })
  projectId: number;

  @Column({
    name: 'nodes',
    type: 'json',
    nullable: false
  })
  nodes: any;

  @Column({
    name: 'edges',
    type: 'json',
    nullable: false
  })
  edges: any;

  @Column({
    name: 'status',
    type: 'int',
    nullable: false
  })
  status: number;
}
