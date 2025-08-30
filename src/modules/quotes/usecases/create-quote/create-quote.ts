import { inject, injectable } from "tsyringe";
import { QuotesRepository } from "@modules/quotes/repositories/QuotesRepositories";
import { IQuoteDTO } from "@modules/quotes/interfaces";

@injectable()
class CreateQuoteUsecase {
  // responsible for creation of quotes..
  constructor(
    @inject("QuotesRepository")
    private quoteRepository: QuotesRepository
  ) {}

  execute(quote: IQuoteDTO) {
    this.quoteRepository.create(quote);
  }
}

export { CreateQuoteUsecase };
