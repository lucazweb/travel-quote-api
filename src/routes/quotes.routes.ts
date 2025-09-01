import { Router } from "express";
import {
  CreateQuoteController,
  ListQuoteController,
} from "@modules/quotes/controllers";
import ensureAuthenticated from "@middlewares/ensureAuthenticated";

const quotesRoutes = Router();

const createQuoteController = new CreateQuoteController();
const listQuoteController = new ListQuoteController();

quotesRoutes.use(ensureAuthenticated);
quotesRoutes.post("/", createQuoteController.handle);
quotesRoutes.get("/", listQuoteController.handle);

export { quotesRoutes };
