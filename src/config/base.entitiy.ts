import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;
  // @Column({
  //   type: 'date',
  //   name: 'created_at',
  // })
  // created_at: Date;

  // 自动更新时间
  // @Column({
  //   type: 'date',
  //   name: 'updated_at',
  // })
  // updated_at: Date;
  // @Column({
  //   type: 'date',
  //   name: 'deleted_at',
  // })
  // deleted_at: Date;
}
