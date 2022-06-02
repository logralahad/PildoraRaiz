var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, } from "typeorm";
import { Consultations } from "./Consultation";
import { Persons } from "./Person";
import { Usuarios } from "./User";
let Pacients = class Pacients extends BaseEntity {
    id;
    userId;
    user;
    personaId;
    persona;
    calle;
    int;
    ext;
    colonia;
    img;
    hasFile;
    consultas;
};
__decorate([
    PrimaryGeneratedColumn()
], Pacients.prototype, "id", void 0);
__decorate([
    Column({ name: "userId" })
], Pacients.prototype, "userId", void 0);
__decorate([
    ManyToOne((type) => Usuarios, {
        cascade: ["update"],
        nullable: false,
    }),
    JoinColumn({ name: "userId" })
], Pacients.prototype, "user", void 0);
__decorate([
    Column({ name: "personaId" })
], Pacients.prototype, "personaId", void 0);
__decorate([
    OneToOne((type) => Persons, {
        cascade: ["update"],
        nullable: false,
    }),
    JoinColumn({ name: "personaId" })
], Pacients.prototype, "persona", void 0);
__decorate([
    Column({ type: "text" })
], Pacients.prototype, "calle", void 0);
__decorate([
    Column({ type: "text" })
], Pacients.prototype, "int", void 0);
__decorate([
    Column({ type: "text" })
], Pacients.prototype, "ext", void 0);
__decorate([
    Column({ type: "text" })
], Pacients.prototype, "colonia", void 0);
__decorate([
    Column({ type: "text" })
], Pacients.prototype, "img", void 0);
__decorate([
    Column()
], Pacients.prototype, "hasFile", void 0);
__decorate([
    OneToMany((type) => Consultations, (consultation) => consultation.pacient)
], Pacients.prototype, "consultas", void 0);
Pacients = __decorate([
    Entity()
], Pacients);
export { Pacients };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFjaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FbnRpdGllcy9QYWNpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLE1BQU0sRUFDTixVQUFVLEVBQ1YsU0FBUyxFQUNULFNBQVMsRUFDVCxRQUFRLEVBQ1Isc0JBQXNCLEdBQ3ZCLE1BQU0sU0FBUyxDQUFDO0FBQ2pCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFHbEMsSUFBYSxRQUFRLEdBQXJCLE1BQWEsUUFBUyxTQUFRLFVBQVU7SUFFdEMsRUFBRSxDQUFVO0lBR1osTUFBTSxDQUFVO0lBT2hCLElBQUksQ0FBWTtJQUdoQixTQUFTLENBQVU7SUFPbkIsT0FBTyxDQUFXO0lBR2xCLEtBQUssQ0FBVTtJQUdmLEdBQUcsQ0FBVTtJQUdiLEdBQUcsQ0FBVTtJQUdiLE9BQU8sQ0FBVTtJQUdqQixHQUFHLENBQVU7SUFHYixPQUFPLENBQVc7SUFHbEIsU0FBUyxDQUFtQjtDQUM3QixDQUFBO0FBMUNDO0lBREMsc0JBQXNCLEVBQUU7b0NBQ2I7QUFHWjtJQURDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQzt3Q0FDWDtBQU9oQjtJQUxDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFO1FBQzdCLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNuQixRQUFRLEVBQUUsS0FBSztLQUNoQixDQUFDO0lBQ0QsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDO3NDQUNmO0FBR2hCO0lBREMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDOzJDQUNYO0FBT25CO0lBTEMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUU7UUFDM0IsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQ25CLFFBQVEsRUFBRSxLQUFLO0tBQ2hCLENBQUM7SUFDRCxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUM7eUNBQ2hCO0FBR2xCO0lBREMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO3VDQUNWO0FBR2Y7SUFEQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7cUNBQ1o7QUFHYjtJQURDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQztxQ0FDWjtBQUdiO0lBREMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO3lDQUNSO0FBR2pCO0lBREMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO3FDQUNaO0FBR2I7SUFEQyxNQUFNLEVBQUU7eUNBQ1M7QUFHbEI7SUFEQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQzsyQ0FDL0M7QUEzQ2pCLFFBQVE7SUFEcEIsTUFBTSxFQUFFO0dBQ0ksUUFBUSxDQTRDcEI7U0E1Q1ksUUFBUSJ9