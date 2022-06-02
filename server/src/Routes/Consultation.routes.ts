import { Router } from "express";
import {
  createConsultation,
  deleteConsultation,
  getAllConsultations,
  getConsultationById,
  getConsultationsByPacientId,
  updateConsultation,
} from "../Controllers/Consultation.controller";

const router = Router();
const prefix = "/consultas";
const verifyToken = require("../Middleware/verifyToken");

router.post(prefix, verifyToken, createConsultation);

router.get(prefix, verifyToken, getAllConsultations);

router.get(prefix + "/getById/:id", verifyToken, getConsultationById);

router.get(
  prefix + "/getAllByPacient/:pacientId",
  verifyToken,
  getConsultationsByPacientId
);

router.put(prefix + "/:id", verifyToken, updateConsultation);

router.delete(prefix + "/:id", verifyToken, deleteConsultation);

export default router;
