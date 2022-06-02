import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Usuarios } from "./User";

@Entity()
export class Persons extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  paterno!: string;

  @Column()
  materno!: string;

  @Column()
  edad!: number;

  @Column()
  telefono!: string;

  @OneToOne((type) => Usuarios, (user) => user.persona)
  user!: Usuarios;
}
