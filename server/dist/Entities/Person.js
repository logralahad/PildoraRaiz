var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn, } from "typeorm";
import { Usuarios } from "./User";
let Persons = class Persons extends BaseEntity {
    id;
    nombre;
    paterno;
    materno;
    edad;
    telefono;
    user;
};
__decorate([
    PrimaryGeneratedColumn()
], Persons.prototype, "id", void 0);
__decorate([
    Column()
], Persons.prototype, "nombre", void 0);
__decorate([
    Column()
], Persons.prototype, "paterno", void 0);
__decorate([
    Column()
], Persons.prototype, "materno", void 0);
__decorate([
    Column()
], Persons.prototype, "edad", void 0);
__decorate([
    Column()
], Persons.prototype, "telefono", void 0);
__decorate([
    OneToOne((type) => Usuarios, (user) => user.persona)
], Persons.prototype, "user", void 0);
Persons = __decorate([
    Entity()
], Persons);
export { Persons };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0VudGl0aWVzL1BlcnNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixNQUFNLEVBQ04sUUFBUSxFQUNSLHNCQUFzQixHQUN2QixNQUFNLFNBQVMsQ0FBQztBQUNqQixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBR2xDLElBQWEsT0FBTyxHQUFwQixNQUFhLE9BQVEsU0FBUSxVQUFVO0lBRXJDLEVBQUUsQ0FBVTtJQUdaLE1BQU0sQ0FBVTtJQUdoQixPQUFPLENBQVU7SUFHakIsT0FBTyxDQUFVO0lBR2pCLElBQUksQ0FBVTtJQUdkLFFBQVEsQ0FBVTtJQUdsQixJQUFJLENBQVk7Q0FDakIsQ0FBQTtBQW5CQztJQURDLHNCQUFzQixFQUFFO21DQUNiO0FBR1o7SUFEQyxNQUFNLEVBQUU7dUNBQ087QUFHaEI7SUFEQyxNQUFNLEVBQUU7d0NBQ1E7QUFHakI7SUFEQyxNQUFNLEVBQUU7d0NBQ1E7QUFHakI7SUFEQyxNQUFNLEVBQUU7cUNBQ0s7QUFHZDtJQURDLE1BQU0sRUFBRTt5Q0FDUztBQUdsQjtJQURDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3FDQUNyQztBQXBCTCxPQUFPO0lBRG5CLE1BQU0sRUFBRTtHQUNJLE9BQU8sQ0FxQm5CO1NBckJZLE9BQU8ifQ==