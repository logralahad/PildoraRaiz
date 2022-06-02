var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, } from "typeorm";
import { Pacients } from "./Pacient";
let Consultations = class Consultations extends BaseEntity {
    id;
    pacienteId;
    pacient;
    motivo;
    duracion;
    sintomas;
    cronologia;
};
__decorate([
    PrimaryGeneratedColumn()
], Consultations.prototype, "id", void 0);
__decorate([
    Column({ name: "pacienteId" })
], Consultations.prototype, "pacienteId", void 0);
__decorate([
    ManyToOne((type) => Pacients, {
        cascade: ["update"],
        nullable: false,
    }),
    JoinColumn({ name: "pacienteId" })
], Consultations.prototype, "pacient", void 0);
__decorate([
    Column({ type: "text" })
], Consultations.prototype, "motivo", void 0);
__decorate([
    Column({ type: "int" })
], Consultations.prototype, "duracion", void 0);
__decorate([
    Column({ type: "text" })
], Consultations.prototype, "sintomas", void 0);
__decorate([
    Column({ type: "text" })
], Consultations.prototype, "cronologia", void 0);
Consultations = __decorate([
    Entity()
], Consultations);
export { Consultations };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VsdGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0VudGl0aWVzL0NvbnN1bHRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixNQUFNLEVBQ04sVUFBVSxFQUNWLFNBQVMsRUFDVCxzQkFBc0IsR0FDdkIsTUFBTSxTQUFTLENBQUM7QUFDakIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUdyQyxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFjLFNBQVEsVUFBVTtJQUUzQyxFQUFFLENBQVU7SUFHWixVQUFVLENBQVU7SUFPcEIsT0FBTyxDQUFZO0lBR25CLE1BQU0sQ0FBVTtJQUdoQixRQUFRLENBQVU7SUFHbEIsUUFBUSxDQUFVO0lBR2xCLFVBQVUsQ0FBVTtDQUNyQixDQUFBO0FBdkJDO0lBREMsc0JBQXNCLEVBQUU7eUNBQ2I7QUFHWjtJQURDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQztpREFDWDtBQU9wQjtJQUxDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFO1FBQzdCLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNuQixRQUFRLEVBQUUsS0FBSztLQUNoQixDQUFDO0lBQ0QsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDOzhDQUNoQjtBQUduQjtJQURDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs2Q0FDVDtBQUdoQjtJQURDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQzsrQ0FDTjtBQUdsQjtJQURDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzsrQ0FDUDtBQUdsQjtJQURDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQztpREFDTDtBQXhCVCxhQUFhO0lBRHpCLE1BQU0sRUFBRTtHQUNJLGFBQWEsQ0F5QnpCO1NBekJZLGFBQWEifQ==