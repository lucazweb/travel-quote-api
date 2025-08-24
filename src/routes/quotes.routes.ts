import { Router, Request, Response } from "express";
import QuotesRepository from "../repositories/QuotesRepositories";
import { createQuoteController } from "../usecases/create-quote";

const quotesRoutes = Router();

const quotesRepository = new QuotesRepository();

quotesRoutes.post("/", (request: Request, response: Response) => {
  createQuoteController.handle(request, response);
});

quotesRoutes.get("/", (_, response) => {
  const all = quotesRepository.list();
  return response.json(all);
});

export { quotesRoutes };
