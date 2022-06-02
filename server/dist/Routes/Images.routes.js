"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Images_controller_js_1 = require("../Controllers/Images.controller.js");
const router = (0, express_1.Router)();
const prefix = "/imagenes";
const multer = require("multer");
const upload = multer({ dest: "src/Uploads/" });
router.post(prefix, upload.single("foto"), Images_controller_js_1.uploadImage);
router.get(prefix + "/:key", Images_controller_js_1.getImage);
router.delete(prefix + "/:key", Images_controller_js_1.deleteImage);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2VzLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Sb3V0ZXMvSW1hZ2VzLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFpQztBQUNqQyw4RUFJNkM7QUFFN0MsTUFBTSxNQUFNLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUM7QUFDeEIsTUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDO0FBRTNCLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQztBQUVoRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLGtDQUFXLENBQUMsQ0FBQztBQUV4RCxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxPQUFPLEVBQUUsK0JBQVEsQ0FBQyxDQUFDO0FBRXZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE9BQU8sRUFBRSxrQ0FBVyxDQUFDLENBQUM7QUFFN0Msa0JBQWUsTUFBTSxDQUFDIn0=