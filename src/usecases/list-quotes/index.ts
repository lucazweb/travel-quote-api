import QuotesRepository from "../../repositories/QuotesRepositories";
import { ListQuoteController } from "./list-quote-controller";
import { ListQuoteUsecase } from "./list-quotes-usecase";

const quoteRepository = new QuotesRepository();
const listQuoteUsecase = new ListQuoteUsecase(quoteRepository);
const listQuoteController = new ListQuoteController(listQuoteUsecase);

export { listQuoteController };
