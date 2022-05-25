import { Request, Response } from "express";
import { In } from "typeorm";
import { dataSource } from "../db.config";
import { Consultations } from "../Entities/Consultation";
import { Pacients } from "../Entities/Pacient";

const repo = dataSource.getRepository(Consultations);

export const createConsultation = async (req: Request, res: Response) => {
  const { motivo, duracion, sintomas, cronologia, pacienteId } = req.body;

  const consultIn = await Consultations.save({
    motivo: motivo,
    duracion: duracion,
    sintomas: sintomas,
    cronologia: cronologia,
    pacienteId: pacienteId,
  });

  return res.send("Consulta agregada");
};

export const updateConsultation = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { motivo, duracion, sintomas, cronologia } = req.body;

  const consultaFound = await Consultations.findOneBy({ id: Number(id) });
  if (!consultaFound) {
    return res.json({ error: "No existe la consulta" });
  }

  const result = await Consultations.update(
    { id: Number(id) },
    {
      motivo: motivo,
      duracion: duracion,
      sintomas: sintomas,
      cronologia: cronologia,
    }
  );

  return res.json({
    success: result.affected === 1,
    message:
      result.affected === 1
        ? "Consulta actualizado correctamente"
        : "Hubo un error al actualizar",
  });
};

export const deleteConsultation = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await Consultations.delete({
    id: Number(id),
  });

  return res.send(
    result.affected === 1
      ? "Consulta eliminada"
      : "Hubo un error al eliminar la Consulta"
  );
};

export const getAllConsultations = async (req: Request, res: Response) => {
  const consultasFound = await Consultations.find();
  return res.json(consultasFound);
};

export const getConsultationById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const consultaFound = await Consultations.findOneBy({
    id: Number(id),
  });

  if (!consultaFound) {
    return res.json({ error: "No existe la consulta" });
  }

  return res.json(consultaFound);
};

export const getConsultationsByPacientId = async (
  req: Request,
  res: Response
) => {
  const { pacientId } = req.params;

  const consultasFound = await Consultations.find({
    where: { pacienteId: Number(pacientId) },
  });
  return res.status(200).json(consultasFound);
};
