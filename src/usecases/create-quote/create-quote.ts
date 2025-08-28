import { inject, injectable } from "tsyringe";
import { IQuoteDTO } from "../../model/Quote";
import { QuotesRepository } from "../../repositories/QuotesRepositories";

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
