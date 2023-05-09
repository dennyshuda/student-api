import { Router } from "express";
import userController from "../controllers/user.controller";

const UserRouter = Router();

UserRouter.post("/register", userController.register);
UserRouter.post("/login", userController.login);

export default UserRouter;
