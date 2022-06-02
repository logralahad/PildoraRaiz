import { Router } from "express";
import { createFile, deleteFile, getAllFiles, getFileById, getFileByPacientId, updateFile, } from "../Controllers/File.controller";
const router = Router();
const prefix = "/historial";
const verifyToken = require("../Middleware/verifyToken");
router.post(prefix, verifyToken, createFile);
router.get(prefix, verifyToken, getAllFiles);
router.get(prefix + "/getById/:id", verifyToken, getFileById);
router.get(prefix + "/getByPacient/:pacientId", verifyToken, getFileByPacientId);
router.put(prefix + "/:id", verifyToken, updateFile);
router.delete(prefix + "/:id", verifyToken, deleteFile);
export default router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZS5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvUm91dGVzL0ZpbGUucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDakMsT0FBTyxFQUNMLFVBQVUsRUFDVixVQUFVLEVBQ1YsV0FBVyxFQUNYLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsVUFBVSxHQUNYLE1BQU0sZ0NBQWdDLENBQUM7QUFFeEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFDeEIsTUFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDO0FBQzVCLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBRXpELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUU3QyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFFN0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsY0FBYyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUU5RCxNQUFNLENBQUMsR0FBRyxDQUNSLE1BQU0sR0FBRywwQkFBMEIsRUFDbkMsV0FBVyxFQUNYLGtCQUFrQixDQUNuQixDQUFDO0FBRUYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUVyRCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBRXhELGVBQWUsTUFBTSxDQUFDIn0=