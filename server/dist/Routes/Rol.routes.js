"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Rol_controller_js_1 = require("../Controllers/Rol.controller.js");
const verifyToken = require("../Middleware/verifyToken");
const router = (0, express_1.Router)();
const prefix = "/roles";
router.post(prefix, verifyToken, Rol_controller_js_1.createRol);
router.get(prefix + "/:id", verifyToken, Rol_controller_js_1.getRolById);
router.get(prefix, verifyToken, Rol_controller_js_1.getAllRoles);
router.put(prefix + "/:id", verifyToken, Rol_controller_js_1.updateRol);
router.delete(prefix + "/:id", verifyToken, Rol_controller_js_1.deleteRol);
router.delete(prefix, verifyToken, Rol_controller_js_1.deleteAllRoles);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9sLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Sb3V0ZXMvUm9sLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFpQztBQUNqQyx3RUFPMEM7QUFDMUMsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFFekQsTUFBTSxNQUFNLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUM7QUFDeEIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDO0FBRXhCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSw2QkFBUyxDQUFDLENBQUM7QUFFNUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFLFdBQVcsRUFBRSw4QkFBVSxDQUFDLENBQUM7QUFFckQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLCtCQUFXLENBQUMsQ0FBQztBQUU3QyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUUsV0FBVyxFQUFFLDZCQUFTLENBQUMsQ0FBQztBQUVwRCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUUsV0FBVyxFQUFFLDZCQUFTLENBQUMsQ0FBQztBQUV2RCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsa0NBQWMsQ0FBQyxDQUFDO0FBRW5ELGtCQUFlLE1BQU0sQ0FBQyJ9