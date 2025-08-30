import { container } from "tsyringe";
import { QuotesRepository } from "@modules/quotes/repositories/QuotesRepositories";
import { IQuotesRepository } from "@modules/quotes/interfaces/IQuotesRepository";
import { IUserRepository } from "@modules/account/repositories/IUserRepository";
import { UserRepository } from "@modules/account/repositories/UserRepository";

container.registerSingleton<IQuotesRepository>(
  "QuotesRepository",
  QuotesRepository
);

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
