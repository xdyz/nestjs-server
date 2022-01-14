import { BaseEntity } from "src/config/base.entity";
import { Column, Entity } from "typeorm";

@Entity('pipelines')
export class PipelinesEntity extends BaseEntity {
  
  @Column({
    name: 'name',
    type: 'varchar',
    length: '255',
    nullable: false
  })
  name: string;

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
    name: 'document_url',
    type: 'varchar',
    length: '255',
    nullable: true
  })
  documentUrl: string;


  @Column({
    name: 'description',
    type: 'varchar',
    length: '255',
    nullable: true
  })
  description: string;

  @Column({
    name: 'notify_users',
    type: 'json',
    length: '255',
    nullable: true
  })
  notifyUsers: any;

}
