import { Entity, Column } from 'typeorm';
import { BaseEntity } from 'src/config/base.entity';

@Entity('roles')
export class RolesEntity extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 256,
    name: 'name',
  })
  name: string;

  @Column({
    type: 'json',
    name: 'privileges',
  })
  privileges: string;

  @Column({
    type: 'tinyint',
    name: 'project_root',
    default: 0,
    // enum: [0, 1],
  })
  projectRoot: number;

  @Column({
    type: 'int',
    name: 'project_id',
  })
  projectId: number;
}
