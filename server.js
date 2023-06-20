import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import taskRouter from "./routes/task.js";
import { Errormiddleware } from "./middlewares/error.js";
import cors from "cors"

//CREATE SERVER
export const server = express();

config({
  path: "./data/config.env",
});

//Using Middlewares
server.use(express.json());
server.use(cookieParser());
server.use(cors({
  origin:[process.env.FRONTEND_URL],
  methods:["GET","POST","PUT","DELETE"],
  credentials:true,
}))

//USING ROUTERS
server.use("/users", userRouter);
server.use("/tasks", taskRouter);

//ERROR HANDLING
server.use(Errormiddleware)
