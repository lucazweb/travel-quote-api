import { container } from "tsyringe";
import { QuotesRepository } from "../../repositories/QuotesRepositories";
import { IQuotesRepository } from "../../repositories/IQuotesRepository";

container.registerSingleton<IQuotesRepository>(
  "QuotesRepository",
  QuotesRepository
);
