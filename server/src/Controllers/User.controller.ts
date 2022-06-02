import { Request, Response } from "express";

import { Persons } from "../Entities/Person.js";
import { Usuarios } from "../Entities/User.js";

import * as argon2 from "argon2";
import { dataSource } from "../db.config.js";
import { __token__ } from "../constants.js";

const jwt = require("jsonwebtoken");
const repo = dataSource.getRepository(Usuarios);
require("dotenv").config();

export const createUser = async (req: Request, res: Response) => {
  const { persona, rolId, username, password } = req.body;

  const personaIn = await Persons.insert({
    nombre: persona.nombre,
    paterno: persona.paterno,
    materno: persona.materno,
    edad: persona.edad,
    telefono: persona.telefono,
  });

  const hashedPassword = await argon2.hash(password);
  try {
    const userInsert = await Usuarios.save({
      personaId: personaIn.identifiers[0].id,
      rolId: rolId,
      username: username,
      password: hashedPassword,
    });

    if (userInsert) {
      let payload = {
        id: userInsert.id,
        username: username,
      };
      const token = jwt.sign(payload, process.env.TOKEN_SECRET);
      return res.send({ userInsert, token });
    }
  } catch (error) {
    await Persons.delete({
      id: personaIn.identifiers[0].id,
    });
    return res.json({ error: "Hubo un error al registrar al usuario." });
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const userFound = await repo
    .createQueryBuilder("user")
    .where("user.username = :username", { username: username })
    .leftJoinAndSelect("user.persona", "person")
    .addSelect(["*"])
    .leftJoinAndSelect("user.rol", "rol")
    .addSelect(["*"])
    .getOne();

  if (!userFound) {
    return res.json({ message: "Usuario no existe" });
  }

  const valid = await argon2.verify(userFound!.password, password);
  if (!valid) {
    return res.json({ message: "Contraseña incorrecta" });
  }

  let payload = { id: userFound.id, username: userFound.username };
  const token = jwt.sign(payload, __token__);

  return res.status(200).header("auth-token", token).json({ userFound, token });
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userFound = await repo
    .createQueryBuilder("user")
    .where("user.id = :id", { id: Number(id) })
    .leftJoinAndSelect("user.persona", "person")
    .addSelect(["*"])
    .leftJoinAndSelect("user.rol", "rol")
    .addSelect(["*"])
    .getOne();

  return res.status(200).json(userFound);
};

export const getUserByRol = async (req: Request, res: Response) => {
  const { rol } = req.params;
  const usersFound = await Usuarios.find({
    where: { rolId: Number(rol) },
  });
  return res.status(200).json(usersFound);
};

export const getAllUsers = async (req: Request, res: Response) => {
  const usersFound = await repo
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.persona", "person")
    .addSelect(["*"])
    .leftJoinAndSelect("user.rol", "rol")
    .addSelect(["*"])
    .getMany();

  return res.status(200).json(usersFound);
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { persona, username, password, rolId } = req.body;

  const userFound = await Usuarios.findOneBy({
    id: Number(id),
  });

  const personFound = await Persons.findOneBy({
    id: userFound?.personaId,
  });

  if (!personFound || !userFound)
    return res.json({
      success: false,
      message: "Usuario no existe",
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

  const hashedPassword = await argon2.hash(password);

  const result = await Usuarios.update(
    { id: userFound.id },
    {
      rolId: rolId,
      username: username,
      password: password !== "" ? hashedPassword : userFound.password,
    }
  );

  return res.json({
    success: result.affected === 1,
    message:
      result.affected === 1
        ? "Usuario actualizado correctamente"
        : "Hubo un error al actualizar",
  });
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userFound = await Usuarios.findOneBy({
    id: Number(id),
  });

  if (userFound) {
    try {
      const result = await Usuarios.delete({
        id: Number(id),
      });

      const resultTwo = await Persons.delete({
        id: userFound.personaId,
      });

      return res.send(
        resultTwo.affected === 1
          ? "Usuario eliminado"
          : "Hubo un error al eliminar al Usuario"
      );
    } catch (error) {
      return res.send({ error: "Hubo un error al eliminar al Usuario" });
    }
  }

  return res.send({ error: "Hubo un error al eliminar al Usuario" });
};
