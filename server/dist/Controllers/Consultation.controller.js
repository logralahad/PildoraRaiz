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
exports.getConsultationsByPacientId = exports.getConsultationById = exports.getAllConsultations = exports.deleteConsultation = exports.updateConsultation = exports.createConsultation = void 0;
const db_config_js_1 = require("../db.config.js");
const Consultation_js_1 = require("../Entities/Consultation.js");
const repo = db_config_js_1.dataSource.getRepository(Consultation_js_1.Consultations);
const createConsultation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { motivo, duracion, sintomas, cronologia, pacienteId } = req.body;
    const consultIn = yield Consultation_js_1.Consultations.save({
        motivo: motivo,
        duracion: duracion,
        sintomas: sintomas,
        cronologia: cronologia,
        pacienteId: pacienteId,
    });
    return res.send("Consulta agregada");
});
exports.createConsultation = createConsultation;
const updateConsultation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { motivo, duracion, sintomas, cronologia } = req.body;
    const consultaFound = yield Consultation_js_1.Consultations.findOneBy({ id: Number(id) });
    if (!consultaFound) {
        return res.json({ error: "No existe la consulta" });
    }
    const result = yield Consultation_js_1.Consultations.update({ id: Number(id) }, {
        motivo: motivo,
        duracion: duracion,
        sintomas: sintomas,
        cronologia: cronologia,
    });
    return res.json({
        success: result.affected === 1,
        message: result.affected === 1
            ? "Consulta actualizado correctamente"
            : "Hubo un error al actualizar",
    });
});
exports.updateConsultation = updateConsultation;
const deleteConsultation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield Consultation_js_1.Consultations.delete({
        id: Number(id),
    });
    return res.send(result.affected === 1
        ? "Consulta eliminada"
        : "Hubo un error al eliminar la Consulta");
});
exports.deleteConsultation = deleteConsultation;
const getAllConsultations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const consultasFound = yield Consultation_js_1.Consultations.find();
    return res.json(consultasFound);
});
exports.getAllConsultations = getAllConsultations;
const getConsultationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const consultaFound = yield Consultation_js_1.Consultations.findOneBy({
        id: Number(id),
    });
    if (!consultaFound) {
        return res.json({ error: "No existe la consulta" });
    }
    return res.json(consultaFound);
});
exports.getConsultationById = getConsultationById;
const getConsultationsByPacientId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pacientId } = req.params;
    const consultasFound = yield Consultation_js_1.Consultations.find({
        where: { pacienteId: Number(pacientId) },
    });
    return res.status(200).json(consultasFound);
});
exports.getConsultationsByPacientId = getConsultationsByPacientId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VsdGF0aW9uLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ29udHJvbGxlcnMvQ29uc3VsdGF0aW9uLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUEsa0RBQTZDO0FBQzdDLGlFQUE0RDtBQUc1RCxNQUFNLElBQUksR0FBRyx5QkFBVSxDQUFDLGFBQWEsQ0FBQywrQkFBYSxDQUFDLENBQUM7QUFFOUMsTUFBTSxrQkFBa0IsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUN0RSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFFeEUsTUFBTSxTQUFTLEdBQUcsTUFBTSwrQkFBYSxDQUFDLElBQUksQ0FBQztRQUN6QyxNQUFNLEVBQUUsTUFBTTtRQUNkLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLFVBQVUsRUFBRSxVQUFVO0tBQ3ZCLENBQUMsQ0FBQztJQUVILE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQSxDQUFDO0FBWlcsUUFBQSxrQkFBa0Isc0JBWTdCO0FBRUssTUFBTSxrQkFBa0IsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUN0RSxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUMxQixNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztJQUU1RCxNQUFNLGFBQWEsR0FBRyxNQUFNLCtCQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEUsSUFBSSxDQUFDLGFBQWEsRUFBRTtRQUNsQixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDO0tBQ3JEO0lBRUQsTUFBTSxNQUFNLEdBQUcsTUFBTSwrQkFBYSxDQUFDLE1BQU0sQ0FDdkMsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQ2xCO1FBQ0UsTUFBTSxFQUFFLE1BQU07UUFDZCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixVQUFVLEVBQUUsVUFBVTtLQUN2QixDQUNGLENBQUM7SUFFRixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDZCxPQUFPLEVBQUUsTUFBTSxDQUFDLFFBQVEsS0FBSyxDQUFDO1FBQzlCLE9BQU8sRUFDTCxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUM7WUFDbkIsQ0FBQyxDQUFDLG9DQUFvQztZQUN0QyxDQUFDLENBQUMsNkJBQTZCO0tBQ3BDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQSxDQUFDO0FBMUJXLFFBQUEsa0JBQWtCLHNCQTBCN0I7QUFFSyxNQUFNLGtCQUFrQixHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3RFLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzFCLE1BQU0sTUFBTSxHQUFHLE1BQU0sK0JBQWEsQ0FBQyxNQUFNLENBQUM7UUFDeEMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUM7S0FDZixDQUFDLENBQUM7SUFFSCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQ2IsTUFBTSxDQUFDLFFBQVEsS0FBSyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxvQkFBb0I7UUFDdEIsQ0FBQyxDQUFDLHVDQUF1QyxDQUM1QyxDQUFDO0FBQ0osQ0FBQyxDQUFBLENBQUM7QUFYVyxRQUFBLGtCQUFrQixzQkFXN0I7QUFFSyxNQUFNLG1CQUFtQixHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3ZFLE1BQU0sY0FBYyxHQUFHLE1BQU0sK0JBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFBLENBQUM7QUFIVyxRQUFBLG1CQUFtQix1QkFHOUI7QUFFSyxNQUFNLG1CQUFtQixHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3ZFLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBRTFCLE1BQU0sYUFBYSxHQUFHLE1BQU0sK0JBQWEsQ0FBQyxTQUFTLENBQUM7UUFDbEQsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUM7S0FDZixDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsYUFBYSxFQUFFO1FBQ2xCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxDQUFDLENBQUM7S0FDckQ7SUFFRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFBLENBQUM7QUFaVyxRQUFBLG1CQUFtQix1QkFZOUI7QUFFSyxNQUFNLDJCQUEyQixHQUFHLENBQ3pDLEdBQVksRUFDWixHQUFhLEVBQ2IsRUFBRTtJQUNGLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBRWpDLE1BQU0sY0FBYyxHQUFHLE1BQU0sK0JBQWEsQ0FBQyxJQUFJLENBQUM7UUFDOUMsS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtLQUN6QyxDQUFDLENBQUM7SUFDSCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzlDLENBQUMsQ0FBQSxDQUFDO0FBVlcsUUFBQSwyQkFBMkIsK0JBVXRDIn0=