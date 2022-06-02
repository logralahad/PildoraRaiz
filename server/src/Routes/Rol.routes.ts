import { Router } from "express";
import {
  createRol,
  deleteAllRoles,
  deleteRol,
  getAllRoles,
  getRolById,
  updateRol,
} from "../Controllers/Rol.controller.js";
const verifyToken = require("../Middleware/verifyToken");

const router = Router();
const prefix = "/roles";

router.post(prefix, verifyToken, createRol);

router.get(prefix + "/:id", verifyToken, getRolById);

router.get(prefix, verifyToken, getAllRoles);

router.put(prefix + "/:id", verifyToken, updateRol);

router.delete(prefix + "/:id", verifyToken, deleteRol);

router.delete(prefix, verifyToken, deleteAllRoles);

export default router;
