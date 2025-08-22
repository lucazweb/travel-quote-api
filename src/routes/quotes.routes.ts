import { Router, Request, Response } from "express";
import QuotesRepository from "../repositories/QuotesRepositories";

const quotesRoutes = Router();

const quotesRepository = new QuotesRepository();

quotesRoutes.post("/", (request: Request, response: Response) => {
  quotesRepository.create({
    ...request.body,
  });
  return response.status(201).send();
});

quotesRoutes.get("/", (_, response) => {
  const all = quotesRepository.list();
  return response.json(all);
});

export { quotesRoutes };
