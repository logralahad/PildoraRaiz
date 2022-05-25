import { Router } from "express";
import {
  createFile,
  deleteFile,
  getAllFiles,
  getFileById,
  getFileByPacientId,
  updateFile,
} from "../Controllers/File.controller";

const router = Router();
const prefix = "/historial";
const verifyToken = require("../Middleware/verifyToken");

router.post(prefix, verifyToken, createFile);

router.get(prefix, verifyToken, getAllFiles);

router.get(prefix + "/getById/:id", verifyToken, getFileById);

router.get(
  prefix + "/getByPacient/:pacientId",
  verifyToken,
  getFileByPacientId
);

router.put(prefix + "/:id", verifyToken, updateFile);

router.delete(prefix + "/:id", verifyToken, deleteFile);

export default router;
