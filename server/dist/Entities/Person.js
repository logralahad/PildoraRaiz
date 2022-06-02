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
exports.Persons = void 0;
const typeorm_1 = require("typeorm");
const User_js_1 = require("./User.js");
let Persons = class Persons extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Persons.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Persons.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Persons.prototype, "paterno", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Persons.prototype, "materno", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Persons.prototype, "edad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Persons.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => User_js_1.Usuarios, (user) => user.persona),
    __metadata("design:type", User_js_1.Usuarios)
], Persons.prototype, "user", void 0);
Persons = __decorate([
    (0, typeorm_1.Entity)()
], Persons);
exports.Persons = Persons;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0VudGl0aWVzL1BlcnNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FNaUI7QUFDakIsdUNBQXFDO0FBR3JDLElBQWEsT0FBTyxHQUFwQixNQUFhLE9BQVEsU0FBUSxvQkFBVTtDQXFCdEMsQ0FBQTtBQW5CQztJQURDLElBQUEsZ0NBQXNCLEdBQUU7O21DQUNiO0FBR1o7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O3VDQUNPO0FBR2hCO0lBREMsSUFBQSxnQkFBTSxHQUFFOzt3Q0FDUTtBQUdqQjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7d0NBQ1E7QUFHakI7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O3FDQUNLO0FBR2Q7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O3lDQUNTO0FBR2xCO0lBREMsSUFBQSxrQkFBUSxFQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxrQkFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDOzhCQUM5QyxrQkFBUTtxQ0FBQztBQXBCTCxPQUFPO0lBRG5CLElBQUEsZ0JBQU0sR0FBRTtHQUNJLE9BQU8sQ0FxQm5CO0FBckJZLDBCQUFPIn0=