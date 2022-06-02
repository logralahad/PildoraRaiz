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
exports.Pacients = void 0;
const typeorm_1 = require("typeorm");
const Consultation_js_1 = require("./Consultation.js");
const Person_js_1 = require("./Person.js");
const User_js_1 = require("./User.js");
let Pacients = class Pacients extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Pacients.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "userId" }),
    __metadata("design:type", Number)
], Pacients.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => User_js_1.Usuarios, {
        cascade: ["update"],
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: "userId" }),
    __metadata("design:type", User_js_1.Usuarios)
], Pacients.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "personaId" }),
    __metadata("design:type", Number)
], Pacients.prototype, "personaId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => Person_js_1.Persons, {
        cascade: ["update"],
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: "personaId" }),
    __metadata("design:type", Person_js_1.Persons)
], Pacients.prototype, "persona", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Pacients.prototype, "calle", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Pacients.prototype, "int", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Pacients.prototype, "ext", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Pacients.prototype, "colonia", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Pacients.prototype, "img", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Pacients.prototype, "hasFile", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => Consultation_js_1.Consultations, (consultation) => consultation.pacient),
    __metadata("design:type", Array)
], Pacients.prototype, "consultas", void 0);
Pacients = __decorate([
    (0, typeorm_1.Entity)()
], Pacients);
exports.Pacients = Pacients;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFjaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FbnRpdGllcy9QYWNpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQVNpQjtBQUNqQix1REFBa0Q7QUFDbEQsMkNBQXNDO0FBQ3RDLHVDQUFxQztBQUdyQyxJQUFhLFFBQVEsR0FBckIsTUFBYSxRQUFTLFNBQVEsb0JBQVU7Q0E0Q3ZDLENBQUE7QUExQ0M7SUFEQyxJQUFBLGdDQUFzQixHQUFFOztvQ0FDYjtBQUdaO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDOzt3Q0FDWDtBQU9oQjtJQUxDLElBQUEsbUJBQVMsRUFBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsa0JBQVEsRUFBRTtRQUM3QixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDbkIsUUFBUSxFQUFFLEtBQUs7S0FDaEIsQ0FBQztJQUNELElBQUEsb0JBQVUsRUFBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQzs4QkFDeEIsa0JBQVE7c0NBQUM7QUFHaEI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUM7OzJDQUNYO0FBT25CO0lBTEMsSUFBQSxrQkFBUSxFQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxtQkFBTyxFQUFFO1FBQzNCLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNuQixRQUFRLEVBQUUsS0FBSztLQUNoQixDQUFDO0lBQ0QsSUFBQSxvQkFBVSxFQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDOzhCQUN4QixtQkFBTzt5Q0FBQztBQUdsQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs7dUNBQ1Y7QUFHZjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs7cUNBQ1o7QUFHYjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs7cUNBQ1o7QUFHYjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs7eUNBQ1I7QUFHakI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7O3FDQUNaO0FBR2I7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O3lDQUNTO0FBR2xCO0lBREMsSUFBQSxtQkFBUyxFQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQywrQkFBYSxFQUFFLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDOzsyQ0FDL0M7QUEzQ2pCLFFBQVE7SUFEcEIsSUFBQSxnQkFBTSxHQUFFO0dBQ0ksUUFBUSxDQTRDcEI7QUE1Q1ksNEJBQVEifQ==