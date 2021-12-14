import { Entity, PrimaryGeneratedColumn, Timestamp, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '主键'
  })
  id: number;

  // 第一种方式，自动生成时间戳，在创建数据的时候写入默认值
  // @Column({
  //   type: 'timestamp',
  //   name: 'created_at',
  //   default: () => 'CURRENT_TIMESTAMP',
  // })
  // createdAt: Date;

  // 第二种方式，生成时间戳，在创建数据的时候写入默认值

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
    nullable: false,
    comment: '创建时间'
  })
  createdAt: Timestamp;


  // 第一种更新时间戳方式，在每次执行update的时候都会更新时间戳
  //自动更新时间;
  // @Column({
  //   type: 'timestamp',
  //   name: 'updated_at',
  //   update: true,
  //   default: () => 'CURRENT_TIMESTAMP',
  //   onUpdate: 'CURRENT_TIMESTAMP',
  // })


  // 第二种更新时间戳方式，在每次执行update的时候都会更新时间戳
  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
    nullable: false,
    comment: '更新时间'
  })
  updatedAt: Timestamp;
  // @Column({
  //   type: 'date',
  //   name: 'deleted_at',
  // })
  // deleted_at: Date;


  @DeleteDateColumn({
    type: 'timestamp',
    name: 'deleted_at',
    nullable: false,
    select: false,
    comment: '删除时间'
  })
  deletedAt: Timestamp;
}
