import { Entity, Column } from 'typeorm';
import { BaseEntity } from 'src/config/base.entity';

@Entity('resource_instance_items')
export class InstanceItemsEntity extends BaseEntity {
  @Column({
    type: 'int', 
    name: 'instance_id' 
  })
  instanceId: number;

  @Column({
    type: 'int', 
    name: 'term_id' 
  })
  termId: number;

  @Column({
    type: 'varchar', 
    length: 255, 
    name: 'detect_paths' 
  })
  detectPaths: string;

  @Column({
    type: 'varchar', 
    length: 255, 
    name: 'filter_paths', 
    nullable: true 
  })
  filterPaths: string;

  @Column({
    type: 'varchar', 
    length: 255, 
    name: 'filter_regex', 
    nullable: true 
  })
  filterRegex: string;

  @Column({
    type: 'varchar', 
    length: 255, 
    name: 'threshold_value', 
    nullable: true 
  })
  thresholdValue: string;

  @Column({
    type: 'tinyint', 
    name: 'enabled', 
    default: '1' 
  })
  enabled: number;

  @Column({
    type: 'int', 
    name: 'project_id' 
  })
  projectId: number;

}