var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, } from "typeorm";
import { Pacients } from "./Pacient";
import { Persons } from "./Person";
import { Roles } from "./Rol";
let Usuarios = class Usuarios extends BaseEntity {
    id;
    personaId;
    persona;
    rolId;
    rol;
    username;
    password;
    pacientes;
};
__decorate([
    PrimaryGeneratedColumn()
], Usuarios.prototype, "id", void 0);
__decorate([
    Column({ name: "personaId" })
], Usuarios.prototype, "personaId", void 0);
__decorate([
    OneToOne((type) => Persons, {
        cascade: ["update"],
        nullable: false,
    }),
    JoinColumn({ name: "personaId" })
], Usuarios.prototype, "persona", void 0);
__decorate([
    Column({ name: "rolId" })
], Usuarios.prototype, "rolId", void 0);
__decorate([
    ManyToOne((type) => Roles, (rol) => rol.user, {
        cascade: ["update"],
        nullable: false,
    }),
    JoinColumn({ name: "rolId" })
], Usuarios.prototype, "rol", void 0);
__decorate([
    Column({ unique: true })
], Usuarios.prototype, "username", void 0);
__decorate([
    Column({ type: "text" })
], Usuarios.prototype, "password", void 0);
__decorate([
    OneToMany((type) => Pacients, (paciente) => paciente.user)
], Usuarios.prototype, "pacientes", void 0);
Usuarios = __decorate([
    Entity()
], Usuarios);
export { Usuarios };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FbnRpdGllcy9Vc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLE1BQU0sRUFDTixVQUFVLEVBQ1YsU0FBUyxFQUNULFNBQVMsRUFDVCxRQUFRLEVBQ1Isc0JBQXNCLEdBQ3ZCLE1BQU0sU0FBUyxDQUFDO0FBQ2pCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNuQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRzlCLElBQWEsUUFBUSxHQUFyQixNQUFhLFFBQVMsU0FBUSxVQUFVO0lBRXRDLEVBQUUsQ0FBVTtJQUdaLFNBQVMsQ0FBVTtJQU9uQixPQUFPLENBQVc7SUFHbEIsS0FBSyxDQUFVO0lBT2YsR0FBRyxDQUFTO0lBR1osUUFBUSxDQUFVO0lBR2xCLFFBQVEsQ0FBVTtJQUdsQixTQUFTLENBQWM7Q0FDeEIsQ0FBQTtBQTlCQztJQURDLHNCQUFzQixFQUFFO29DQUNiO0FBR1o7SUFEQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUM7MkNBQ1g7QUFPbkI7SUFMQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRTtRQUMzQixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDbkIsUUFBUSxFQUFFLEtBQUs7S0FDaEIsQ0FBQztJQUNELFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQzt5Q0FDaEI7QUFHbEI7SUFEQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7dUNBQ1g7QUFPZjtJQUxDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO1FBQzdDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNuQixRQUFRLEVBQUUsS0FBSztLQUNoQixDQUFDO0lBQ0QsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDO3FDQUNsQjtBQUdaO0lBREMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzBDQUNQO0FBR2xCO0lBREMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDOzBDQUNQO0FBR2xCO0lBREMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7MkNBQ3BDO0FBL0JaLFFBQVE7SUFEcEIsTUFBTSxFQUFFO0dBQ0ksUUFBUSxDQWdDcEI7U0FoQ1ksUUFBUSJ9