import { Entity, Column } from 'typeorm';
import { BaseEntity } from 'src/config/base.entity';

@Entity('members')
export class MembersEntity extends BaseEntity {
  @Column({
    type: 'int',
    name: 'user_id',
  })
  userId: number;

  @Column({
    type: 'int',
    name: 'project_id',
  })
  projectId: number;

  @Column({
    type: 'int',
    name: 'role_id',
    nullable: true,
  })
  roleId: number;
}
