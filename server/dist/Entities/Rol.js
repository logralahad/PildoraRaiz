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
exports.Roles = void 0;
const typeorm_1 = require("typeorm");
const User_js_1 = require("./User.js");
let Roles = class Roles extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Roles.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Roles.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Roles.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Roles.prototype, "canCreate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Roles.prototype, "canEdit", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Roles.prototype, "canDelete", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => User_js_1.Usuarios, (user) => user.rol),
    __metadata("design:type", Array)
], Roles.prototype, "user", void 0);
Roles = __decorate([
    (0, typeorm_1.Entity)()
], Roles);
exports.Roles = Roles;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0VudGl0aWVzL1JvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FPaUI7QUFDakIsdUNBQXFDO0FBR3JDLElBQWEsS0FBSyxHQUFsQixNQUFhLEtBQU0sU0FBUSxvQkFBVTtDQW9CcEMsQ0FBQTtBQWxCQztJQURDLElBQUEsZ0NBQXNCLEdBQUU7O2lDQUNiO0FBRVo7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O3FDQUNPO0FBR2hCO0lBREMsSUFBQSxnQkFBTSxHQUFFOzswQ0FDWTtBQUdyQjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7d0NBQ1c7QUFHcEI7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O3NDQUNTO0FBR2xCO0lBREMsSUFBQSxnQkFBTSxHQUFFOzt3Q0FDVztBQUdwQjtJQURDLElBQUEsbUJBQVMsRUFBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsa0JBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7bUNBQ2hDO0FBbkJQLEtBQUs7SUFEakIsSUFBQSxnQkFBTSxHQUFFO0dBQ0ksS0FBSyxDQW9CakI7QUFwQlksc0JBQUsifQ==