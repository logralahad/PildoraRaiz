import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pacients } from "./Pacient.js";

@Entity()
export class Files extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "pacienteId" })
  pacienteId!: number;

  @OneToOne((type) => Pacients, {
    cascade: ["update"],
    nullable: false,
  })
  @JoinColumn({ name: "pacienteId" })
  paciente!: Pacients;

  @Column()
  enfermedadActual!: string;

  @Column({ type: "text" })
  antecedentes!: string;

  @Column({ type: "text" })
  evolucion!: string;

  @Column({ type: "text" })
  anamnesis!: string;

  @Column({ type: "text" })
  exploracion!: string;

  @Column({ type: "text" })
  tratamiento!: string;
}
