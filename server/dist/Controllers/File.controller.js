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
exports.getFileByPacientId = exports.getFileById = exports.getAllFiles = exports.deleteFile = exports.updateFile = exports.createFile = void 0;
const File_js_1 = require("../Entities/File.js");
const Pacient_js_1 = require("../Entities/Pacient.js");
const createFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { enfermedadActual, antecedentes, evolucion, anamnesis, exploracion, tratamiento, pacienteId, } = req.body;
    const fileIn = yield File_js_1.Files.insert({
        enfermedadActual: enfermedadActual,
        antecedentes: antecedentes,
        evolucion: evolucion,
        anamnesis: anamnesis,
        exploracion: exploracion,
        tratamiento: tratamiento,
        pacienteId: pacienteId,
    });
    if (fileIn.identifiers[0].id) {
        const result = yield Pacient_js_1.Pacients.update({ id: pacienteId }, { hasFile: true });
        return res.json({
            success: result.affected === 1,
            message: result.affected === 1
                ? "Expediente creado correctamente."
                : "Hubo un error al crear el expediente",
        });
    }
    return res.json({ error: "Hubo un error al crear el expediente" });
});
exports.createFile = createFile;
const updateFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { enfermedadActual, antecedentes, evolucion, anamnesis, exploracion, tratamiento, } = req.body;
    const fileExists = yield File_js_1.Files.findOneBy({ id: Number(id) });
    if (!fileExists) {
        return res.json({ error: "Hubo un error al actualizar el expediente" });
    }
    const fileUpdated = yield File_js_1.Files.update({ id: Number(id) }, {
        enfermedadActual: enfermedadActual,
        antecedentes: antecedentes,
        evolucion: evolucion,
        anamnesis: anamnesis,
        exploracion: exploracion,
        tratamiento: tratamiento,
    });
    return res.json({
        success: fileUpdated.affected === 1,
        message: fileUpdated.affected === 1
            ? "Expediente actualizado correctamente."
            : "Hubo un error al crear el expediente",
    });
});
exports.updateFile = updateFile;
const deleteFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const fileExists = yield File_js_1.Files.findOneBy({ pacienteId: Number(id) });
    if (!fileExists) {
        return res.json({ error: "No existe el expediente" });
    }
    const result = yield File_js_1.Files.delete({
        pacienteId: Number(id),
    });
    if (result.affected === 1) {
        const pacient = yield Pacient_js_1.Pacients.update({ id: fileExists.pacienteId }, { hasFile: false });
        return res.send(pacient.affected === 1
            ? "Expediente eliminado"
            : "Hubo un error al eliminar el Expediente");
    }
    return res.json({ error: "Hubo un error al eliminar el Expediente" });
});
exports.deleteFile = deleteFile;
const getAllFiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filesFound = yield File_js_1.Files.find();
    return res.json(filesFound);
});
exports.getAllFiles = getAllFiles;
const getFileById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const fileExists = yield File_js_1.Files.findOneBy({ id: Number(id) });
    if (!fileExists) {
        return res.json({ error: "No existe el expediente" });
    }
    return res.json(fileExists);
});
exports.getFileById = getFileById;
const getFileByPacientId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pacientId } = req.params;
    const fileExists = yield File_js_1.Files.findOneBy({ pacienteId: Number(pacientId) });
    if (!fileExists) {
        return res.json({ error: "Paciente no tiene expediente" });
    }
    return res.json(fileExists);
});
exports.getFileByPacientId = getFileByPacientId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0NvbnRyb2xsZXJzL0ZpbGUuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSxpREFBNEM7QUFDNUMsdURBQWtEO0FBRTNDLE1BQU0sVUFBVSxHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQzlELE1BQU0sRUFDSixnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFdBQVcsRUFDWCxVQUFVLEdBQ1gsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBRWIsTUFBTSxNQUFNLEdBQUcsTUFBTSxlQUFLLENBQUMsTUFBTSxDQUFDO1FBQ2hDLGdCQUFnQixFQUFFLGdCQUFnQjtRQUNsQyxZQUFZLEVBQUUsWUFBWTtRQUMxQixTQUFTLEVBQUUsU0FBUztRQUNwQixTQUFTLEVBQUUsU0FBUztRQUNwQixXQUFXLEVBQUUsV0FBVztRQUN4QixXQUFXLEVBQUUsV0FBVztRQUN4QixVQUFVLEVBQUUsVUFBVTtLQUN2QixDQUFDLENBQUM7SUFFSCxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQzVCLE1BQU0sTUFBTSxHQUFHLE1BQU0scUJBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUU1RSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDZCxPQUFPLEVBQUUsTUFBTSxDQUFDLFFBQVEsS0FBSyxDQUFDO1lBQzlCLE9BQU8sRUFDTCxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxrQ0FBa0M7Z0JBQ3BDLENBQUMsQ0FBQyxzQ0FBc0M7U0FDN0MsQ0FBQyxDQUFDO0tBQ0o7SUFF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