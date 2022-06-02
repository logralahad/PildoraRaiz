"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Pacient_controller_js_1 = require("../Controllers/Pacient.controller.js");
const router = (0, express_1.Router)();
const prefix = "/pacientes";
const verifyToken = require("../Middleware/verifyToken");
router.post(prefix, verifyToken, Pacient_controller_js_1.createPacient);
router.get(prefix, verifyToken, Pacient_controller_js_1.getAllPacients);
router.get(prefix + "/getById/:id", verifyToken, Pacient_controller_js_1.getPacientById);
router.get(prefix + "/getByUser/:userId", verifyToken, Pacient_controller_js_1.getAllPacientsByUserId);
router.get(prefix + "/WithFiles", verifyToken, Pacient_controller_js_1.getWithFiles);
router.get(prefix + "/WithoutFiles", verifyToken, Pacient_controller_js_1.getWithoutFiles);
router.put(prefix + "/:id", Pacient_controller_js_1.updatePacient);
router.delete(prefix + "/:id", Pacient_controller_js_1.deletePacient);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFjaWVudC5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvUm91dGVzL1BhY2llbnQucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQWlDO0FBQ2pDLGdGQVM4QztBQUU5QyxNQUFNLE1BQU0sR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQztBQUN4QixNQUFNLE1BQU0sR0FBRyxZQUFZLENBQUM7QUFDNUIsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFFekQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLHFDQUFhLENBQUMsQ0FBQztBQUVoRCxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsc0NBQWMsQ0FBQyxDQUFDO0FBRWhELE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLGNBQWMsRUFBRSxXQUFXLEVBQUUsc0NBQWMsQ0FBQyxDQUFDO0FBRWpFLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLG9CQUFvQixFQUFFLFdBQVcsRUFBRSw4Q0FBc0IsQ0FBQyxDQUFDO0FBRS9FLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLFlBQVksRUFBRSxXQUFXLEVBQUUsb0NBQVksQ0FBQyxDQUFDO0FBRTdELE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLGVBQWUsRUFBRSxXQUFXLEVBQUUsdUNBQWUsQ0FBQyxDQUFDO0FBRW5FLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRSxxQ0FBYSxDQUFDLENBQUM7QUFFM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFLHFDQUFhLENBQUMsQ0FBQztBQUU5QyxrQkFBZSxNQUFNLENBQUMifQ==