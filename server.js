import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";


//CREATE SERVER
export const server = express();

config({
  path:"./data/config.env"
})


//Using Middlewares
server.use(express.json());
server.use("/users",userRouter);



