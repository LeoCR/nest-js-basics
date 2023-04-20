import { RoleType } from '@common/types/role.type';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: RoleType;

  @Column()
  recovery_token: string;

  @CreateDateColumn()
  created_at: Date;
}
