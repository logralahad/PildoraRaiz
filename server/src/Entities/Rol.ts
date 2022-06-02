import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Usuarios } from "./User.js";

@Entity()
export class Roles extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  nombre!: string;

  @Column()
  descripcion!: string;

  @Column()
  canCreate!: boolean;

  @Column()
  canEdit!: boolean;

  @Column()
  canDelete!: boolean;

  @OneToMany((type) => Usuarios, (user) => user.rol)
  user!: Usuarios[];
}
