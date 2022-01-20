import { BaseEntity } from 'src/config/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('resource_category_extra')
export class CategoryExtraEntity extends BaseEntity {
  @Column({
    type: 'int',
    name: 'category_id',
    nullable: false
  })
  categoryId: number;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'category_uid',
    nullable: false
  })
  categoryUid: string;

  @Column({
    type: 'json',
    name: 'global_params',
    nullable: false
  })
  globalParams: any;

  @Column({
    type: 'int',
    name: 'project_id',
    nullable: false
  })
  projectId: number;
}
