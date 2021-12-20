import { BaseEntity } from 'src/config/base.entity';
import { Entity, Column } from 'typeorm';
@Entity('resource_terms')
export class TermsEntity extends BaseEntity {
  @Column({
    type: 'int', 
    name: 'category_id' 
  })
  categoryId: number;

  @Column({
    type: 'varchar', 
    length: 50, 
    name: 'rule_uid' 
  })
  ruleUid: string;

  @Column({
    type: 'varchar', 
    length: 100, 
    name: 'rule_name' 
  })
  ruleName: string;

  @Column({
    type: 'varchar', 
    length: 255, 
    name: 'rule_desc' 
  })
  ruleDesc: string;

  @Column({
    type: 'varchar', 
    length: 255, 
    name: 'suggest', 
    nullable: true 
  })
  suggest: string;

  @Column({
    type: 'tinyint', 
    name: 'level' 
  })
  level: number;

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
    type: 'json', 
    name: 'threshold_range', 
    nullable: true 
  })
  thresholdRange: string;

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