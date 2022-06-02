import { Request, Response } from "express";
import { Files } from "../Entities/File";
import { Pacients } from "../Entities/Pacient";

export const createFile = async (req: Request, res: Response) => {
  const {
    enfermedadActual,
    antecedentes,
    evolucion,
    anamnesis,
    exploracion,
    tratamiento,
    pacienteId,
  } = req.body;

  const fileIn = await Files.insert({
    enfermedadActual: enfermedadActual,
    antecedentes: antecedentes,
    evolucion: evolucion,
    anamnesis: anamnesis,
    exploracion: exploracion,
    tratamiento: tratamiento,
    pacienteId: pacienteId,
  });

  if (fileIn.identifiers[0].id) {
    const result = await Pacients.update({ id: pacienteId }, { hasFile: true });

    return res.json({
      success: result.affected === 1,
      message:
        result.affected === 1
          ? "Expediente creado correctamente."
          : "Hubo un error al crear el expediente",
    });
  }

  return res.json({ error: "Hubo un error al crear el expediente" });
};

export const updateFile = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    enfermedadActual,
    antecedentes,
    evolucion,
    anamnesis,
    exploracion,
    tratamiento,
  } = req.body;

  const fileExists = await Files.findOneBy({ id: Number(id) });
  if (!fileExists) {
    return res.json({ error: "Hubo un error al actualizar el expediente" });
  }

  const fileUpdated = await Files.update(
    { id: Number(id) },
    {
      enfermedadActual: enfermedadActual,
      antecedentes: antecedentes,
      evolucion: evolucion,
      anamnesis: anamnesis,
      exploracion: exploracion,
      tratamiento: tratamiento,
    }
  );

  return res.json({
    success: fileUpdated.affected === 1,
    message:
      fileUpdated.affected === 1
        ? "Expediente actualizado correctamente."
        : "Hubo un error al crear el expediente",
  });
};

export const deleteFile = async (req: Request, res: Response) => {
  const { id } = req.params;

  const fileExists = await Files.findOneBy({ pacienteId: Number(id) });
  if (!fileExists) {
    return res.json({ error: "No existe el expediente" });
  }

  const result = await Files.delete({
    pacienteId: Number(id),
  });

  if (result.affected === 1) {
    const pacient = await Pacients.update(
      { id: fileExists.pacienteId },
      { hasFile: false }
    );

    return res.send(
      pacient.affected === 1
        ? "Expediente eliminado"
        : "Hubo un error al eliminar el Expediente"
    );
  }
  return res.json({ error: "Hubo un error al eliminar el Expediente" });
};

export const getAllFiles = async (req: Request, res: Response) => {
  const filesFound = await Files.find();
  return res.json(filesFound);
};

export const getFileById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const fileExists = await Files.findOneBy({ id: Number(id) });
  if (!fileExists) {
    return res.json({ error: "No existe el expediente" });
  }

  return res.json(fileExists);
};

export const getFileByPacientId = async (req: Request, res: Response) => {
  const { pacientId } = req.params;

  const fileExists = await Files.findOneBy({ pacienteId: Number(pacientId) });
  if (!fileExists) {
    return res.json({ error: "Paciente no tiene expediente" });
  }

  return res.json(fileExists);
};
