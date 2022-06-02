import { Router } from "express";
import {
  deleteImage,
  getImage,
  uploadImage,
} from "../Controllers/Images.controller";

const router = Router();
const prefix = "/imagenes";

const multer = require("multer");
const upload = multer({ dest: "src/Uploads/" });

router.post(prefix, upload.single("foto"), uploadImage);

router.get(prefix + "/:key", getImage);

router.delete(prefix + "/:key", deleteImage);

export default router;
