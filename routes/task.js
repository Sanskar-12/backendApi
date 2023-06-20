import express from "express";
import {
  deleteTask,
  getAllTask,
  newTask,
  updateTask,
} from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//GET
router.get("/api/v1/gettask", isAuthenticated, getAllTask);

//POST
router.post("/api/v1/new", isAuthenticated, newTask);

//PUT
router.put("/api/v1/:id",isAuthenticated, updateTask);

//DELETE
router.delete("/api/v1/:id",isAuthenticated, deleteTask);

export default router;
