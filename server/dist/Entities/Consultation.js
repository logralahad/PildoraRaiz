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
exports.Consultations = void 0;
const typeorm_1 = require("typeorm");
const Pacient_js_1 = require("./Pacient.js");
let Consultations = class Consultations extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Consultations.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "pacienteId" }),
    __metadata("design:type", Number)
], Consultations.prototype, "pacienteId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => Pacient_js_1.Pacients, {
        cascade: ["update"],
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: "pacienteId" }),
    __metadata("design:type", Pacient_js_1.Pacients)
], Consultations.prototype, "pacient", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Consultations.prototype, "motivo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], Consultations.prototype, "duracion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Consultations.prototype, "sintomas", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Consultations.prototype, "cronologia", void 0);
Consultations = __decorate([
    (0, typeorm_1.Entity)()
], Consultations);
exports.Consultations = Consultations;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VsdGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0VudGl0aWVzL0NvbnN1bHRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FPaUI7QUFDakIsNkNBQXdDO0FBR3hDLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWMsU0FBUSxvQkFBVTtDQXlCNUMsQ0FBQTtBQXZCQztJQURDLElBQUEsZ0NBQXNCLEdBQUU7O3lDQUNiO0FBR1o7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQUM7O2lEQUNYO0FBT3BCO0lBTEMsSUFBQSxtQkFBUyxFQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxxQkFBUSxFQUFFO1FBQzdCLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNuQixRQUFRLEVBQUUsS0FBSztLQUNoQixDQUFDO0lBQ0QsSUFBQSxvQkFBVSxFQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDOzhCQUN6QixxQkFBUTs4Q0FBQztBQUduQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs7NkNBQ1Q7QUFHaEI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7OytDQUNOO0FBR2xCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDOzsrQ0FDUDtBQUdsQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs7aURBQ0w7QUF4QlQsYUFBYTtJQUR6QixJQUFBLGdCQUFNLEdBQUU7R0FDSSxhQUFhLENBeUJ6QjtBQXpCWSxzQ0FBYSJ9