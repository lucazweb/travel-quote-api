import { Router } from "express";
import { quotesRoutes } from "./quotes.routes";
import { userRoutes } from "./user.routes";

const routes = Router();
routes.use("/quotes", quotesRoutes);
routes.use("/users", userRoutes);
export { routes };
