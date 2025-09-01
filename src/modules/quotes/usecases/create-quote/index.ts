import QuotesRepository from "../../repositories/QuotesRepositories";
import { CreateQuoteUsecase } from "./create-quote";
import { CreateQuoteController } from "./create-quote.controller";

const quoteRepository = new QuotesRepository();
const createQuoteUsecase = new CreateQuoteUsecase(quoteRepository);
const createQuoteController = new CreateQuoteController(createQuoteUsecase);

export { createQuoteController };
