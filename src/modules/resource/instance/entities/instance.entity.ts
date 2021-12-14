import { BaseEntity } from "src/config/base.entity";
import { Entity, Column } from "typeorm";

@Entity()
export class Instance extends BaseEntity {

  /**
   * 实例名称
   * @example 资源检查
   */

  @Column({
    type: "varchar",
    name: "name",
    length: 255,
    nullable: false
  })

  name: string;

  /**
   * 创建者
   * @example 1
   */
  @Column({
    type: "int",
    name: 'user_id',
    nullable: false
  })

  userId: number;
}
