import { Entity, Column } from 'typeorm';
import { BaseEntity } from 'src/config/base.entity';
@Entity('projects')
export class ProjectsEntity extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 255,
    name: 'name',
  })
  name: string;

  @Column({
    type: 'tinyint',
    name: 'is_del',
    nullable: true,
    default: '0',
    select: false
  })
  isDel: number;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'image_url',
    nullable: true,
  })
  imageUrl: string;
}
