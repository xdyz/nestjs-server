import { BaseEntity } from "src/config/base.entity";
import { Column, Entity } from "typeorm";

@Entity('builds')
export class Build  extends BaseEntity{
  @Column({
    name: 'project_id',
    type: 'int',
    nullable: false
  })
  projectId: number;
}
