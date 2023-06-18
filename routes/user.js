import express from "express";
import {
    deleteuser,
  getalluser,
  newuser,
  specialuserid,
  updateuser,
  userid,
} from "../controllers/users.js";

const router = express.Router();

//GET
router.get("/all", getalluser);

router.get("/userid/special", specialuserid);

//POST
router.post("/new", newuser);

//Dynamic Route
router.get("/userid/:id", userid);

//POST
router.put("/userid/:id", updateuser);

//DELETE
router.delete("/userid/:id", deleteuser);



export default router;
