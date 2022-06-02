"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_controller_js_1 = require("../Controllers/User.controller.js");
const verifyToken = require("../Middleware/verifyToken");
const router = (0, express_1.Router)();
const prefix = "/users";
router.post(prefix, verifyToken, User_controller_js_1.createUser);
router.post(prefix + "/login", User_controller_js_1.login);
router.get(prefix + "/getById/:id", verifyToken, User_controller_js_1.getUserById);
router.get(prefix + "/getByRol/:rol", verifyToken, User_controller_js_1.getUserByRol);
router.get(prefix, User_controller_js_1.getAllUsers);
router.put(prefix + "/:id", verifyToken, User_controller_js_1.updateUser);
router.delete(prefix + "/:id", User_controller_js_1.deleteUser);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvUm91dGVzL1VzZXIucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQWlDO0FBQ2pDLDBFQVEyQztBQUMzQyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUV6RCxNQUFNLE1BQU0sR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQztBQUN4QixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUM7QUFFeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLCtCQUFVLENBQUMsQ0FBQztBQUU3QyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLEVBQUUsMEJBQUssQ0FBQyxDQUFDO0FBRXRDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLGNBQWMsRUFBRSxXQUFXLEVBQUUsZ0NBQVcsQ0FBQyxDQUFDO0FBRTlELE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxpQ0FBWSxDQUFDLENBQUM7QUFFakUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsZ0NBQVcsQ0FBQyxDQUFDO0FBRWhDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRSxXQUFXLEVBQUUsK0JBQVUsQ0FBQyxDQUFDO0FBRXJELE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRSwrQkFBVSxDQUFDLENBQUM7QUFFM0Msa0JBQWUsTUFBTSxDQUFDIn0=