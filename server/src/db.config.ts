import { DataSource } from "typeorm";

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

export const connectDB = async () => {
  dataSource
    .initialize()
    .then(() => {
      console.log("Conectado a la base de datos");
    })
    .catch((err: any) => {
      console.error(err);
    });
};
