var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, } from "typeorm";
import { Usuarios } from "./User";
let Roles = class Roles extends BaseEntity {
    id;
    nombre;
    descripcion;
    canCreate;
    canEdit;
    canDelete;
    user;
};
__decorate([
    PrimaryGeneratedColumn()
], Roles.prototype, "id", void 0);
__decorate([
    Column()
], Roles.prototype, "nombre", void 0);
__decorate([
    Column()
], Roles.prototype, "descripcion", void 0);
__decorate([
    Column()
], Roles.prototype, "canCreate", void 0);
__decorate([
    Column()
], Roles.prototype, "canEdit", void 0);
__decorate([
    Column()
], Roles.prototype, "canDelete", void 0);
__decorate([
    OneToMany((type) => Usuarios, (user) => user.rol)
], Roles.prototype, "user", void 0);
Roles = __decorate([
    Entity()
], Roles);
export { Roles };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0VudGl0aWVzL1JvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixNQUFNLEVBRU4sU0FBUyxFQUNULHNCQUFzQixHQUN2QixNQUFNLFNBQVMsQ0FBQztBQUNqQixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBR2xDLElBQWEsS0FBSyxHQUFsQixNQUFhLEtBQU0sU0FBUSxVQUFVO0lBRW5DLEVBQUUsQ0FBVTtJQUVaLE1BQU0sQ0FBVTtJQUdoQixXQUFXLENBQVU7SUFHckIsU0FBUyxDQUFXO0lBR3BCLE9BQU8sQ0FBVztJQUdsQixTQUFTLENBQVc7SUFHcEIsSUFBSSxDQUFjO0NBQ25CLENBQUE7QUFsQkM7SUFEQyxzQkFBc0IsRUFBRTtpQ0FDYjtBQUVaO0lBREMsTUFBTSxFQUFFO3FDQUNPO0FBR2hCO0lBREMsTUFBTSxFQUFFOzBDQUNZO0FBR3JCO0lBREMsTUFBTSxFQUFFO3dDQUNXO0FBR3BCO0lBREMsTUFBTSxFQUFFO3NDQUNTO0FBR2xCO0lBREMsTUFBTSxFQUFFO3dDQUNXO0FBR3BCO0lBREMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7bUNBQ2hDO0FBbkJQLEtBQUs7SUFEakIsTUFBTSxFQUFFO0dBQ0ksS0FBSyxDQW9CakI7U0FwQlksS0FBSyJ9