import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';
@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;
  @Column({
    type: 'timestamp',
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  //自动更新时间;
  @Column({
    type: 'timestamp',
    name: 'updated_at',
    update: true,
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Timestamp;
  // @Column({
  //   type: 'date',
  //   name: 'deleted_at',
  // })
  // deleted_at: Date;
}
