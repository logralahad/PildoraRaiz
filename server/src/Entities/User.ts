import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pacients } from "./Pacient.js";
import { Persons } from "./Person.js";
import { Roles } from "./Rol.js";

@Entity()
export class Usuarios extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "personaId" })
  personaId!: number;

  @OneToOne((type) => Persons, {
    cascade: ["update"],
    nullable: false,
  })
  @JoinColumn({ name: "personaId" })
  persona!: Persons;

  @Column({ name: "rolId" })
  rolId!: number;

  @ManyToOne((type) => Roles, (rol) => rol.user, {
    cascade: ["update"],
    nullable: false,
  })
  @JoinColumn({ name: "rolId" })
  rol!: Roles;

  @Column({ unique: true })
  username!: string;

  @Column({ type: "text" })
  password!: string;

  @OneToMany((type) => Pacients, (paciente) => paciente.user)
  pacientes!: Pacients[];
}
