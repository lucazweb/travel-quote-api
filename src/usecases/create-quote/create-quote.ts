import Quote, { IQuoteDTO } from "../../model/Quote";
import QuotesRepository from "../../repositories/QuotesRepositories";

class CreateQuoteUsecase {
  // responsible for creation of quotes..
  constructor(private quoteRepository: QuotesRepository) {}

  execute(quote: IQuoteDTO) {
    this.quoteRepository.create(quote);
  }
}

export { CreateQuoteUsecase };
