import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

import userRoutes from "./Routes/User.routes";
import rolRoutes from "./Routes/Rol.routes";
import pacientRoutes from "./Routes/Pacient.routes";
import fileRoutes from "./Routes/File.routes";
import consultationRoutes from "./Routes/Consultation.routes";
import imagesRoutes from "./Routes/Images.routes";

import { connectDB } from "./db.config";
import { __apiPort__, __clientURL__, __isProd__ } from "./constants";

const main = async () => {
  await connectDB();

  const app = express();
  app.use(
    cors({
      credentials: true,
      origin: [__clientURL__!],
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(userRoutes);
  app.use(rolRoutes);
  app.use(pacientRoutes);
  app.use(fileRoutes);
  app.use(consultationRoutes);
  app.use(imagesRoutes);

  app.listen(__apiPort__);
  console.log("Listening on port", __apiPort__);
};

main();
