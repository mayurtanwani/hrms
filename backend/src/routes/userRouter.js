import { login, signup } from "../controllers/userController.js";
import express from "express";

const userRouter = express.Router();

userRouter.post("/register", signup);
userRouter.post("/login", login);

export default userRouter;
