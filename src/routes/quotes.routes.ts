import { Router, Request, Response } from "express";
import { createQuoteController } from "../usecases/create-quote";
import { listQuoteController } from "../usecases/list-quotes";

const quotesRoutes = Router();

quotesRoutes.post("/", (request: Request, response: Response) => {
  createQuoteController.handle(request, response);
});

quotesRoutes.get("/", (request, response) => {
  listQuoteController.handle(request, response);
});

export { quotesRoutes };
