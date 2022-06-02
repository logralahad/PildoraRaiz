import { DataSource } from "typeorm";
import * as argon2 from "argon2";

import {
  __dbHost__,
  __dbName__,
  __dbPassword__,
  __dbPort__,
  __dbSync__,
  __dbUser__,
  __isProd__,
} from "./constants";
import { Persons } from "./Entities/Person";
import { Pacients } from "./Entities/Pacient";
import { Consultations } from "./Entities/Consultation";
import { Roles } from "./Entities/Rol";
import { Usuarios } from "./Entities/User";
import { Files } from "./Entities/File";

const jwt = require("jsonwebtoken");

export const dataSource = new DataSource({
  type: "postgres",
  username: __dbUser__,
  password: __dbPassword__,
  port: Number(__dbPort__),
  host: __dbHost__,
  database: __dbName__,
  entities: [Roles, Persons, Usuarios, Pacients, Consultations, Files],
  synchronize: __dbSync__,
  ssl: !__isProd__,
});

const insertarAdmin = async () => {
  const userFound = await Usuarios.find({
    where: { rolId: 1 },
  });

  if (userFound) return;

  const result = await Roles.save({
    nombre: "Administrador",
    descripcion: "Superusuario con todos los permisos",
    canCreate: true,
    canEdit: true,
    canDelete: true,
  });

  const personaIn = await Persons.insert({
    nombre: "Administrador",
    paterno: "-",
    materno: "-",
    edad: 1500,
    telefono: "9516542301",
  });

  const hashedPassword = await argon2.hash("t3mpor4l");
  try {
    const userInsert = await Usuarios.save({
      personaId: personaIn.identifiers[0].id,
      rolId: result.id,
      username: "admin@gmail.com",
      password: hashedPassword,
    });

    if (userInsert) {
      let payload = {
        id: userInsert.id,
        username: "admin@gmail.com",
      };
      const token = jwt.sign(payload, process.env.TOKEN_SECRET);
    }
  } catch (error) {
    await Persons.delete({
      id: personaIn.identifiers[0].id,
    });
  }
};

export const connectDB = async () => {
  dataSource
    .initialize()
    .then(() => {
      console.log("Conectado a la base de datos");
      insertarAdmin().then(() => {
        console.log("Administrador creado");
      });
    })
    .catch((err: any) => {
      console.error(err);
    });
};
