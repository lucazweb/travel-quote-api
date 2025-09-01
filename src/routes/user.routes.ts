import { AuthenticateController } from "@modules/account/controllers/AuthenticateController";
import { CreateUserController } from "@modules/account/controllers/CreateUserController";
import { Router } from "express";

const userRoutes = Router();
const createUserController = new CreateUserController();
const authenticateController = new AuthenticateController();

userRoutes.post("/", createUserController.handle);
userRoutes.post("/session", authenticateController.handle);

export { userRoutes };
