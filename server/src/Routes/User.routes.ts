import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  getUserByRol,
  login,
  updateUser,
} from "../Controllers/User.controller";
const verifyToken = require("../Middleware/verifyToken");

const router = Router();
const prefix = "/users";

router.post(prefix, verifyToken, createUser);

router.post(prefix + "/login", login);

router.get(prefix + "/getById/:id", verifyToken, getUserById);

router.get(prefix + "/getByRol/:rol", verifyToken, getUserByRol);

router.get(prefix, verifyToken, getAllUsers);

router.put(prefix + "/:id", verifyToken, updateUser);

router.delete(prefix + "/:id", deleteUser);

export default router;
