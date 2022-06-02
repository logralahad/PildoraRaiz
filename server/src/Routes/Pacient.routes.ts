import { Router } from "express";
import {
  createPacient,
  deletePacient,
  getAllPacients,
  getAllPacientsByUserId,
  getPacientById,
  getWithFiles,
  getWithoutFiles,
  updatePacient,
} from "../Controllers/Pacient.controller.js";

const router = Router();
const prefix = "/pacientes";
const verifyToken = require("../Middleware/verifyToken");

router.post(prefix, verifyToken, createPacient);

router.get(prefix, verifyToken, getAllPacients);

router.get(prefix + "/getById/:id", verifyToken, getPacientById);

router.get(prefix + "/getByUser/:userId", verifyToken, getAllPacientsByUserId);

router.get(prefix + "/WithFiles", verifyToken, getWithFiles);

router.get(prefix + "/WithoutFiles", verifyToken, getWithoutFiles);

router.put(prefix + "/:id", updatePacient);

router.delete(prefix + "/:id", deletePacient);

export default router;
