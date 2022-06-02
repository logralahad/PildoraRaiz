"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const File_controller_js_1 = require("../Controllers/File.controller.js");
const router = (0, express_1.Router)();
const prefix = "/historial";
const verifyToken = require("../Middleware/verifyToken");
router.post(prefix, verifyToken, File_controller_js_1.createFile);
router.get(prefix, verifyToken, File_controller_js_1.getAllFiles);
router.get(prefix + "/getById/:id", verifyToken, File_controller_js_1.getFileById);
router.get(prefix + "/getByPacient/:pacientId", verifyToken, File_controller_js_1.getFileByPacientId);
router.put(prefix + "/:id", verifyToken, File_controller_js_1.updateFile);
router.delete(prefix + "/:id", verifyToken, File_controller_js_1.deleteFile);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZS5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvUm91dGVzL0ZpbGUucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQWlDO0FBQ2pDLDBFQU8yQztBQUUzQyxNQUFNLE1BQU0sR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQztBQUN4QixNQUFNLE1BQU0sR0FBRyxZQUFZLENBQUM7QUFDNUIsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFFekQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLCtCQUFVLENBQUMsQ0FBQztBQUU3QyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsZ0NBQVcsQ0FBQyxDQUFDO0FBRTdDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLGNBQWMsRUFBRSxXQUFXLEVBQUUsZ0NBQVcsQ0FBQyxDQUFDO0FBRTlELE1BQU0sQ0FBQyxHQUFHLENBQ1IsTUFBTSxHQUFHLDBCQUEwQixFQUNuQyxXQUFXLEVBQ1gsdUNBQWtCLENBQ25CLENBQUM7QUFFRixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUUsV0FBVyxFQUFFLCtCQUFVLENBQUMsQ0FBQztBQUVyRCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUUsV0FBVyxFQUFFLCtCQUFVLENBQUMsQ0FBQztBQUV4RCxrQkFBZSxNQUFNLENBQUMifQ==