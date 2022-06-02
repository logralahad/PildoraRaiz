import { Request, Response } from "express";
import { dataSource } from "../db.config.js";
import { Pacients } from "../Entities/Pacient.js";
import { Persons } from "../Entities/Person.js";

const repo = dataSource.getRepository(Pacients);

export const createPacient = async (req: Request, res: Response) => {
  const { persona, calle, int, ext, colonia, img, userId } = req.body;

  const personaIn = await Persons.insert({
    nombre: persona.nombre,
    paterno: persona.paterno,
    materno: persona.materno,
    edad: persona.edad,
    telefono: persona.telefono,
  });

  try {
    const pacientIn = await Pacients.save({
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
  } catch (error) {
    console.log(error);
    await Persons.delete({
      id: personaIn.identifiers[0].id,
    });
    return res.json({ error: "Hubo un error al registrar al paciente." });
  }
};

export const updatePacient = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { persona, calle, int, ext, colonia, img } = req.body;

  const pacientFound = await Pacients.findOneBy({
    id: Number(id),
  });

  const personFound = await Persons.findOneBy({
    id: pacientFound?.personaId,
  });

  if (!personFound || !pacientFound)
    return res.json({
      success: false,
      message: "Paciente no existe",
    });

  const personaUpdate = await Persons.update(
    { id: personFound.id },
    {
      nombre: persona.nombre,
      paterno: persona.paterno,
      materno: persona.materno,
      telefono: persona.telefono,
      edad: persona.edad,
    }
  );

  const result = await Pacients.update(
    { id: pacientFound.id },
    {
      colonia: colonia,
      calle: calle,
      int: int,
      ext: ext,
      img: img,
    }
  );

  return res.json({
    success: result.affected === 1,
    message:
      result.affected === 1
        ? "Paciente actualizado correctamente"
        : "Hubo un error al actualizar",
  });
};

export const deletePacient = async (req: Request, res: Response) => {
  const { id } = req.params;

  const pacientFound = await Pacients.findOneBy({
    id: Number(id),
  });

  if (pacientFound) {
    const result = await Pacients.delete({ id: Number(id) });
    const resultTwo = await Persons.delete({ id: pacientFound.personaId });

    return res.send(
      resultTwo.affected === 1
        ? "Paciente eliminado"
        : "Hubo un error al eliminar al Paciente"
    );
  }

  return res.send({ error: "Hubo un error al eliminar al Paciente" });
};

export const getAllPacients = async (req: Request, res: Response) => {
  const personsFound = await repo
    .createQueryBuilder("pacient")
    .leftJoinAndSelect("pacient.persona", "person")
    .addSelect(["*"])
    .getMany();

  return res.status(200).json(personsFound);
};

export const getPacientById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const pacientFound = await repo
    .createQueryBuilder("pacient")
    .where("pacient.id = :id", { id: Number(id) })
    .leftJoinAndSelect("pacient.persona", "person")
    .addSelect(["*"])
    .getOne();

  return res.status(200).json(pacientFound);
};

export const getAllPacientsByUserId = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const pacientsFound = await repo
    .createQueryBuilder("pacient")
    .where("pacient.userId = :id", { id: Number(userId) })
    .leftJoinAndSelect("pacient.persona", "person")
    .addSelect(["*"])
    .getMany();
  return res.status(200).json(pacientsFound);
};

export const getWithFiles = async (req: Request, res: Response) => {
  const pacientsWith = await repo
    .createQueryBuilder("pacient")
    .where("pacient.hasFile = :has", { has: true })
    .leftJoinAndSelect("pacient.persona", "person")
    .addSelect(["*"])
    .getMany();
  return res.status(200).json(pacientsWith);
};

export const getWithoutFiles = async (req: Request, res: Response) => {
  const pacientsWithout = await repo
    .createQueryBuilder("pacient")
    .where("pacient.hasFile = :has", { has: false })
    .leftJoinAndSelect("pacient.persona", "person")
    .addSelect(["*"])
    .getMany();
  return res.status(200).json(pacientsWithout);
};
