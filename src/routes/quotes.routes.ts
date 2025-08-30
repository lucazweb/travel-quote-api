import { Router } from "express";
import {
  CreateQuoteController,
  ListQuoteController,
} from "@modules/quotes/controllers";

const quotesRoutes = Router();

const createQuoteController = new CreateQuoteController();
const listQuoteController = new ListQuoteController();

quotesRoutes.post("/", createQuoteController.handle);
quotesRoutes.get("/", listQuoteController.handle);

export { quotesRoutes };
