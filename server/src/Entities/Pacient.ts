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
import { Consultations } from "./Consultation.js";
import { Persons } from "./Person.js";
import { Usuarios } from "./User.js";

@Entity()
export class Pacients extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "userId" })
  userId!: number;

  @ManyToOne((type) => Usuarios, {
    cascade: ["update"],
    nullable: false,
  })
  @JoinColumn({ name: "userId" })
  user!: Usuarios;

  @Column({ name: "personaId" })
  personaId!: number;

  @OneToOne((type) => Persons, {
    cascade: ["update"],
    nullable: false,
  })
  @JoinColumn({ name: "personaId" })
  persona!: Persons;

  @Column({ type: "text" })
  calle!: string;

  @Column({ type: "text" })
  int!: string;

  @Column({ type: "text" })
  ext!: string;

  @Column({ type: "text" })
  colonia!: string;

  @Column({ type: "text" })
  img!: string;

  @Column()
  hasFile!: boolean;

  @OneToMany((type) => Consultations, (consultation) => consultation.pacient)
  consultas!: Consultations[];
}
