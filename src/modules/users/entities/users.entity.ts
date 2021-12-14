import { Entity, Column } from 'typeorm';
import { BaseEntity } from 'src/config/base.entity';
@Entity('users')
export class UsersEntity extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 16,
    name: 'username',
  })
  username: string;

  @Column({
    type: 'varchar',
    length: 48,
    name: 'nickname',
  })
  nickname: string;

  @Column({
    type: 'varchar',
    length: 16,
    name: 'password',
    nullable: true,
    // select: false,
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 256,
    name: 'email',
    nullable: true,
    default: '',
  })
  email: string;

  @Column({
    type: 'tinyint',
    name: 'is_root',
    nullable: true,
    default: '0',
  })
  isRoot: number;
}
