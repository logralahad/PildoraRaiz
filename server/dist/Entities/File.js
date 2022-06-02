var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, } from "typeorm";
import { Pacients } from "./Pacient";
let Files = class Files extends BaseEntity {
    id;
    pacienteId;
    paciente;
    enfermedadActual;
    antecedentes;
    evolucion;
    anamnesis;
    exploracion;
    tratamiento;
};
__decorate([
    PrimaryGeneratedColumn()
], Files.prototype, "id", void 0);
__decorate([
    Column({ name: "pacienteId" })
], Files.prototype, "pacienteId", void 0);
__decorate([
    OneToOne((type) => Pacients, {
        cascade: ["update"],
        nullable: false,
    }),
    JoinColumn({ name: "pacienteId" })
], Files.prototype, "paciente", void 0);
__decorate([
    Column()
], Files.prototype, "enfermedadActual", void 0);
__decorate([
    Column({ type: "text" })
], Files.prototype, "antecedentes", void 0);
__decorate([
    Column({ type: "text" })
], Files.prototype, "evolucion", void 0);
__decorate([
    Column({ type: "text" })
], Files.prototype, "anamnesis", void 0);
__decorate([
    Column({ type: "text" })
], Files.prototype, "exploracion", void 0);
__decorate([
    Column({ type: "text" })
], Files.prototype, "tratamiento", void 0);
Files = __decorate([
    Entity()
], Files);
export { Files };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FbnRpdGllcy9GaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLE1BQU0sRUFDTixVQUFVLEVBQ1YsUUFBUSxFQUNSLHNCQUFzQixHQUN2QixNQUFNLFNBQVMsQ0FBQztBQUNqQixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBR3JDLElBQWEsS0FBSyxHQUFsQixNQUFhLEtBQU0sU0FBUSxVQUFVO0lBRW5DLEVBQUUsQ0FBVTtJQUdaLFVBQVUsQ0FBVTtJQU9wQixRQUFRLENBQVk7SUFHcEIsZ0JBQWdCLENBQVU7SUFHMUIsWUFBWSxDQUFVO0lBR3RCLFNBQVMsQ0FBVTtJQUduQixTQUFTLENBQVU7SUFHbkIsV0FBVyxDQUFVO0lBR3JCLFdBQVcsQ0FBVTtDQUN0QixDQUFBO0FBN0JDO0lBREMsc0JBQXNCLEVBQUU7aUNBQ2I7QUFHWjtJQURDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQzt5Q0FDWDtBQU9wQjtJQUxDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFO1FBQzVCLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNuQixRQUFRLEVBQUUsS0FBSztLQUNoQixDQUFDO0lBQ0QsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDO3VDQUNmO0FBR3BCO0lBREMsTUFBTSxFQUFFOytDQUNpQjtBQUcxQjtJQURDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzsyQ0FDSDtBQUd0QjtJQURDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzt3Q0FDTjtBQUduQjtJQURDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzt3Q0FDTjtBQUduQjtJQURDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzswQ0FDSjtBQUdyQjtJQURDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzswQ0FDSjtBQTlCVixLQUFLO0lBRGpCLE1BQU0sRUFBRTtHQUNJLEtBQUssQ0ErQmpCO1NBL0JZLEtBQUsifQ==