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
exports.Files = void 0;
const typeorm_1 = require("typeorm");
const Pacient_js_1 = require("./Pacient.js");
let Files = class Files extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Files.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "pacienteId" }),
    __metadata("design:type", Number)
], Files.prototype, "pacienteId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => Pacient_js_1.Pacients, {
        cascade: ["update"],
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: "pacienteId" }),
    __metadata("design:type", Pacient_js_1.Pacients)
], Files.prototype, "paciente", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Files.prototype, "enfermedadActual", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Files.prototype, "antecedentes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Files.prototype, "evolucion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Files.prototype, "anamnesis", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Files.prototype, "exploracion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Files.prototype, "tratamiento", void 0);
Files = __decorate([
    (0, typeorm_1.Entity)()
], Files);
exports.Files = Files;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FbnRpdGllcy9GaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQU9pQjtBQUNqQiw2Q0FBd0M7QUFHeEMsSUFBYSxLQUFLLEdBQWxCLE1BQWEsS0FBTSxTQUFRLG9CQUFVO0NBK0JwQyxDQUFBO0FBN0JDO0lBREMsSUFBQSxnQ0FBc0IsR0FBRTs7aUNBQ2I7QUFHWjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQzs7eUNBQ1g7QUFPcEI7SUFMQyxJQUFBLGtCQUFRLEVBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLHFCQUFRLEVBQUU7UUFDNUIsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQ25CLFFBQVEsRUFBRSxLQUFLO0tBQ2hCLENBQUM7SUFDRCxJQUFBLG9CQUFVLEVBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQUM7OEJBQ3hCLHFCQUFRO3VDQUFDO0FBR3BCO0lBREMsSUFBQSxnQkFBTSxHQUFFOzsrQ0FDaUI7QUFHMUI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7OzJDQUNIO0FBR3RCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDOzt3Q0FDTjtBQUduQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs7d0NBQ047QUFHbkI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7OzBDQUNKO0FBR3JCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDOzswQ0FDSjtBQTlCVixLQUFLO0lBRGpCLElBQUEsZ0JBQU0sR0FBRTtHQUNJLEtBQUssQ0ErQmpCO0FBL0JZLHNCQUFLIn0=