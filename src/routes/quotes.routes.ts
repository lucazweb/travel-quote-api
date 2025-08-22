import { Router, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import Quote from "../model/Quote";

const quotesRoutes = Router();

const quotes = [];

quotesRoutes.post("/", (request: Request, response: Response) => {
  const {
    origin,
    destiny,
    ticketGoing,
    ticketBack,
    goingDate,
    backDate,
    foodExpenses,
    mobilityExpenses,
    leisureExpenses,
  } = request.body;

  const quote = new Quote();
  Object.assign(quote, {
    id: uuidv4(),
    origin,
    destiny,
    ticketGoing,
    ticketBack,
    goingDate,
    backDate,
    foodExpenses,
    mobilityExpenses,
    leisureExpenses,
  });

  quotes.push(quote);

  return response.status(201).send();
});

export { quotesRoutes };
