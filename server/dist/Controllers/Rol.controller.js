"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllRoles = exports.deleteRol = exports.updateRol = exports.getAllRoles = exports.getRolById = exports.createRol = void 0;
const Rol_js_1 = require("../Entities/Rol.js");
const createRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, descripcion, canCreate, canEdit, canDelete } = req.body;
    const result = yield Rol_js_1.Roles.save({
        nombre: nombre,
        descripcion: descripcion,
        canCreate: canCreate,
        canEdit: canEdit,
        canDelete: canDelete,
    });
    return res.send("Rol registrado.");
});
exports.createRol = createRol;
const getRolById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rolFound = yield Rol_js_1.Roles.findOneBy({ id: Number(id) });
    return res.json(rolFound);
});
exports.getRolById = getRolById;
const getAllRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rolesFound = yield Rol_js_1.Roles.find();
    return res.json(rolesFound);
});
exports.getAllRoles = getAllRoles;
const updateRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombre, descripcion, canCreate, canEdit, canDelete } = req.body;
    const rolFound = yield Rol_js_1.Roles.findOneBy({
        id: Number(id),
    });
    if (!rolFound)
        return res.json({
            success: false,
            message: "Rol no existe",
        });
    const result = yield Rol_js_1.Roles.update({ id: Number(id) }, {
        nombre: nombre,
        descripcion: descripcion,
        canCreate: canCreate,
        canEdit: canEdit,
        canDelete: canDelete,
    });
    return res.json({
        success: result.affected === 1,
        message: result.affected === 1
            ? "Rol actualizado correctamente"
            : "Hubo un error al actualizar",
    });
});
exports.updateRol = updateRol;
const deleteRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield Rol_js_1.Roles.delete({
            id: Number(id),
        });
        return res.send(result.affected === 1
            ? "Rol eliminado"
            : "Hubo un error al eliminar el Rol");
    }
    catch (error) {
        return res.json({ error: "Hubo un error al eliminar el Rol." });
    }
});
exports.deleteRol = deleteRol;
const deleteAllRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allRoles = yield Rol_js_1.Roles.find();
    const result = yield Rol_js_1.Roles.remove(allRoles);
    return res.send(result.length > 0
        ? "Roles eliminados"
        : "Hubo un error al eliminar los Roles");
});
exports.deleteAllRoles = deleteAllRoles;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9sLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ29udHJvbGxlcnMvUm9sLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0EsK0NBQTJDO0FBRXBDLE1BQU0sU0FBUyxHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQzdELE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztJQUV4RSxNQUFNLE1BQU0sR0FBRyxNQUFNLGNBQUssQ0FBQyxJQUFJLENBQUM7UUFDOUIsTUFBTSxFQUFFLE1BQU07UUFDZCxXQUFXLEVBQUUsV0FBVztRQUN4QixTQUFTLEVBQUUsU0FBUztRQUNwQixPQUFPLEVBQUUsT0FBTztRQUNoQixTQUFTLEVBQUUsU0FBUztLQUNyQixDQUFDLENBQUM7SUFFSCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUEsQ0FBQztBQVpXLFFBQUEsU0FBUyxhQVlwQjtBQUVLLE1BQU0sVUFBVSxHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQzlELE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzFCLE1BQU0sUUFBUSxHQUFHLE1BQU0sY0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM1QixDQUFDLENBQUEsQ0FBQztBQUpXLFFBQUEsVUFBVSxjQUlyQjtBQUVLLE1BQU0sV0FBVyxHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQy9ELE1BQU0s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