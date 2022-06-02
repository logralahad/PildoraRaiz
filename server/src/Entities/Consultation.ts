import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pacients } from "./Pacient.js";

@Entity()
export class Consultations extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "pacienteId" })
  pacienteId!: number;

  @ManyToOne((type) => Pacients, {
    cascade: ["update"],
    nullable: false,
  })
  @JoinColumn({ name: "pacienteId" })
  pacient!: Pacients;

  @Column({ type: "text" })
  motivo!: string;

  @Column({ type: "int" })
  duracion!: number;

  @Column({ type: "text" })
  sintomas!: string;

  @Column({ type: "text" })
  cronologia!: string;
}
