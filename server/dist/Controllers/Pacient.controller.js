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
exports.getWithoutFiles = exports.getWithFiles = exports.getAllPacientsByUserId = exports.getPacientById = exports.getAllPacients = exports.deletePacient = exports.updatePacient = exports.createPacient = void 0;
const db_config_js_1 = require("../db.config.js");
const Pacient_js_1 = require("../Entities/Pacient.js");
const Person_js_1 = require("../Entities/Person.js");
const repo = db_config_js_1.dataSource.getRepository(Pacient_js_1.Pacients);
const createPacient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { persona, calle, int, ext, colonia, img, userId } = req.body;
    const personaIn = yield Person_js_1.Persons.insert({
        nombre: persona.nombre,
        paterno: persona.paterno,
        materno: persona.materno,
        edad: persona.edad,
        telefono: persona.telefono,
    });
    try {
        const pacientIn = yield Pacient_js_1.Pacients.save({
            personaId: personaIn.identifiers[0].id,
            userId: userId,
            colonia: colonia,
            calle: calle,
            int: int,
            ext: ext,
            img: img,
            hasFile: false,
        });
        return res.send("Paciente registrado");
    }
    catch (error) {
        console.log(error);
        yield Person_js_1.Persons.delete({
            id: personaIn.identifiers[0].id,
        });
        return res.json({ error: "Hubo un error al registrar al paciente." });
    }
});
exports.createPacient = createPacient;
const updatePacient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { persona, calle, int, ext, colonia, img } = req.body;
    const pacientFound = yield Pacient_js_1.Pacients.findOneBy({
        id: Number(id),
    });
    const personFound = yield Person_js_1.Persons.findOneBy({
        id: pacientFound === null || pacientFound === void 0 ? void 0 : pacientFound.personaId,
    });
    if (!personFound || !pacientFound)
        return res.json({
            success: false,
            message: "Paciente no existe",
        });
    const personaUpdate = yield Person_js_1.Persons.update({ id: personFound.id }, {
        nombre: persona.nombre,
        paterno: persona.paterno,
        materno: persona.materno,
        telefono: persona.telefono,
        edad: persona.edad,
    });
    const result = yield Pacient_js_1.Pacients.update({ id: pacientFound.id }, {
        colonia: colonia,
        calle: calle,
        int: int,
        ext: ext,
        img: img,
    });
    return res.json({
        success: result.affected === 1,
        message: result.affected === 1
            ? "Paciente actualizado correctamente"
            : "Hubo un error al actualizar",
    });
});
exports.updatePacient = updatePacient;
const deletePacient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const pacientFound = yield Pacient_js_1.Pacients.findOneBy({
        id: Number(id),
    });
    if (pacientFound) {
        const result = yield Pacient_js_1.Pacients.delete({ id: Number(id) });
        const resultTwo = yield Person_js_1.Persons.delete({ id: pacientFound.personaId });
        return res.send(resultTwo.affected === 1
            ? "Paciente eliminado"
            : "Hubo un error al eliminar al Paciente");
    }
    return res.send({ error: "Hubo un error al eliminar al Paciente" });
});
exports.deletePacient = deletePacient;
const getAllPacients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const personsFound = yield repo
        .createQueryBuilder("pacient")
        .leftJoinAndSelect("pacient.persona", "person")
        .addSelect(["*"])
        .getMany();
    return res.status(200).json(personsFound);
});
exports.getAllPacients = getAllPacients;
const getPacientById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const pacientFound = yield repo
        .createQueryBuilder("pacient")
        .where("pacient.id = :id", { id: Number(id) })
        .leftJoinAndSelect("pacient.persona", "person")
        .addSelect(["*"])
        .getOne();
    return res.status(200).json(pacientFound);
});
exports.getPacientById = getPacientById;
const getAllPacientsByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const pacientsFound = yield repo
        .createQueryBuilder("pacient")
        .where("pacient.userId = :id", { id: Number(userId) })
        .leftJoinAndSelect("pacient.persona", "person")
        .addSelect(["*"])
        .getMany();
    return res.status(200).json(pacientsFound);
});
exports.getAllPacientsByUserId = getAllPacientsByUserId;
const getWithFiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pacientsWith = yield repo
        .createQueryBuilder("pacient")
        .where("pacient.hasFile = :has", { has: true })
        .leftJoinAndSelect("pacient.persona", "person")
        .addSelect(["*"])
        .getMany();
    return res.status(200).json(pacientsWith);
});
exports.getWithFiles = getWithFiles;
const getWithoutFiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pacientsWithout = yield repo
        .createQueryBuilder("pacient")
        .where("pacient.hasFile = :has", { has: false })
        .leftJoinAndSelect("pacient.persona", "person")
        .addSelect(["*"])
        .getMany();
    return res.status(200).json(pacientsWithout);
});
exports.getWithoutFiles = getWithoutFiles;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFjaWVudC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0NvbnRyb2xsZXJzL1BhY2llbnQuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSxrREFBNkM7QUFDN0MsdURBQWtEO0FBQ2xELHFEQUFnRDtBQUVoRCxNQUFNLElBQUksR0FBRyx5QkFBVSxDQUFDLGFBQWEsQ0FBQyxxQkFBUSxDQUFDLENBQUM7QUFFekMsTUFBTSxhQUFhLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDakUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFFcEUsTUFBTSxTQUFTLEdBQUcsTUFBTSxtQkFBTyxDQUFDLE1BQU0sQ0FBQztRQUNyQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07UUFDdEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPO1FBQ3hCLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTztRQUN4QixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7UUFDbEIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO0tBQzNCLENBQUMsQ0FBQztJQUVILElBQUk7UUFDRixNQUFNLFNBQVMsR0FBRyxNQUFNLHFCQUFRLENBQUMsSUFBSSxDQUFDO1lBQ3BDLFNBQVMsRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdEMsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsT0FBTztZQUNoQixLQUFLLEVBQUUsS0FBSztZQUNaLEdBQUcsRUFBRSxHQUFHO1lBQ1IsR0FBRyxFQUFFLEdBQUc7WUFDUixHQUFHLEVBQUUsR0FBRztZQUNSLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7S0FDeEM7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsTUFBTSxtQkFBTyxDQUFDLE1BQU0sQ0FBQztZQUNuQixFQUFFLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ2hDLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSx5Q0FBeUMsRUFBRSxDQUFDLENBQUM7S0FDdkU7QUFDSCxDQUFDLENBQUEsQ0FBQztBQTlCVyxRQUFBLGFBQWEsaUJBOEJ4QjtBQUVLLE1BQU0sYUFBYSxHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ2pFLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzFCLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFFNUQsTUFBTSxZQUFZLEdBQUcsTUFBTSxxQkFBUSxDQUFDLFNBQVMsQ0FBQztRQUM1QyxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQztLQUNmLENBQUMsQ0FBQztJQUVILE1BQU0sV0FBVyxHQUFHLE1BQU0sbUJBQU8sQ0FBQyxTQUFTLENBQUM7UUFDMUMsRUFBRSxFQUFFLFlBQVksYUFBWixZQUFZLHVCQUFaLFlBQVksQ0FBRSxTQUFTO0tBQzVCLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxZQUFZO1FBQy9CLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztZQUNkLE9BQU8sRUFBRSxLQUFLO1lBQ2QsT0FBTyxFQUFFLG9CQUFvQjtTQUM5QixDQUFDLENBQUM7SUFFTCxNQUFNLGFBQWEsR0FBRyxNQUFNLG1CQUFPLENBQUMsTUFBTSxDQUN4QyxFQUFFLEVBQUUsRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLEVBQ3RCO1FBQ0UsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1FBQ3RCLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTztRQUN4QixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87UUFDeEIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1FBQzFCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtLQUNuQixDQUNGLENBQUM7SUFFRixNQUFNLE1BQU0sR0FBRyxNQUFNLHFCQUFRLENBQUMsTUFBTSxDQUNsQyxFQUFFLEVBQUUsRUFBRSxZQUFZLENBQUMsRUFBRSxFQUFFLEVBQ3ZCO1FBQ0UsT0FBTyxFQUFFLE9BQU87UUFDaEIsS0FBSyxFQUFFLEtBQUs7UUFDWixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7S0FDVCxDQUNGLENBQUM7SUFFRixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDZCxPQUFPLEVBQUUsTUFBTSxDQUFDLFFBQVEsS0FBSyxDQUFDO1FBQzlCLE9BQU8sRUFDTCxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUM7WUFDbkIsQ0FBQyxDQUFDLG9DQUFvQztZQUN0QyxDQUFDLENBQUMsNkJBQTZCO0tBQ3BDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQSxDQUFDO0FBL0NXLFFBQUEsYUFBYSxpQkErQ3hCO0FBRUssTUFBTSxhQUFhLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDakUsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFMUIsTUFBTSxZQUFZLEdBQUcsTUFBTSxxQkFBUSxDQUFDLFNBQVMsQ0FBQztRQUM1QyxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQztLQUNmLENBQUMsQ0FBQztJQUVILElBQUksWUFBWSxFQUFFO1FBQ2hCLE1BQU0sTUFBTSxHQUFHLE1BQU0scUJBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6RCxNQUFNLFNBQVMsR0FBRyxNQUFNLG1CQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBRXZFLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FDYixTQUFTLENBQUMsUUFBUSxLQUFLLENBQUM7WUFDdEIsQ0FBQyxDQUFDLG9CQUFvQjtZQUN0QixDQUFDLENBQUMsdUNBQXVDLENBQzVDLENBQUM7S0FDSDtJQUVELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSx1Q0FBdUMsRUFBRSxDQUFDLENBQUM7QUFDdEUsQ0FBQyxDQUFBLENBQUM7QUFuQlcsUUFBQSxhQUFhLGlCQW1CeEI7QUFFSyxNQUFNLGNBQWMsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNsRSxNQUFNLFlBQVksR0FBRyxNQUFNLElBQUk7U0FDNUIsa0JBQWtCLENBQUMsU0FBUyxDQUFDO1NBQzdCLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQztTQUM5QyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoQixPQUFPLEVBQUUsQ0FBQztJQUViLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUFBLENBQUM7QUFSVyxRQUFBLGNBQWMsa0JBUXpCO0FBRUssTUFBTSxjQUFjLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDbEUsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDMUIsTUFBTSxZQUFZLEdBQUcsTUFBTSxJQUFJO1NBQzVCLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztTQUM3QixLQUFLLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDN0MsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxDQUFDO1NBQzlDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hCLE1BQU0sRUFBRSxDQUFDO0lBRVosT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUEsQ0FBQztBQVZXLFFBQUEsY0FBYyxrQkFVekI7QUFFSyxNQUFNLHNCQUFzQixHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQzFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzlCLE1BQU0sYUFBYSxHQUFHLE1BQU0sSUFBSTtTQUM3QixrQkFBa0IsQ0FBQyxTQUFTLENBQUM7U0FDN0IsS0FBSyxDQUFDLHNCQUFzQixFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1NBQ3JELGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQztTQUM5QyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoQixPQUFPLEVBQUUsQ0FBQztJQUNiLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFBLENBQUM7QUFUVyxRQUFBLHNCQUFzQiwwQkFTakM7QUFFSyxNQUFNLFlBQVksR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNoRSxNQUFNLFlBQVksR0FBRyxNQUFNLElBQUk7U0FDNUIsa0JBQWtCLENBQUMsU0FBUyxDQUFDO1NBQzdCLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUM5QyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUM7U0FDOUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEIsT0FBTyxFQUFFLENBQUM7SUFDYixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FBQSxDQUFDO0FBUlcsUUFBQSxZQUFZLGdCQVF2QjtBQUVLLE1BQU0sZUFBZSxHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ25FLE1BQU0sZUFBZSxHQUFHLE1BQU0sSUFBSTtTQUMvQixrQkFBa0IsQ0FBQyxTQUFTLENBQUM7U0FDN0IsS0FBSyxDQUFDLHdCQUF3QixFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQy9DLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQztTQUM5QyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoQixPQUFPLEVBQUUsQ0FBQztJQUNiLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFBLENBQUM7QUFSVyxRQUFBLGVBQWUsbUJBUTFCIn0=