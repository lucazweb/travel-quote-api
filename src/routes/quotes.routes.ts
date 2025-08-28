import { Router, Request, Response } from "express";
import { CreateQuoteController } from "../usecases/create-quote/create-quote.controller";
import { ListQuoteController } from "../usecases/list-quotes/list-quote-controller";

const quotesRoutes = Router();

const createQuoteController = new CreateQuoteController();
const listQuoteController = new ListQuoteController();

quotesRoutes.post("/", createQuoteController.handle);

quotesRoutes.get("/", listQuoteController.handle);

export { quotesRoutes };
