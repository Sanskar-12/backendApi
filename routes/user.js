import express from "express";
import {
  getalluser,
  newuser,
  getUserProfile,
  userlogin,
  userlogout,
  nice,
} from "../controllers/users.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//GET
router.get("/api/v1/all", getalluser);

router.get("/api/v1/logout", userlogout);

//POST
router.post("/api/v1/new", newuser);

router.post("/api/v1/login", userlogin);

//Dynamic Route
router.get("/api/v1/me", isAuthenticated, getUserProfile);

router.get("/api/v1/nice", nice);

export default router;
