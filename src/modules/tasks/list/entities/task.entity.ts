import { BaseEntity } from "src/config/base.entity";
import { Column, Entity } from "typeorm";

@Entity('tasks')  // 表的名称
export class TasksEntity extends BaseEntity {
  
  @Column({
    name: 'name',
    type: "varchar",
    length: 255,
    nullable: false,
  })
  name:string


  @Column({
    name: 'display_name',
    type: "varchar",
    length: 255,
    nullable: false
  })
  displayName:string


  @Column({
    name: 'description',
    type: "varchar",
    length: 255,
    nullable: true
  })
  description:string


  @Column({
    name: 'document_url',
    type: "varchar",
    length: 255,
    nullable: true
  })
  documentUrl:string


  @Column({
    name: 'jenkins_id',
    type: "int",
    nullable: false
  })
  jenkinsId:number

  @Column({
    name: 'view_id',
    type: "int",
    nullable: false
  })
  viewId:number



  @Column({
    name: 'project_id',
    type: "int",
    nullable: false
  })
  projectId:number

}
