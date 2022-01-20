import { BaseEntity } from 'src/config/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('resource_category')
export class CategoryEntity extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 255,
    name: 'category_ame',
    nullable: false
  })
  categoryName: string;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'category_uid',
    nullable: false
  })
  categoryUid: string;

  @Column({
    type: 'int',
    name: 'project_id',
    nullable: false
  })
  projectId: number;
}
