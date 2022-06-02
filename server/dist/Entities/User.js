"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuarios = void 0;
const typeorm_1 = require("typeorm");
const Pacient_js_1 = require("./Pacient.js");
const Person_js_1 = require("./Person.js");
const Rol_js_1 = require("./Rol.js");
let Usuarios = class Usuarios extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Usuarios.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "personaId" }),
    __metadata("design:type", Number)
], Usuarios.prototype, "personaId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => Person_js_1.Persons, {
        cascade: ["update"],
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: "personaId" }),
    __metadata("design:type", Person_js_1.Persons)
], Usuarios.prototype, "persona", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "rolId" }),
    __metadata("design:type", Number)
], Usuarios.prototype, "rolId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => Rol_js_1.Roles, (rol) => rol.user, {
        cascade: ["update"],
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: "rolId" }),
    __metadata("design:type", Rol_js_1.Roles)
], Usuarios.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Usuarios.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Usuarios.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => Pacient_js_1.Pacients, (paciente) => paciente.user),
    __metadata("design:type", Array)
], Usuarios.prototype, "pacientes", void 0);
Usuarios = __decorate([
    (0, typeorm_1.Entity)()
], Usuarios);
exports.Usuarios = Usuarios;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FbnRpdGllcy9Vc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQVNpQjtBQUNqQiw2Q0FBd0M7QUFDeEMsMkNBQXNDO0FBQ3RDLHFDQUFpQztBQUdqQyxJQUFhLFFBQVEsR0FBckIsTUFBYSxRQUFTLFNBQVEsb0JBQVU7Q0FnQ3ZDLENBQUE7QUE5QkM7SUFEQyxJQUFBLGdDQUFzQixHQUFFOztvQ0FDYjtBQUdaO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDOzsyQ0FDWDtBQU9uQjtJQUxDLElBQUEsa0JBQVEsRUFBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsbUJBQU8sRUFBRTtRQUMzQixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDbkIsUUFBUSxFQUFFLEtBQUs7S0FDaEIsQ0FBQztJQUNELElBQUEsb0JBQVUsRUFBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQzs4QkFDeEIsbUJBQU87eUNBQUM7QUFHbEI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7O3VDQUNYO0FBT2Y7SUFMQyxJQUFBLG1CQUFTLEVBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLGNBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtRQUM3QyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDbkIsUUFBUSxFQUFFLEtBQUs7S0FDaEIsQ0FBQztJQUNELElBQUEsb0JBQVUsRUFBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQzs4QkFDeEIsY0FBSztxQ0FBQztBQUdaO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzswQ0FDUDtBQUdsQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs7MENBQ1A7QUFHbEI7SUFEQyxJQUFBLG1CQUFTLEVBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLHFCQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7OzJDQUNwQztBQS9CWixRQUFRO0lBRHBCLElBQUEsZ0JBQU0sR0FBRTtHQUNJLFFBQVEsQ0FnQ3BCO0FBaENZLDRCQUFRIn0=